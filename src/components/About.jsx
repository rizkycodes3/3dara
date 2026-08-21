import { Bio } from "../data";

const About = () => {
  return (
    <section className="flex flex-col gap-2 bg-surface-low py-10">
      <img src={Bio} alt="bio" className="w-2/3 mx-auto rounded-t-full shadow-[-20px_20px_0_0] shadow-surface-bright" />
      <div className="mt-8 px-5 flex flex-col gap-5">
        <p className="text-secondary font-playfair">Kisah Kami</p>
        <h2 className="text-surface-tint text-3xl">Merawat Cita Rasa, Meneruskan Warisan</h2>
        <p className="text-surface-tint">
          Berawal dari dapur sederhana dan resep rahasia yang diwariskan secara turun-temurun, kami hadir untuk menghidupkan kembali kehangatan masakan rumah.
          Kami percaya bahwa hidangan tradisional bukan sekadar tentang rasa, melainkan tentang cerita, kenangan, dan ikatan kekeluargaan.
        </p>
        <p className="text-tertiary font-playfair">
          Setiap hidangan diolah dengan teknik masak tradisional dan rempah-rempah asli Nusantara tanpa jalan pintas, agar Anda dapat menikmati keautentikan
          rasa yang sesungguhnya.
        </p>
      </div>
    </section>
  );
};

export default About;
