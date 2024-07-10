import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
          </Col>

          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Student Assessment Reports
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Biometric Attendance Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Admission Receipt Generation
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Time & Attendance Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Admissions Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Faculty Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Online Results Declaration
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; E-library Members Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Transport / Fleet management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Accounting Integration
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Fee Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Lecture Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Laboratory Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Examination Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Staff Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; HR & Payroll
              </h5>
            </div>
          </Col>
          {isShowMore && (
            <>
              
            </>
          )}
          {/* <Col lg={12}>
            <div className={styles["ast-feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Features;
