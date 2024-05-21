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
            <h3>What is TYASuite's Inventory Management Software ?</h3>
            <p>
              TYASuite's Inventory Management Software is a cloud-based solution
              designed for growing businesses, offering seamless control over
              inventory at plant, warehouse, or company levels. The platform
              automates the entire inventory workflow, from requisition to stock
              management, effectively reducing working capital. With features
              like procurement, project management, compliance management, and
              more, TYASuite provides a comprehensive Cloud ERP solution for
              businesses. Headquartered in Bengaluru, TYASuite Software
              Solutions prioritizes efficiency in inventory control and offers a
              user-friendly experience to enhance overall business performance.
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
