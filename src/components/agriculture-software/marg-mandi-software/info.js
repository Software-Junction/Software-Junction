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
            <h3>What is Marg Mandi Software ?</h3>
            <p>
              Marg Mandi Software is a agricultural market solution that
              empowers farmers with smart mandi software, offering features like
              market analysis, inventory management, and efficient trading. With
              over 1 million businesses served worldwide, Marg ERP ensures
              seamless operations, including 100% free e-invoicing, auto cloud
              backup, robust data security, and easy, fast billing. The software
              covers diverse aspects such as GST filing, auto-bank
              reconciliation, annual reporting, credit limit monitoring, and
              live tracking of billing and dispatch. Marg Mandi Software
              revolutionizes the agri-market experience, maximizing profits, and
              optimizing operations for a hassle-free and modern market
              management approach.
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
