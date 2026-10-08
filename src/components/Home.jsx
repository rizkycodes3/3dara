import { Link } from "react-router-dom";

import { sosmed, imageHome, upsItems, catalog } from "../data";

import { IoIosArrowRoundForward } from "react-icons/io";
import { FaBowlRice, FaArrowRight } from "react-icons/fa6";
import { GiCampCookingPot, GiCook } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="bg-primary font-Jakarta text-text-primary ">
      {/* hero */}
      <section className="min-h-[90vh] flex flex-col gap-10 lg:flex-row p-4 lg:p-10">
        <div>
          <span className="text-xs tracking-widest text-text-secondary font-semibold lg:text-base">Warisan Kuliner Bukittinggi Turun-temurun</span>
          <h1 className="text-3xl tracking-wide font-Newsreader font-semibold py-4 lg:text-5xl">Gurihnya Pas, Lembutnya Bikin Nagih. Lemang Luluik Khas Bukittinggi.</h1>
          <h3 className="text-base/relaxed lg:text-xl/relaxed">
            Diolah dari bahan-bahan lokal pilihan yang dipadukan secara presisi dengan teknik modern, setiap hidangan kami bukan sekadar sajian—melainkan sebuah cerita tentang tradisi, inovasi, dan
            dedikasi rasa. Nikmati kelezatan otentik ini dalam balutan suasana yang hangat, nyaman, dan selalu menyambut Anda seperti di rumah sendiri.
          </h3>
          <div className="flex flex-col gap-3 w-fit text-sm mt-5 md:flex-row lg:text-base">
            <a href={sosmed[4].href} className="bg-text-primary text-primary p-4 rounded-3xl flex gap-1">
              Pesan Sekarang <IoIosArrowRoundForward className="text-2xl" />
            </a>
            <Link to="/menu" className="bg-secondary shadow-[2px_2px_2px_2px_rgba(0,0,0,0.1)] p-3 rounded-3xl">
              Jelajahi Menu Kami
            </Link>
          </div>
        </div>
        <div className="relative h-fit shadow-[3px_3px_5px_1px_rgba(0,0,0,0.4)] sm:w-[80vw] lg:w-screen">
          <img src={imageHome} />
          <span className="absolute top-2 right-1 font-semibold bg-white rounded-2xl p-1">4.8 ⭐⭐⭐⭐⭐</span>
        </div>
      </section>

      {/* advantages */}
      <section className="mt-20 p-4 pb-20 bg-secondary-dim lg:p-10 lg:pb-40 lg:px-50">
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
          <span className="text-sm tracking-widest text-text-secondary font-semibold lg:col-span-full lg:text-sm">Dedikasi Rasa</span>
          <h1 className="text-2xl tracking-wide font-Newsreader font-semibold lg:text-3xl">Rahasia Kelezatan Legit yang Meleleh di Setiap Gigitan</h1>
          <p className="text-base/relaxed lg:text-xl/relaxed">
            Bukan sekadar manis dan gurih. Kami memadukan bahan lokal segar dengan teknik pematangan yang pas untuk menciptakan tekstur lembut sempurna tanpa menghilangkan identitas aslinya
          </p>
        </div>
        <ul className="flex flex-col gap-5 mt-10 md:flex-row">
          {upsItems.map((item, i) => (
            <li key={item.id} className="bg-white rounded-2xl p-5 flex flex-col gap-3">
              {[<FaBowlRice className="text-2xl lg:text-4xl" />, <GiCampCookingPot className="text-2xl lg:text-4xl" />, <GiCook className="text-2xl lg:text-4xl" />][i]}
              <h3 className="text-xl font-semibold font-Newsreader lg:text-2xl">{item.title}</h3>
              <p className="text-base/relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* menu */}
      <section className="bg-primary p-4 pb-20 lg:p-10 lg:pb-40 lg:px-50">
        <div className="flex flex-col gap-1 lg:flex-row lg:justify-between">
          <h1 className="text-2xl font-Newsreader font-semibold">Varian Menu Kami</h1>
          <Link to="/menu" className="flex gap-1 text-text-secondary text-sm h-fit">
            Lihat Semua Menu <FaArrowRight className="self-center" />
          </Link>
        </div>
        <ul className="grid grid-rows-2 gap-10 mt-10 md:grid-cols-2 md:grid-rows-1">
          {catalog.map((item) => (
            <li key={item.id} className="bg-white rounded-2xl p-5 flex flex-col gap-3">
              <img src={item.image} alt={item.title} className="rounded-2xl mb-2" />
              <h3 className="text-xl font-semibold font-Newsreader lg:text-2xl">{item.title}</h3>
              <p className="text-base/relaxed line-clamp-5">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* promo */}
      <section className="p-4 pb-20 lg:p-10 lg:pb-40 lg:px-50">
        <div className="bg-access text-primary p-5 rounded-2xl">
          <TbTruckDelivery className="text-4xl" />
          <p className="mb-5 mt-1 text-base/relaxed">
            Nikmati kehangatan otentik Lemang Luluik langsung di rumah Anda. Kami melayani pengiriman ke seluruh area Bukittinggi dengan jaminan rasa dan kehangatan yang tetap terjaga.
          </p>
          <RiDiscountPercentFill className="text-4xl" />
          <p className="mb-5 mt-1 text-base/relaxed">Sebagai bentuk apresiasi, kami menghadirkan diskon spesial 10% hingga 20% khusus untuk pelanggan setia kami.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
