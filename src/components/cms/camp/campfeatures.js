import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const Campfeatures = ({ styles }) => {
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
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
                  <FaCheck />
                </span>
                &nbsp; Purchase Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
                  <FaCheck />
                </span>
                &nbsp; Student Evaluation Report
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#FC5185 " }}>
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
                <span style={{ color: "#FC5185 " }}>
                  <FaCheck />
                </span>
                &nbsp; HRM
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#FC5185 " }}>
                  <FaCheck />
                </span>
                &nbsp; College Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#FC5185 " }}>
                  <FaCheck />
                </span>
                &nbsp; Assets
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

export default Campfeatures;
