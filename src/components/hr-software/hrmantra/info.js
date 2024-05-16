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
            <h3>What is HRMantra ?</h3>
            <p>
              HRMantra, a leading HR and Payroll Software, is a revolutionary
              solution powered by advanced AI technology. With a remarkable
              23-year legacy in HRMS excellence, the software ensures a
              remarkable 10x return on investment, costing only a 3-minute
              average salary per employee while saving 30 minutes daily.
              Boasting extensive features like Human Resource Management,
              Recruitment, Attendance, and Payroll, HRMantra offers millions of
              configurable policies, multi-lingual support, and an intuitive
              interface accessible from smartphones. Trusted by 500+ clients,
              including industry giants like Google Sheets, Ferrero India, and
              Schneider, HRMantra has earned prestigious awards for its quality,
              innovation, and customer support.
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
