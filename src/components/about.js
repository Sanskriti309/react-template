import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

function AboutSection() {
  return (
    <div>
      <div className="section mt-5">
        <div className="row m-3 mt-5">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <h3 className="headingAbout" style={{ color: '#FC4A1A' }}>ABOUT US</h3>
            <h1 className="display-6 aboutHeading">Preparing Your Success</h1>
            <h1 className="display-6 aboutHeading">Provide IT <span style={{ color: '#FC4A1A' }}> Solutions!</span></h1>
            <p className="mt-2 aboutPara">
              You deserve care that’s simple, personalized, and hassle-free. Safe Insurance that’s designed to help 
              you thrive. Usage in merchandise, clothing, and artwork.
            </p>
            <div className="row mt-5">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-6 col-12 aboutlist1">
                <ul className="list1 mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="aboutFont2"/>Web And Mobile Application
                </ul>
                <ul className="list1 mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="aboutFont1"/>New Domain Registration
                </ul>
                <ul className="list1 mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="aboutFont2"/>Data Text Synchronization
                </ul>
                <ul className="list1 mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="aboutFont1"/>Cyber Security All Time
                </ul>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-6 col-12 aboutlist2">
                <ul className="list2 mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="aboutFont1"/>Improve Our Website Design
                </ul>
                <ul className="list2 mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="aboutFont2"/>Artificial Intelligence App
                </ul>
                <ul className="list2 mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="aboutFont1" />Web Hosting Services
                </ul>
                <ul className="list2 mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="aboutFont2" />All Time Support Services
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <Image src="./image.png" className="aboutImage" fluid />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default AboutSection;
