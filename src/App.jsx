import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import USP from "./components/USP";

const App = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <USP />
    </div>
  );
};

export default App;
