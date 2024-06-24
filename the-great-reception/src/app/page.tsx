import Navbar from "@/components/Navbar";
import WelcomePage from "@/components/WelcomePage";
import RecipeMaker from "@/components/recipe-generator/RecipeMaker";
import About from "@/components/About";
import Footer from "@/components/Footer";

import "./home.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomePage />
      <RecipeMaker />
      <About />
      <Footer />
    </>
  );
}
