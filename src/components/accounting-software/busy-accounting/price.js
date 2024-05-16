import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Busy Accounting Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic version
                  <br />
                  <br />
                  &#8377; 7200
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Multi-Company Accounting</li>
                <li>Unlimited level of Grouping of Accounts / Items</li>
                <li>Voucher entry while viewing reports & vice-versa</li>
                <li>Printing in Draft Mode (DOS-Like)</li>
                <li>Balance Sheet with various Schedules</li>
                <li>Outstanding Reports - Bill-by-bill basis</li>
                <li>Print Bank Deposit Slip</li>
                <li>Payment Reminder Letters</li>
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
                  Standard version
                  <br />
                  <br />
                  &#8377; 13500
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Multiple Voucher Series for each Voucher Type</li>
                <li>User-definable Optional Fields in Masters / Vouchers</li>
                <li>Option to Change Voucher Type Name</li>
                <li>All Books of Accounts & Final Results</li>
                <li>Payment Reminder Letters</li>
                <li>Multi-Currency Accounting</li>
                <li>
                  Multiple Material Centres with Unlimited level of Grouping
                </li>
                <li>Primary and Alternate Unit for each Item</li>
                <li>Party-wise Price Structure for Items / Item Groups</li>
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
                  Enterprise version
                  <br />
                  <br />
                  &#8377; 19800
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Cost Centres with Unlimited Levels of Grouping</li>
                <li>Handling of Post-dated Cheques (PDC)</li>
                <li>Royalty Calculation</li>
                <li>Stock Valuation on Multiple Methods</li>
                <li>
                  Multiple Material Centres with Unlimited level of Grouping
                </li>
                <li>Primary and Alternate Unit for each Item</li>
                <li>Sales / Purchase Order Processing</li>
                <li>Voucher entry while viewing reports & vice-versa</li>
                <li>User-configurable Final Results</li>
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
