import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Solutions from "./solution";

function Project() {
  return (
    <div>
      <div className="section p-5 bg-dark  justify-content-center">
        <div className="container-fluid p-0">
          <div className="row  happy justify-content-center">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="fontIcon text-white"
              />
              <br></br>
              <h3 className="com">Happy Clients</h3>
              <p className="text-white"> We’re here to inform which tactics</p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3">
              <FontAwesomeIcon
                icon={faChartLine}
                className="fontIcon text-white"
              />
              <br></br>
              <h3 className="com">Completed Projects</h3>
              <p className="text-white"> We’re here to inform which tactics</p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 g-3">
              <FontAwesomeIcon icon={faClock} className="fontIcon text-white" />
              <br></br>
              <h3 className="com">Support of Hours</h3>
              <p className="text-white"> We’re here to inform</p>
            </div>
          </div>
          <div className="row  happy mt-5 m-3">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3 className="text-white">Let's Disscuss your Projects</h3>
              <p className="mt-4 text-white">
                We’re here to inform which tactics need funding inform which
                tactics need funding inform which tactics need funding inform
                which tactics need funding
              </p>
              <Button variant="outline-light" className="p-3">
                Contact Us
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
      <Solutions />
    </div>
  );
}
export default Project;
