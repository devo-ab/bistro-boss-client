import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2>Total Orders : {cart.length}</h2>
        <h2>Total Price : ${totalPrice}</h2>
        {
          cart.length ? <Link to="/dashboard/payment">
            <button className="btn btn-ghost bg-yellow-500 text-white">Pay</button>
          </Link> : <button disabled className="btn btn-ghost bg-yellow-500 text-white">Pay</button>
        }
      </div>

      {/* data table */}

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
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Food" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>${item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-xl">
                    <MdDeleteForever />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* data table */}
    </div>
  );
};

export default MyCart;
