import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, des, btn }) => {
  return (
    <Parallax blur={{ min: -50, max: 50 }} bgImage={img} bgImageAlt="the menu" strength={-200}>
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{des}</p>
            {
              btn && <button className="btn btn-primary">{btn}</button>
            }
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  img: PropTypes.any,
  title: PropTypes.any,
  des: PropTypes.any,
  btn: PropTypes.any,
};

export default Cover;
