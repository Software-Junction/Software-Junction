import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Techinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Innate Infotech ?</h3>
            <p>
              Innate Infotech presents a holistic software solution, uniting a
              decade of expertise in IT services. Our dedicated team excels in
              software programming, web development, SEO, and more, ensuring
              client satisfaction globally. We specialize in custom software and
              web development, domain registration, web hosting, content
              writing, and internet marketing. With a commitment to client
              success, we provide innovative solutions for web design, secure
              domain registration, reliable hosting, SEO-optimized content
              creation, and impactful internet marketing strategies. Innate
              Infotech stands as your all-encompassing partner for elevating
              online presence and maximizing business profitability.
            </p>
            <div
              className={`${styles["tec-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["tec-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Techinfo;
