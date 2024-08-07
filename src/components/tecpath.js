import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import AboutSection from "./about";

function ProvideServices() {
  return (
    <div>
      <div className="section p-5 bg-dark text-white ">
        <div className="container-fluid p-0">
          <div className="row">
            <h2 className="text-center">Provide Awesome Service</h2>
            <h2 className="text-center"> With Our Tools</h2>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3 mt-5">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faGlobe} className="p-3 m-4 mt-1 plan" />
                <div className="ml-4">
                  <h6 className="text">Business Planning</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consec anglse sicing elite
                    sombar, sed do incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3 mt-5">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faGlobe} className="p-3 m-4 mt-1 plan" />
                <div className="ml-4">
                  <h6>Organisation</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consec anglse sicing elite
                    sombar, sed do incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3 mt-5">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faGlobe} className="p-3 m-4 mt-1 plan" />
                <div className="ml-4">
                  <h6>People Cohesion</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consec anglse sicing elite
                    sombar, sed do incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3 mt-5">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faGlobe} className="p-3 m-4 mt-1 plan" />
                <div className="ml-4">
                  <h6>Human Resource</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consec anglse sicing elite
                    sombar, sed do incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3 mt-5">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faGlobe} className="p-3 m-4 mt-1 plan" />
                <div className="ml-4">
                  <h6>100% Support</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consec anglse sicing elite
                    sombar, sed do incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3 mt-5">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faGlobe} className="p-3 m-4 mt-1 plan" />
                <div className="ml-4">
                  <h6>Easy Customization</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consec anglse sicing elite
                    sombar, sed do incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </div>
  );
}
export default ProvideServices;
