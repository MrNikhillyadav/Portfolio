export default function Navbar() {
  return (
    <nav className="bg-[#1b1a1a]  duration-300 ease-out fixed text-capitalize text-white flex py-4 px-4 w-full justify-between items-center  h-[5vh]">
      <div className="font-bold text-xl">Portfolio.</div>

      <ul className="text-sm px-4 py-1 flex justify-between items-center ">
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
        <li>
          <button className="text-md drop-shadow-lg decoration-purple-300  bg-purple-500 px-6 py-2">Login</button>
        </li>
      </ul>
    </nav>
  );
}
