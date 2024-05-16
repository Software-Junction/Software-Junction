import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoLogoWindows, IoLogoApple } from "react-icons/io5";
import { FaGlobe, FaMobileAlt, FaPhone, FaBuilding,FaUserTie } from "react-icons/fa";
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

const Kobspecs = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">
              KOOB Library Specifications
            </h3>
          </Col>
          <Row>
            <Col lg={12}>
              <div
                className={`${styles["kob-soft-specs"]} border bg-light rounded-4 p-4`}
              >
                <Row>
                  <Col lg={3} className="mb-3">
                    <h5>Supported Platforms :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["kob-spec-mob"]} d-flex`}>
                    
                    <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <IoLogoWindows />
                        </span>{" "}
                        Windows
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaGlobe />
                        </span>{" "}
                        Web App
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
                    <h5>Yearly, Onetime(Perpetual license)</h5>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Accessibility :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["kob-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaMobileAlt />
                        </span>{" "}
                        Mobile Support
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <BiSolidCustomize />
                        </span>{" "}
                        Customization
                      </h5>
                      <h5>
                        <span className={styles["kob-icon-clr"]}>
                          <MdGames />
                        </span>{" "}
                        API
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Language Support :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["kob-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        English
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Hindi
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Arabic
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        German
                      </h5>
                      
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Business :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["kob-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <BsBuildingsFill />
                        </span>{" "}
                        Agencies
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <BsFillFileBarGraphFill />
                        </span>{" "}
                        SMEs
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <BsFillRocketTakeoffFill />
                        </span>{" "}
                        StartUps
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaBuilding />
                        </span>{" "}
                        Enterprises
                      </h5>
                    
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Available Support :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["kob-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <MdEmail />
                        </span>{" "}
                        Email
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaPhone />
                        </span>{" "}
                        Phone
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <TfiHeadphoneAlt />
                        </span>{" "}
                        Live Support
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <GiTeacher />
                        </span>{" "}
                        Training
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <BsFillTicketPerforatedFill />
                        </span>{" "}
                        Tickets
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Integrations :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["kob-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        barcode
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        rfid tags
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        gmail
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        rfid
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        google
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["kob-icon-clr"]}>
                          <FaDiamond />
                        </span>{" "}
                        ptm
                      </h5>
                    </div>
                    </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Company Details :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <h5 className="mb-3">
                      <span className={styles["kob-icon-clr"]}>
                        <FaBuilding />
                      </span>{" "}
                      Company Name : Acquiro Business Solution Pvt. Ltd
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["kob-icon-clr"]}>
                        <BsBuildingsFill />
                      </span>{" "}
                      Headquarter : Noida
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["kob-icon-clr"]}>
                        <FaGlobe />
                      </span>{" "}
                      Website :{" "}
                      <Button size="sm" variant="primary">
                        visit website
                      </Button>
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["kob-icon-clr"]}>
                        <FaMapLocationDot />
                      </span>{" "}
                      Full Address :{" "}
                      <p className="mt-2">
                      G-316, Sector-63
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

export default Kobspecs;
