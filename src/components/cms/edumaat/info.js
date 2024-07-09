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
            <h3>What is EDUMAAT ?</h3>
            <p>
              EDUMAAT is a powerful and customizable Education ERP Software
              designed to streamline institute management processes in India.
              With features tailored for management, faculty, students, and
              parents, it offers automation, insightful reporting, and efficient
              communication. Available in 100+ languages, it boasts
              customization options, AWS hosting for speed, and flexible pricing
              plans. The software's success stories showcase its impact on
              institutions worldwide, emphasizing user-friendliness,
              time-saving, and excellent customer support. EDUMAAT is an
              integrated education management system providing a comprehensive
              solution for institutes seeking efficient administration and
              enhanced collaboration.
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
              src="/images/eduss.jpg"
              alt="ss"
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
