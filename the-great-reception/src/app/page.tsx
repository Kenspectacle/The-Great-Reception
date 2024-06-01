import Image from "next/image";
import styles from "./page.module.css";
import Navbar from '../components/Navbar';
import Script from 'next/script';  // Import Script from next/script
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'

export default function Home() {
  return (
    <>

      <Navbar />


      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">


          <h1 className="masthead-heading text-uppercase mb-0">The Great Reception</h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
            <div className="divider-custom-line"></div>
            <div className="divider-custom-line"></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">An easy place to create a Recipe using AI</p>
        </div>
      </header>






      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossOrigin="anonymous"></Script>
    </>
  );
}

