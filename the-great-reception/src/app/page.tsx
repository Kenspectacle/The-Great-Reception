import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import RedirectSection from "../components/RedirectSection";

import './home.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <>

      <Navbar />


      <header className="masthead bg-success text-white text-center">
        <div className="container d-flex align-items-center flex-column">


          <h1 className="masthead-heading text-uppercase mb-0">The Great Reception</h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">An easy place to create a Recipe using AI</p>
        </div>
      </header>

      <RedirectSection buttonLink={"/recipemaker"} buttonDescription={"Click here to start!"}/>

      <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">An AI recipe generator leverages advanced machine learning algorithms to create personalized and innovative recipes based on user preferences, dietary restrictions, and available ingredients. By analyzing vast amounts of culinary data, including cooking techniques, flavor pairings, and nutritional information, the AI can craft unique and delicious recipes tailored to individual tastes. </p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">This technology not only enhances culinary creativity but also simplifies meal planning, reduces food waste, and promotes healthier eating habits by suggesting balanced and diverse meal options.</p></div>
                </div>
            </div>
        </section>

      <Footer />
    </>
  );
}

