import React from "react";
import { useState,useRef } from "react";
import { Container, Row, Col, Table, Modal, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./billing-and-invoicing-software.module.scss";


import GoBill from "../billing-and-invoicing-software/go-gst-bill/features";
import GoBillU from "../billing-and-invoicing-software/go-gst-bill/usp";
import GoBillP from "../billing-and-invoicing-software/go-gst-bill/price";

import ProfitBooksF from "../billing-and-invoicing-software/profit-books/features";
import ProfitBooksU from "../billing-and-invoicing-software/profit-books/usp";
import ProfitBooksP from "../billing-and-invoicing-software/profit-books/price";

import ZohoInvoicesF from "../billing-and-invoicing-software/zoho-invoices/features";
import ZohoInvoicesU from "../billing-and-invoicing-software/zoho-invoices/usp";
import ZohoInvoicesP from "../billing-and-invoicing-software/zoho-invoices/price";

import EretailF from "../billing-and-invoicing-software/eretail-cybertech/features";
import EretailU from "../billing-and-invoicing-software/eretail-cybertech/usp";
import EretailP from "../billing-and-invoicing-software/eretail-cybertech/price";

import IveposF from "../billing-and-invoicing-software/ivepos/features";
import IveposU from "../billing-and-invoicing-software/ivepos/usp";
import IveposP from "../billing-and-invoicing-software/ivepos/price";

import CaptianF from "../billing-and-invoicing-software/captain-biz/features";
import CaptianU from "../billing-and-invoicing-software/captain-biz/usp";

import QuickBooksF from "../billing-and-invoicing-software/quickbooksonline/features";
import QuickBooksU from "../billing-and-invoicing-software/quickbooksonline/usp";
import QuickBooksP from "../billing-and-invoicing-software/quickbooksonline/price";

import SpectrumbillingF from "../billing-and-invoicing-software/spectrumbilling/features";
import SpectrumbillingU from "../billing-and-invoicing-software/spectrumbilling/usp";

import OracleFusionF from "../accounting-software/oracle-fusion/features";
import OracleFusionU from "../accounting-software/oracle-fusion/usp";

import BillBookF from "../accounting-software/billbook/features";
import BillBookU from "../accounting-software/billbook/usp";
import BillBookP from "../accounting-software/billbook/price";

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
  const [showPrice5, setShowPrice5] = useState(false);

  //camp
  const [showF6, setShowF6] = useState(false);
  const [showUsp6, setShowUsp6] = useState(false);
  // const [showPrice6, setShowPrice6] = useState(false);

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
  // const [showPrice9, setShowPrice9] = useState(false);

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
  const handleClosePrice5 = () => setShowPrice5(false);
  const handleShowPrice5 = () => setShowPrice5(true);

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
  const handleClosePrice7 = () => setShowPrice7(false);
  const handleShowPrice7 = () => setShowPrice7(true);

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
                  className={`${styles["thead"]} overflow-auto`}
                  ref={tableRef}
                >
                  <thead className={styles["heading-stick"]}>
                    <tr>
                      <th className={styles["tbl-hd"]}>Metrics</th>
                      <th className={styles["heading-link"]}><Link href='/go-gst-bill'>Go GST Bill</Link></th>
                      <th className={styles["heading-link"]}><Link href='/profit-books'>ProfitBooks</Link></th>
                      <th className={styles["heading-link"]}><Link href='/zoho-invoices'>Zoho Invoices</Link></th>
                      <th className={styles["heading-link"]}><Link href='/eretail-cybertech'>eRetail Cybertech - pranaPOS </Link></th>
                      <th className={styles["heading-link"]}><Link href='/ivepos'>IVEPOS</Link></th>
                      <th className={styles["heading-link"]}><Link href='/captain-biz'>CaptainBiz</Link></th>
                      <th className={styles["heading-link"]}><Link href='/quickbooksonline'>QuickBooks Online</Link></th>
                      <th className={styles["heading-link"]}><Link href='/spectrumbilling'>Spectrum Billing Solution</Link></th>
                      <th className={styles["heading-link"]}><Link href='/oracle-fusion'>Oracle Fusion Cloud ERP</Link></th>
                      <th className={styles["tbl-hd1"]}><Link href='/billbook'>My Bill Book</Link> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p> Online Accounting</p>
                        <p>Vendor Management</p>
                        <p>Software Inventory</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Order Management</p>
                        <p> Payment Processing</p>
                        <p>Payment Handling</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Customer Management</p>
                        <p>Quotation & Estimates</p>
                        <p>Payment Processing</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Customer DataBase</p>
                        <p>Loyalty Management</p>
                        <p> Catalog Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Warehouse Management</p>
                        <p>Commission management</p>
                        <p> Data Imports/Exports</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF5}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Discount & Schemes</p>
                        <p> Document Printing</p>
                        <p>Sales Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF6}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Banking Integration</p>
                        <p> Taxation Management</p>
                        <p>Recurring Invoice</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Product Database</p>
                        <p>Taxation Management</p>
                        <p>Expense Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF8}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Compliance Management</p>
                        <p> Transportation Management</p>
                        <p> Financial Accounting</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Barcode Scanning</p>
                        <p>Analytical Reporting</p>
                        <p> Accounting Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
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
                          <p>Lifetime Free</p>
                          <p>Comprehensive Features</p>
                          <p>Customization Options</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Online Payment Integration</p>
                          <p>Automatic Tax Calculations</p>
                          <p>Free Access and Support</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>E-Invoicing Capability</p>
                          <p>Security and Compliance</p>
                          <p>Wide Range of Features</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Elegant UI Design</p>
                          <p>Real-Time Business Insights</p>
                          <p>Free Trial Offer</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Full Stack Super App</p>
                          <p>Tailored for Specific Businesses</p>
                          <p>Large Customer Base</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp5}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Trusted and Recommended</p>
                          <p>Flexible Pricing Plans</p>
                          <p>Social Media Presence</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp6}
                        >
                          View More
                        </Button>
                      </td>

                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Automatic Tax Rate Calculation</p>
                          <p>Integration with Popular Apps</p>
                          <p>Professional Support for CA & Bookkeepers</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Strategic Partnership Approach</p>
                          <p>Comprehensive Service Offering</p>
                          <p>CEO Commitment to Innovation</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp8}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>Security and Compliance</p>
                          <p>Global Reach</p>
                          <p>Integration with Oracle Ecosystem</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowUsp9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <div className={styles["clm-height"]}>
                          <p>User-Friendly Interface</p>
                          <p>Payment Reminders</p>
                          <p>Cloud-Based Accessibility</p>
                        </div>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
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
                          variant="outline-primary"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowPrice5}
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
                    ProfitBooks
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ProfitBooksF styles={styles} />
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
                    Go GST Bill
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <GoBill styles={styles} />
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
                    Go GST Bill
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <GoBillU styles={styles} />
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
                  Go GST Bill
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <GoBillP styles={styles} />
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
                    ProfitBooks
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ProfitBooksU styles={styles} />
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
                  ProfitBooks
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ProfitBooksP styles={styles} />
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
                    Zoho Invoices
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ZohoInvoicesF styles={styles} />
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
                    Zoho Invoices
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ZohoInvoicesU styles={styles} />
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
                  Zoho Invoices
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ZohoInvoicesP styles={styles} />
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
                    eRetail Cybertech - pranaPOS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EretailF styles={styles} />
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
                    eRetail Cybertech - pranaPOS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EretailU styles={styles} />
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
                  eRetail Cybertech - pranaPOS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EretailP styles={styles} />
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
                    IVEPOS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <IveposF styles={styles} />
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
                    IVEPOS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <IveposU styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseUsp5}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
                </Modal.Footer>
              </Modal>
              {/* 5 price */}
              <Modal
                style={{ color: "#000" }}
                centered
                show={showPrice5}
                onHide={handleClosePrice5}
                className="cmpchat-modal"
                aria-labelledby="example-custom-modal-sizes-title-lg"
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                  IVEPOS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <IveposP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice5}>
                    Close
                  </Button>
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
                    CaptainBiz
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CaptianF styles={styles} />
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
                    CaptainBiz
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CaptianU styles={styles} />
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
                    QuickBooks Online
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <QuickBooksF styles={styles} />
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
                    QuickBooks Online
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <QuickBooksU styles={styles} />
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
                  QuickBooks Online
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <QuickBooksP styles={styles} />
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
                    Spectrum Billing Solution
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SpectrumbillingF styles={styles} />
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
                    Spectrum Billing Solution
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SpectrumbillingU styles={styles} />
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
                    Oracle Fusion Cloud ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <OracleFusionF styles={styles} />
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
                    Oracle Fusion Cloud ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <OracleFusionU styles={styles} />
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
                    My Bill Book
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BillBookF styles={styles} />
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
                    My Bill Book
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BillBookU styles={styles} />
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
                  My Bill Book
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BillBookP styles={styles} />
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
