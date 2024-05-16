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
            <h3 className="mb-4">Free CRM Specifications</h3>
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
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Portuguese
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Danish
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Armenian
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Croatian
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Vietnamese
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Italian
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Dutch
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Polish
                      </h5>
                      </div>
                      <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Swedish
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Russian
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Spanish
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Indonesian
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Thai
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Ukrainian
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Greek
                      </h5>
                      </div>
                      <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        French
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Turkish
                      </h5>
                      
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Hungarian
                      </h5>
                      
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Japanese
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Albanian
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Bengali/Bangla
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Chinese
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Korean
                      </h5>
                      </div>
                      <div className={`${styles["spec-mob"]} d-flex`}>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Romanian
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Hebrew
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Afrikaans
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Fiji
                      </h5>
                      <h5 className="me-3">
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        Czech
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
                        SMEs
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
                          <BsFillTicketPerforatedFill />
                        </span>{" "}
                        Tickets
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
                      Company Name : SoftwareSuggest
                    </h5>
                    <h5 className="mb-3">
                      <span className={styles["icon-clr"]}>
                        <BsBuildingsFill />
                      </span>{" "}
                      Headquarter : Ahmedabad
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
                        D- 3rd Floor, Signature 2, Sanand Cross Road, near
                        Sarkhej, near Sanand - Sarkhej Road, Sarkhej, Ahmedabad,
                        Gujarat 382210
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
