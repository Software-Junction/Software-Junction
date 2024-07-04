import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table, Modal, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./real.module.scss";


import AstralF from "../real-estate-software/astral/features";
import AstralU from "../real-estate-software/astral/usp";

import BanibroF from "../real-estate-software/banibro/features";
import BanibriU from "../real-estate-software/banibro/usp";

import BuildiumF from "../real-estate-software/buildium/features";
import BuildiumU from "../real-estate-software/buildium/usp";
import BuildiumP from "../real-estate-software/buildium/price";

import HighriseF from "../real-estate-software/highrise/features";
import HighriseU from "../real-estate-software/highrise/usp";

import BinaryF from "../real-estate-software/binary-stream/features";
import BinaryU from "../real-estate-software/binary-stream/usp";

import StrategicERPF from "../real-estate-software/strategic-erp/features";
import StrategicERPU from "../real-estate-software/strategic-erp/usp";
import StrategicERPP from "../real-estate-software/strategic-erp/price";

import In4SuiteF from "../real-estate-software/in4Suite/features";
import In4SuiteU from "../real-estate-software/in4Suite/usp";

import BhoomiF from "../real-estate-software/bhoomi/features";
import BhoomiU from "../real-estate-software/bhoomi/usp";
import BhoomiP from "../real-estate-software/bhoomi/price";

import DaeBuildF from "../real-estate-software/daebuild-crm/features";
import DaeBuildU from "../real-estate-software/daebuild-crm/usp";

