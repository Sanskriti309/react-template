import React from "react";
import '../style.css';
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faLinkedin, } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="footer bg-dark text-white pt-5 mt-0">
            <Container  fluid className="elementor-container elementor-column-gap-default "> 
                <div className="row p-5">
                    <div className="footer-top d-flex flex-wrap">
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="footer-widget">
                                <Image
                                    src={"./photo.png"}
                                    width="60%"
                                    height="60%"
                                    className="align-top img-fluid"
                                />
                                <div >
                                    <p className="footer-content mt-4">
                                        TECHPATH RESEARCH AND DEVELOPMENT PRIVATE LIMITED is the leading IT training and software development in the  world.. Our team comes with several years of industry experience, and comprise of a  highly motivated set of specialists.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 mb-4">
                            <div className="footer-widget">
                                <h5 className="footer-header ms-4">Company</h5>
                                <ul className="footer-content mt-4">
                                    <li>About Us</li>
                                    <li>IT Services</li>
                                    <li>Professional Courses</li>
                                    <li>Latest News</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 mb-4">
                            <div className="footer-widget">
                                <h5 className="footer-header ms-4">Support</h5>
                                <ul className="footer-content mt-4">
                                    <li>FAQ's</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Condition</li>
                                    <li>Customer Support</li>
                                    <li>Cancellation and Refund Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-6 mb-4">
                            <div className="footer-widget">
                                <h5 className="footer-header ms-4">Address</h5>
                                <ul className="footer-content mt-4">
                                    <li className="justify-content-between"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />  Circus Road, Mughalsarai, Chandauli, Uttar Pradesh  232101</li>
                                    <li><FontAwesomeIcon icon={faEnvelope} className="me-2" /> Email: contact@techpath.biz</li>
                                    <li><FontAwesomeIcon icon={faPhone} className="me-2" /> Phone: +91 5412 356039, +91 8299708052</li>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 mt-4 mb-4">
                                        <div className="social-icons d-flex justify-content-center">
                                            <a href="https://www.facebook.com/techpathservices" target="_blank" rel="noopener noreferrer" className="m-1 socials">
                                                <FontAwesomeIcon icon={faFacebook} className="me-2" />
                                            </a>
                                            <a href="https://www.instagram.com/techpathservices" target="_blank" rel="noopener noreferrer" className="m-1 socials">
                                                <FontAwesomeIcon icon={faInstagram} className="me-2" />
                                            </a>
                                            <a href="https://www.youtube.com/@techpath-services" target="_blank" rel="noopener noreferrer" className="m-1 socials">
                                                <FontAwesomeIcon icon={faYoutube} className="me-2" />
                                            </a>
                                            <a href="https://www.linkedin.com/company/techpath-solutions/" target="_blank" rel="noopener noreferrer" className="m-1 socials">
                                                <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                                            </a>
                                        </div>
                                    </div>

                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
