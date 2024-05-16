import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table, Modal, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import StayflexiF from "../hotel-management/stayflexi/features";
import StayflexiU from "../hotel-management/stayflexi/usp";

import SYSOTELAIF from "../hotel-management/sysotel/features";
import SYSOTELAIU from "../hotel-management/sysotel/usp";

import BuildiumF from "../real-estate-software/buildium/features";
import BuildiumU from "../real-estate-software/buildium/usp";

import AppFolioF from "../property-management-software/appfolio-realm/features";
import AppFolioU from "../property-management-software/appfolio-realm/usp";

import MRIF from "../property-management-software/mri-software/features";
import MRIU from "../property-management-software/mri-software/usp";

import RentManagerF from "../property-management-software/rent-manager/features";
import RentManagerU from "../property-management-software/rent-manager/usp";

import PromasF from "../property-management-software/promas/features";
import PromasU from "../property-management-software/promas/usp";

import PropertyManagerF from "../property-management-software/property-manager-cloud/features";
import PropertyManagerU from "../property-management-software/property-manager-cloud/usp";

import PropertywareF from "../property-management-software/propertyware/features";
import PropertywareU from "../property-management-software/propertyware/usp";

import ReLeasedF from "../property-management-software/re-leased/features";
import ReLeasedU from "../property-management-software/re-leased/usp";

