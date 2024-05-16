import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Shareinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is WorldShare Management Services ?</h3>
            <p>
              OCLC's WorldShare is a library management system tailored to meet
              the evolving challenges libraries face today. With products such
              as WorldShare Acquisitions, WorldCat Discovery, and WorldShare
              Interlibrary Loan, it facilitates streamlined workflows, efficient
              data sharing, and global collaboration among libraries. WorldCat,
              the world's most extensive bibliographic database, serves as a
              global connector for libraries, fostering the contribution and
              enhancement of bibliographic data on a worldwide scale. WorldShare
              operates on a cloud-based platform, empowering libraries to manage
              collections effectively, automate processes, and enhance resource
              visibility. OCLC's innovative solutions enable libraries to adapt
              to changing user needs, measure impact, and achieve greater
              efficiency in the dynamic library landscape.
            </p>
            <div
              className={`${styles["shr-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["shr-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shareinfo;
