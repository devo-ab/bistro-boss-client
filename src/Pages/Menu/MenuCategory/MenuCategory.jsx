import { Link } from "react-router-dom";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import PropTypes from "prop-types";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg, shortDes, btn }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title} des={shortDes} btn={btn}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVORITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.object,
  title: PropTypes.any,
  coverImg: PropTypes.any,
  shortDes: PropTypes.any,
  btn: PropTypes.any,
};

export default MenuCategory;
