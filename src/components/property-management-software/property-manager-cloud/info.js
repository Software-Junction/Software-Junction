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
            <h3>What is Property Manager Cloud ?</h3>
            <p>
              Property Manager Cloud (PMC) is an efficient and user-friendly
              online property management software offering a comprehensive set
              of 16 features with every plan. From paperless processes and
              tenant portals to work order systems and online rent collections,
              PMC streamlines tasks for hassle-free management. It includes
              tools like lease creation, communication simplification, tenant
              screening, accounting, vacancy publishing, and onboarding. With
              detailed property information, multiple income streams, and free
              tech support, PMC stands out as a cloud-based solution designed to
              save time, money, and headaches for property managers. Try it
              risk-free for 30 days, without any installations, and enjoy free
              automatic updates.
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
