import { Catalog } from "../data";

const Menu = () => {
  return (
    <section className="bg-surface-dim px-5 py-10">
      <h2 className="text-secondary text-xl font-bold text-center">Hidangan Khas Kami</h2>
      <ul className="mt-10 flex flex-col items-center gap-20 lg:px-20">
        {Catalog.map((item) => {
          return (
            <li key={item.id} className="bg-surface-low rounded-2xl p-5 grid grid-rows-[2fr,1fr] gap-5 md:grid-cols-[1fr,2fr]">
              <img src={item.image} alt={item.title} className="rounded-2xl md:row-[1/3] md:col-[1/2] md:w-full md:h-80" />
              <div className="md:col-[2/3]">
                <h3 className="text-surface-tint text-2xl font-playfair font-bold mb-5">{item.title}</h3>
                <p className="text-tertiary">{item.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
