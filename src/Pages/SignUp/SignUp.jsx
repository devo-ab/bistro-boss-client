import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { signUpUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    signUpUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        updateUserProfile(data.name, data.photoURL)
          .then((result) => {
            console.log(result);
            // create user entry in database
            const userInfo = { name: data.name, email: data.email };
            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                  console.log('user added to the database')
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "SignUp Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || SignUp</title>
      </Helmet>
      <div className="flex gap-10 items-center max-w-5xl mx-auto">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl flex-1">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                id="name"
                placeholder="Type here"
                className="w-full px-4 py-3 rounded-md"
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="photoURL" className="block">
                Photo URL
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                id="photoURL"
                placeholder="Type here"
                className="w-full px-4 py-3 rounded-md"
              />
              {errors.photoURL && <span className="text-red-600">This field is required</span>}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="Type here"
                className="w-full px-4 py-3 rounded-md"
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                })}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-md"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">password must be 6 character</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">password must be 20 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  password must have one uppercase, one lower case one number and spicial charecters
                </p>
              )}
              {/* <div className="flex justify-end text-xs">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div> */}
            </div>

            <button
              type="submit"
              className="btn bg-primary text-white block w-full p-3 text-center rounded-sm"
            >
              Sign Up
            </button>
          </form>

          <p className="text-xs text-center sm:px-6">
            Already have an account?
            <Link to="/signin">
              <button className="underline">Sign in</button>
            </Link>
          </p>
        </div>
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
