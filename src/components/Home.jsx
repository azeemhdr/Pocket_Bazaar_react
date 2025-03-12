import React from "react";
import bgImage from "../assets/images/grocery.png";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src={bgImage}
          alt="hero image"
          className="absolute h-full w-full object-cover"
        />
        <div className="container m-auto">
          <div className="absolute mt-8 inset-0 p-5 md:px-20 flex flex-col items-center justify-center">
            <h1 className="text-center tracking-tight  text-[#1f2937] leading-none ">
              Groceries Delivered in 90 Minute
            </h1>
            <p className="text-center lg:text-base xl:text-lg text-[#3b3939] mt-10">
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </p>
            <div className="w-full max-w-3xl mt-10">
              <form action="" className="w-full">
                <div className="rounded md:rounded-lg h-14 shadow-md bg-white flex items-center bg-gary-300 transition duration-700 ease-in-out">
                  <label htmlFor="search"></label>
                  <input
                    type="text"
                    className="py-2 ps-6 pe-14 w-full h-full border-transparent outline-0 focus:border focus:border-[#009f7f] rounded-ss-lg rounded-es-lg focus:transition duration-300 ease-in-out text-sm bg-white"
                    placeholder="Search your product from here"
                  />
                  <button className="flex items-center min-w-[143px] justify-center px-8 bg-[#009f7f] h-full rounded-se-lg rounded-ee-lg text-white font-semibold">
                    <svg
                      viewBox="0 0 17.048 18"
                      className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                    >
                      <path
                        d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                        transform="translate(-367.297 -371.285)"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
