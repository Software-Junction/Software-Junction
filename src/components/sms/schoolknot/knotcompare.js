import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
const Knotcompare = ({styles}) => {
  return (
    <>
       <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">
                <strong>Comparison of Softwares</strong>
              </h3>
            </Col>
            <Col lg={3} className={styles["knt-col-margin-mob"]}>
              <div className={`${styles["knt-box"]} shadow bg-light h-100`}>
                <div className="d-flex">
                  <div className="img pt-3 ms-4">
                    <div className=" mt-5 me-4">
                      <Image
                        src="/images/school.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className="shadow"
                      />
                    </div>
                    <p className={`${styles["knt-box-p-font"]} pt-3`}>
                      Schoolcanvas
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["knt-vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["knt-vs-box"]} p-2`}>vs</p>
                  </div>
                  <div className="img pt-3">
                    <div className=" mt-2 me-3">
                      <Image
                        src="/images/vyaparlogo.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className=" shadow "
                      />
                    </div>
                    <p className={`${styles["knt-box-p-font"]} pt-3`}>
                      Vyapar Billing software
                    </p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button size="sm" variant="primary" href="">
                    Compare
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} className={styles["knt-col-margin-mob"]}>
              <div className={`${styles["knt-box"]} shadow bg-light h-100`}>
                <div className="d-flex">
                  <div className="img pt-3 ms-4">
                    <div className=" mt-5 me-4">
                      <Image
                        src="/images/school.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className="shadow"
                      />
                    </div>
                    <p className={`${styles["knt-box-p-font"]} mt-3`}>
                    Schoolcanvas
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["knt-vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["knt-vs-box"]} p-2`}>vs</p>
                  </div>
                  <div className="img pt-3">
                    <div className=" mt-2 me-3">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className=" shadow "
                      />
                    </div>
                    <p className={`${styles["knt-box-p-font"]} pt-3`}>
                      My Bill Book{" "}
                    </p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button size="sm" variant="primary" href="">
                    Compare
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} className={styles["knt-col-margin-mob"]}>
              <div className={`${styles["knt-box"]} shadow bg-light h-100`}>
                <div className="d-flex">
                  <div className="img pt-3 ms-4">
                    <div className=" mt-5 me-4">
                      <Image
                        src="/images/school.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className="shadow"
                      />
                    </div>
                    <p className={`${styles["knt-box-p-font"]} pt-3`}>
                    Schoolcanvas
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["knt-vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["knt-vs-box"]} p-2`}>vs</p>
                  </div>
                  <div className="img pt-3">
                    <div className=" mt-2 me-3">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className=" shadow "
                      />
                    </div>
                    <p className={`${styles["knt-box-p-font"]} pt-3`}>
                      My Bill Book
                    </p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button size="sm" variant="primary" href="">
                    Compare
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} className={styles["knt-col-margin-mob"]}>
              <div className={`${styles["knt-box"]} shadow bg-light h-100`}>
                <div className="d-flex">
                  <div className="img pt-3 ms-4">
                    <div className=" mt-5 me-4">
                      <Image
                        src="/images/school.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className="shadow"
                      />
                    </div>
                    <p className={`${styles["knt-box-p-font"]} pt-3`}>
                    Schoolcanvas
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["knt-vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["knt-vs-box"]} p-2`}>vs</p>
                  </div>
                  <div className="img pt-3">
                    <div className=" mt-2 me-3">
                      <Image
                        src="/images/mybillbook.png"
                        alt="billbook"
                        height="100"
                        width="100"
                        className=" shadow "
                      />
                    </div>
                    <p className={`${styles["knt-box-p-font"]} pt-3`}>
                      My Bill Book
                    </p>
                  </div>
                </div>
                <div className="text-center my-3">
                  <Button size="sm" variant="primary" href="">
                    Compare
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Knotcompare
