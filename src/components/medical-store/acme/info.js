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
            <h3>What is Acme Insight software ?</h3>
            <p>
              Acme's Insight software is a comprehensive solution designed for
              pharmaceutical retailers, offering a Special GST Discount of up to
              50%. This user-friendly software empowers medical retailers to
              efficiently manage sales, stock, inventory, CRM, accounting, and
              regulatory compliance, particularly adhering to the FDA rules and
              laws in India. With features such as barcode labeling, sales and
              purchase return, and robust reporting capabilities, Acme's Insight
              ensures tight control over medicine stock, enabling retailers to
              enhance profits and minimize losses. The software caters to the
              unique needs of medical businesses, fostering seamless operations
              and compliance while providing a valuable tool for business
              growth.
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
