import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Lmsreview = ({ styles }) => {
  return (
    <>
      <section className={`${styles["review"]} mt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Reviews</h3>
            </Col>
            <Col lg={4}>
              <div
                className={`${styles["main-box"]} box shadow mt-4 rounded-4 border border-secondary-subtle`}
              >
                <div className="d-flex p-4">
                  <div>
                    <Image
                      src="/images/school.png"
                      alt="school"
                      width="150"
                      height="10"
                      className={`${styles["box-img1"]} border p-4 rounded-3 shadow me-4`}
                    />
                  </div>
                  <div>
                    <h5>Schoolcanvas.com</h5>
                    <p>No. 1 School ERP Software</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <p
                          className={`${styles["p-style1"]} border text-light  ps-2 pt-1 rounded-3 `}
                          style={{backgroundColor: '#FC5185 '}}
                        >
                          4.4 <FaStar />
                        </p>
                      </div>
                      <div>
                        <p>(4 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Schoolcanvas.com automates the entire school using a single
                  platform.From Admission to certificate generation,fee
                  collection and academic analysis-automate the infinite array
                  of school processes and work flows in minutes with all in one
                  360 degree solution.
                </p>
                <div className="ms-4">
                  <p>
                    Reviwed by :<span className="fw-bold"> Hemant</span>
                  </p>
                </div>
                <div className={`${styles["box-btn"]} mb-3 ms-4`}>
                  <Button size="sm" variant="primary" href="">
                    See all review
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div
                className={`${styles["main-box"]} box shadow mt-4 rounded-4 border border-secondary-subtle`}
              >
                <div className="d-flex p-4">
                  <div>
                    <Image
                      src="/images/school.png"
                      alt="school"
                      width="150"
                      height="10"
                      className={`${styles["box-img1"]} border p-4 rounded-3 shadow me-4`}
                    />
                  </div>
                  <div>
                    <h5>Schoolcanvas.com</h5>
                    <p>No. 1 School ERP Software</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <p
                          className={`${styles["p-style1"]} border text-light  ps-2 pt-1 rounded-3 `}
                          style={{backgroundColor: '#FC5185 '}}
                        >
                          4.4 <FaStar />
                        </p>
                      </div>
                      <div>
                        <p>(4 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Schoolcanvas.com automates the entire school using a single
                  platform.From Admission to certificate generation,fee
                  collection and academic analysis-automate the infinite array
                  of school processes and work flows in minutes with all in one
                  360 degree solution.
                </p>
                <div className="ms-4">
                  <p>
                    Reviwed by :<span className="fw-bold"> Hemant</span>
                  </p>
                </div>
                <div className={`${styles["box-btn"]} mb-3 ms-4`}>
                  <Button size="sm" variant="primary" href="">
                    See all review
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div
                className={`${styles["main-box"]} box shadow mt-4 rounded-4 border border-secondary-subtle`}
              >
                <div className="d-flex p-4">
                  <div>
                    <Image
                      src="/images/school.png"
                      alt="school"
                      width="150"
                      height="10"
                      className={`${styles["box-img1"]} border p-4 rounded-3 shadow me-4`}
                    />
                  </div>
                  <div>
                    <h5>Schoolcanvas.com</h5>
                    <p>No. 1 School ERP Software</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <p
                          className={`${styles["p-style1"]} border text-light  ps-2 pt-1 rounded-3 `}
                          style={{backgroundColor: '#FC5185 '}}
                        >
                          4.4 <FaStar />
                        </p>
                      </div>
                      <div>
                        <p>(4 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Schoolcanvas.com automates the entire school using a single
                  platform.From Admission to certificate generation,fee
                  collection and academic analysis-automate the infinite array
                  of school processes and work flows in minutes with all in one
                  360 degree solution.
                </p>
                <div className="ms-4">
                  <p>
                    Reviwed by :<span className="fw-bold"> Hemant</span>
                  </p>
                </div>
                <div className={`${styles["box-btn"]} mb-3 ms-4`}>
                  <Button size="sm" variant="primary" href="">
                    See all review
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Lmsreview;
