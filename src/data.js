import logo from "./assets/logo.png";
export default logo;

import imageHero from "./assets/image-hero.jpeg";
export const imageHome = imageHero;

import bioImage from "./assets/bio.png";
export const bio = bioImage;

import lemangPutih from "./assets/lemang-gula-putih.png";
import lemangMerah from "./assets/lemang-gula-merah.png";
export const catalog = [
  {
    id: 1,
    title: "Lemang Gula Putih",
    image: lemangPutih,
    desc: "Sajian istimewa dari resep rahasia keluarga, menghadirkan keselarasan rasa yang hakiki. Lemang Gula Putih kami diolah dari bahan-bahan pilihan terbaik: beras ketan pulen yang lembut, kelapa parut murni, dan kehalusan gula putih murni. Rasakan tekstur kenyal dari ketan yang dipadu sempurna dengan isian kelapa manis yang legit, dengan aroma daun pandan yang khas. Setiap suapan adalah perayaan rasa manis alami dan gurih yang otentik.",
    animated: "fade-left",
  },
  {
    id: 2,
    title: "Lemang Gula Merah",
    image: lemangMerah,
    desc: "Perpaduan sempurna antara beras ketan pulen yang gurih dan isian kelapa gula merah murni yang manis dan kaya rasa. Dibalut rapi dengan daun pisang alami dan dikukus hingga aromanya meresap sempurna, setiap gigitan menghadirkan tekstur yang kenyal, lembut, dan cita rasa manis-gurih yang khas.",
    animated: "fade-right",
  },
];

export const upsItems = [
  {
    id: 1,
    title: "Beras Ketan Pilihan & Santan Murni",
    desc: "Kami hanya menggunakan ketan lokal berkualitas tinggi dan perasan pertama santan kelapa segar. Tanpa perasa buatan, menghasilkan gurih alami yang meresap hingga ke serat terdalam",
    animated: "0",
  },
  {
    id: 2,
    title: "Pematangan Presisi & Tekstur Lumer",
    desc: "Melalui proses pematangan yang dijaga ketat suhunya, menciptakan tekstur luluik (lembut/lumer) yang pas tidak lembek, tidak keras, dan meleleh sempurna saat disantap",
    animated: "200",
  },
  {
    id: 3,
    title: "Keseimbangan Rasa Gurih dan Legit",
    desc: "Formulasi takaran yang presisi menghasilkan perpaduan rasa gurih dan manis legit yang seimbang (balance), membuat setiap suapan terasa lezat tanpa memberikan rasa enek",
    animated: "400",
  },
];

export const sosmed = [
  {
    id: 1,
    name: "Gmail",
    href: "mailto:jefriadimudo120@gmail.com?subject=Pemesanan%20Menu&body=Halo,%20saya%20ingin%20memesan...",
  },
  {
    id: 2,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593068231483",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/3dara_magek/",
  },
  {
    id: 4,
    name: "Maps",
    href: "https://maps.app.goo.gl/tdTgRVQNKyedu3fg6",
  },
  {
    id: 5,
    name: "Whatsapp",
    href: "https://wa.me/6281397011944",
  },
];
