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
              LOGIC ERP is a Enterprise Resource Planning (ERP) and Point of
              Sale (POS) software designed to streamline retail store
              management. With robust features encompassing billing, inventory
              management, CRM, loyalty programs, schemes, discounts, e-commerce,
              accounts, and GST filing, it caters to diverse industries
              including Apparel & Footwear, FMCG, Pharma & Healthcare, Lifestyle
              & Fashion, Electrical & Electronics, Food & Beverages, Wellness &
              Salon, and Hardware. The software supports various retail formats
              such as COCO, COFO, SIS, LFS, FOFO, and FOCO, offering a flexible
              organizational structure with multiple operating units, retail
              outlets, warehouses, and supply points. It also facilitates
              dynamic pricing, rewards, customer loyalty programs, and
              omnichannel retailing, making it a versatile solution for modern
              businesses.
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
