// Sections

import Herosection from "./components/HeroSection";
import Slider from "./components/Slider";
import Different from "./components/Different";
import Leistungen from "./components/Leistungen";
import Kunden from "./components/Kunden";
import Footer from "./components/Footer";

export default function Index() {
  return (
    <>
      {" "}
      <main className="flex items-center flex-col">
        <Herosection />
        <Slider />
        <Different />
        <Leistungen />
        <Kunden />
        <Footer />
      </main>
    </>
  );
}
