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
            <h3>What is MedigyneC Gynecology Hospital Management System ?</h3>
            <p>
              The MedigyneC Gynecology Hospital Management System is an
              application designed to streamline gynecologists' workflows,
              allowing them to focus on patient care. With preloaded templates
              and advanced features, it efficiently handles administrative
              tasks, ensuring timely completion of patient records and detailed
              clinical documentation. The user-friendly interface facilitates
              specialty-specific templates, auto check-in kiosks, and digital
              images, reducing paperwork and enhancing efficiency. This solution
              offers a structured approach to women's reproductive health,
              covering a range of clinical conditions and providing actionable
              clinical intelligence. From labor and delivery to preventative
              care, MedigyneC ensures accurate and quick communication of
              patient information across stakeholders for improved healthcare
              outcomes.
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
