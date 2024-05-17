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
            <h3>What is Sleek Bill Online ?</h3>
            <p>
              Sleek Bill Online is a secure online invoicing software designed
              for modern businesses, including small enterprises, freelancers,
              and accountants in India. With multi-user access from any PC or
              tablet, it allows seamless collaboration across devices. The
              software offers features such as inventory management,
              GST-compliant billing, personalized templates, real-time stock
              records, and various invoicing-related documents. Users can
              generate proforma invoices, quotes, delivery notes, and more,
              ensuring efficient business operations. With a focus on GST
              integration and compliance, Sleek Bill Online enables accurate
              calculation of GST rates and provides access to business data from
              anywhere. The cloud-based platform, founded in 2013, has garnered
              over 40,000 clients in India and offers free training, 24/7
              support, and a commitment to security and privacy. Get started
              today with free and easy invoicing, and let Sleek Bill Online
              handle your billing needs.
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
