import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table, Modal, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import ZohoF from "../accounting-software/zoho-books/features";
import ZohoU from "../accounting-software/zoho-books/usp";

import BillF from "../accounting-software/billbook/features";
import BillU from "../accounting-software/billbook/usp";

import FusF from "../accounting-software/oracle-fusion/features";
import FusU from "../accounting-software/oracle-fusion/usp";

import NetF from "../accounting-software/oracle-netsuite/features";
import NetU from "../accounting-software/oracle-netsuite/usp";

import VyaF from "../accounting-software/vyapar/features";
import VyaU from "../accounting-software/vyapar/usp";

import AnkF from "../accounting-software/ankpal/features";
import AnkU from "../accounting-software/ankpal/usp";

import DesF from "../accounting-software/deskera/features";
import DesU from "../accounting-software/deskera/usp";

import WaveF from "../accounting-software/wave-accounting/features";
import WaveU from "../accounting-software/wave-accounting/usp";

import MargF from "../accounting-software/margerp/features";
import MargU from "../accounting-software/margerp/usp";

import FreshF from "../accounting-software/freshbooks/features";
import FreshU from "../accounting-software/freshbooks/usp";

const Cmpchat = ({ styles }) => {
  //1
  const [show1, setShow1] = useState(false);
  const [showUsp1, setShowUsp1] = useState(false);
  //2
  const [showUsp2, setShowUsp2] = useState(false);
  const [showF2, setShowF2] = useState(false);
  //3
  const [showF3, setShowF3] = useState(false);
  const [showUsp3, setShowUsp3] = useState(false);
  //4
  const [showF4, setShowF4] = useState(false);
  const [showUsp4, setShowUsp4] = useState(false);
  //5
  const [showF5, setShowF5] = useState(false);
  const [showUsp5, setShowUsp5] = useState(false);
  //6
  const [showF6, setShowF6] = useState(false);
  const [showUsp6, setShowUsp6] = useState(false);
  //7
  const [showF7, setShowF7] = useState(false);
  const [showUsp7, setShowUsp7] = useState(false);
  //8
  const [showF8, setShowF8] = useState(false);
  const [showUsp8, setShowUsp8] = useState(false);
  //9
  const [showF9, setShowF9] = useState(false);
  const [showUsp9, setShowUsp9] = useState(false);
  //10
  const [showF10, setShowF10] = useState(false);
  const [showUsp10, setShowUsp10] = useState(false);

  //1 features and usp
  const handleCloseF1 = () => setShow1(false);
  const handleShowF1 = () => setShow1(true);
  const handleCloseUsp1 = () => setShowUsp1(false);
  const handleShowUsp1 = () => setShowUsp1(true);
  //2 features and usp
  const handleCloseF2 = () => setShowF2(false);
  const handleShowF2 = () => setShowF2(true);
  const handleCloseUsp2 = () => setShowUsp2(false);
  const handleShowUsp2 = () => setShowUsp2(true);
  //3 features and usp
  const handleCloseF3 = () => setShowF3(false);
  const handleShowF3 = () => setShowF3(true);
  const handleCloseUsp3 = () => setShowUsp3(false);
  const handleShowUsp3 = () => setShowUsp3(true);
  //4 features and usp
  const handleCloseF4 = () => setShowF4(false);
  const handleShowF4 = () => setShowF4(true);
  const handleCloseUsp4 = () => setShowUsp4(false);
  const handleShowUsp4 = () => setShowUsp4(true);
  //5 features and usp
  const handleCloseF5 = () => setShowF5(false);
  const handleShowF5 = () => setShowF5(true);
  const handleCloseUsp5 = () => setShowUsp5(false);
  const handleShowUsp5 = () => setShowUsp5(true);
  //6 features and usp
  const handleCloseF6 = () => setShowF6(false);
  const handleShowF6 = () => setShowF6(true);
  const handleCloseUsp6 = () => setShowUsp6(false);
  const handleShowUsp6 = () => setShowUsp6(true);
  //7 features and usp
  const handleCloseF7 = () => setShowF7(false);
  const handleShowF7 = () => setShowF7(true);
  const handleCloseUsp7 = () => setShowUsp7(false);
  const handleShowUsp7 = () => setShowUsp7(true);
  //8 features and usp
  const handleCloseF8 = () => setShowF8(false);
  const handleShowF8 = () => setShowF8(true);
  const handleCloseUsp8 = () => setShowUsp8(false);
  const handleShowUsp8 = () => setShowUsp8(true);
  //9 features and usp
  const handleCloseF9 = () => setShowF9(false);
  const handleShowF9 = () => setShowF9(true);
  const handleCloseUsp9 = () => setShowUsp9(false);
  const handleShowUsp9 = () => setShowUsp9(true);
  //10 features and usp
  const handleCloseF10 = () => setShowF10(false);
  const handleShowF10 = () => setShowF10(true);
  const handleCloseUsp10 = () => setShowUsp10(false);
  const handleShowUsp10 = () => setShowUsp10(true);

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
                      <th>Zoho Books</th>
                      <th>My Bill Book</th>
                      <th>Oracle Fusion Cloud ERP</th>
                      <th>Oracle NetSuite ERP</th>
                      <th>Vyapar</th>
                      <th>Ankpal</th>
                      <th>Deskera</th>
                      <th>Wave Accounting</th>
                      <th>Marg ERP 9+Accounting</th>
                      <th className={styles["tbl-hd1"]}>Freshbooks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p>Customer Management</p>
                        <p>Inventory Management</p>
                        <p>Email Integration</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Billing System</p>
                        <p>Billing Management</p>
                        <p>Barcode Scanning</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Compliance Management</p>
                        <p>Audit Management</p>
                        <p>Project Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Barcode Integration</p>
                        <p>Financial Management</p>
                        <p>Expense Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Taxation Management</p>
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
                        <p>Taxation Management</p>
                        <p>Billing Management</p>
                        <p>Inventory Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF6}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Financial Reporting</p>
                        <p>Barcode Integration</p>
                        <p>Expense Tracking</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Taxation Management</p>
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
                        <p>Customer Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Expense Tracking</p>
                        <p> Multi Currency</p>
                        <p>Accounts Receivable</p>
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
                          <p>Cloud-Based</p>
                          <p>User-Friendly Interface</p>
                          <p>Integration</p>
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
                          <p>User-Friendly Interface</p>
                          <p>GST Compliance</p>
                          <p>Customizable Invoices</p>
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
                          <p>Comprehensive Suite</p>
                          <p>Scalability</p>
                          <p>Industry-Specific Solutions</p>
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
                          <p>Cloud-Based</p>
                          <p>Comprehensive Suite</p>
                          <p>Real-Time Data</p>
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
                          <p>Simple and User-Friendly Platform</p>
                          <p>Efficient Financial Management</p>
                          <p>GST Compliance</p>
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
                          <p>Accessibility</p>
                          <p>Support to Software users</p>
                          <p>Channelized Sales and Purchases</p>
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
                          <p>All-in-One Solution</p>
                          <p>Cloud-Based Accessibility</p>
                          <p>User-Friendly Interface</p>
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
                          <p>Free Software</p>
                          <p>Basic Accounting</p>
                          <p>Payroll Services</p>
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
                          <p>Customization</p>
                          <p>Comprehensive Modules</p>
                          <p>Localized Support</p>
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
                          <p>Simple to use</p>
                          <p>All plans include time tracking</p>
                          <p>Mobile app</p>
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
                    <tr>
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
                    </tr>
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
              {/* 2 features */}
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
                    My Bill Book
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BillF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF2}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 1 feature */}
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
                    Zoho Books
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ZohoF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 1 usp */}
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
                    Zoho Books
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ZohoU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 2 usp */}
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
                    My Bill Book
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BillU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp2}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 3 feature */}
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
                    Oracle Fusion Cloud ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FusF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF3}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 3 usp */}
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
                    Oracle Fusion Cloud ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FusU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp3}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 4 feature */}
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
                    Oracle NetSuite ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NetF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF4}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 4 usp */}
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
                    Oracle NetSuite ERP
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NetU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp4}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 5 feature */}
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
                    Vyapar
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VyaF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF5}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 5 usp */}
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
                    Vyapar
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VyaU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp5}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 6 feature */}
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
                    Ankpal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AnkF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF6}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 6 usp */}
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
                    Ankpal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AnkU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp6}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 7 feature */}
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
                    Deskera
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DesF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF7}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 7 usp */}
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
                    Deskera
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DesU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp7}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 8 feature */}
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
                    Wave Accounting
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <WaveF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF8}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 8 usp */}
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
                    Wave Accounting
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <WaveU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp8}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 9 feature */}
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
                    Marg ERP 9+Accounting
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MargF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF9}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 9 usp */}
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
                    Marg ERP 9+Accounting
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MargU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp9}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 10 feature */}
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
                    Freshbooks
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FreshF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF10}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* 10 usp */}
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
                    Freshbooks
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FreshU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp10}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cmpchat;
