import { HeroImage, Catalog } from "../data";

const Hero = () => {
  return (
    <main
      style={{
        "--image-lg": `url(${HeroImage})`,
        "--image-sm": `url(${Catalog.LemangPutih})`,
      }}
      className="relative h-[calc(100vh-3rem)] w-screen bg-(image:--image-sm) bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 py-16 after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:via-surface-bright/60 after:to-surface-dim"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-surface-tint font-playfair mb-2">Selamat Datang</p>
        <q className="text-on-surface font-playfair font-bold text-3xl">Melestarikan Warisan Rasa Dari Dapur Nusantara.</q>
        <p className="text-tertiary mt-5">
          Rasakan perpaduan bahan lokal dan teknik modern dalam suasana yang hangat dan mengundang. Setiap hidangan adalah cerita yang diceritakan melalui rasa.
        </p>
      </div>
    </main>
  );
};

export default Hero;
