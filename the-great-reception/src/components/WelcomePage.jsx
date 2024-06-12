import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function WelcomePage() {
  return (
    <>
      <header className="masthead bg-success text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <h1 className="masthead-heading text-uppercase mb-0">
            The Great Reception
          </h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">
            An easy place to create a Recipe using AI
          </p>
        </div>
      </header>
    </>
  );
}
