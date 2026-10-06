import logo from "./assets/logo.png";
export default logo;

import bioImage from "./assets/bio.png";
export const Bio = bioImage;

import lemangPutih from "./assets/lemang-gula-putih.jpg";
import lemangMerah from "./assets/lemang-gula-merah.jpg";
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

import halal from "./assets/logo-halal.png";
import cookBook from "./assets/cook-book.png";
import bpa from "./assets/BPA-free.png";
export const USPitems = [
  {
    id: 1,
    title: "100% Halal untuk Ketenangan Anda",
    image: halal,
    desc: "Kami memastikan seluruh produk diolah sesuai standar kehalalan yang ketat, mulai dari pemilihan bahan baku, proses produksi, hingga pengiriman ke lokasi anda. Dengan sertifikasi resmi Halal Indonesia, Anda dapat menikmati setiap sajian tradisional kami dengan rasa aman, nyaman, dan penuh ketenangan.",
    animated: "0",
  },
  {
    id: 2,
    title: "Warisan Cita Rasa yang Teruji Zaman",
    image: cookBook,
    desc: "Setiap hidangan kami diolah menggunakan catatan resep rahasia yang diwariskan secara turun-temurun. Kami mempertahankan takaran rempah asli, teknik pengolahan tradisional, dan ketulusan cara masak lama agar Anda dapat menikmati kelezatan yang konsisten, autentik, dan membawa kenangan hangat masakan keluarga.",
    animated: "200",
  },
  {
    id: 3,
    title: "Aman untuk Kesehatan Keluarga Anda",
    image: bpa,
    desc: "Kami peduli pada kesehatan Anda sebagaimana kami peduli pada cita rasa. Seluruh kemasan yang kami gunakan terjamin BPA Free (bebas dari zat kimia Bisphenol A), sehingga makanan tetap higienis, tidak beracun, dan terhindar dari kontaminasi zat berbahaya meskipun disajikan dalam keadaan hangat.",
    animated: "400",
  },
];

export const sosmed = [
  {
    id: 1,
    name: "Gmail",
    href: "mailto:jefriadimudo120@gmail.com?subject=Pemesanan%20Menu&body=Halo,%20saya%20ingin%20memesan...",
    icon: "ri-mail-line",
  },
  {
    id: 2,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593068231483",
    icon: "ri-facebook-circle-line",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/3dara_magek/",
    icon: "ri-instagram-line",
  },
  {
    id: 4,
    name: "Maps",
    href: "https://maps.app.goo.gl/tdTgRVQNKyedu3fg6",
    icon: "fa-solid fa-map-location-dot",
  },
];
