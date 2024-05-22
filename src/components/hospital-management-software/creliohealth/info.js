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
            <h3>What is CrelioHealth LIMS ?</h3>
            <p>
              CrelioHealth's Laboratory Information Management System (LIMS)
              stands out as the industry's best solution, boasting a 92%
              satisfaction rate worldwide. This user-friendly and cost-effective
              system optimizes lab operations from order booking to report
              delivery, ensuring streamlined processes and enhanced
              productivity. With features like configurable forms, automated
              communications, and sample barcoding, it revolutionizes sample
              journey management. The LIMS System also excels in financial
              aspects, integrating seamlessly with payment collections, RCM
              vendors, and providing detailed MIS reports. CrelioHealth's LIMS
              is the epitome of a future-ready, efficient, and secure lab
              management solution, applauded by customers for its transformative
              impact on laboratory workflows.
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