import SelldoF from "../real-estate-software/sell-do/features";
import SelldoU from "../real-estate-software/sell-do/usp";
import SelldoP from "../real-estate-software/sell-do/price";

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
  const [showPrice3, setShowPrice3] = useState(false);

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
  const [showPrice6, setShowPrice6] = useState(false);

  //fedena
  const [showF7, setShowF7] = useState(false);
  const [showUsp7, setShowUsp7] = useState(false);
  // const [showPrice7, setShowPrice7] = useState(false);

  //hd
  const [showF8, setShowF8] = useState(false);
  const [showUsp8, setShowUsp8] = useState(false);
  const [showPrice8, setShowPrice8] = useState(false);

  //knot
  const [showF9, setShowF9] = useState(false);
  const [showUsp9, setShowUsp9] = useState(false);
  // const [showPrice9, setShowPrice9] = useState(false);

  //academia
  const [showF10, setShowF10] = useState(false);
  const [showUsp10, setShowUsp10] = useState(false);
  const [showPrice10, setShowPrice10] = useState(false);


  //edumaat features and usp
  const handleCloseF2 = () => setShowF2(false);
  const handleShowF2 = () => setShowF2(true);
  const handleCloseUsp2 = () => setShowUsp2(false);
  const handleShowUsp2 = () => setShowUsp2(true);
  // const handleClosePrice2 = () => setShowPrice2(false);
  // const handleShowPrice2 = () => setShowPrice2(true);

  //schoolcanvas features and usp
  const handleCloseF1 = () => setShow1(false);
  const handleShowF1 = () => setShow1(true);
  const handleCloseUsp1 = () => setShowUsp1(false);
  const handleShowUsp1 = () => setShowUsp1(true);
  // const handleClosePrice1 = () => setShowPrice1(false);
  // const handleShowPrice1 = () => setShowPrice1(true);

  //digital features and usp
  const handleCloseF3 = () => setShowF3(false);
  const handleShowF3 = () => setShowF3(true);
  const handleCloseUsp3 = () => setShowUsp3(false);
  const handleShowUsp3 = () => setShowUsp3(true);
  const handleClosePrice3 = () => setShowPrice3(false);
  const handleShowPrice3 = () => setShowPrice3(true);

  //chanakya features and usp
  const handleCloseF4 = () => setShowF4(false);
  const handleShowF4 = () => setShowF4(true);
  const handleCloseUsp4 = () => setShowUsp4(false);
  const handleShowUsp4 = () => setShowUsp4(true);
  // const handleClosePrice4 = () => setShowPrice4(false);
  // const handleShowPrice4 = () => setShowPrice4(true);

  //matrix features and usp
  const handleCloseF5 = () => setShowF5(false);
  const handleShowF5 = () => setShowF5(true);
  const handleCloseUsp5 = () => setShowUsp5(false);
  const handleShowUsp5 = () => setShowUsp5(true);
  // const handleClosePrice5 = () => setShowPrice5(false);
  // const handleShowPrice5 = () => setShowPrice5(true);

  //camp features and usp
  const handleCloseF6 = () => setShowF6(false);
  const handleShowF6 = () => setShowF6(true);
  const handleCloseUsp6 = () => setShowUsp6(false);
  const handleShowUsp6 = () => setShowUsp6(true);
  const handleClosePrice6 = () => setShowPrice6(false);
  const handleShowPrice6 = () => setShowPrice6(true);

  //fedena features and usp
  const handleCloseF7 = () => setShowF7(false);
  const handleShowF7 = () => setShowF7(true);
  const handleCloseUsp7 = () => setShowUsp7(false);
  const handleShowUsp7 = () => setShowUsp7(true);
  // const handleClosePrice7 = () => setShowPrice7(false);
  // const handleShowPrice7 = () => setShowPrice7(true);

  //hd features and usp
  const handleCloseF8 = () => setShowF8(false);
  const handleShowF8 = () => setShowF8(true);
  const handleCloseUsp8 = () => setShowUsp8(false);
  const handleShowUsp8 = () => setShowUsp8(true);
  const handleClosePrice8 = () => setShowPrice8(false);
  const handleShowPrice8 = () => setShowPrice8(true);

  //knot features and usp
  const handleCloseF9 = () => setShowF9(false);
  const handleShowF9 = () => setShowF9(true);
  const handleCloseUsp9 = () => setShowUsp9(false);
  const handleShowUsp9 = () => setShowUsp9(true);
  // const handleClosePrice9 = () => setShowPrice9(false);
  // const handleShowPrice9 = () => setShowPrice9(true);

  //academia features and usp
  const handleCloseF10 = () => setShowF10(false);
  const handleShowF10 = () => setShowF10(true);
  const handleCloseUsp10 = () => setShowUsp10(false);
  const handleShowUsp10 = () => setShowUsp10(true);
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
                <Table responsive bordered className={`${styles["thead"]}`}>
                  <thead className={styles["heading-stick"]}>
                    <tr>
                      <th className={styles["tbl-hd"]}>Metrics</th>
                      <th className={styles["heading-link"]}><Link href='/astral-tec'>Astral Technologies</Link></th>
                      <th className={styles["heading-link"]}><Link href='/banibro-solution'>Banibro Solutions</Link></th>
                      <th className={styles["heading-link"]}><Link href='/buildium'>Buildium</Link></th>
                      <th className={styles["heading-link"]}><Link href='/highrise'>Highrise ERP</Link></th>
                      <th className={styles["heading-link"]}><Link href='/binary-stream'>Binary Stream</Link></th>
                      <th className={styles["heading-link"]}><Link href='/strategic-erp'>Strategic ERP</Link></th>
                      <th className={styles["heading-link"]}><Link href='/in4suite'>In4Suite</Link></th>
                      <th className={styles["heading-link"]}><Link href='/bhoomi'>Bhoomi</Link></th>
                      <th className={styles["heading-link"]}><Link href='/daebuild-crm'>DaeBuild CRM</Link></th>
                      <th className={styles["tbl-hd1"]}><Link href='/sell-do'>Sell.Do</Link></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p>Email Integration</p>
                        <p>Contact Management</p>
                        <p>Project Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Project Management</p>
                        <p> Inventory Management</p>
                        <p> Membership Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Inspection Management</p>
                        <p>Residential Properties</p>
                        <p>Contact Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Document Management</p>
                        <p> Financial Management</p>
                        <p>Supplier Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Residential Properties</p>
                        <p> Commercial Properties</p>
                        <p>Insurance Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF5}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Sales and Distribution</p>
                        <p> Accounts Receivable</p>
                        <p> Inventory Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF6}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Contractor Management</p>
                        <p> Barcode Scanning</p>
                        <p>Appointment Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Performance Management</p>
                        <p>Quotation & Estimates</p>
                        <p> Contact Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF8}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> CRM & Sales Dashboards</p>
                        <p> Payment Tracking</p>
                        <p>Tax Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Case Management</p>
                        <p>Referral Management</p>
                        <p> Appointment Management</p>
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
                          <p>Expertise in Development</p>
                          <p>User-Centric Design</p>
                          <p>Range of Services</p>
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
                          <p>Tailored Odoo ERP Solutions</p>
                          <p>Tailored Customization Possibilities</p>
                          <p>Devoted Odoo ERP Support</p>
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
                          <p>Scalability for Various Portfolios</p>
                          <p>Efficient Payment Collections</p>
                          <p>Enhanced Resident Services</p>
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
                          <p>Flexible Deployment Options</p>
                          <p>Client Billing Efficiency</p>
                          <p>Centralized Document Management</p>
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
                          <p>Centralized Operations and Reporting</p>
                          <p>Efficient Intercompany Processing</p>
                          <p>Streamlined Property Management</p>
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
                          <p>End-to-End Process Automation</p>
                          <p>Business Process Automation</p>
                          <p>Digital Media Integration</p>
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
                          <p>Experienced Team</p>
                          <p>World-Class Customer Support</p>
                          <p>Third-Party Integrations</p>
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
                          <p>Impressive Track Record</p>
                          <p>Startup India Recognized</p>
                          <p>Reliable After Sales Policy</p>
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
                          <p>Flexible Document Management</p>
                          <p>Marketing Automation</p>
                          <p>GST and RERA Compliance</p>
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
                          <p>Proven Industry Trust</p>
                          <p>Quick Deployment and Onboarding</p>
                          <p>Recognition and Awards</p>
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
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice8}
                        >
                          View Pricing
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
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice10}
                        >
                          View Pricing
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
                show={showF2}
                onHide={handleCloseF2}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Banibro Solutions
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BanibroF styles={styles} />
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
                    Astral Technologies
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AstralF styles={styles} />
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
                    Astral Technologies
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AstralU styles={styles} />
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
                    Banibro Solutions
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BanibriU styles={styles} />
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
                    Buildium
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BuildiumF styles={styles} />
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
                    Buildium
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BuildiumU styles={styles} />
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
                  Buildium
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BuildiumP styles={styles} />
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
                    Highrise ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <HighriseF styles={styles} />
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
                    Highrise ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <HighriseU styles={styles} />
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
                    Binary Stream
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BinaryF styles={styles} />
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
                    Binary Stream
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BinaryU styles={styles} />
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
                    Strategic ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <StrategicERPF styles={styles} />
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
                    Strategic ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <StrategicERPU styles={styles} />
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
                  Strategic ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <StrategicERPP styles={styles} />
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
                    In4Suite
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <In4SuiteF styles={styles} />
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
                    In4Suite
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <In4SuiteU styles={styles} />
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
                    Bhoomi
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BhoomiF styles={styles} />
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
                    Bhoomi
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BhoomiU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp8}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 8 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice8}
                onHide={handleClosePrice8}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  Bhoomi
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BhoomiP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice8}>
                    Close
                  </Button>
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
                    DaeBuild CRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DaeBuildF styles={styles} />
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
                    DaeBuild CRM
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DaeBuildU styles={styles} />
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
                    Sell.Do
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SelldoF styles={styles} />
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
                    Sell.Do
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SelldoU styles={styles} />
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
                  Sell.Do
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SelldoP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice10}>
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
