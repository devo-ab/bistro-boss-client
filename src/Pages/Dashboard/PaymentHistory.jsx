import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments =[] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle heading={"payment history"} subHeading={"What You Spend"}></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>EMAIL</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                payments.map((item, index) => <tr key={item._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>${item.price}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
