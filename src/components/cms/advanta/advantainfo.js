import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Advantainfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Advanta Rapid ERP ?</h3>
            <p>
              Advanta Rapid ERP, a flagship product from Advanta Innovations,
              stands as a versatile and comprehensive software solution.
              Tailored for schools, colleges, and businesses, this Reliable,
              Affordable, and User-friendly platform integrates 28 modules. It
              adeptly manages diverse operations, including school and college
              administration, business accounting, inventory, invoice printing,
              VAT, GST, and more. Globally trusted and adorned with awards, it
              ensures seamless operations, quick decision-making, and heightened
              productivity. With a free trial/demo available, Advanta Rapid ERP
              emerges as the go-to choice, offering a single-click solution for
              businesses seeking optimal software to streamline their
              operations.
            </p>
            <div
              className={`${styles["adv-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["adv-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Advantainfo;
