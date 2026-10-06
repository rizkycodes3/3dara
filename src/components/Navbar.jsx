import Logo from "../data";

import { FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-secondary font-Jakarta p-2 grid grid-cols-[repeat(2,auto)] grid-rows-[repeat(2,auto)] gap-4 shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] sm:grid-cols-[repeat(3,auto)] sm:grid-rows-1">
      <div className="grid grid-cols-[auto_1fr] grid-rows-[repeat(2,auto)] items-center gap-x-2 w-fit col-[1/2] row-[1/2]">
        <img src={Logo} alt="logo" className="h-10 row-span-full" />
        <h1 className=" font-bold font-Newsreader">3DARA</h1>
        <span className="font-Jakarta font-semibold text-text-secondary text-xs">Masakan Kuliner Bukittinggi</span>
      </div>
      <span className="flex gap-1 text-xs cols-[2/3] row-[1/2] bg-[#25D366] w-fit h-fit self-center justify-self-end rounded-2xl py-1 px-2 sm:col-[3/4]">
        Hubungi Kami
        <FaWhatsapp className="text-base" />
      </span>
      <div className="col-span-full h-fit flex justify-around text-xs sm:col-[2/3] sm:self-center">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Tentang Kami</a>
      </div>
    </nav>
  );
};

export default Navbar;
