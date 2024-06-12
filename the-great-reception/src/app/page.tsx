import Navbar from "@/components/Navbar";
import WelcomePage from "@/components/WelcomePage";
import RecipeMaker from "@/components/recipe-generator/RecipeMaker";
import About from "@/components/About";
import Footer from "@/components/Footer";

import "./home.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  loadRunpodModel();
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

/**
 * This fetch just loads the model but does not request recipes.
 */
function loadRunpodModel() {
  fetch("https://api.runpod.ai/v2/myoxqxv0mw5osj/run", {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: "VAB1XOJ27C06LI7RX35HFTXY9COMSGVK9HUOJ04V",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        load_model: true,
      },
    }),
  })
    .then((response) => response)
    .then((data) => {
      console.log("Model loading?: ", data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
