import {FaBars} from "react-icons/fa"
import { useState } from "react";
export default function Navbar() {

  const [nav, setNav] = useState(false)
  // 
  return (
    
    <nav className="bg-[#1b1a1a] duration-300 ease-out fixed text-capitalize  text-white flex py-4 px-4 w-full justify-between items-center md:h-[5vh] h-[8vh]">
      <div className=" flex w-[66vw] gap-5 justify-between items-center">

          <div className="font-bold text-xl">Portfolio.</div>

          <ul className="hidden md:flex text-sm px-4 py-1 gap-8  justify-between   items-center ">
            <li
              className="pr-10 hover:underline decoration-pink-500 decoration-1 underline-offset-4"
            
            >
              HOME
            </li>
            <li
              className="pr-10 hover:underline decoration-pink-500 decoration-1 underline-offset-4"
              
            >
              PROJECTS
            </li>
            <li
              className="pr-10 hover:underline decoration-pink-500 decoration-1 underline-offset-4"  
            >
              SKILLS
            </li>
            <li
              className="pr-10 hover:underline  decoration-pink-500 decoration-1 underline-offset-4"
              
            >
              CONTACT
            </li>
          </ul>

      </div>
      <div onClick={() => setNav(!nav)} className=" bg-white bg-opacity-10 px-3 rounded-lg  py-1 md:hidden">
        <FaBars 
        size={20}/>
      </div>

      {nav && (
           <ul className="absolute md:hidden top-11 mr-6 w-[50%] cursor-pointer right-0 flex flex-col  gap-8 h-[45vh] rounded justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 border border-slate-700  ">
           <li> <a href="#">Home</a></li>
           <li> <a href="#">Skills</a></li>
           <li> <a href="#">Projects</a></li>
           <li> <a href="#">Contact Me</a></li>
     </ul>
      )
              
      }


     



    </nav>
  );
}
