import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoLogoWindows, IoLogoApple } from "react-icons/io5";
import {
  FaGlobe,
  FaMobileAlt,
  FaPhone,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";
import { MdOutlineGTranslate } from "react-icons/md";
import { MdEmail, MdGames } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import {
  BsBuildingsFill,
  BsFillRocketTakeoffFill,
  BsFillFileBarGraphFill,
  BsFillTicketPerforatedFill,
} from "react-icons/bs";
import { BiSolidCustomize } from "react-icons/bi";
import { FaMapLocationDot, FaDiamond } from "react-icons/fa6";

const Specs = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Vtiger CRM Specifications</h3>
          </Col>
          <Row>
            <Col lg={12}>
              <div
                className={`${styles["soft-specs"]} border bg-light rounded-4 p-4`}
              >
                <Row>
                  <Col lg={3} className="mb-3">
                    <h5>Supported Platforms :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <IoLogoWindows />
                        </span>{" "}
                        Windows
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaGlobe />
                        </span>{" "}
                        Web App
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <IoLogoApple />
                        </span>{" "}
                        MacOs
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Deployment :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <h5>Cloud Based</h5>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Subscription Plan :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <h5>Monthly, Yearly</h5>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Accessibility :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <BiSolidCustomize />
                        </span>{" "}
                        Customization
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdGames />
                        </span>{" "}
                        API
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaMobileAlt />
                        </span>{" "}
                        Mobile Support
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Language Support :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        English
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Business :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <BsFillFileBarGraphFill />
                        </span>{" "}
                        SMBs
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <BsFillRocketTakeoffFill />
                        </span>{" "}
                        StartUps
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaBuilding />
                        </span>{" "}
                        Agencies
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <BsBuildingsFill />
                        </span>{" "}
                        Enterprise
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaUserTie />
                        </span>{" "}
                        Freelancers
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Available Support :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdEmail />
                        </span>{" "}
                        Email
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaPhone />
                        </span>{" "}
                        Phone
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <GiTeacher />
                        </span>{" "}
                        Training
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <BsFillTicketPerforatedFill />
                        </span>{" "}
                        Tickets
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <TfiHeadphoneAlt />
                        </span>{" "}
                        Live Support
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Integrations :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Tally
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        QuickBooks
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Google Drive
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        PayPal
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Google Maps
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Clearbit
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        DocuSign
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Stripe
                      </h5>
                    </div>
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Google Meet
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Facebook
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Mailchimp
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Magento
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Hunter.io
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Google Workspace
                      </h5>
                    </div>
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Microsoft Outlook
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Zoom Meetings
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        LinkedIn
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Razorpay
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Twilio
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Google Drive
                      </h5>
                    </div>
                    <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Microsoft Exchange
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Zapier
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Office 365
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        WhatsApp
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Dropbox
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Twitter
                      </h5>
                      </div>
                      <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        Microsoft Teams
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        WooCommerce
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Company Details :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <h5 className="mb-3">
                      <span className={styles["icon-clr"]}>
                        <FaBuilding />
                      </span>{" "}
                      Company Name : Vtiger
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["icon-clr"]}>
                        <BsBuildingsFill />
                      </span>{" "}
                      Headquarter : Bangalore
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["icon-clr"]}>
                        <FaGlobe />
                      </span>{" "}
                      Website :{" "}
                      <Button size="sm" variant="primary">
                        visit website
                      </Button>
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["icon-clr"]}>
                        <FaMapLocationDot />
                      </span>{" "}
                      Full Address :{" "}
                      <p className="mt-2">
                        No. 18, 20th Main 2nd Block, Rajaji Nagar, Bangalore -
                        560010
                      </p>
                    </h5>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Specs;
