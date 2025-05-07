import Hero from "./components/Homeware/Hero";
import LandingCTA from "./components/Homeware/LandingCTA";
import SubstanceComponent from "./components/SubstanceComponent";
import SubComponent from "./components/SubComponent";
import Contemporary from "./components/Contemporary";
import Yours from "./components/Yours";
import Products from "./components/Products";


export default function Home() {
  return (
    <>
      <Hero />
      <LandingCTA/>
      <Contemporary/>
      <Yours/>
      <Products />
      <SubstanceComponent />
      <SubComponent />
    </>
  );
}
