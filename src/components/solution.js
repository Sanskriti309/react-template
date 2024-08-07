import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare ,} from "@fortawesome/free-solid-svg-icons";
import ProvideServices from "./tecpath";

   
function Solutions() {
  return (
    <div>
      <div className="section ">
        <div className="row m-5">
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 g-4 image">
          <Image src={"./image.png"} width="90%" height="100%" className="image" fluid />

          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 g-4 ">
            <h1 className="company">
              My Company Solution
            </h1>
            <div style={{ clear: "both" }}></div>
            <h1 className="company">
              For Your Business
            </h1>
            <div style={{ clear: "both" }}></div>
            <hr className="first" />
            <div style={{ clear: "both" }}></div>
            <p className="mt-2 solutionPara">
              Business solution company sit our any how site used the our
              company any site us it-solve theme is very professional theme
              business & corporate, finance, advisor, solution, company and all
              project used, there are all kinds of websites here.
            </p>
            <div className="row mt-1 justify-content-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-6 col-12 mm justify-content-center">
                <Button variant="light" className="btn-sm businessButton pt-3 pb-3 mt-1">
                <FontAwesomeIcon icon={ faCheckSquare } className="solutionFont" />
                  Business Service
                </Button>{" "}
                <div style={{ clear: "both" }}></div>
                <Button variant="light" className="btn-sm businessButton pt-3 pb-3 mt-3">
                <FontAwesomeIcon icon={ faCheckSquare } className="solutionFont" />
                  Corporate Solution
                </Button>{" "}
                <div style={{ clear: "both" }}></div>
                <Button variant="light" className="btn-sm businessButton pt-3 pb-3 mt-3">
                <FontAwesomeIcon icon={ faCheckSquare } className="solutionFont" />
                  Marketing Agency
                </Button>{" "}
              </div>
              
              <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-5 col-sm-6 col-12 mv justify-content-center">
                <Button variant="light" className="btn-sm businessButton pt-3 pb-3 mt-1">
                <FontAwesomeIcon icon={ faCheckSquare } className="solutionFont" />
                  24/7 Live Support
                </Button>{" "}
                <div style={{ clear: "both" }}></div>
                <Button variant="light" className="btn-sm businessButton pt-3 pb-3 mt-3">
                <FontAwesomeIcon icon={ faCheckSquare } className="solutionFont" />
                  All Responsive
                </Button>{" "}
                <div style={{ clear: "both" }}></div>
                <Button variant="light" className="btn-sm  businessButton pt-3 pb-3 mt-3">
                <FontAwesomeIcon icon={ faCheckSquare } className="solutionFont" />
                  And Free Services
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProvideServices/>
      {/* <AboutSection/> */}
      {/* <OurOffice/> */}
      
    </div>
  );
}
export default Solutions;
