import React from "react";
import Image from "../assets/Images";

const SuperChargeData = [
  {
    icon: Image.IconBlacklist,
    title: "Create blacklists",
    description:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    icon: Image.IconText,
    title: "Plain text snippets",
    description:
      "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    icon: Image.IconPreview,
    title: "Sneak preview",
    description:
      "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

function SuperCharge() {
  return (
    <>
      <section role="SuperCharge">
        <div className="section-content mb-16">
          <h3>Supercharge your workflow</h3>
          <p className="section-content px-10 mb-16">
            We’ve got the tools to boost your productivity.
          </p>
        </div>
        {/* item container */}
        <div className="flex flex-col items-center justify-between pt-12 space-y-20 md:flex-row md:space-y-0 md:space-x-0 md:mx-12 ">
          {/* item */}
          {SuperChargeData.map((data, index) => (
            <div className="flex flex-col items-center space-y-5 ">
              <img src={data.icon} alt="" className=" mb-7 " />
              <h3 className="text-3xl ">{data.title}</h3>
              <p className="max-w-md mx-10 text-center md:mx-2 md:text-start  text-GrayishBlue  lg:text-center lg:px-1 ">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------- */}
      <section role="References">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 lg:flex-row md:space-y-16 lg:space-y-0">
          <img
            src={Image.LogoGoogle}
            alt=""
            className="lg:w-auto lg:h-auto md:w-1/2 md:h-auto"
          />
          <img
            src={Image.LogoIbm}
            alt=""
            className="lg:w-auto lg:h-auto md:w-1/2 md:h-auto"
          />
          <img
            src={Image.LogoMicrosoft}
            alt=""
            className="lg:w-auto lg:h-auto md:w-1/3 md:h-auto"
          />
          <img
            src={Image.LogoHp}
            alt=""
            className="lg:w-auto lg:h-auto md:w-1/3 md:h-auto"
          />
          <img
            src={Image.LogoVectorGraphics}
            alt=""
            className="lg:w-auto lg:h-auto md:w-1/3 md:h-auto"
          />
        </div>
      </section>
      {/* -------------------------------------------------- */}

      <section role="call to action">
        <div className="section-container my-20">
          <h3>Clipboard for iOS and Mac OS</h3>
          <p className="section-content px-10 mb-16">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
        </div>
        {/* buttons container */}
        <div className="button-container px-10 md:space-x-10">
          <button className="button-style bg-StrongCyan">
            Download for iOS
          </button>
          <button className="button-style bg-LightBlue">
            Download for Mac
          </button>
        </div>
      </section>
    </>
  );
}

export default SuperCharge;
