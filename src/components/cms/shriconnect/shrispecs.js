import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoLogoWindows, IoLogoApple } from "react-icons/io5";
import { FaGlobe, FaMobileAlt, FaPhone, FaBuilding } from "react-icons/fa";
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

const Shrispecs = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">ShriConnect Specifications</h3>
          </Col>
          <Row>
            <Col lg={12}>
              <div
                className={`${styles["shri-soft-specs"]} border bg-light rounded-4 p-4`}
              >
                <Row>
                  <Col lg={3} className="mb-3">
                    <h5>Supported Platforms :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["shri-spec-mob"]} d-flex`}>
                    <h5 className="me-3">
                        <span className={styles["shri-icon-clr"]}>
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
                    <h5>SAAS</h5>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Accessibility :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["shri-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["shri-icon-clr"]}>
                          <FaMobileAlt />
                        </span>{" "}
                        Mobile Support
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["shri-icon-clr"]}>
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
                    <div className={`${styles["shri-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["shri-icon-clr"]}>
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
                    <div className={`${styles["shri-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["shri-icon-clr"]}>
                          <BsBuildingsFill />
                        </span>{" "}
                        Agencies
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["shri-icon-clr"]}>
                          <BsFillFileBarGraphFill />
                        </span>{" "}
                        SMEs
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["shri-icon-clr"]}>
                          <BsFillRocketTakeoffFill />
                        </span>{" "}
                        StartUps
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Available Support :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <div className={`${styles["shri-spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["shri-icon-clr"]}>
                          <MdEmail />
                        </span>{" "}
                        Email
                      </h5>
                    </div>
                  </Col>
                  <Col lg={3} className="mb-3">
                    <h5>Company Details :</h5>
                  </Col>
                  <Col lg={9} className="mb-3">
                    <h5 className="mb-3">
                      <span className={styles["shri-icon-clr"]}>
                        <FaBuilding />
                      </span>{" "}
                      Company Name : Shri Educare Ltd.
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["shri-icon-clr"]}>
                        <BsBuildingsFill />
                      </span>{" "}
                      Headquarter : New Delhi
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["shri-icon-clr"]}>
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

export default Shrispecs;
