import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import { RiThreadsLine, RiDownloadFill } from "react-icons/ri";

export default function Icons() {
  return (
    
          <div className="mx-16 md:mx-[40vw]  shadow-lg shadow-indigo-500/20  border drop-shadow-lg  border-slate-600 duration-200 ease-in bg-slate-800 rounded-md flex text-white  text-lg gap-4 md:gap-8 justify-center items-center py-4  md:py-5">
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

  );
}
