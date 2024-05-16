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
            <h3>What is LOGIC ERP ?</h3>
            <p>
              LOGIC ERP offers a Retail ERP and POS Software designed to
              streamline store management. This robust and scalable solution
              covers billing, inventory, CRM, loyalty programs, schemes,
              discounts, e-commerce, accounts, and GST filing. Tailored for
              various industries such as Apparel & Footwear, FMCG, Pharma &
              Healthcare, Lifestyle & Fashion, Electrical & Electronics, Food &
              Beverages, Wellness & Salon, and Hardware, it features a complete
              suite for Enterprise Resource Planning. With support for diverse
              retailing formats, dynamic pricing, and omni-channel capabilities,
              LOGIC ERP simplifies complex inventory management and enhances
              customer engagement.
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
