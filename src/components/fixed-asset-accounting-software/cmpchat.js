import React from "react";
import { useState,useRef } from "react";
import { Container, Row, Col, Table, Modal, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./fix.module.scss";


import MedicinF from "../medical-store/medicin/features";
import MedicinU from "../medical-store/medicin/usp";

import LogicF from "../medical-store/logic/features";
import LogicU from "../medical-store/logic/usp";

import GofF from "../medical-store/gofrugal/features";
import GofU from "../medical-store/gofrugal/usp";

import VisF from "../medical-store/visual/features";
import VisU from "../medical-store/visual/usp";

import EcoF from "../medical-store/ecogreen/features";
import EcoU from "../medical-store/ecogreen/usp";

import MeddozF from "../medical-store/meddoz/features";
import MeddozU from "../medical-store/meddoz/usp";

import MedF from "../medical-store/medeil/features";
import MedU from "../medical-store/medeil/usp";

import AdyF from "../medical-store/adysoft/features";
import AdyU from "../medical-store/adysoft/usp";

import VitalF from "../medical-store/evital/features";
import VitalU from "../medical-store/evital/usp";

import CboF from "../medical-store/cbo/features";
import CboU from "../medical-store/cbo/usp";

import Pricemodal from "../common/price-modal";
import Tablefreedemo from "../common/table-free-demo";

const Cmpchat = () => {
  //schoolcanva
  const [show1, setShow1] = useState(false);
  const [showUsp1, setShowUsp1] = useState(false);
  // const [showPrice1, setShowPrice1] = useState(false);
  //edumaat
  const [showUsp2, setShowUsp2] = useState(false);
  const [showF2, setShowF2] = useState(false);
  // const [showPrice2, setShowPrice2] = useState(false);
  //digital
  const [showF3, setShowF3] = useState(false);
  const [showUsp3, setShowUsp3] = useState(false);
  // const [showPrice3, setShowPrice3] = useState(false);
  //chanakya
  const [showF4, setShowF4] = useState(false);
  const [showUsp4, setShowUsp4] = useState(false);
  // const [showPrice4, setShowPrice4] = useState(false);
  //Matrix
  const [showF5, setShowF5] = useState(false);
  const [showUsp5, setShowUsp5] = useState(false);
  // const [showPrice5, setShowPrice5] = useState(false);
  //camp
  const [showF6, setShowF6] = useState(false);
  const [showUsp6, setShowUsp6] = useState(false);
  // const [showPrice6, setShowPrice6] = useState(false);
  //fedena
  const [showF7, setShowF7] = useState(false);
  const [showUsp7, setShowUsp7] = useState(false);
  // const [showPrice7, setShowPrice7] = useState(false);
  //hd
  const [showF8, setShowF8] = useState(false);
  const [showUsp8, setShowUsp8] = useState(false);
  // const [showPrice8, setShowPrice8] = useState(false);
  //knot
  const [showF9, setShowF9] = useState(false);
  const [showUsp9, setShowUsp9] = useState(false);
  // const [showPrice9, setShowPrice9] = useState(false);
  //academia
  const [showF10, setShowF10] = useState(false);
  const [showUsp10, setShowUsp10] = useState(false);
  // const [showPrice10, setShowPrice10] = useState(false);

  //edumaat features and usp
  const handleCloseF2 = () => setShowF2(false);
  const handleShowF2 = (e) => {CommonTableHead(e);setShowF2(true)};
  const handleCloseUsp2 = () => setShowUsp2(false);
  const handleShowUsp2 = (e) => {CommonTableHead(e);setShowUsp2(true)};
  // const handleClosePrice2 = () => setShowPrice2(false);
  // const handleShowPrice2 = () => setShowPrice2(true);
  //schoolcanvas features and usp
  const handleCloseF1 = () => setShow1(false);
  const handleShowF1 = (e) => {CommonTableHead(e);setShow1(true)};
  const handleCloseUsp1 = () => setShowUsp1(false);
  const handleShowUsp1 = (e) => {CommonTableHead(e);setShowUsp1(true)};
  // const handleClosePrice1 = () => setShowPrice1(false);
  // const handleShowPrice1 = () => setShowPrice1(true);
  //digital features and usp
  const handleCloseF3 = () => setShowF3(false);
  const handleShowF3 = (e) => {CommonTableHead(e);setShowF3(true)};
  const handleCloseUsp3 = () => setShowUsp3(false);
  const handleShowUsp3 = (e) => {CommonTableHead(e);setShowUsp3(true)};
  // const handleClosePrice3 = () => setShowPrice3(false);
  // const handleShowPrice3 = () => setShowPrice3(true);
  //chanakya features and usp
  const handleCloseF4 = () => setShowF4(false);
  const handleShowF4 = (e) => {CommonTableHead(e);setShowF4(true)};
  const handleCloseUsp4 = () => setShowUsp4(false);
  const handleShowUsp4 = (e) => {CommonTableHead(e);setShowUsp4(true)};
  // const handleClosePrice4 = () => setShowPrice4(false);
  // const handleShowPrice4 = () => setShowPrice4(true);
  //matrix features and usp
  const handleCloseF5 = () => setShowF5(false);
  const handleShowF5 = (e) => {CommonTableHead(e);setShowF5(true)};
  const handleCloseUsp5 = () => setShowUsp5(false);
  const handleShowUsp5 = (e) => {CommonTableHead(e);setShowUsp5(true)};
  // const handleClosePrice5 = () => setShowPrice5(false);
  // const handleShowPrice5 = () => setShowPrice5(true);
  //camp features and usp
  const handleCloseF6 = () => setShowF6(false);
  const handleShowF6 = (e) => {CommonTableHead(e);setShowF6(true)};
  const handleCloseUsp6 = () => setShowUsp6(false);
  const handleShowUsp6 = (e) => {CommonTableHead(e);setShowUsp6(true)};
  // const handleClosePrice6 = () => setShowPrice6(false);
  // const handleShowPrice6 = () => setShowPrice6(true);
  //fedena features and usp
  const handleCloseF7 = () => setShowF7(false);
  const handleShowF7 = (e) => {CommonTableHead(e);setShowF7(true)};
  const handleCloseUsp7 = () => setShowUsp7(false);
  const handleShowUsp7 = (e) => {CommonTableHead(e);setShowUsp7(true)};
  // const handleClosePrice7 = () => setShowPrice7(false);
  // const handleShowPrice7 = () => setShowPrice7(true);
  //hd features and usp
  const handleCloseF8 = () => setShowF8(false);
  const handleShowF8 = (e) => {CommonTableHead(e);setShowF8(true)};
  const handleCloseUsp8 = () => setShowUsp8(false);
  const handleShowUsp8 = (e) => {CommonTableHead(e);setShowUsp8(true)};
  // const handleClosePrice8 = () => setShowPrice8(false);
  // const handleShowPrice8 = () => setShowPrice8(true);
  //knot features and usp
  const handleCloseF9 = () => setShowF9(false);
  const handleShowF9 = (e) => {CommonTableHead(e);setShowF9(true)};
  const handleCloseUsp9 = () => setShowUsp9(false);
  const handleShowUsp9 = (e) => {CommonTableHead(e);setShowUsp9(true)};
  // const handleClosePrice9 = () => setShowPrice9(false);
  // const handleShowPrice9 = () => setShowPrice9(true);
  //academia features and usp
  const handleCloseF10 = () => setShowF10(false);
  const handleShowF10 = (e) => {CommonTableHead(e);setShowF10(true)};
  const handleCloseUsp10 = () => setShowUsp10(false);
  const handleShowUsp10 = (e) => {CommonTableHead(e);setShowUsp10(true)};
  // const handleClosePrice10 = () => setShowPrice10(false);
  // const handleShowPrice10 = () => setShowPrice10(true);


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
 
  const [showPrice, setShowPrice] = useState(false);
  
  const handleClosePrice = () => setShowPrice(false);
    const handleShowPrice = () => setShowPrice(true);

    const [showSoftware, setShowSoftware] = useState(false);

    const handleCloseSoftware = () => setShowSoftware(false);

    const tableRef = useRef(null);

    const CommonTableHead = (event) => {
      const button = event.target;
      const td = button.closest("td");
      const tr = td.parentNode;
      const table = tableRef.current;
      const thIndex = Array.from(tr.children).indexOf(td);
  
      if (table) {
        const th = table.querySelectorAll("th")[thIndex];
        if (th) {
          // console.log(th.textContent);
          setRefrence(th.textContent);
        }
      } 
    };

    const [refrence, setRefrence] = useState("");

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
                  ref={tableRef}
                >
                  <thead>
                    <tr>
                      <th className={styles["tbl-hd"]}>Metrics</th>
                      <th>Medicin Pharmacy Management Software</th>
                      <th>LOGIC ERP</th>
                      <th>Gofrugal's Pharmacy Software </th>
                      <th>Visual Chemist Store</th>
                      <th>Ecogreen Express</th>
                      <th>Meddoz</th>
                      <th>Medeil Cloud POS</th>
                      <th>Adysoft Medical Store Management</th>
                      <th>eVitalRx</th>
                      <th className={styles["tbl-hd1"]}>CBO ERP Limited</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p>Taxation Reports</p>
                        <p>Billing Management</p>
                        <p>Barcode Scanning</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Coupon Management</p>
                        <p>Loyalty Management</p>
                        <p>Procurement Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Barcode Generation</p>
                        <p>Barcode Scanning</p>
                        <p>Billing Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Barcode Generation</p>
                        <p> Billing Management</p>
                        <p>Barcode Scanning</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Cloud Computing</p>
                        <p>Customer Management</p>
                        <p>Barcode Scanning</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF5}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Claims Management</p>
                        <p>Billing Management</p>
                        <p>Billing Estimates</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF6}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Touch Capability</p>
                        <p>Barcode Scanning</p>
                        <p>Stock Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Transaction Management</p>
                        <p>Cash Management</p>
                        <p>Inventory Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF8}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Payment Handling</p>
                        <p>Email Integration</p>
                        <p>Customer Support</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Document Management</p>
                        <p>Inventory Management</p>
                        <p>Appointment Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF10}
                        >
                          View More
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>USP</td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Data Accuracy and Compliance</p>
                          <p>User-Friendly Interface</p>
                          <p>Reports and Analytics</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Industry-Specific Solutions</p>
                          <p>Flexible Retailing Formats Support</p>
                          <p>Complex Inventory Management</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Faster Billing</p>
                          <p>Omnichannel Capabilities</p>
                          <p>Integrated Accounting</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Tailored Solution for Pharmaceutical Businesses</p>
                          <p>Master Database Management</p>
                          <p>Barcoding for Accuracy</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>
                            Comprehensive Customer Relationship Management (CRM)
                          </p>
                          <p>
                            Revenue Boost through Comprehensive Store Management
                          </p>
                          <p>Home Delivery Integration with Dunzo</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp5}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Extensive Drug Database</p>
                          <p>Experienced Software Development Company</p>
                          <p>Continuous Improvement</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp6}
                        >
                          View More
                        </Button>
                      </td>

                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Error Minimization and Patient Safety</p>
                          <p>Versatility in Pharmacy Types and Sizes</p>
                          <p>Integration Capabilities</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Alternate Medicine Suggestions</p>
                          <p>Profit and Loss Analysis</p>
                          <p>GST Ready</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp8}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Healthcare Integration</p>
                          <p>Retail and POS Capabilities</p>
                          <p>Advanced Reporting and Analytics</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Certified Quality</p>
                          <p>Global Presence</p>
                          <p>Information Security</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowUsp10}
                        >
                          View More
                        </Button>
                      </td>
                    </tr>
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
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="warning"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                  <Pricemodal show={showPrice} handleClose={handleClosePrice}/>
                </Table>
              </div>
              {/* edumaat features */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF2}
                onHide={handleCloseF2}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    LOGIC ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <LogicF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF2}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* schoolcanva feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={show1}
                onHide={handleCloseF1}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Medicin Pharmacy Management Software
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MedicinF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF1}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* schoolcanva usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp1}
                onHide={handleCloseUsp1}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Medicin Pharmacy Management Software
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MedicinU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp1}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* edumaat usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp2}
                onHide={handleCloseUsp2}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    LOGIC ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <LogicU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp2}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* digital feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF3}
                onHide={handleCloseF3}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Gofrugal's Pharmacy Software
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <GofF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF3}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* digital usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp3}
                onHide={handleCloseUsp3}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Gofrugal's Pharmacy Software
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <GofU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp3}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* chanakya feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF4}
                onHide={handleCloseF4}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Visual Chemist Store
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VisF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF4}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* chanakya usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp4}
                onHide={handleCloseUsp4}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Visual Chemist Store
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VisU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp4}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* matrix feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF5}
                onHide={handleCloseF5}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Ecogreen Express
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EcoF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF5}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* matrix usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp5}
                onHide={handleCloseUsp5}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Ecogreen Express
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EcoU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp5}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* campus365 feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF6}
                onHide={handleCloseF6}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Meddoz
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MeddozF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF6}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* campus365 usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp6}
                onHide={handleCloseUsp6}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Meddoz
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MeddozU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp6}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* fedena feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF7}
                onHide={handleCloseF7}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Medeil Cloud POS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MedF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF7}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* fedena usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp7}
                onHide={handleCloseUsp7}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Medeil Cloud POS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MedU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp7}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* HD feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF8}
                onHide={handleCloseF8}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Adysoft Medical Store Management
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AdyF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF8}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* Hd usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp8}
                onHide={handleCloseUsp8}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Adysoft Medical Store Management
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AdyU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp8}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* schoolknot feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF9}
                onHide={handleCloseF9}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    eVitalRx
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VitalF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF9}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* schoolknot usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp9}
                onHide={handleCloseUsp9}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    eVitalRx
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VitalU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp9}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* academia feature */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showF10}
                onHide={handleCloseF10}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    CBO ERP Limited
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CboF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF10}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* academia usp */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showUsp10}
                onHide={handleCloseUsp10}
                className="cmpchat-modal-usp"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    CBO ERP Limited
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CboU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp10}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
                      
               

 		<Tablefreedemo show={showSoftware} reffer={refrence} handleClose={handleCloseSoftware}/>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cmpchat;
