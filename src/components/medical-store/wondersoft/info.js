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
            <h3>What is Wondersoft ?</h3>
            <p>
              Wondersoft's versatile POS software streamlines retail operations
              across various industries, offering tailored solutions for
              Apparel, Electrical & Electronics, Salon & Spa, Food & Beverage,
              Lifestyle & Fashion, Supermarkets, Pharmacy, and Specialty Retail.
              With features like sales management, inventory control, and
              customer relations, Wondersoft's POS ensures reliable and robust
              operations. The software provides a seamless and engaging user
              experience, with options for standalone and cloud-based solutions.
              Wondersoft's flagship products, Shopaid.Net and eShopaid, cater to
              independent outlets and medium to large retail stores,
              respectively, offering end-to-end functionalities from point of
              sale to loyalty programs and inventory management.
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
