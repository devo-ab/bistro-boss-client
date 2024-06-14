import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex">
        <div className="text-white bg-[#1F2937] p-12 text-center flex-1">
          <h3 className="text-3xl font-medium">CONTACT US</h3>
          <div className="text-xl font-medium mt-6 space-y-2">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>

        <div className="bg-[#111827] p-12 text-center text-white flex-1">
          <h3 className="text-3xl font-medium">Follow US</h3>
          <div className="mt-8 space-y-2">
            <p className="text-xl font-medium mb-8">Join us on social media</p>
            <div className="flex items-center text-2xl space-x-4 justify-center">
              <p><FaFacebookF /></p>
              <p><LuInstagram /></p>
              <p><FaTwitter /></p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-[#151515] text-white">
        <aside>
          <p className="text-xl font-medium">Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
