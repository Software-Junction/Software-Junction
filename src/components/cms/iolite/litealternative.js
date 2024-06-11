import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Litealternative = ({styles}) => {
  return (
    <>
     <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Alternatives of Iolite School Management Software</h3>
          </Col>
          <Col lg={3} className={styles["lite-card-mob-mar"]}>
            <Card border="" className={`${styles['lite-card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["lite-card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Digital School
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["lite-card-title"]}>
                      Digital School
                    </Card.Title>
                  </div>
                  <div>
                    <Link href="/product">
                      <p
                        className={`${styles["lite-p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                        style={{backgroundColor: '#f95738 '}}
                      >
                        4.4 <FaStar />
                      </p>
                    </Link>
                  </div>
                </div>
                <Card.Text>
                  Best Software Unlimited student Renewal free
                  <br />
                  <br />
                  Starting at <strong>$2000</strong>
                </Card.Text>
                <Button
                  className={styles["lite-card-btn1"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles["lite-card-mob-mar"]}>
            <Card border="" className={`${styles['lite-card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["lite-card-head"]} bg-dark text-light fw-bold p-5`}
              >
                EDUMAAT
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["lite-card-title"]}>
                      EDUMAAT
                    </Card.Title>
                  </div>
                  <div>
                    <Link href="/product">
                      <p
                        className={`${styles["lite-p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                        style={{backgroundColor: '#f95738 '}}
                      >
                        4.4 <FaStar />
                      </p>
                    </Link>
                  </div>
                </div>
                <Card.Text>
                  Best Campus Management system
                  <br />
                  <br />
                  Starting at <strong>$15</strong>
                </Card.Text>
                <Button
                  className={styles["lite-card-btn"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles["lite-card-mob-mar"]}>
            <Card border="" className={`${styles['lite-card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["lite-card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Testinvite
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["lite-card-title"]}>
                      Testinvite
                    </Card.Title>
                  </div>
                  <div>
                    <Link href="/product">
                      <p
                        className={`${styles["lite-p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                        style={{backgroundColor: '#f95738 '}}
                      >
                        4.4 <FaStar />
                      </p>
                    </Link>
                  </div>
                </div>
                <Card.Text>
                Online Exam Software for Recruiters and Trainers
                  <br />
                  <br />
                  Starting at <strong>$7200</strong>
                </Card.Text>
                <Button
                  className={styles["lite-card-btn1"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles["lite-card-mob-mar"]}>
            <Card border="" className={`${styles['lite-card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["lite-card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Astral School
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["lite-card-title"]}>
                      Astral School
                    </Card.Title>
                  </div>
                  <div>
                    <Link href="/product">
                      <p
                        className={`${styles["lite-p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                        style={{backgroundColor: '#f95738 '}}
                      >
                        4.4 <FaStar />
                      </p>
                    </Link>
                  </div>
                </div>
                <Card.Text>
                  System by Astral Technologies
                  <br />
                  <br />
                  Starting at <strong>$2000</strong>
                </Card.Text>
                <Button
                  className={styles["lite-card-btn"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> 
    </>
  )
}

export default Litealternative
