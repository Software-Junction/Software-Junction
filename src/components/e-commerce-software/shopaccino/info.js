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
            <h3>What is Shopaccino ?</h3>
            <p>
              Shopaccino is an all-in-one ecommerce platform designed for small
              and medium-sized businesses, offering a smarter way to
              effortlessly create, manage, and grow online stores. With a
              user-friendly interface, it allows users to seamlessly execute
              marketing strategies, receive orders, accept payments, generate
              invoices, process shipping, and manage inventory, all within a
              single software. The platform provides a comprehensive set of
              tools for product cataloging, SEO-friendly website creation,
              customer engagement through discounts and rewards, and integration
              with major payment gateways and shipping agencies. Trusted by
              popular brands, Shopaccino is recognized for its ease of use and
              has been featured in various industry accolades.
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
