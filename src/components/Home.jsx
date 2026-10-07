import { Link } from "react-router-dom";

import { sosmed, imageHome } from "../data";

import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <main className="bg-primary  font-Jakarta text-text-primary p-4 flex flex-col gap-10 lg:flex-row lg:p-10">
      <div>
        <span className="text-sm tracking-widest text-text-secondary font-semibold">Warisan Kuliner Bukittinggi Turun-temurun</span>
        <h1 className="text-4xl tracking-wide font-Newsreader font-semibold py-4">Gurihnya Pas, Lembutnya Bikin Nagih. Lemang Luluik Khas Bukittinggi.</h1>
        <h3 className="text-base/relaxed">
          Diolah dari bahan-bahan lokal pilihan yang dipadukan secara presisi dengan teknik modern, setiap hidangan kami bukan sekadar sajian—melainkan sebuah cerita tentang tradisi, inovasi, dan
          dedikasi rasa. Nikmati kelezatan otentik ini dalam balutan suasana yang hangat, nyaman, dan selalu menyambut Anda seperti di rumah sendiri.
        </h3>
        <div className="flex flex-col gap-3 w-fit mt-5 md:flex-row">
          <a href={sosmed[4].href} className="bg-text-primary text-primary p-4 rounded-3xl flex gap-1">
            Pesan Sekarang <IoIosArrowRoundForward className="text-2xl" />
          </a>
          <Link to="/menu" className="bg-secondary shadow-[2px_2px_2px_2px_rgba(0,0,0,0.1)] p-3 rounded-3xl">
            Jelajahi Menu Kami
          </Link>
        </div>
      </div>
      <div className="relative h-fit shadow-[-3px_3px_5px_1px_rgba(0,0,0,0.4)] sm:w-[80vw] lg:w-screen">
        <img src={imageHome} />
        <span className="absolute top-2 right-1 font-semibold bg-white rounded-2xl p-1">4.8 ⭐⭐⭐⭐⭐</span>
      </div>
    </main>
  );
};

export default Home;
