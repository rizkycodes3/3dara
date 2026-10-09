import { catalog } from "../data";

import { FaBook } from "react-icons/fa";

const Menu = () => {
  return (
    <section className="bg-secondary min-h-screen p-4 pt-5 lg:p-10">
      <span className="flex items-center gap-1 text-text-secondary tracking-widest">
        <FaBook /> Daftar Cita Rasa Minang
      </span>
      <h1 className="font-Newsreader font-semibold text-3xl mt-2 mb-10">Koleksi Menu 3Dara</h1>
      <ul className="grid grid-rows-2 gap-10 mb-20 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3">
        {catalog.map((item) => (
          <li key={item.id} className="bg-white">
            <img src={item.image} alt={item.title} />
            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-Newsreader font-semibold text-2xl">{item.title}</h1>
              <span className="text-xl font-Newsreader font-semibold">Rp {item.price.toLocaleString("id-ID")}</span>
              <p className="text-base/relaxed">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
