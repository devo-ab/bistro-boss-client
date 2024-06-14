import SectionTitle from "../Components/SectionTitle/SectionTitle";
import featuredImg from "../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed py-28 px-44">
            <SectionTitle subHeading={'Check it out'} heading={'Featured Item'}></SectionTitle>

            <div className="md:flex gap-10 justify-center items-center mt-5">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="text-white">
                    <p>March 20, 2023</p>
                    <p className="uppercase mt-2">WHERE can i get some?</p>
                    <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;