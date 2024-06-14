import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {

    const item = useLoaderData();
    console.log(item)

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        console.log(data);
        // image upload to imagebb and get the url
        const imageFile = {image : data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
          // now send the menu item data to the server with the image
          const menuItem = {name: data.name, category: data.category, price: parseFloat(data.price), recipe: data.recipe, image: res.data.data.display_url };
    
          const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem)
          console.log(menuRes.data)
          if(menuRes.data.modifiedCount > 0){
            // reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is updated to the menu`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
        console.log(res.data);
      };

    return (
        <div>
      <SectionTitle heading={"update an items"}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", {required: true})}
              type="text"
              defaultValue={item.name}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-5">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <select defaultValue={item.category} {...register("category", {required: true})} className="select select-bordered w-full">
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", {required: true})}
                type="number"
                defaultValue={item.price}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea {...register("recipe", {required: true})} defaultValue={item.recipe} className="textarea textarea-bordered h-32" placeholder="Type Here"></textarea>
          </label>
          <div className="form-control w-full my-6">
          <input {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
          </div>

          <button  className="flex gap-2 items-center justify-center mx-auto py-2 mt-2 px-3 btn bg-orange-300">Update Recipe Details</button>
        </form>
      </div>
    </div>
    );
};

export default UpdateItem;