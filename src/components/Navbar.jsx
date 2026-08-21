import Logo from "../data";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-12 bg-surface-dim text-surface-tint">
      <div className="flex items-center gap-2 pl-3 h-full">
        <img src={Logo} alt="logo" className="h-2/3" />
        <h1 className="text-2xl font-bold">3DARA</h1>
      </div>
      <i className="ri-shopping-bag-4-line text-2xl pr-3"></i>
    </nav>
  );
};

export default Navbar;
