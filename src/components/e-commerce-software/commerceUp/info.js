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
            <h3>What is CommerceUp ?</h3>
            <p>
              CommerceUp is an advanced SaaS e-commerce platform designed to
              effortlessly create dynamic, responsive websites and mobile
              applications. Tailored for diverse business needs, it offers
              customizable, reliable, and scalable solutions with a focus on
              boosting productivity. Trusted by industry leaders like Vperfumes
              and Elmart, CommerceUp stands out with features such as
              multi-language support, advanced SEO, and seamless integration
              with various platforms. With 24x7 support, easy migration, and a
              range of hosting solutions, CommerceUp empowers businesses to
              establish a global online presence, offering a comprehensive
              solution for end-to-end e-commerce success.
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
