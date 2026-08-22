import { USPitems } from "../data";

const USP = () => {
  return (
    <section className="bg-on-primary px-5 py-10">
      <h2 className="text-center text-secondary font-bold">Kami Menjaga Kepercayaan Anda Dengan</h2>
      <ul className="mt-10 border flex flex-col gap-20">
        {USPitems.map((item) => {
          return (
            <li key={item.id} className="bg-surface-dim p-5 grid grid-rows[3fr,0.5fr,2fr] gap-5 rounded-2xl text-center">
              <img src={item.image} alt={item.title} className="justify-self-center rounded-full" />
              <h3 className="text-2xl text-surface-tint font-bold">{item.title}</h3>
              <p className="text-tertiary">{item.desc}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default USP;
