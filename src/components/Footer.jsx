import logo, { sosmed } from "../data";

import { IoMailSharp, IoMapSharp } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-secondary-dim p-4 flex flex-col gap-5 md:grid md:grid-cols-3 md:grid-rows-[1fr_auto]">
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <img src={logo} className="h-5 mr-2" />
        <h1 className="font-Newsreader font-semibold text-xl">3DARA</h1>
        <p className="col-span-full row-[2/3] text-sm/relaxed">
          Keotentikan rasa Minangkabau dalam sajian lemang luluik bertekstur lembut, diolah dari ketan murni dan kelapa parut alami Minangkabau, Bukittinggi.
        </p>
      </div>
      <div>
        <h2 className="font-semibold mb-3">Jam Buka</h2>
        <p className="text-sm">
          Setiap Hari: <span className="font-semibold">07.00 - 17.00 WIB</span>
        </p>
      </div>
      <div>
        <h2 className="font-semibold mb-3">Sosial Media</h2>
        <ul className="grid grid-cols-2 gap-1">
          {sosmed.map((item, i) => (
            <li key={item.id}>
              <a href={item.href} className="flex items-center gap-1 text-sm">
                {[<IoMailSharp />, <IoLogoFacebook />, <AiFillInstagram />, <IoMapSharp />, <FaSquareWhatsapp />][i]} {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-sm col-span-full row-[2/3]">&copy; 2026 3DARA. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
