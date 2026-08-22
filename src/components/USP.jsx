import { useEffect } from "react";
import { USPitems } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

const USP = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <section className="bg-on-primary px-5 py-10">
      <h2 className="text-center text-secondary font-bold">Kami Menjaga Kepercayaan Anda Dengan</h2>
      <ul className="mt-10 flex flex-col gap-20 lg:flex-row lg:gap-10">
        {USPitems.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-surface-dim p-5 grid grid-rows[3fr,0.5fr,2fr] gap-5 rounded-2xl text-center sm:w-2/3 sm:mx-auto"
              data-aos="flip-left"
              data-aos-delay={item.animated}
            >
              <img src={item.image} alt={item.title} className="justify-self-center rounded-full lg:h-2/3 self-center" />
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
