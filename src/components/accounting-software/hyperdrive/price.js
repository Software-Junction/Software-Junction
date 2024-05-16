import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">HDPOS Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  HDPOS smart for sin...
                  <br />
                  <br />
                  &#8377; 1300
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>For Single cash register</li>
                <li>Very easy user interface.</li>
                <li>Manage billing</li>
                <li>Design your own barcode stickers.</li>
                <li>Graphs and Dashboard</li>
                <li>Unlimited customized reports.</li>
                <li>Different invoice printing format</li>
                <li>Shop online with no additional cost.</li>
                <li>Complete 2- way SMS interface.</li>
                <li>Stock Management</li>
                <li>Financial accounting</li>
                <li>Get started very quickly</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm">
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  HDPOS smart for Mul...
                  <br />
                  <br />
                  &#8377; 2500
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>
                  For Two clients connected to a single server on LAN or over
                  the internet
                </li>
                <li>All Features of Stand Alone Version</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm">
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  HDPOS smart on clou...
                  <br />
                  <br />
                  &#8377; 3500
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Update your price changes instantly at all locations.</li>
                <li>Manage separate price list per location if needed.</li>
                <li>
                  Single customer database to recognize your customer database
                  at any location
                </li>
                <li>Single database for your online and offline customers</li>
                <li>Central loyalty point accumulation for your customer.</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm">
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  HDPOS Synch Service
                  <br />
                  <br />
                  &#8377; 2500
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>
                  This service will be useful if you are using your own server
                  over the internet to connect more than one locations of your
                  business.
                </li>
                <li>
                  This will submit all invoices made remotely to the server and
                  also download changes made in the central server to the remote
                  client database
                </li>
                <li>
                  You will be able to Synchronize your remote computer data with
                  your server with a click of a single button on the remote
                  computer.
                </li>
                <li>
                  With this service, you will be able to generate sales invoices
                  at remote locations in Disconnected Mode.
                </li>
                <li>
                  It is possible that you face slowness or interruptions due to
                  slow and unreliable Internet connections. To work with good
                  performance and avoid system outages due to Internet
                  connection unavailability, you can use this service.
                </li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm">
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Price;
