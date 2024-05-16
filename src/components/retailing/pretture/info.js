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
            <h3>What is Pretture ?</h3>
            <p>
              Pretture is a cloud solution designed to streamline manufacturing
              processes for small to mid-sized businesses in the fashion
              industry. This software offers real-time inventory tracking,
              allowing users to monitor raw materials, work-in-progress,
              wastage, and finished goods seamlessly. With easy accessibility
              via smartphones, Prêtture provides insights into manufacturing
              unit activities, job works status, and precise costing at any
              production stage. The system ensures organized inventory
              management, eliminates missing inventories, and proactively alerts
              users about overdue job works or pending purchase orders.
              Prêtture's user-friendly curation program ensures a smooth
              onboarding process for teams, enhancing overall operational
              efficiency in the fashion manufacturing sector.
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
