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
            <h3>What is IntelliJ IDEA ?</h3>
            <p>
              IntelliJ IDEA is a leading integrated development environment
              (IDE) designed by JetBrains for Java and Kotlin developers.
              Offering the most advanced code editor, it facilitates
              high-quality coding with real-time error detection and improvement
              suggestions. With deep code understanding, it provides swift
              navigation and intelligent assistance. The Ultimate edition
              extends features to cover web development, profiling, Spring,
              Jakarta EE, database tools, cloud deployment, and remote
              development. Notably, the introduction of JetBrains AI Assistant
              enhances productivity by offering context-aware chat, code
              generation, and error explanations. Trusted by 78% of Java
              developers, IntelliJ IDEA ensures an unbeatable toolset and a
              seamless development experience.
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
