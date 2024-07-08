import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table, Modal, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./lms.module.scss";


import Usp from "../cms/schoolcanva/usp";
import Feature from "../cms/schoolcanva/readmore";
import EdumaatF from "../cms/edumaat/edufeatures";
import Edumaatusp from "../cms/edumaat/eduusp";
import DigitalF from "../sms/digital/digifeatures";
import Digitalusp from "../sms/digital/digiusp";
import CampF from "../sms/campus/pusfeatures";
import Campusp from "../sms/campus/pususp";
import KohaF from "../lms/koha/kohafeatures";
import Kohausp from "../lms/koha/kohausp";
import ChanF from "../sms/chanakya/chanfeatures";
import Features from "../sms/chanakya/chanusp";
import SmtF from "../lms/smart/smartfeatures";
import Smtusp from "../lms/smart/smartusp";
import LibF from "../lms/librarian/rianfeatures";
import Libusp from "../lms/librarian/rianusp";
import AlexF from "../lms/alexandria/alexfeatures";
import Alexusp from "../lms/alexandria/alexusp";
import KobF from "../lms/kooba/kobfeatures";
import Kobusp from "../lms/kooba/kobusp";

const Cmpchat = () => {
  //schoolcanva
  const [showSf, setShowSf] = useState(false);
  const [showUsp, setShowUsp] = useState(false);
  //edumaat
  const [showEusp, setShowEusp] = useState(false);
  const [showEf, setShowEf] = useState(false);
  //digital
  const [showAf, setShowAf] = useState(false);
  const [showAusp, setShowAusp] = useState(false);
  //chanakya
  const [showCtf, setShowCtf] = useState(false);
  const [showCtusp, setShowCtusp] = useState(false);
  //Matrix
  const [showMf, setShowMf] = useState(false);
  const [showMusp, setShowMusp] = useState(false);
  //camp
  const [showCmf, setShowCmf] = useState(false);
  const [showCmusp, setShowCmusp] = useState(false);
  //fedena
  const [showIf, setShowIf] = useState(false);
  const [showIusp, setShowIusp] = useState(false);
  //hd
  const [showAdf, setShowAdf] = useState(false);
  const [showAdusp, setShowAdusp] = useState(false);
  //knot
  const [showShf, setShowShf] = useState(false);
  const [showShusp, setShowShusp] = useState(false);
  //academia
  const [showVf, setShowVf] = useState(false);
  const [showVusp, setShowVusp] = useState(false);

  //edumaat features and usp
  const handleCloseEf = () => setShowEf(false);
  const handleShowEf = () => setShowEf(true);
  const handleCloseEusp = () => setShowEusp(false);
  const handleShowEusp = () => setShowEusp(true);
  //schoolcanvas features and usp
  const handleCloseSf = () => setShowSf(false);
  const handleShowSf = () => setShowSf(true);
  const handleCloseUsp = () => setShowUsp(false);
  const handleShowUsp = () => setShowUsp(true);
  //digital features and usp
  const handleCloseAf = () => setShowAf(false);
  const handleShowAf = () => setShowAf(true);
  const handleCloseAusp = () => setShowAusp(false);
  const handleShowAusp = () => setShowAusp(true);
  //chanakya features and usp
  const handleCloseCtf = () => setShowCtf(false);
  const handleShowCtf = () => setShowCtf(true);
  const handleCloseCtusp = () => setShowCtusp(false);
  const handleShowCtusp = () => setShowCtusp(true);
  //matrix features and usp
  const handleCloseMf = () => setShowMf(false);
  const handleShowMf = () => setShowMf(true);
  const handleCloseMusp = () => setShowMusp(false);
  const handleShowMusp = () => setShowMusp(true);
  //camp features and usp
  const handleCloseCmf = () => setShowCmf(false);
  const handleShowCmf = () => setShowCmf(true);
  const handleCloseCmusp = () => setShowCmusp(false);
  const handleShowCmusp = () => setShowCmusp(true);
  //fedena features and usp
  const handleCloseIf = () => setShowIf(false);
  const handleShowIf = () => setShowIf(true);
  const handleCloseIusp = () => setShowIusp(false);
  const handleShowIusp = () => setShowIusp(true);
  //hd features and usp
  const handleCloseAdf = () => setShowAdf(false);
  const handleShowAdf = () => setShowAdf(true);
  const handleCloseAdusp = () => setShowAdusp(false);
  const handleShowAdusp = () => setShowAdusp(true);
  //knot features and usp
  const handleCloseShf = () => setShowShf(false);
  const handleShowShf = () => setShowShf(true);
  const handleCloseShusp = () => setShowShusp(false);
  const handleShowShusp = () => setShowShusp(true);
  //academia features and usp
  const handleCloseVf = () => setShowVf(false);
  const handleShowVf = () => setShowVf(true);
  const handleCloseVusp = () => setShowVusp(false);
  const handleShowVusp = () => setShowVusp(true);


 const handleFormSubmit = async (values, actions) => {
    try {
      await axios.post(
        "https://software-bazaar-default-rtdb.firebaseio.com/leadform.json",
        values
      );
      actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setSubmitting(false);
    }
  };
 
  const [showGetPrice, setShowGetPrice] = useState(false);
  
  const handleCloseGetPrice = () => setShowGetPrice(false);
    const handleShowGetPrice = () => setShowGetPrice(true);

    const [showSoftware, setShowSoftware] = useState(false);

    const handleCloseSoftware = () => setShowSoftware(false);

    const handleShowSoftware = () => {
      setShowSoftware(true);
      setShow1(false);
      setShowF2(false);
      setShowF3(false);
      setShowF4(false);
      setShowF5(false);
      setShowF6(false);
      setShowF7(false);
      setShowF8(false);
      setShowF9(false);
      setShowF10(false);
      setShowUsp1(false);
      setShowUsp2(false);
      setShowUsp3(false);
      setShowUsp4(false);
      setShowUsp5(false);
      setShowUsp6(false);
      setShowUsp7(false);
      setShowUsp8(false);
      setShowUsp9(false);
      setShowUsp10(false);
    }
    
  return (
    <>
      <section className={`${styles["soft-chat"]} `}>
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div
                className={`${styles["main-table"]} border bg-light rounded-4  my-4`}
              >
                <Table
                  responsive
                  bordered
                  className={`${styles["thead"]} overflow-auto`}
                >
                  <thead>
                    <tr>
                      <th className={styles["tbl-hd"]}>Metrics</th>
                      <th className={styles["heading-link"]}><Link href='/koob'>KOOBA Library</Link></th>
                      <th className={styles["heading-link"]}><Link href='/alexandria'>Alexandria</Link></th>
                      <th className={styles["heading-link"]}><Link href='/koha'>Koha ILS</Link></th>
                      <th className={styles["heading-link"]}><Link href='/smart'>SmartLib</Link></th>
                      <th className={styles["heading-link"]}><Link href='/librarian'>Librarian</Link></th>
                      <th className={styles["heading-link"]}><Link href='/schoolcanva'>SchoolCanvas</Link></th>
                      <th className={styles["heading-link"]}><Link href='/edumaat'>EDUMAAT</Link></th>
                      <th className={styles["heading-link"]}><Link href='/digital'>Digital School Web Solution</Link></th>
                      <th className={styles["heading-link"]}><Link href='/campus'>Campus365</Link></th>
                      <th className={styles["tbl-hd1"]}><Link href='/chanakya'>Chanakya ERP</Link></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p>Knowledge Management</p>
                        <p>Periodicals Management</p>
                        <p>Barcoding</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowVf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Circulation Management</p>
                        <p>Inventory Management</p>
                        <p>OPAC</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowShf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Serials Management</p>
                        <p>Inventory Management</p>
                        <p>OPAC</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowMf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Search Functionality</p>
                        <p>Unicode Compliance</p>
                        <p>OPAC</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowIf}
                          // onClick={handleShowCmf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Catalog Management</p>
                        <p>Periodicals Management</p>
                        <p>Barcoding/RFID</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowAdf}
                          // onClick={handleShowMf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Academics</p>
                        <p>Fee Management</p>
                        <p>Payroll Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowSf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Admission</p>
                        <p>Fee Management</p>
                        <p>School Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowEf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Academics</p>
                        <p>Fee Management</p>
                        <p>School Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowAf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Activities</p>
                        <p>Fee Management</p>
                        <p>Classroom Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowCmf}
                          // onClick={handleShowShf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Admissions</p>
                        <p>Fee Management</p>
                        <p>Event Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowCtf}
                        >
                          View More
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>USP</td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Multi-Location Management</p>
                          <p>Time-Efficient Data Entry</p>
                          <p>Notifications and Alerts</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowVusp}
                          // onClick={handleShowUsp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Universal Access and Deliverability</p>
                          <p>
                            Catalog Enrichment & Analytics for Engagement and
                            Discoverability
                          </p>
                          <p>Search Technology with Navigator</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowShusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Free and Open Source</p>
                          <p>Community-Driven Development</p>
                          <p>Global Community Support</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowMusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>World's Most Advanced</p>
                          <p>Best-in-Class Recognition</p>
                          <p>Comprehensive Management</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowIusp}
                          // onClick={handleShowCmusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Change Management Capabilities</p>
                          <p>Efficient Application Management</p>
                          <p>Compliance Improvement</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowAusp}
                          onClick={handleShowAdusp}
                          // onClick={handleShowMusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Comprehensive Automation</p>
                          <p>Customizability and Open API</p>
                          <p>Wide Array of Modules</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowCtusp}
                          onClick={handleShowUsp}
                        >
                          View More
                        </Button>
                      </td>

                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Tailored Customization</p>
                          <p>Global Accessibility</p>
                          <p>Top-Notch AWS Hosting</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowEusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>School Management Solution</p>
                          <p>Customizable Online Presence</p>
                          <p>Accurate Result Generation</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowAusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Institutional Management</p>
                          <p>Powerful and Customizable</p>
                          <p>Real-Time Connectivity</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowShusp}
                          onClick={handleShowCmusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>All-in-One GST Solutions</p>
                          <p>Diverse and Satisfied Clientele</p>
                          <p>Tailored for Professionals</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowCtusp}
                        >
                          View More
                        </Button>
                      </td>
                    </tr>
                    {/* Ratings */}
                   {/* <tr>
                      <td>Ratings</td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <span className="span-style">
                              0.0 <FaStar className="star-size" />
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr> */}
                    <tr>
                      <td>Pricing Plan</td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowGetPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              {/* edumaat features */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showEf}
                onHide={handleCloseEf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    EDUMAAT
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EdumaatF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseEf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* schoolcanva feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showSf}
                onHide={handleCloseSf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    SchoolCanvas Features
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Feature styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseSf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* schoolcanva usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp}
                onHide={handleCloseUsp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    SchoolCanvas Usp
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Usp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* edumaat usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showEusp}
                onHide={handleCloseEusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Edumaat Usp
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Edumaatusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseEusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* digital feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showAf}
                onHide={handleCloseAf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Digital School Web Solutions
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DigitalF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* digital usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showAusp}
                onHide={handleCloseAusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Digital School Web Solutions
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Digitalusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* chanakya feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showCtf}
                onHide={handleCloseCtf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Chanakya ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ChanF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCtf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* chanakya usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showCtusp}
                onHide={handleCloseCtusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Chanakya ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Features styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCtusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Koha ILS feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showMf}
                onHide={handleCloseMf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Koha ILS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <KohaF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Koha ILS usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showMusp}
                onHide={handleCloseMusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Koha ILS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Kohausp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* campus365 feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showCmf}
                onHide={handleCloseCmf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Campus365
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CampF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCmf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* campus365 usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showCmusp}
                onHide={handleCloseCmusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Campus365
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Campusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCmusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* SmartLib feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showIf}
                onHide={handleCloseIf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    SmartLib
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SmtF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseIf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* SmartLib usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showIusp}
                onHide={handleCloseIusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    SmartLib
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Smtusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseIusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Librarian feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showAdf}
                onHide={handleCloseAdf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Librarian
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <LibF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAdf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Librarian usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showAdusp}
                onHide={handleCloseAdusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Librarian
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Libusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAdusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Alexandria feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showShf}
                onHide={handleCloseShf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Alexandria
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AlexF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseShf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Alexandria usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showShusp}
                onHide={handleCloseShusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Alexandria
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Alexusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseShusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* KOOBA Library feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showVf}
                onHide={handleCloseVf}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    KOOBA Library
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <KobF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseVf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* KOOBA Library usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showVusp}
                onHide={handleCloseVusp}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    KOOBA Library
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Kobusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseVusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
                      {/* Get Pricing Modal */}
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showGetPrice}
                      onHide={handleCloseGetPrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            employee: "",
                            postTimestamp: new Date().toUTCString(),
                          }}
                          validationSchema={Yup.object().shape({
                            username: Yup.string().required(
                              "Please enter your full name."
                            ),
                            location: Yup.string().required(
                              "Please select a location."
                            ),
                            email: Yup.string()
                              .email("Invalid email address")
                              .required("Please enter your email address."),
                            number: Yup.string().required(
                              "Please enter your phone number."
                            ),
                            employee: Yup.string().required(
                              "Please select employee strength."
                            ),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="text"
                                  name="username"
                                  placeholder="Full name"
                                />
                                <ErrorMessage
                                  name="username"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="number"
                                  name="number"
                                  placeholder="Phone number"
                                />
                                <ErrorMessage
                                  name="number"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
                            formik.touched.employee && formik.errors.employee
                              ? "is-invalid"
                              : ""
                          }`}
                          name="mySelect"
                        >
                          <option value="" disabled selected>
                            Employee Strength :
                          </option>
                          <option value="option1">Under 20</option>
                          <option value="option2">20- 150</option>
                          <option value="option3">150- 500</option>
                          <option value="option4">500 - 1000</option>
                          <option value="option5">Over 1000</option>
                        </Field>
                        <ErrorMessage
                          name="employee"
                          component="div"
                          className={`${styles["valid-clr"]} invalid-feedback`}
                        />
                      </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
               

 		{/* Free demo modal */}
                    <Modal
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  show={showSoftware}
                  onHide={handleCloseSoftware}
                >
                  <Modal.Header closeButton>
                    <h3>Request For Free Demo</h3>
                  </Modal.Header>
                  <Modal.Body>
                    <Formik
                      initialValues={{
                        username: "",
                       
                        email: "",
                        number: "",
                        
                        employee: "",
                        postTimestamp: new Date().toUTCString(),
                      }}
                      validationSchema={Yup.object().shape({
                        username: Yup.string().required(
                          "Please enter your full name."
                        ),
                      
                        email: Yup.string()
                          .email("Invalid email address")
                          .required("Please enter your email address."),
                        number: Yup.string().required(
                          "Please enter your phone number."
                        ),
                        
                        employee: Yup.string().required(
                          "Please select employee strength."
                        ),
                        
                      })}
                      onSubmit={handleFormSubmit}
                    >
                      {(formik) => (
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Field
                              className={`form-control ${
                                formik.touched.username &&
                                formik.errors.username
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="text"
                              name="username"
                              placeholder="Full name"
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Field
                              className={`form-control ${
                                formik.touched.number && formik.errors.number
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="number"
                              name="number"
                              placeholder="Phone number"
                            />
                            <ErrorMessage
                              name="number"
                              component="div"
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Field
                              className={`form-control ${
                                formik.touched.email && formik.errors.email
                                  ? "is-invalid"
                                  : ""
                              }`}
                              type="email"
                              name="email"
                              placeholder="Bussiness Email address"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            />
                          </Form.Group>

                          
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Field
                              as="select"
                              id="mySelect"
                              className={`form-select ${
                                formik.touched.employee &&
                                formik.errors.employee
                                  ? "is-invalid"
                                  : ""
                              }`}
                              name="mySelect"
                            >
                              <option value="" disabled selected>
                                Employee Strength :
                              </option>
                              <option value="option1">Under 20</option>
                              <option value="option2">20- 150</option>
                              <option value="option3">150- 500</option>
                              <option value="option4">500 - 1000</option>
                              <option value="option5">Over 1000</option>
                            </Field>
                            <ErrorMessage
                              name="employee"
                              component="div"
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            />
                          </Form.Group>
                          <Button
                            variant="warning"
                            size="sm"
                            className="text-light"
                            onClick={formik.handleSubmit}
                          >
                            Submit
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Modal.Body>
                  
                </Modal>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cmpchat;
