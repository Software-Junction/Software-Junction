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
            <h3>What is Roomsy ?</h3>
            <p>
              Roomsy is a efficient Hotel Property Management System (PMS)
              designed for hotels, bed & breakfasts, and guesthouses across 43
              countries. Boasting a clean booking calendar, room management,
              customizable invoices, and online booking engine, Roomsy
              simplifies operations with necessary features. Integrated with
              250+ Online Travel Agencies (OTAs), it offers secure payment
              processing and robust reporting. Trusted by global customers,
              Roomsy provides a 14-day risk-free trial, requiring no credit card
              details, making it an ideal solution for small independent
              property owners seeking hassle-free hotel management.
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