const Cmpchat = ({ styles }) => {
  //schoolcanva
  const [show1, setShow1] = useState(false);
  const [showUsp1, setShowUsp1] = useState(false);
  //edumaat
  const [showUsp2, setShowUsp2] = useState(false);
  const [showF2, setShowF2] = useState(false);
  //digital
  const [showF3, setShowF3] = useState(false);
  const [showUsp3, setShowUsp3] = useState(false);
  //chanakya
  const [showF4, setShowF4] = useState(false);
  const [showUsp4, setShowUsp4] = useState(false);
  //Matrix
  const [showF5, setShowF5] = useState(false);
  const [showUsp5, setShowUsp5] = useState(false);
  //camp
  const [showF6, setShowF6] = useState(false);
  const [showUsp6, setShowUsp6] = useState(false);
  //fedena
  const [showF7, setShowF7] = useState(false);
  const [showUsp7, setShowUsp7] = useState(false);
  //hd
  const [showF8, setShowF8] = useState(false);
  const [showUsp8, setShowUsp8] = useState(false);
  //knot
  const [showF9, setShowF9] = useState(false);
  const [showUsp9, setShowUsp9] = useState(false);
  //academia
  const [showF10, setShowF10] = useState(false);
  const [showUsp10, setShowUsp10] = useState(false);

  //edumaat features and usp
  const handleCloseF2 = () => setShowF2(false);
  const handleShowF2 = () => setShowF2(true);
  const handleCloseUsp2 = () => setShowUsp2(false);
  const handleShowUsp2 = () => setShowUsp2(true);
  //schoolcanvas features and usp
  const handleCloseF1 = () => setShow1(false);
  const handleShowF1 = () => setShow1(true);
  const handleCloseUsp1 = () => setShowUsp1(false);
  const handleShowUsp1 = () => setShowUsp1(true);
  //digital features and usp
  const handleCloseF3 = () => setShowF3(false);
  const handleShowF3 = () => setShowF3(true);
  const handleCloseUsp3 = () => setShowUsp3(false);
  const handleShowUsp3 = () => setShowUsp3(true);
  //chanakya features and usp
  const handleCloseF4 = () => setShowF4(false);
  const handleShowF4 = () => setShowF4(true);
  const handleCloseUsp4 = () => setShowUsp4(false);
  const handleShowUsp4 = () => setShowUsp4(true);
  //matrix features and usp
  const handleCloseF5 = () => setShowF5(false);
  const handleShowF5 = () => setShowF5(true);
  const handleCloseUsp5 = () => setShowUsp5(false);
  const handleShowUsp5 = () => setShowUsp5(true);
  //camp features and usp
  const handleCloseF6 = () => setShowF6(false);
  const handleShowF6 = () => setShowF6(true);
  const handleCloseUsp6 = () => setShowUsp6(false);
  const handleShowUsp6 = () => setShowUsp6(true);
  //fedena features and usp
  const handleCloseF7 = () => setShowF7(false);
  const handleShowF7 = () => setShowF7(true);
  const handleCloseUsp7 = () => setShowUsp7(false);
  const handleShowUsp7 = () => setShowUsp7(true);
  //hd features and usp
  const handleCloseF8 = () => setShowF8(false);
  const handleShowF8 = () => setShowF8(true);
  const handleCloseUsp8 = () => setShowUsp8(false);
  const handleShowUsp8 = () => setShowUsp8(true);
  //knot features and usp
  const handleCloseF9 = () => setShowF9(false);
  const handleShowF9 = () => setShowF9(true);
  const handleCloseUsp9 = () => setShowUsp9(false);
  const handleShowUsp9 = () => setShowUsp9(true);
  //academia features and usp
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
                <Table responsive bordered className={`${styles["thead"]}`}>
                  <thead className={styles["heading-stick"]}>
                    <tr>
                      <th className={styles["tbl-hd"]}>Metrics</th>
                      <th>Stayflexi</th>
                      <th>SYSOTEL.AI</th>
                      <th>Buildium</th>
                      <th>AppFolio Realm</th>
                      <th>MRI Software</th>
                      <th>Rent Manager</th>
                      <th>PROMAS</th>
                      <th>Property Manager Cloud</th>
                      <th>Propertyware</th>
                      <th className={styles["tbl-hd1"]}>Re-Leased </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p>Housekeeping Management</p>
                        <p>Accommodation Booking</p>
                        <p>Revenue Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Channel Management</p>
                        <p>Strategic Planning</p>
                        <p>Residential Properties</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Vendor Management</p>
                        <p>Property Inspections</p>
                        <p> Contact Database</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Rental Management</p>
                        <p> Vacancy Tracking</p>
                        <p> Campaign Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Portfolio Management</p>
                        <p> Commercial Properties</p>
                        <p> Facility Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF5}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Expense Management</p>
                        <p> Property Management</p>
                        <p>Survey Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF6}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Expense Management</p>
                        <p> Property Inspections</p>
                        <p> Service & Support</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Expense Management</p>
                        <p>Customer Management</p>
                        <p>Electronic Signature</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF8}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Property Inspections</p>
                        <p>Property Management</p>
                        <p> Rental Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "9px" }}
                          onClick={handleShowF9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Lease Management</p>
                        <p>Portfolio Management</p>
                        <p>Tenant Database</p>
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
                          <p>Efficient Onboarding</p>
                          <p>Uber for Hotels - bidflexi</p>
                          <p>Automated AI-Powered PMS</p>
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
                          <p>AI/ML-Based Decision Making</p>
                          <p>Real-Time Data Insights</p>
                          <p>Dedicated to Maximizing Profitability</p>
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
                          <p>Scalability for Various Portfolios</p>
                          <p>Efficient Payment Collections</p>
                          <p>Customizable and Tailored Customer Onboarding</p>
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
                          <p>Centralized Data</p>
                          <p>Maximized Productivity</p>
                          <p>Seamless Integrations</p>
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
                          <p>Real Estate Management</p>
                          <p>Extensive Partner Ecosystem</p>
                          <p>Continuous Innovation</p>
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
                          <p>Integrated Technology Ecosystem</p>
                          <p>Customer Focus and Support</p>
                          <p>User Testimonials</p>
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
                          <p>Experience and Reliability</p>
                          <p>Focus on Management </p>
                          <p>Responsive Design</p>
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
                          <p>Paperless Operations</p>
                          <p>Lease and Addendum Creato</p>
                          <p>Tenant Screening</p>
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
                          <p>Open Platform</p>
                          <p>Efficiency-Driven Tools</p>
                          {/* <p>Built-in Marketing Tools</p> */}
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
                          <p>Connected Cloud Platform</p>
                          <p>360-Degree Property View</p>
                          <p>Automated Reminders and Processes</p>
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
                    <tr>
                      <td>Ratings</td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <p
                            className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                            style={{ backgroundColor: "#FC5185 " }}
                          >
                            4.4 <FaStar />
                          </p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className={`${styles["td-mob"]} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{ backgroundColor: "#FC5185 " }}
                            >
                              4.4 <FaStar />
                            </p>
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
                    SYSOTEL.AI
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SYSOTELAIF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF2}>
                    Close
                  </Button>
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
                    Stayflexi
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <StayflexiF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF1}>
                    Close
                  </Button>
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
                    Stayflexi
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <StayflexiU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp1}>
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
                    SYSOTEL.AI
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SYSOTELAIU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp2}>
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
                    Buildium
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BuildiumF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF3}>
                    Close
                  </Button>
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
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp3}>
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
                    AppFolio Realm
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AppFolioF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF4}>
                    Close
                  </Button>
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
                    AppFolio Realm
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AppFolioU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp4}>
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
                    MRI Software
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MRIF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF5}>
                    Close
                  </Button>
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
                    MRI Software
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MRIU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp5}>
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
                    Rent Manager
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <RentManagerF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF6}>
                    Close
                  </Button>
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
                    Rent Manager
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <RentManagerU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp6}>
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
                    PROMAS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PromasF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF7}>
                    Close
                  </Button>
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
                    PROMAS
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PromasU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp7}>
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
                    Property Manager Cloud
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PropertyManagerF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF8}>
                    Close
                  </Button>
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
                    Property Manager Cloud
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PropertyManagerU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp8}>
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
                    Propertyware
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PropertywareF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF9}>
                    Close
                  </Button>
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
                    Propertyware
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PropertywareU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp9}>
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
                    Re-Leased
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ReLeasedF styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseF10}>
                    Close
                  </Button>
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
                    Re-Leased
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ReLeasedU styles={styles} />
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
