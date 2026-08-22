import Logo, { Sosmed } from "../data";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="flex items-center gap-1 w-fit mx-auto">
        <img src={Logo} alt="logo" className="w-7" />
        <h3 className="text-base text-surface-tint font-semibold">3Dara</h3>
      </div>
      <div>
        {Sosmed.map((item) => {
          return (
            <a href={item.href} key={item.id}>
              <i className={item.icon}></i> {item.name}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
