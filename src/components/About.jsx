import { Link } from "react-router-dom";

import Logo, { bio, sosmed, guarantee } from "../data";

import { LuMapPin } from "react-icons/lu";
import { MdEco, MdCleanHands, MdOutlinePublishedWithChanges } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const About = () => {
  return (
    <section className="bg-secondary min-h-screen">
      <section className="p-4 pt-10 grid grid-rows-[repeat(2,auto)] gap-10 md:grid-cols-2 md:grid-rows-1 lg:w-[80vw] lg:h-[50vh] lg:m-auto lg:pt-20">
        <div className="lg:place-self-center">
          <h1 className="font-Newsreader font-semibold text-4xl">
            Menjaga Tekstur Tradisi Minangkabau di <span className="text-text-secondary">Balik Kenikmatan Lemang</span>
          </h1>
          <p className="my-5 text-xl">Kisah kami merawat keaslian rasa lemang luluik khas ranah minang, dari dapur sederhana ke meja makan keluarga indonesia</p>
          <a href={sosmed[3].href} className="flex items-center gap-1 bg-text-primary text-primary w-fit rounded-2xl px-4 py-2">
            <LuMapPin /> Kunjungi Dapur Kami
          </a>
        </div>
        <img src={bio} alt="bio" className="rounded-2xl sm:h-[40vh] lg:h-full lg:place-self-center" />
      </section>

      <section className="bg-primary p-4 pt-10 grid grid-rows-[auto_1fr] gap-5 md:grid-rows-1 lg:grid-cols-2 lg:p-20">
        <div>
          <span className="tracking-widest text-xs text-text-secondary md:text-sm">Sejarah & Filosofi Rasa</span>
          <h1 className="font-Newsreader font-semibold text-2xl md:text-3xl">Dari Dapur Sederhana ke Ikon Kuliner Bukittinggi</h1>
        </div>
        <div className="flex flex-col gap-3 text-base/relaxed lg:text-xl/relaxed">
          <p>
            Perjalanan kami berawal dari sebuah dapur sederhana di Jorong Sawah Ladang, Kamang Magek. Berbekal kearifan tradisi Minangkabau dan ketajaman rasa, kami menghadirkan kelezatan lemang
            otentik—menghubungkan kehangatan kompor tradisional langsung ke meja para penikmatnya.
          </p>
          <p>
            Bagi kami, jiwa sejati lemang bertumpu pada tiga kebaikan alam: ketan putih kualitas terbaik, gurihnya kelapa parut, dan manisnya gula alami. Diolah secara teliti dengan teknik kukus di
            atas api, kami menjaga kenikmatan lemang tetap murni, jujur, dan bebas dari bahan pengawet.
          </p>
          <q className="font-Newsreader font-semibold">Satu suapan bukan sekadar meresapi rasa, melainkan merawat kehangatan tradisi yang tak pernah padam.</q>
        </div>
      </section>

      <section className="bg-secondary p-4 pt-10 grid grid-rows-[auto_1fr] gap-10 lg:p-20">
        <div>
          <span className="text-xs text-text-secondary tracking-widest">Integritas Standar Tinggi</span>
          <h1 className="font-Newsreader font-semibold text-2xl md:text-3xl">Komitmen Tanpa Kompromi Mutu 3Dara</h1>
          <p className="text-base/relaxed lg:text-xl/relaxed">
            Kepercayaan penikmat kuliner di seluruh nusantara adalah amanah terbesar kami. Setiap lemang yang keluar dari dapur kami terikat oleh empat jaminan ketat.
          </p>
        </div>
        <ul className="grid grid-rows-4 gap-5 md:grid-rows-1 md:grid-cols-4">
          {guarantee.map((item, i) => (
            <li key={item.id} className="flex flex-col gap-1 bg-secondary-dim rounded-2xl p-4">
              {
                [
                  <MdEco className="text-2xl lg:text-4xl" />,
                  <TbTruckDelivery className="text-2xl lg:text-4xl" />,
                  <MdCleanHands className="text-2xl lg:text-4xl" />,
                  <MdOutlinePublishedWithChanges className="text-2xl lg:text-4xl" />,
                ][i]
              }
              <h3 className="text-xl font-semibold font-Newsreader lg:text-2xl">{item.title}</h3>
              <p className="text-base/relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="p-4 py-10">
        <div className="bg-access text-primary rounded-2xl p-4 flex flex-col gap-3 md:w-[80vw] md:m-auto lg:w-[60vw]">
          <img src={Logo} alt="logo" className="h-8 w-fit m-auto" />
          <h1 className="font-Newsreader font-semibold text-2xl text-center md:text-3xl">Ingin Merasakan Hangatnya Lemang 3Dara Hari Ini?</h1>
          <p className="text-base/relaxed text-center lg:text-xl/relaxed">Nikmati pulennya beras ketan berpadu manisnya kalapa parut. Siap dikirim hangat ke meja makan Anda. </p>
          <div className="flex gap-3 w-fit text-sm mt-5 m-auto lg:text-base">
            <a href={sosmed[4].href} className="bg-text-primary text-primary p-4 rounded-3xl flex gap-1">
              Pesan Sekarang
            </a>
            <Link to="/menu" className="bg-secondary shadow-[2px_2px_2px_2px_rgba(0,0,0,0.1)] p-3 rounded-3xl text-text-primary">
              Jelajahi Menu Kami
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
