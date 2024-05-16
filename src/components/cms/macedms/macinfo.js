import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Macinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Mac EDMS ?</h3>
            <p>
              Mac EDMS is the premier Educational Data Management System,
              standing out with its intelligent features and cutting-edge
              technology. Trusted by over 1000 clients in India and the UAE, it
              caters to 150+ school boards, offering a customized school
              management system. With a focus on user-friendly yet affordable
              experiences, Mac EDMS brings a paperless administration, reducing
              costs by 98%, and integrates an SMS system for efficient
              communication. Boasting 20+ modules, it ensures seamless solutions
              for educational institutes, supported by 15+ years of experience,
              100% customer satisfaction, and a track record of 527 satisfied
              principals.
            </p>
            <div
              className={`${styles["mac-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["mac-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Macinfo;
