import React from "react";
import Images from "../assets/Images";

const featuresData = [
  {
    title: "Quick Search",
    description:
      "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    title: "iCloud Sync",
    description: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    title: "Complete History",
    description:
      "Retrieve any snippets from the first moment you started using the app.",
  },
];

function Snipped() {
  return (
    <>
      <section role="shipped">
        <div className="section-container my-20 px-10">
          <h3>Keep track of your snippets</h3>
          <p className="max-w-3xl mx-auto mb-24 text-lg leading-7 text-center text-GrayishBlue">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
      <section role="features">
        <div className="section-container  my-20">
          <div className="relative mx-6 flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img
                src={Images.ComputerImg}
                alt=""
                className="md:absolute top-0 right-[50%]"
              />
            </div>
            {/* item container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              {/* item */}
              {featuresData.map((item, index) => (
                <div key={index}>
                  <h5 className="mb-2 text-2xl font-bold text-DarkGrayishBlue">
                    {item.title}
                  </h5>
                  <p className="max-w-md text-GrayishBlue">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section role="access">
        <div className="section-container my-20 ">
          <h3>Access Clipboard anywhere</h3>
          <p className="max-w-3xl mx-2 mb-24 text-lg leading-7 text-center text-GrayishBlue">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src={Images.DevicesImg} alt="" className="mx-auto" />
        </div>
      </section>
    </>
  );
}

export default Snipped;
