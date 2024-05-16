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
            <h3>What is Produce Inventory Control System ?</h3>
            <p>
              Produce Inventory Control System (PICS) is a robust and reliable
              software designed for businesses in the dynamic produce industry.
              It combines inventory management and traceability seamlessly,
              eliminating the need for separate software packages. PICS ensures
              accurate record-keeping through streamlined entries for receipts,
              shipments, and adjustments, making it more accurate,
              user-friendly, and cost-effective. The software, available through
              monthly subscription, meets regulatory requirements such as the
              Food Safety Modernization Act (FSMA) and the Safe Food for
              Canadians Act (SFCA). With features spanning buying, selling,
              production, and more, PICS caters to wholesalers, distributors,
              growers, and other produce-related businesses, providing
              comprehensive solutions since 1989.
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
