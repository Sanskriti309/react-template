import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faGlobe,
  faCloudArrowUp,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCloudflare,
  faHireAHelper,
} from "@fortawesome/free-brands-svg-icons";
import Project from "./project";

function Services() {
  return (
    <div>
      <div className="section pb-5">
        <div className="container-fluid p-0">
          <div className="row m-5">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h3 className="pt-2 be">Be At The Forefront</h3>
              <div style={{ clear: "both" }}></div>
              <h2 className="of">
                Of <span>Innovation</span>
              </h2>
              <div style={{ clear: "both" }}></div>
              <hr className="first" />
              <p className="servicePara pb-0">
                We’re here to inform which tactics need funding and which are
                drain son resources.
              </p>
              <Button
                className="ps-5 pt-3 pb-3 pe-5 justify-content-center ourButton"
              >
                {" "}
                Our Service
              </Button>{" "}
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 g-3">
              <Card>
                <Card.Body>
                  <FontAwesomeIcon icon={faLightbulb} className="fontIcon" />{" "}
                  <br />
                  <div className="p-2 pt-5">
                    <h5>Strategic Consulting</h5>
                  </div>
                  <div>
                    <p>READ MORE</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 g-3">
              <Card>
                <Card.Body>
                  <FontAwesomeIcon icon={faGlobe} className="fontIcon" />
                  <br />
                  <div className="p-2 pt-5">
                    <h5> Project Scoping and Planning</h5>
                  </div>
                  <div>
                    <p>READ MORE</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt-3">
              <Card>
                <Card.Body>
                  <FontAwesomeIcon icon={faCloudArrowUp} className="fontIcon" />
                  <br />
                  <div className="p-2 pt-5">
                    <h5>Creative Cloud Solutions</h5>
                  </div>
                  <div>
                    <p>READ MORE</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12  mt-3">
              <Card>
                <Card.Body>
                  <FontAwesomeIcon icon={faChartLine} className="fontIcon" />
                  <br />
                  <div className="p-2 pt-5">
                    <h5>Technology Planning</h5>
                  </div>
                  <div>
                    <p>READ MORE</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12  mt-3">
              <Card>
                <Card.Body>
                  <FontAwesomeIcon icon={faCloudflare} className="fontIcon" />
                  <br />
                  <div className="p-2 pt-5">
                    <h5>Technology Services</h5>
                  </div>
                  <div>
                    <p>READ MORE</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12  mt-3">
              <Card>
                <Card.Body>
                  <FontAwesomeIcon icon={faHireAHelper} className="fontIcon" />
                  <br />
                  <div className="p-2 pt-5">
                    <h5>Help Desk IT Services</h5>
                  </div>
                  <div>
                    <p>READ MORE</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Project />
    </div>
  );
}
export default Services;
