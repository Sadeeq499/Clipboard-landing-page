import React from "react";
import Images from "../assets/Images";
import { Link } from "react-router-dom";

const Links = [
  {
    name: "FAQs",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/",
  },
  {
    name: "Privacy Policy",
    path: "/",
  },
  {
    name: "Press Kit",
    path: "/",
  },
  {
    name: "Install Guide",
    path: "/",
  },
];

function Footer() {
  return (
    <>
      <footer className="bg-gray-50 mt-20">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img src={Images.Logo} alt="" className="scale-50" />

            <div className="flex flex-col md:flex-row items-center justify-between flex-1 mb-10 space-y-6  md:mb-0 md:space-y-0  text-GrayishBlue">
              <div className="flex flex-wrap justify-between space-y-3  md:space-y-0">
                {Links.map((link, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/4">
                    <Link to={link.path} className="hover:text-StrongCyan">
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="flex justify-between w-32 py-1 pt-10 ">
                <Link to="/" className="hover:text-StrongCyan">
                  <img src={Images.Facebook} alt="" />
                </Link>
                <Link to="/" className="hover:text-StrongCyan">
                  <img src={Images.Twitter} alt="" />
                </Link>
                <Link to="/" className="hover:text-StrongCyan">
                  <img src={Images.Instagram} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
