import Link from 'next/link';

import '../app/home.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RedirectButton( { buttonDescription, buttonLink}) {
    return (
        <>
            <section className="page-section portfolio" id="portfolio">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            <Link href={ buttonLink }>
              <button className="btn btn-xl btn-outline-secondary">{ buttonDescription }</button>
            </Link>
          </h2>
            <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
        </div>
      </section>
        </>
    );
}