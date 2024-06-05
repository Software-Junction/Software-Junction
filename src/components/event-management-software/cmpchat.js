import React from "react";
import { useState } from "react";
import { Container, Row, Col, Table, Modal, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./event.module.scss";


// 1
import WhovaF from "../event-management-software/whova/features";
import WhovaU from "../event-management-software/whova/usp";

//2
import EventproF from "../event-management-software/eventpro/features";
import EventproU from "../event-management-software/eventpro/usp";

//3
import PlanningF from "../event-management-software/planning-pod/features";
import PlanningU from "../event-management-software/planning-pod/usp";
import PlanningP from "../event-management-software/planning-pod/price";

//4
import WeveF from "../event-management-software/weve/features";
import WeveU from "../event-management-software/weve/usp";

//5
import TicketF from "../event-management-software/ticket-tailor/features";
import TicketU from "../event-management-software/ticket-tailor/usp";

//6
import DryftaF from "../event-management-software/dryfta/features";
import DryftaU from "../event-management-software/dryfta/usp";
import DryftaP from "../event-management-software/dryfta/price";

//7
import ActiveF from "../event-management-software/active-net/features";
import ActiveU from "../event-management-software/active-net/usp";

//8
import ArloF from "../event-management-software/arlo/features";
import ArloU from "../event-management-software/arlo/usp";
import ArloP from "../event-management-software/arlo/price";

//9
import EventorgF from "../event-management-software/eventorg/features";
import EventorgU from "../event-management-software/eventorg/usp";

//10
import AirmeetF from "../event-management-software/airmeet/features";
import AirmeetU from "../event-management-software/airmeet/usp";
import AirmeetP from "../event-management-software/airmeet/price";

const Cmpchat = () => {
  //1
  const [show1, setShow1] = useState(false);
  const [showUsp1, setShowUsp1] = useState(false);
  //2
  const [showUsp2, setShowUsp2] = useState(false);
  const [showF2, setShowF2] = useState(false);
  //3
  const [showF3, setShowF3] = useState(false);
  const [showUsp3, setShowUsp3] = useState(false);
  const [showPrice3, setShowPrice3] = useState(false);
  //4
  const [showF4, setShowF4] = useState(false);
  const [showUsp4, setShowUsp4] = useState(false);
  //5
  const [showF5, setShowF5] = useState(false);
  const [showUsp5, setShowUsp5] = useState(false);
  //6
  const [showF6, setShowF6] = useState(false);
  const [showUsp6, setShowUsp6] = useState(false);
  const [showPrice6, setShowPrice6] = useState(false);
  //7
  const [showF7, setShowF7] = useState(false);
  const [showUsp7, setShowUsp7] = useState(false);
  //8
  const [showF8, setShowF8] = useState(false);
  const [showUsp8, setShowUsp8] = useState(false);
  const [showPrice8, setShowPrice8] = useState(false);
  //9
  const [showF9, setShowF9] = useState(false);
  const [showUsp9, setShowUsp9] = useState(false);
  //10
  const [showF10, setShowF10] = useState(false);
  const [showUsp10, setShowUsp10] = useState(false);
  const [showPrice10, setShowPrice10] = useState(false);

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
  //3 features and usp, price
  const handleCloseF3 = () => setShowF3(false);
  const handleShowF3 = () => setShowF3(true);
  const handleCloseUsp3 = () => setShowUsp3(false);
  const handleShowUsp3 = () => setShowUsp3(true);
  const handleClosePrice3 = () => setShowPrice3(false);
  const handleShowPrice3 = () => setShowPrice3(true);
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
  //6 features and usp,price
  const handleCloseF6 = () => setShowF6(false);
  const handleShowF6 = () => setShowF6(true);
  const handleCloseUsp6 = () => setShowUsp6(false);
  const handleShowUsp6 = () => setShowUsp6(true);
  const handleClosePrice6 = () => setShowPrice6(false);
  const handleShowPrice6 = () => setShowPrice6(true);
  //7 features and usp
  const handleCloseF7 = () => setShowF7(false);
  const handleShowF7 = () => setShowF7(true);
  const handleCloseUsp7 = () => setShowUsp7(false);
  const handleShowUsp7 = () => setShowUsp7(true);
  //8 features and usp,price
  const handleCloseF8 = () => setShowF8(false);
  const handleShowF8 = () => setShowF8(true);
  const handleCloseUsp8 = () => setShowUsp8(false);
  const handleShowUsp8 = () => setShowUsp8(true);
  const handleClosePrice8 = () => setShowPrice8(false);
  const handleShowPrice8 = () => setShowPrice8(true);
  //9 features and usp
  const handleCloseF9 = () => setShowF9(false);
  const handleShowF9 = () => setShowF9(true);
  const handleCloseUsp9 = () => setShowUsp9(false);
  const handleShowUsp9 = () => setShowUsp9(true);
  //10 features and usp, price
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
                <Table responsive bordered className={`${styles["thead"]}`}>
                  <thead>
                    <tr>
                      <th className={styles["tbl-hd"]}>Metrics</th>
                      <th className={styles["heading-link"]}>
                        <Link href="/whova">Whova</Link>
                      </th>
                      <th className={styles["heading-link"]}>
                        <Link href="/eventpro">EventPro</Link>
                      </th>
                      <th className={styles["heading-link"]}>
                        <Link href="/planningpod">Planning Pod</Link>
                      </th>
                      <th className={styles["heading-link"]}>
                        <Link href="/weve">Weve</Link>
                      </th>
                      <th className={styles["heading-link"]}>
                        <Link href="/ticket-tailor">Ticket Tailor</Link>
                      </th>
                      <th className={styles["heading-link"]}>
                        <Link href="/dryfta">Dryfta</Link>
                      </th>
                      <th className={styles["heading-link"]}>
                        <Link href="/activenet">ACTIVE Net</Link>
                      </th>
                      <th className={styles["heading-link"]}>
                        <Link href="/arlo">Arlo</Link>
                      </th>
                      <th className={styles["heading-link"]}>
                        <Link href="/eventorg">EventOrg</Link>
                      </th>
                      <th className={styles["tbl-hd1"]}>
                        <Link href="/airmeet">Airmeet</Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Features</td>
                      <td>
                        <p>Inventory Management</p>
                        <p>Ticket Management</p>
                        <p>Registration Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF1}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p> Calendar Management</p>
                        <p>Security Management</p>
                        <p>Customizable Dashboard</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF2}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Meeting Management</p>
                        <p>Security Management</p>
                        <p>Catering Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF3}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Group Management</p>
                        <p> Meeting Management</p>
                        <p> Internal Meetings</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF4}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Attendance Management</p>
                        <p>Contact Management</p>
                        <p>Payment Processing</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF5}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Registration Management</p>
                        <p>Wedding Management</p>
                        <p> Sponsorship Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF6}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Exhibit Management</p>
                        <p>Ticket Management</p>
                        <p>Attendee Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF7}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Travel Management</p>
                        <p> Registration Management</p>
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
                        <p>Vendor Management</p>
                        <p>Sponsorship Management</p>
                        <p>Exhibit Management</p>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          onClick={handleShowF9}
                        >
                          View More
                        </Button>
                      </td>
                      <td>
                        <p>Customizable Branding</p>
                        <p>Customizable Templates</p>
                        <p>Attendee Management</p>
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
                          <p>Award-Winning Event App</p>
                          <p>Enhanced Attendee Experience</p>
                          <p>Sponsor and Exhibitor Delight</p>
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
                          <p>Efficient Venue and Catering Management</p>
                          <p>Productivity Boosty</p>
                          <p>Testimonials and Endorsements</p>
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
                          <p>Integrated Excellence</p>
                          <p>Effortless Collaboration</p>
                          <p>Drama-Free Event Tracking</p>
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
                          <p>Virtual Event Platform</p>
                          <p>Fun Virtual Events</p>
                          <p>Collaboration with The Go Game</p>
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
                          <p>Unbeatable Value</p>
                          <p>More than Ticketing</p>
                          <p>Discover Live Events</p>
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
                          <p>Global Trust</p>
                          <p>Revenue Optimization</p>
                          <p>Virtual Event Excellence</p>
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
                          <p>Integrated and Comprehensive Solution</p>
                          <p>Child Care Management with Safety Features</p>
                          <p>League Management Efficiency</p>
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
                          <p>Repeating Events Made Easy</p>
                          <p>Additional Features for Enhanced Experience</p>
                          <p>Industry-Specific Solutions</p>
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
                          <p>Multi-Event Capability</p>
                          <p>Flexible Module System</p>
                          <p>Live Event Streaming Integration</p>
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
                          <p>Analytics and Insights</p>
                          <p>High Engagement and Collaboration</p>
                          <p>Immersive Experience</p>
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
                      {/* 1 */}
                      <td>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowF2}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      {/* 2 */}
                      <td>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowF2}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      {/* 3 */}
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
                      {/* 4 */}
                      <td>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowF2}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      {/* 5 */}
                      <td>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowF2}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      {/* 6 */}
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
                      {/* 7 */}
                      <td>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowF2}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      {/* 8 */}
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
                      {/* 9 */}
                      <td>
                        <Button
                          size="sm"
                          style={{ fontSize: "10px" }}
                          // onClick={handleShowF2}
                        >
                          Get Pricing
                        </Button>
                      </td>
                      {/* 10 */}
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
                    Whova
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <WhovaF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF1}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    Whova
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <WhovaU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
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
                    EventPro
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EventproF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF2}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    EventPro
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EventproU styles={styles} />
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
                    Planning Pod
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PlanningF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF3}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    Planning Pod
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PlanningU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp3}>
                    Close
                  </Button>
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
                    Planning Pod
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PlanningP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice3}>
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
                    Weve
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <WeveF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF4}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    Weve
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <WeveU styles={styles} />
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
                    Ticket Tailor
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <TicketF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF5}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    Ticket Tailor
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <TicketU styles={styles} />
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
                    Dryfta
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DryftaF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF6}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    Dryfta
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DryftaU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp6}>
                    Close
                  </Button>
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
                    Dryfta
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DryftaP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice6}>
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
                    ACTIVE Net
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ActiveF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF7}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    ACTIVE Net
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ActiveU styles={styles} />
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
                    Arlo
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ArloF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF8}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    Arlo
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ArloU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp8}>
                    Close
                  </Button>
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
                    Arlo
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ArloP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice8}>
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
                    EventOrg
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EventorgF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF9}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    EventOrg
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <EventorgU styles={styles} />
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
                    Airmeet
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AirmeetF styles={styles} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={handleCloseF10}>
                    Close
                  </Button>
                  <h5 className={styles['know-more']}>Want to know more about the Software <span className={styles['click-here']} onClick={handleShowSoftware}>"Click Here"</span></h5>
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
                    Airmeet
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AirmeetU styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseUsp10}>
                    Close
                  </Button>
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
                    Airmeet
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AirmeetP styles={styles} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePrice10}>
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
