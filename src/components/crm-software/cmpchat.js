import React from "react";
import { useState,useRef } from "react";
import { Container, Row, Col, Table, Modal, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./crm.module.scss";


import ZohoF from "../crm-software/zoho-crm/features";
import ZohoU from "../crm-software/zoho-crm/usp";
import ZohoP from "../crm-software/zoho-crm/price";

import NethuntF from "../crm-software/nethunt/features";
import NethuntU from "../crm-software/nethunt/usp";
import NethuntP from "../crm-software/nethunt/price";

import FreshF from '../crm-software/freshsales/features';
import FreshU from '../crm-software/freshsales/usp';
import FreshP from '../crm-software/freshsales/price';

import SalesF from '../crm-software/salesforce/features';
import SalesU from '../crm-software/salesforce/usp';
import SalesP from '../crm-software/salesforce/price';

import NetF from "../crm-software/netsuite-crm/features";
import NetU from "../crm-software/netsuite-crm/usp";

import FlareF from '../crm-software/salesflare/features';
import FlareU from '../crm-software/salesflare/usp';
import FlareP from '../crm-software/salesflare/price';

import FreeF from '../crm-software/free-crm/features';
import FreeU from '../crm-software/free-crm/usp';
import FreeP from '../crm-software/free-crm/price';

import AutoF from '../crm-software/automatecrm/features';
import AutoU from '../crm-software/automatecrm/usp';

import IcrmF from '../crm-software/icrm/features';
import IcrmU from '../crm-software/icrm/usp';
import IcrmP from '../crm-software/icrm/price';

import TigerF from '../crm-software/tigerlrm/features';
import TigerU from '../crm-software/tigerlrm/usp';
import TigerP from '../crm-software/tigerlrm/price';


import Pricemodal from "../common/price-modal";
import Tablefreedemo from "../common/table-free-demo";

const Cmpchat = () => {
  //schoolcanva
  const [show1, setShow1] = useState(false);
  const [showUsp1, setShowUsp1] = useState(false);
  const [showPrice1, setShowPrice1] = useState(false);
  //edumaat
  const [showUsp2, setShowUsp2] = useState(false);
  const [showF2, setShowF2] = useState(false);
  const [showPrice2, setShowPrice2] = useState(false);

  //digital
  const [showF3, setShowF3] = useState(false);
  const [showUsp3, setShowUsp3] = useState(false);
  const [showPrice3, setShowPrice3] = useState(false);

  //chanakya
  const [showF4, setShowF4] = useState(false);
  const [showUsp4, setShowUsp4] = useState(false);
  const [showPrice4, setShowPrice4] = useState(false);

  //Matrix
  const [showF5, setShowF5] = useState(false);
  const [showUsp5, setShowUsp5] = useState(false);
  // const [showPrice5, setShowPrice5] = useState(false);

  //camp
  const [showF6, setShowF6] = useState(false);
  const [showUsp6, setShowUsp6] = useState(false);
  const [showPrice6, setShowPrice6] = useState(false);

  //fedena
  const [showF7, setShowF7] = useState(false);
  const [showUsp7, setShowUsp7] = useState(false);
  const [showPrice7, setShowPrice7] = useState(false);

  //hd
  const [showF8, setShowF8] = useState(false);
  const [showUsp8, setShowUsp8] = useState(false);
  // const [showPrice8, setShowPrice8] = useState(false);

  //knot
  const [showF9, setShowF9] = useState(false);
  const [showUsp9, setShowUsp9] = useState(false);
  const [showPrice9, setShowPrice9] = useState(false);

  //academia
  const [showF10, setShowF10] = useState(false);
  const [showUsp10, setShowUsp10] = useState(false);
  const [showPrice10, setShowPrice10] = useState(false);

  //edumaat features and usp
  const handleCloseF2 = () => setShowF2(false);
  const handleShowF2 = (e) => {CommonTableHead(e);setShowF2(true)};
  const handleCloseUsp2 = () => setShowUsp2(false);
  const handleShowUsp2 = (e) => {CommonTableHead(e);setShowUsp2(true)};
  const handleClosePrice2 = () => setShowPrice2(false);
  const handleShowPrice2 = () => setShowPrice2(true);

  //schoolcanvas features and usp
  const handleCloseF1 = () => setShow1(false);
  const handleShowF1 = (e) => {CommonTableHead(e);setShow1(true)};
  const handleCloseUsp1 = () => setShowUsp1(false);
  const handleShowUsp1 = (e) => {CommonTableHead(e);setShowUsp1(true)};
  const handleClosePrice1 = () => setShowPrice1(false);
  const handleShowPrice1 = () => setShowPrice1(true);

  //digital features and usp
  const handleCloseF3 = () => setShowF3(false);
  const handleShowF3 = (e) => {CommonTableHead(e);setShowF3(true)};
  const handleCloseUsp3 = () => setShowUsp3(false);
  const handleShowUsp3 = (e) => {CommonTableHead(e);setShowUsp3(true)};
  const handleClosePrice3 = () => setShowPrice3(false);
  const handleShowPrice3 = () => setShowPrice3(true);

  //chanakya features and usp
  const handleCloseF4 = () => setShowF4(false);
  const handleShowF4 = (e) => {CommonTableHead(e);setShowF4(true)};
  const handleCloseUsp4 = () => setShowUsp4(false);
  const handleShowUsp4 = (e) => {CommonTableHead(e);setShowUsp4(true)};
  const handleClosePrice4 = () => setShowPrice4(false);
  const handleShowPrice4 = () => setShowPrice4(true);

   //matrix features and usp
   const handleCloseF5 = () => setShowF5(false);
   const handleShowF5 = (e) => {CommonTableHead(e);setShowF5(true)};
   const handleCloseUsp5 = () => setShowUsp5(false);
   const handleShowUsp5 = (e) => {CommonTableHead(e);setShowUsp5(true)};
   //camp features and usp
   const handleCloseF6 = () => setShowF6(false);
   const handleShowF6 = (e) => {CommonTableHead(e);setShowF6(true)};
   const handleCloseUsp6 = () => setShowUsp6(false);
   const handleShowUsp6 = (e) => {CommonTableHead(e);setShowUsp6(true)};
   const handleClosePrice6 = () => setShowPrice6(false);
   const handleShowPrice6 = () => setShowPrice6(true);

   //fedena features and usp
   const handleCloseF7 = () => setShowF7(false);
   const handleShowF7 = (e) => {CommonTableHead(e);setShowF7(true)};
   const handleCloseUsp7 = () => setShowUsp7(false);
   const handleShowUsp7 = (e) => {CommonTableHead(e);setShowUsp7(true)};
   const handleClosePrice7 = () => setShowPrice7(false);
   const handleShowPrice7 = () => setShowPrice7(true);

   //hd features and usp
   const handleCloseF8 = () => setShowF8(false);
   const handleShowF8 = (e) => {CommonTableHead(e);setShowF8(true)};
   const handleCloseUsp8 = () => setShowUsp8(false);
   const handleShowUsp8 = (e) => {CommonTableHead(e);setShowUsp8(true)};
   //knot features and usp
   const handleCloseF9 = () => setShowF9(false);
   const handleShowF9 = (e) => {CommonTableHead(e);setShowF9(true)};
   const handleCloseUsp9 = () => setShowUsp9(false);
   const handleShowUsp9 = (e) => {CommonTableHead(e);setShowUsp9(true)};
   const handleClosePrice9 = () => setShowPrice9(false);
   const handleShowPrice9 = () => setShowPrice9(true);

    //academia features and usp
    const handleCloseF10 = () => setShowF10(false);
    const handleShowF10 = (e) => {CommonTableHead(e);setShowF10(true)};
    const handleCloseUsp10 = () => setShowUsp10(false);
    const handleShowUsp10 = (e) => {CommonTableHead(e);setShowUsp10(true)};
    const handleClosePrice10 = () => setShowPrice10(false);
    const handleShowPrice10 = () => setShowPrice10(true);

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
                  className={`${styles["thead"]}`}
                  ref={tableRef}
                >
                  <thead className={styles['heading-stick']}>
                    <tr>
                      <th className={styles["tbl-hd"]}>Metrics</th>
                      <th className={styles["heading-link"]}><Link href='/zoho-crm'>Zoho CRM</Link></th>
                      <th className={styles["heading-link"]}><Link href='/nethunt'>NetHunt CRM</Link></th>
                      <th className={styles["heading-link"]}><Link href='/freshsales'>Freshsales</Link></th>
                      <th className={styles["heading-link"]}><Link href='/salesforce'>Salesforce</Link></th>
                      <th className={styles["heading-link"]}><Link href='/netsuite-crm'>NetSuite CRM</Link></th>
                      <th className={styles["heading-link"]}><Link href='/salesflare'>Salesflare</Link></th>
                      <th className={styles["heading-link"]}><Link href='/free-crm'>Free CRM</Link></th>
                      <th className={styles["heading-link"]}><Link href='/automatecrm'>AutomateCRM</Link></th>
                      <th className={styles["heading-link"]}><Link href='/icrm'>iCRM</Link></th>
                      <th className={styles["tbl-hd1"]}><Link href='/tigerlrm'>TigerLRM</Link></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p>Expense Management</p>
                        <p>Customer Management</p>
                        <p>Meeting management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Customer Management</p>
                        <p>Opportunity Management</p>
                        <p>Contact Manager</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Project Management</p>
                        <p>Inventory Management</p>
                        <p>Territory Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Knowledge Management</p>
                        <p> Customer Management</p>
                        <p>Contact Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                         
                          onClick={handleShowF4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p>Project Management</p>
                        <p>Customer Management</p>
                        <p>Territory Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF5}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p>Opportunity Management</p>
                        <p>Lead Management</p>
                        <p>Cloud Computing</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF6}
                         
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p>Invoice Management</p>
                        <p>Contract Management</p>
                        <p>Project Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p>Opportunity Management</p>
                        <p>Contact Management</p>
                        <p>Customer Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF8}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p>Expense Management</p>
                        <p> Marketing Automation</p>
                        <p>Inventory Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                      <p>Employee Management</p>
                        <p>Resource Management</p>
                        <p>Project Management</p>
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
                        <div className={styles['clm-height']}>
                        <p>Visionary Recognition</p>
                        <p>Global Empowerment</p>
                        <p>Made in India</p>
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
                        <div className={styles['clm-height']}>
                        <p>Seamless Google Integration</p>
                        <p>LinkedIn Lead Integration</p>
                        <p>Automated Sales Processes</p>
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
                      <div className={styles['clm-height']}>
                      <p>AI-Powered Contact Scoring</p>
                        <p>Predictive Deal Insights</p>
                        <p>Intelligent Workflow Automation</p>
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
                      <div className={styles['clm-height']}>
                      <p>Unified Platform</p>
                        <p>Data + AI Integration</p>
                        <p>Trailhead Learning Platform</p>
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
                      <div className={styles['clm-height']}>
                      <p>360-Degree Customer View</p>
                        <p>Challenges Addressed</p>
                        <p>Faster Time to Value</p>
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
                      <div className={styles['clm-height']}>
                      <p>Automated Efficiency</p>
                        <p>Intelligent Suggestions</p>
                        <p>Email Sequences</p>
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
                      <div className={styles['clm-height']}>
                      <p>Free Forever</p>
                        <p>Integration Capabilities</p>
                        <p>Hosted on Amazon AWS</p>
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
                      <div className={styles['clm-height']}>
                      <p>Automation Mastery</p>
                        <p>SLA Management</p>
                        <p>Affiliate and Distributor Management</p>
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
                      <div className={styles['clm-height']}>
                      <p>Seamless Integration</p>
                        <p>Critical Information Management</p>
                        <p>Free Trial</p>
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
                      <div className={styles['clm-height']}>
                      <p>AI-Powered Sales Enablement</p>
                        <p>Sales Management Augmentation</p>
                        <p>Integration and Scalability</p>
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
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice1}
                        >
                          View Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice2}
                        >
                          View Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice3}
                        >
                          View Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice4}
                        >
                          View Pricing
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
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice6}
                        >
                          View Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice7}
                        >
                          View Pricing
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
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice9}
                        >
                          View Pricing
                        </Button>
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice10}
                        >
                          View Pricing
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
                    NetHunt CRM 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NethuntF styles={styles} />
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
                  Zoho CRM 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ZohoF styles={styles} />
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
                  Zoho CRM 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ZohoU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp1}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 1 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice1}
                onHide={handleClosePrice1}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  Zoho CRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ZohoP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice1}>
                    Close
                  </Button>
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
                  NetHunt CRM 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NethuntU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp2}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 2 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice2}
                onHide={handleClosePrice2}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  NetHunt CRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NethuntP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice2}>
                    Close
                  </Button>
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
                  Freshsales
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FreshF styles={styles} />
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
                  Freshsales 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FreshU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp3}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 3 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice3}
                onHide={handleClosePrice3}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  Freshsales
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FreshP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice3}>
                    Close
                  </Button>
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
                  Salesforce
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SalesF styles={styles} />
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
                  Salesforce
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SalesU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp4}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 4 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice4}
                onHide={handleClosePrice4}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  Salesforce
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SalesP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice4}>
                    Close
                  </Button>
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
                  NetSuite CRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NetF styles={styles} />
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
                  NetSuite CRM 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NetU styles={styles} />
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
                  Salesflare
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FlareF styles={styles} />
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
                  Salesflare
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FlareU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp6}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 6 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice6}
                onHide={handleClosePrice6}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  Salesflare
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FlareP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice6}>
                    Close
                  </Button>
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
                  Free CRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FreeF styles={styles} />
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
                  Free CRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FreeU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp7}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 7 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice7}
                onHide={handleClosePrice7}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  Free CRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FreeP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice7}>
                    Close
                  </Button>
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
                  AutomateCRM 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AutoF styles={styles} />
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
                  AutomateCRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AutoU styles={styles} />
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
                  iCRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <IcrmF styles={styles} />
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
                  iCRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <IcrmU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp9}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 9 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice9}
                onHide={handleClosePrice9}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  iCRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <IcrmP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice9}>
                    Close
                  </Button>
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
                  TigerLRM 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <TigerF styles={styles} />
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
                  TigerLRM 
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <TigerU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp10}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 10 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice10}
                onHide={handleClosePrice10}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  TigerLRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <TigerP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice10}>
                    Close
                  </Button>
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
