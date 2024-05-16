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
            <h3>What is PeopleWorks ?</h3>
            <p>
              PeopleWorks is an advanced Human Resource Management System (HRMS)
              offering intelligent solutions across industries. From streamlined
              recruitment and electronic onboarding to efficient payroll
              management and productivity enhancement, PeopleWorks ensures
              end-to-end HR support. Prioritizing user experience, talent
              management, and mobility solutions, it provides a centralized
              platform that automates tasks and aligns organizational and
              employee goals seamlessly. With a commitment to speedy
              implementation, customized setups, and exceptional customer
              support, PeopleWorks stands as a futuristic, innovative, and
              scalable HRMS choice, addressing the evolving needs of modern
              businesses.
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
