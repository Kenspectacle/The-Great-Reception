import '../app/home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Fun Fact</h4>
                            <p className="lead mb-0">
                                Llama is awesome!
                            </p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">Link to repository</h4>
                            <a href="https://github.com/Kenspectacle/The-Great-Reception">Github</a>
                            .
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}