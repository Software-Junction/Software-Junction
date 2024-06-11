import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const Compare = ({ styles }) => {
  return (
    <>
      <section className={`${styles["compare"]} mt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Compare Pricing Plans Of Top Softwares </h3>
            </Col>
            <Col lg={12}>
              <div className={`${styles['main-table']} border bg-light rounded-4  my-4`}>
                <Table responsive="sm" className={`${styles["thead"]} `}>
                  <thead>
                    <tr>
                      <th className={styles['tbl-hd']}>Name</th>
                      <th>Ratings & Reviews</th>
                      <th>Starting Price</th>
                      <th className={styles['tbl-hd1']}>Free Trial</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Teachmint</td>
                      <td>
                        <div className={`${styles['td-mob']} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{backgroundColor: '#f95738 '}}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                          <div>
                            <p>(4 Reviews)</p>
                          </div>
                        </div>
                      </td>
                      <td>Available on Request</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Edisapp School Management ERP</td>
                      <td>
                        <div className={`${styles['td-mob']} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{backgroundColor: '#f95738 '}}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                          <div>
                            <p>(4 Reviews)</p>
                          </div>
                        </div>
                      </td>
                      <td>Available on Request</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Campus 365</td>
                      <td>
                        {" "}
                        <div className={`${styles['td-mob']} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{backgroundColor: '#f95738 '}}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                          <div>
                            <p>(4 Reviews)</p>
                          </div>
                        </div>
                      </td>
                      <td>Available on Request</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>EDUMAAT</td>
                      <td>
                        {" "}
                        <div className={`${styles['td-mob']} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{backgroundColor: '#f95738 '}}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                          <div>
                            <p>(4 Reviews)</p>
                          </div>
                        </div>
                      </td>
                      <td>Available on Request</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Fedena</td>
                      <td>
                        {" "}
                        <div className={`${styles['td-mob']} `}>
                          <div className="me-3">
                            <p
                              className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3 `}
                              style={{backgroundColor: '#f95738 '}}
                            >
                              4.4 <FaStar />
                            </p>
                          </div>
                          <div>
                            <p>(4 Reviews)</p>
                          </div>
                        </div>
                      </td>
                      <td>Available on Request</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Compare;
