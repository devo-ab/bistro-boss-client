import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if(user && user.email){
      const cartItem = {menuId: _id, email: user.email, name, image, price, };

      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch the cart to update the cart count
          refetch();
        }
      })
    }
    else{
      Swal.fire({
        title: "You Are Not Sign In",
        text: "Please SignIn To Add To The Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, SignIn"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the sign in page
          navigate('/signin', {state:{from: location}})
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Food" />
        </figure>
        <p className="bg-gray-900 py-2 px-4 absolute text-white right-8 top-5">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 mt-4">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
