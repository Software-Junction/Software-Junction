import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
const Smartcompare = ({styles}) => {
  return (
    <>
       <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">
                <strong>Comparison of Softwares</strong>
              </h3>
            </Col>
            <Col lg={3} className={styles["smt-col-margin-mob"]}>
              <div className={`${styles["smt-box"]} shadow bg-light h-100`}>
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
                    <p className={`${styles["smt-box-p-font"]} pt-3`}>
                      Schoolcanvas
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["smt-vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["smt-vs-box"]} p-2`}>vs</p>
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
                    <p className={`${styles["smt-box-p-font"]} pt-3`}>
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

            <Col lg={3} className={styles["smt-col-margin-mob"]}>
              <div className={`${styles["smt-box"]} shadow bg-light h-100`}>
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
                    <p className={`${styles["smt-box-p-font"]} mt-3`}>
                    Schoolcanvas
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["smt-vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["smt-vs-box"]} p-2`}>vs</p>
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
                    <p className={`${styles["smt-box-p-font"]} pt-3`}>
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

            <Col lg={3} className={styles["smt-col-margin-mob"]}>
              <div className={`${styles["smt-box"]} shadow bg-light h-100`}>
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
                    <p className={`${styles["smt-box-p-font"]} pt-3`}>
                    Schoolcanvas
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["smt-vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["smt-vs-box"]} p-2`}>vs</p>
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
                    <p className={`${styles["smt-box-p-font"]} pt-3`}>
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

            <Col lg={3} className={styles["smt-col-margin-mob"]}>
              <div className={`${styles["smt-box"]} shadow bg-light h-100`}>
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
                    <p className={`${styles["smt-box-p-font"]} pt-3`}>
                    Schoolcanvas
                    </p>
                  </div>
                  <div className="hr">
                    <hr className={styles["smt-vs-hr"]} />
                  </div>
                  <div>
                    <p className={`${styles["smt-vs-box"]} p-2`}>vs</p>
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
                    <p className={`${styles["smt-box-p-font"]} pt-3`}>
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

export default Smartcompare
