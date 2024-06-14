// import { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import MenuItems from "../Pages/Shared/MenuItems/MenuItems";
import useMenu from "../Hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([]);

    // useEffect( () => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems);
    //     })
    // } ,[]);

    return (
        <div>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Popular Items"}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;