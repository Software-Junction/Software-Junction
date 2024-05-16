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

const Codespecs = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">
              CodeAchi Library Management System Specifications
            </h3>
          </Col>
          <Row>
            <Col lg={12}>
              <div
                className={`${styles["cod-soft-specs"]} border bg-light rounded-4 p-4`}
              >
                <Row>
                  <Col lg={3} className="mb-3">
                    <h5>Supported Platforms :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["cod-spec-mob"]} d-flex`}>
                    
                    <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <IoLogoWindows />
                        </span>{" "}
                        Windows
                      </h5>
                      
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Deployment :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <h5>Hybrid</h5>
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
                    <div className={`${styles["cod-spec-mob"]} d-flex`}>
                    
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <BiSolidCustomize />
                        </span>{" "}
                        Customization
                      </h5>
                      
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Language Support :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["cod-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
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
                    <div className={`${styles["cod-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <BsBuildingsFill />
                        </span>{" "}
                        Agencies
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <BsFillFileBarGraphFill />
                        </span>{" "}
                        SMEs
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <BsFillRocketTakeoffFill />
                        </span>{" "}
                        StartUps
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <FaUserTie />
                        </span>{" "}
                        FreeLancer
                      </h5>
                    
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Available Support :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["cod-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <MdEmail />
                        </span>{" "}
                        Email
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <FaPhone />
                        </span>{" "}
                        Phone
                      </h5>
                      
                      <h5 className="me-3">
                        <span className={styles["cod-icon-clr"]}>
                          <GiTeacher />
                        </span>{" "}
                        Training
                      </h5>
                      <h5 className="me-3">
                          <span className={styles["cod-icon-clr"]}>
                            <TfiHeadphoneAlt />
                          </span>{" "}
                          Live Support
                        </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Company Details :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <h5 className="mb-3">
                      <span className={styles["cod-icon-clr"]}>
                        <FaBuilding />
                      </span>{" "}
                      Company Name : CodeAchi Technologies Pvt ltd
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["cod-icon-clr"]}>
                        <BsBuildingsFill />
                      </span>{" "}
                      Headquarter : Billericay
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["cod-icon-clr"]}>
                        <FaGlobe />
                      </span>{" "}
                      Website :{" "}
                      <Button size="sm" variant="primary">
                        visit website
                      </Button>
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

export default Codespecs;
