import Footer from "./components/footer/Footer";
import HeroSec from "./components/Home/Hero/HeroSec";
import HeaderNav from "./components/Home/nav/Header";
import Section from "./components/Home/sections/Section";


export default function Home() {
  return (

    <main className="mt-3">
      <HeaderNav/>
      <HeroSec/>
      <Section/>
      <Footer/>
    </main>

  );
}
