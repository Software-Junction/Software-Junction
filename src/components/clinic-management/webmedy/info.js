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
            <h3>What is Webmedy ?</h3>
            <p>
              Webmedy is a Electronic Health Records (EHR) practice management
              platform designed to enhance medical practices' efficiency and
              scalability. With a user-friendly interface and robust features,
              including customizable templates for quick note-taking, automated
              reminders, and cloud-based scheduling, Webmedy streamlines
              administrative tasks. The platform offers smart charting, clinical
              reports, and adherence to EHR standards, ensuring accurate and
              efficient patient care. Webmedy's billing module accelerates
              payment processes, while the patient portal fosters engagement,
              empowering individuals to manage their health decisions. Backed by
              top-tier data security and role-based access control, Webmedy is a
              HIPAA-compliant solution that prioritizes ease of use,
              functionality, and value for healthcare practitioners.
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
