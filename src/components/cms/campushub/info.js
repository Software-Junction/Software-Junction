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
            <h3>What is icampushub ?</h3>
            <p>
              TechQuest Services presents icampushub an advanced School and
              College Management System Software meticulously crafted for
              efficient student, academic, and administrative operations. This
              ERP software, situated in Salem and Coimbatore, encompasses
              modules such as student management, attendance tracking,
              examinations, admissions, and more. Featuring a secure and
              cloud-enabled architecture, it guarantees data integrity,
              standardization, and a paperless workflow. Trusted by 100+ schools
              and colleges, this system boasts a decision aid, a user-friendly
              interface, and seamless integration, offering a streamlined
              solution for campus-wide management.
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
