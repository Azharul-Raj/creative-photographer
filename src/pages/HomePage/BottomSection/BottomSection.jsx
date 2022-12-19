import React from "react";
import pie from "../../../assets/pie.svg";
import Member1 from "../../../assets/Abdullah.jpg";
import Member2 from "../../../assets/Jayed Bin.jpg";
import Member3 from "../../../assets/Osman.jpg";

const BottomSection = () => {
  return (
    <>
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className="lg:bg-gray-900 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img src={pie} alt="" loading="lazy" width="" height="" />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Don't have idea about Photography?
              </h2>
              <p className="my-8 text-gray-600 dark:text-gray-300">
                Photography is the art of capturing light with a camera, usually
                via a digital sensor or film, to create an image. With the right
                camera equipment, you can even photograph wavelengths of light
                invisible to the human eye, including UV, infrared, and
                radio....
              </p>
              <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                <div className="mt-8 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                      Chat Anytime
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      WhatsApp Number 01773501139
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                      Real Time Location
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      Rangpur Sadar, Rangpur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team section  */}

      <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      data-aos-once="false"
          data-aos-anchor-placement="top-center"
        className="py-20">
        <div className="container mx-auto px-6 text-center md:px-12">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Meet My Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
              It's really a good luck to get such a great team. They are really
              cool in every part.They made the work so easy and enjoyable that I
              don't ever feel like i'm working.
            </p>
          </div>
          <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src={Member1}
                  alt="boy"
                  loading="lazy"
                  width="640"
                  height="805"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">
                    Abdullah Bin Jayed
                  </h4>
                  <span className="block text-sm text-gray-500">Assistant</span>
                </div>
                <a href="#" className="mx-auto block w-max text-primary">
                  View Bio
                </a>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src={Member2}
                  alt="boy"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">
                    Osman Ibn Affan
                  </h4>
                  <span className="block text-sm text-gray-500">
                    Graphics Designer
                  </span>
                </div>
                <a href="#" className="mx-auto block w-max text-primary">
                  View Bio
                </a>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src={Member3}
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">
                    Omar Ibn Rahim
                  </h4>
                  <span className="block text-sm text-gray-500">
                    Chief Technical Officer
                  </span>
                </div>
                <a href="#" className="mx-auto block w-max text-primary">
                  View Bio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSection;
