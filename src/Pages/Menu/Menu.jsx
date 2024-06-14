import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuBg from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>

      <Cover
        img={menuBg}
        title={"Our Menu"}
        des={"Would you like to try a dish?"}
        btn={"Order Now"}
      ></Cover>

      {/* todays offer */}
      <div>
        <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>
      {/* todays offer */}

      {/* dessert section */}
      <div>
        <MenuCategory
          items={dessert}
          title={"dessert"}
          shortDes={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={dessertBg}
        ></MenuCategory>
      </div>
      {/* dessert section */}

      {/* pizza section */}
      <div>
        <MenuCategory
          items={pizza}
          title={"pizza"}
          shortDes={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={pizzaBg}
        ></MenuCategory>
      </div>
      {/* pizza section */}

      {/* salad section */}
      <div>
        <MenuCategory
          items={salad}
          title={"salad"}
          shortDes={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={saladBg}
        ></MenuCategory>
      </div>
      {/* salad section */}

      {/* soups section */}
      <div>
        <MenuCategory
          items={soup}
          title={"soup"}
          shortDes={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImg={soupBg}
        ></MenuCategory>
      </div>
      {/* soups section */}
    </div>
  );
};

export default Menu;
