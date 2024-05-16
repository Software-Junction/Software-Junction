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
            <h3>What is Book Keeper ?</h3>
            <p>
              BookkeeperApp is a powerful and user-friendly financial software
              designed to streamline your financial management needs. Whether
              you're a small business owner, freelancer, or an individual
              looking to take control of your finances, BookkeeperApp offers a
              comprehensive suite of tools for budgeting, expense tracking, and
              income management. With its intuitive interface and robust
              features, you can effortlessly monitor your financial health,
              create customized reports, and plan for a secure financial future.
              Join thousands of satisfied users and experience the convenience
              and control that BookkeeperApp brings to your financial world.
              Start making smarter financial decisions today with BookkeeperApp.
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
