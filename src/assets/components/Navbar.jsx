export default function Navbar() {
  return (
    <nav className="bg-[#1b1a1a]  duration-300 ease-out fixed text-capitalize text-white flex py-4 px-4 w-full justify-between items-center  h-[5vh]">
      <div className="font-bold text-xl">Portfolio.</div>

      <ul className="text-sm px-4 py-1 ">
        <a
          className="pr-10 hover:underline decoration-pink-500 decoration-1 underline-offset-4"
          href="#"
        >
          HOME
        </a>
        <a
          className="pr-10 hover:underline decoration-pink-500 decoration-1 underline-offset-4"
          href="#"
        >
          PROJECTS
        </a>
        <a
          className="pr-10 hover:underline decoration-pink-500 decoration-1 underline-offset-4"
          href="#"
        >
          SKILLS
        </a>
        <a
          className="pr-10 hover:underline  decoration-pink-500 decoration-1 underline-offset-4"
          href="#"
        >
          CONTACT
        </a>
      </ul>
    </nav>
  );
}
