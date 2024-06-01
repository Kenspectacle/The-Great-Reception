import Image from "next/image";
import styles from "./page.module.css";
import Navbar from '../components/Navbar';
import Script from 'next/script';  // Import Script from next/script
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <>

      <Navbar />
      <main>
        <h1>The Great Reception</h1>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" 
      crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" 
      crossOrigin="anonymous"></Script>
    </>
  );
}

