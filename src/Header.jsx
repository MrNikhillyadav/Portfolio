import React from "react";
import { RiThreadsLine, RiDownloadFill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="bg-[#1b1a1a]  flex flex-col text-white w-full h-[85vh] justify-between">
      <div className=" flex flex-col px-[500px] items-center my-20 mx-40 py-3">
        {/* -----Profile pic here------- */}
        <div className="border-r-4 border-slate-200 w-[160px] shadow-lg shadow-indigo-400/40  h-[160px] hover:scale-105 duration-500 ease-in-out rounded-full p-5  bg-[url('./assets/profile.png')] bg-cover">
          {" "}
        </div>

        {/*----- text content----- */}
        <div className="bg- text-center h-auto  w-[900px] mt-4 mb-5 p-10">
          <h3 className="text-sm  py-1 ">Hello, I'm </h3>
          <h2 className="text-3xl   duration-200 ease-in font-bold mb-3  ">
            <span className="hover:underline decoration-pink-500 decoration-1 underline-offset-4">
              Nikhil Yadav
            </span>
          </h2>
          <p className="text-sm py-1 text-slate-500  ">
            I'm a{" "}
            <span className="text-white hover:underline decoration-pink-500 decoration-1 underline-offset-4">
              {" "}
              frontend developer
            </span>
            . I create interactive{" "}
            <span className="hover:underline decoration-pink-500 decoration-1 underline-offset-4 text-white">
              experiences
            </span>{" "}
            with modern{" "}
            <span className="text-white hover:underline decoration-pink-500 decoration-1 underline-offset-4">
              web technologies
            </span>
            . I'm currently learning how to{" "}
            <span className="text-white hover:underline decoration-pink-500 decoration-1 underline-offset-4">
              design products{" "}
            </span>{" "}
            and create beautiful web{" "}
            <span className="text-white hover:underline decoration-pink-500 decoration-1 underline-offset-4">
              animations
            </span>
            .
          </p>
          <div className="flex gap-5 justify-center">
            <button className=" bg-slate-800 hover:text-cyan-400 shadow-lg shadow-indigo-500/20  hover:bg-[#151515] ease-in duration-200 px-6 border border-slate-600 text-sm mt-4  py-1  rounded-sm">
              HIRE ME
            </button>
            <button className="  bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring text-sm mt-4 rounded-sm px-6 py-1 focus:ring-violet-300">
              <a
                className="flex  items-center justify-between gap-2 "
                href="https://drive.google.com/file/d/1L5OjKZs2_Pj91Ko2T8v5NsUFxDUYRa0e/view?usp=sharing"
              >
                Resume
                <RiDownloadFill />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
