import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Info = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is My Bill Book ?</h3>
            <p>
              MyBillBook is your friendly financial assistant, here to make
              billing and invoicing a breeze. It's designed with simplicity in
              mind, so you can effortlessly create, send, and keep track of
              invoices, saving you time and reducing mistakes. Plus, it goes
              beyond just invoices - it helps you manage expenses and provides
              clear financial reports. Whether you're a small business owner or
              a freelancer, MyBillBook is your partner in staying organized and
              taking charge of your finances. Say goodbye to financial headaches
              and hello to a smoother billing experience with MyBillBook.
            </p>
            <div
              className={`${styles["priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
            >
              <h5>Pricing Plans :</h5>
              <p>
                <Link href="#idpricing">View Detailed pricing</Link>
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Image
              src="/images/astralss.png"
              alt="astralss"
              height="10"
              width="600"
              className={styles["info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
