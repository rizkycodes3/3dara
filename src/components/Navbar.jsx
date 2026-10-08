import { NavLink } from "react-router-dom";

import logo, { sosmed } from "../data";

import { FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  const getClassLink = ({ isActive }) => {
    return isActive ? "bg-text-primary text-primary py-1 px-3 rounded-xl hover:underline" : "py-1 px-3 rounded-xl hover:underline";
  };

  return (
    <nav className="bg-secondary font-Jakarta p-2 grid grid-cols-[repeat(2,auto)] grid-rows-[repeat(2,auto)] gap-4 shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] sticky top-0 right-0 left-0 z-100 text-text-primary sm:grid-cols-[repeat(3,auto)] sm:grid-rows-1 lg:px-5">
      <div className="grid grid-cols-[auto_1fr] grid-rows-[repeat(2,auto)] items-center gap-x-2 w-fit col-[1/2] row-[1/2]">
        <img src={logo} alt="logo" className="w-[clamp(40px,5vw,70px)] row-span-full" />
        <h1 className="font-bold font-Newsreader text-[clamp(1rem,2vw,64rem)]">3DARA</h1>
        <span className="font-Jakarta font-semibold text-text-secondary text-xs lg:text-base">Masakan Kuliner Bukittinggi</span>
      </div>

      <a href={sosmed[4].href} className="flex gap-1 text-[clamp(12px,2vw,17px)] cols-[2/3] row-[1/2] bg-[#25D366] w-fit h-fit self-center justify-self-end rounded-2xl py-1 px-2 sm:col-[3/4]">
        Hubungi Kami
        <FaWhatsapp className="self-center" />
      </a>

      <div className="col-span-full bg-secondary-dim p-2 flex justify-around text-[clamp(12px,1vw,20px)] rounded-2xl sm:col-[2/3] sm:self-center">
        <NavLink to="/" className={getClassLink}>
          Home
        </NavLink>
        <NavLink to="/menu" className={getClassLink}>
          Menu
        </NavLink>
        <NavLink to="/about" className={getClassLink}>
          Tentang Kami
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
