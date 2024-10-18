import React from "react";
import banner from "../images/Banner.avif";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold m-4">
              <span className="text-green-300">Hello!</span> Learn,grow and
              explore with us everyday...
            </h1>
            <p className="ml-4 text-xl">
              Join our community of lifelong learners and expand your mind and
              broaden your horizons with daily doses of knowledge,inspiration
              and exploration.
            </p>
            <label className="input input-bordered flex items-center gap-2 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-3 w-3 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Enter your email "
              />
            </label>
          </div>
          <button className="btn btn-active m-4 ml-4 btn-accent">Get Started</button>
        </div>

        <div className="w-full md:w-1/2 mt-20 ml-3 order-1">
          <img src={banner} className="w-55 h-65" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
