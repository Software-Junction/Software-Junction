import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const Advantafeatures = ({ styles }) => {
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
                &nbsp; User Customisation
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
                &nbsp; Email Integration
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
                &nbsp; Reception & Front Office
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
                &nbsp; Attendance Management
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
                &nbsp; Admission
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
                &nbsp; Accounting
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
                &nbsp; Inventory Management
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
                &nbsp; Library Management
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
                &nbsp; Courses and Batches Management
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
                &nbsp; Event Management
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
                &nbsp; Academics
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
                &nbsp; Activities
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
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Mobile Support
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
                &nbsp; Hostel Management
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
                &nbsp; Database backup/restore (Management)
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
                &nbsp; SMS
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
                &nbsp; Time Table
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
                &nbsp; Registration Management
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
                &nbsp; Student Info Management
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

export default Advantafeatures;
