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
                &nbsp; Bookstore Management
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
                &nbsp; Medical Management
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
                &nbsp; Attendance management
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
                &nbsp; Student Info Management
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
                &nbsp; School Management
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
                &nbsp; Classroom Management
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
                &nbsp; Financial Management
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
                &nbsp; Facility Management
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
                &nbsp; Time Table
              </h5>
            </div>
          </Col>
          {isShowMore && (
            <>
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
                    &nbsp; Scheduling
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
                    &nbsp; Student Information / Records
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
                    &nbsp; Student Portal
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
                    &nbsp; Admission
                  </h5>
                </div>
              </Col>
            </>
          )}
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
