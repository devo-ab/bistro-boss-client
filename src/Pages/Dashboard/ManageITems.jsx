import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageITems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/menu/${item._id}`);
          console.log(res.data)
          if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: `${item.name} has been deleted.`,
                icon: "success"
              });
          }
        }
      });
  };

  return (
    <div>
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"}></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
                {
                    menu.map((item, index) =><tr key={item._id}>
                        <th>{index + 1}</th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={item.image}
                                  alt="Item Image"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><Link to={`/dashboard/updateItem/${item._id}`}><button className="btn btn-ghost text-xl"><FiEdit /></button></Link></td>
                        <td><button onClick={() => handleDelete(item)} className="btn btn-ghost text-2xl"><MdDeleteForever /></button></td>
                      </tr>)
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageITems;
