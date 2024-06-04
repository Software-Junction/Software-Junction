import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table, Modal, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Usp from "./schoolcanva/usp";
import Feature from "./schoolcanva/readmore";

import EdumaatF from "./edumaat/edufeatures";
import Edumaatusp from "./edumaat/eduusp";

import AstralF from "./astral/astralfeatures";
import Astralusp from "./astral/astralusp";

import CtrlF from "./ctrl/ctrlfeatures";
import Ctrlusp from "./ctrl/ctrlusp";

import ClassF from "./matrix/matrixfeatures";
import Classusp from "./matrix/matrixusp";

import CampF from "./camp/campfeatures";
import Campusp from "./camp/campusp";

import IschoolF from "./ischool/ischoolfeatures";
import Ischoolusp from "./ischool/ischoolusp";

import AdvantaF from "./advanta/advantafeatures";
import Advantausp from "./advanta/advantausp";

import ShriF from "./shriconnect/shrifeatures";
import Shriusp from "./shriconnect/shriusp";

import VedantaF from "./vedanta/vedfeatures";
import Vedantausp from "./vedanta/vedusp";

const Cmpchat = ({ styles }) => {
  //schoolcanva
  const [showSf, setShowSf] = useState(false);
  const [showUsp, setShowUsp] = useState(false);
  //edumaat
  const [showEusp, setShowEusp] = useState(false);
  const [showEf, setShowEf] = useState(false);
  //astral
  const [showAf, setShowAf] = useState(false);
  const [showAusp, setShowAusp] = useState(false);
  //ctrl
  const [showCtf, setShowCtf] = useState(false);
  const [showCtusp, setShowCtusp] = useState(false);
  //Matrix
  const [showMf, setShowMf] = useState(false);
  const [showMusp, setShowMusp] = useState(false);
  //camp
  const [showCmf, setShowCmf] = useState(false);
  const [showCmusp, setShowCmusp] = useState(false);
  //Ischool
  const [showIf, setShowIf] = useState(false);
  const [showIusp, setShowIusp] = useState(false);
  //advanta
  const [showAdf, setShowAdf] = useState(false);
  const [showAdusp, setShowAdusp] = useState(false);
  //shri
  const [showShf, setShowShf] = useState(false);
  const [showShusp, setShowShusp] = useState(false);
  //vedanta
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
  //astral features and usp
  const handleCloseAf = () => setShowAf(false);
  const handleShowAf = () => setShowAf(true);
  const handleCloseAusp = () => setShowAusp(false);
  const handleShowAusp = () => setShowAusp(true);
  //ctrl features and usp
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
   //ischool features and usp
   const handleCloseIf = () => setShowIf(false);
   const handleShowIf = () => setShowIf(true);
   const handleCloseIusp = () => setShowIusp(false);
   const handleShowIusp = () => setShowIusp(true);
   //advanta features and usp
   const handleCloseAdf = () => setShowAdf(false);
   const handleShowAdf = () => setShowAdf(true);
   const handleCloseAdusp = () => setShowAdusp(false);
   const handleShowAdusp = () => setShowAdusp(true);
   //shri features and usp
   const handleCloseShf = () => setShowShf(false);
   const handleShowShf = () => setShowShf(true);
   const handleCloseShusp = () => setShowShusp(false);
   const handleShowShusp = () => setShowShusp(true);
    //vedanta features and usp
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
                      <th className={styles["heading-link"]}><Link href='/schoolcanva'>SchoolCanvas</Link></th>
                      <th className={styles["heading-link"]}><Link href='/edumaat'>EDUMAAT</Link></th>
                      <th className={styles["heading-link"]}><Link href='/astral'>Astral Technologies</Link></th>
                      <th className={styles["heading-link"]}><Link href='/ctrl'>Ctrl Campus</Link></th>
                      <th className={styles["heading-link"]}><Link href='/matrix'>Class Matrix</Link></th>
                      <th className={styles["heading-link"]}><Link href='/camp'>CampSteer</Link></th>
                      <th className={styles["heading-link"]}><Link href='/ischool'>iSchool</Link></th>
                      <th className={styles["heading-link"]}><Link href='/advanta'>Advanta Rapid ERP</Link></th>
                      <th className={styles["heading-link"]}><Link href='/shriconnect'>ShriConnect</Link></th>
                      <th className={styles["tbl-hd1"]}><Link href='/vedanta'>Vedanta School ERP</Link></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p>Parent Communication</p>
                        <p>Purchase Management</p>
                        <p>Scheduling</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowSf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Expense Tracking</p>
                        <p>Voting Management</p>
                        <p>Gamification</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowEf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> School Management</p>
                        <p>Email Integration</p>
                        <p>Accounting</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowAf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Academics</p>
                        <p>Fee Management</p>
                        <p>School Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowCtf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p> HR & Payroll</p>
                        <p>Fee Management</p>
                        <p>Staff Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowMf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p>Assets</p>
                        <p>Fee Management</p>
                        <p>School Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowCmf}
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
                          onClick={handleShowIf}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p>Academics</p>
                        <p>Fee Management</p>
                        <p>Event Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowAdf}
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
                          onClick={handleShowShf}
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
                          onClick={handleShowVf}
                        >
                          View More
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>USP</td>
                      <td>
                      <div className={styles['clm-height']}>
                        <p>Comprehensive Automation</p>
                        <p>Wide Array of Modules</p>
                        <p>Customizability and Open API</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <div className={styles['clm-height']}>
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
                      <div className={styles['clm-height']}>
                      <p>Flexible Deployment Options</p>
                        <p>Reduced Administrative Costs</p>
                        <p>Secure and Private Database</p>
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
                      <div className={styles['clm-height']}>
                      <p>Customized Software Modules</p>
                        <p>Free Expert Consultation</p>
                        <p>Seamless Integration</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowCtusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <div className={styles['clm-height']}>
                      <p>Effortless Online Teaching</p>
                        <p>Innovative Features</p>
                        <p>Comprehensive Support</p>
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
                      <p>N/A</p>
                      </td>
                      <td>
                      <div className={styles['clm-height']}>
                      <p>Tailored Operational Approach</p>
                        <p>Seamless Communication Channels</p>
                        <p>Feature-Rich Platform</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowIusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <div className={styles['clm-height']}>
                      <p>Global Trust</p>
                        <p>Specialization and Experience</p>
                        <p>Versatility with Modules</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowAdusp}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <div className={styles['clm-height']}>
                      <p>Data Security Prowess</p>
                        <p>Comprehensive Module Offerings</p>
                        <p>Recognized Excellence</p>
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
                      <div className={styles['clm-height']}>
                      <p>Specialization and Experience</p>
                        <p>Versatility with Modules</p>
                        <p>Comprehensive Support</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowVusp}
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
                      <td>Available on Request</td>
                      <td>Available on Request</td>
                      <td>Available on Request</td>
                      <td>Available on Request</td>
                      <td>Available on Request</td>
                      <td>Available on Request</td>
                      <td>Available on Request</td>
                      <td>Available on Request</td>
                      <td>Available on Request</td>
                      <td>Available on Request</td>
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
              {/* astral feature */}
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
                    Astral Technologies
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AstralF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* astral usp */}
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
                    Astral Technologies
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Astralusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* ctrl feature */}
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
                    Ctrl Campus
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CtrlF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCtf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* ctrl usp */}
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
                    Ctrl Campus
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Ctrlusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCtusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* matrix feature */}
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
                    Class Matrix
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ClassF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* matrix usp */}
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
                    Class Matrix
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Classusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* camp feature */}
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
                    CampSteer
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
              {/* camp usp */}
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
                    CampSteer
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
              {/* ischool feature */}
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
                    iSchool
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <IschoolF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseIf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* ischool usp */}
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
                    iSchool
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Ischoolusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseIusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* advanta feature */}
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
                    Advanta School ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AdvantaF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAdf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* advanta usp */}
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
                    Advanta School ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Advantausp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAdusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* shri feature */}
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
                    ShriConnect
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ShriF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseShf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* shri usp */}
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
                    ShriConnect
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Shriusp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseShusp}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* vedanta feature */}
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
                    Vedanta School ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VedantaF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseVf}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* vedanta usp */}
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
                    Vedanta School ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Vedantausp styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseVusp}>
                    Close
                  </Button>
                </Modal.Footer>
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
