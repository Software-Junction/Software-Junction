import React from "react";
import { Container, Row, Col, Button,  Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Ads1 = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mt-5 mb-4">Best Softwares</h3>
          </Col>
          <Col lg={3} className={styles['colmob-card']}>
            <Card border="" className={`${styles['card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Teachmint
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["card-title"]}>
                      Teachmint
                    </Card.Title>
                  </div>
                  <div>
                    <p
                      className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                      style={{backgroundColor: '#f95738 '}}
                    >
                      4.4 <FaStar />
                    </p>
                  </div>
                </div>
                <Card.Text>
                  Digitize your school and become future ready now
                </Card.Text>
                <Button
                  className={styles["card-btn1"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles['colmob-card']}>
            <Card border="" className={`${styles['card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
              >
                EDUMAAT
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["card-title"]}>
                      EDUMAAT
                    </Card.Title>
                  </div>
                  <div>
                    <p
                      className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                      style={{backgroundColor: '#f95738 '}}
                    >
                      4.4 <FaStar />
                    </p>
                  </div>
                </div>
                <Card.Text>Best Campus Management system</Card.Text>
                <Button
                  className={styles["card-btn"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles['colmob-card']}>
            <Card border="" className={`${styles['card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Schoolcanvas
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["card-title"]}>
                      Schoolcanvas
                    </Card.Title>
                  </div>
                  <div>
                    <p
                      className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                      style={{backgroundColor: '#f95738 '}}
                    >
                      4.4 <FaStar />
                    </p>
                  </div>
                </div>
                <Card.Text>No.1 school ERP software</Card.Text>
                <Button
                  className={styles["card-btn"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles['colmob-card']}>
            <Card border="" className={`${styles['card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Astral School
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["card-title"]}>
                      Astral School
                    </Card.Title>
                  </div>
                  <div> 
                    <p
                      className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                      style={{backgroundColor: '#f95738 '}}
                    >
                      4.4 <FaStar />
                    </p>
                  </div>
                </div>
                <Card.Text>System by Astral Technologies</Card.Text>
                <Button
                  className={styles["card-btn"]}
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
  );
};

export default Ads1;
