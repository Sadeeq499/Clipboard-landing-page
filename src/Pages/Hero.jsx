import React from "react";
import Images from "../assets/Images";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <section role="hero">
        <div className="section-container mb-40 px-10 pt-16">
          <img src={Images.Logo} alt="" className="mx-auto my-16" />
          <h3>A history of everything you copy</h3>
          <p className="max-w-3xl mx-auto mb-10 text-base md:text-2xl text-GrayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* buttons */}
          <div className="button-container">
            <button className="button-style bg-StrongCyan">
              Download for iOS
            </button>
            <button className=" button-style bg-LightBlue ">
              Download for Mac
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
