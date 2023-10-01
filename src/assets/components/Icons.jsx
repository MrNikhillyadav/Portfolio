import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import { RiThreadsLine, RiDownloadFill } from "react-icons/ri";

export default function Icons() {
  return (
    <div className="flex flex-col bg-[#1b1a1a] h-[5vh] justify-center items-center">
      <div className="hover:bg-[#151515] shadow-lg shadow-indigo-500/20  border drop-shadow-lg  border-slate-600 duration-200 ease-in bg-slate-800  px-12  rounded-md flex text-white  text-lg gap-8 justify-center items-center py-5">
        <a className="hover:text-cyan-400 hover:scale-150 duration-300 ease-in-out" href="https://github.com/MrNikhillyadav">
          <ImGithub />
        </a>
        <a className="hover:text-cyan-400 hover:scale-150 duration-300 ease-in-out" href="https://twitter.com/MrNikhillyadav">
          <ImTwitter />
        </a>
        <a className="hover:text-cyan-400 hover:scale-150 duration-300 ease-in-out" href="#"><RiThreadsLine /></a>
        
        <a className="hover:text-cyan-400 hover:scale-150 duration-300 ease-in-out" href="https://www.linkedin.com/in/nikhil-yadav-67251a1ab/">
          {" "}
          <ImLinkedin />
        </a>
      </div>
      <div className=" w-full text-slate-600 text-center text-[12px] my-2   ">
        <p>
          Inspired By <span className=" text-white">Nicolas Meuzard</span>
        </p>
      </div>
    </div>
  );
}
