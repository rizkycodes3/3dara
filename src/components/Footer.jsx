import Logo, { Sosmed } from "../data";

const Footer = () => {
  return (
    <footer className="bg-footer p-5">
      <div className="flex items-center gap-1 w-fit mx-auto">
        <img src={Logo} alt="logo" className="w-7" />
        <h3 className="text-base text-surface-tint font-semibold">3Dara</h3>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-2/3 mx-auto mt-5 justify-items-center gap-5 sm:grid-cols-4 sm:grid-rows-1 lg:w-1/2">
        {Sosmed.map((item) => {
          return (
            <a href={item.href} key={item.id} className="text-surface-tint text-sm">
              <i className={item.icon}></i> {item.name}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
