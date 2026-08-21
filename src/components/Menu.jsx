import { Catalog } from "../data";

const Menu = () => {
  return (
    <section className="bg-surface-dim px-5 py-10">
      <h2 className="text-secondary text-xl font-bold text-center">Hidangan Khas Kami</h2>
      <ul className="mt-10 flex flex-col gap-20">
        {Catalog.map((item) => {
          return (
            <li key={item.id} className="bg-surface-low rounded-2xl p-5 flex flex-col gap-5">
              <img src={item.image} alt={item.title} className="rounded-2xl" />
              <h3 className="text-surface-tint text-2xl font-playfair font-bold">{item.title}</h3>
              <p className="text-tertiary">{item.desc}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
