import React from "react";
import Lmsads1 from "./lmsads1";
import Lmslist from "./lmslist";
import Lmsrelated from "./lmsrelated";
import Lmsreview from "./lmsreview";
import Compare from "./compare";
import Lmsrecommend from "./lmsrecommend";
import Lmstrend from "./lmstrend";
import Cmpchat from "./cmpchat";
import Link from "next/link";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./lms.module.scss";

const Index = () => {
  return (
    <>
      <section className={`${styles["head-bg"]} `}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${styles["breadcr"]} `}>
                <ul>
                  <li>
                    {" "}
                    <Link href="/#">Home</Link>
                  </li>
                  &nbsp;
                  <span style={{ color: "#FC5185 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="">Library Management System</Link>
                  </li>
                </ul>
              </div>
              <h3>Best Library Management Software</h3>
              <p className="my-3">
                List of best library management software are Schoolcanvas.com,
                Teachmint, Koha, Academics, Alexandria, and LIBRARIAN. These
                library management systems automate the task of the librarian
                thus allowing better management of the library resources.
                Compare and choose the perfect software for your library
                management business. All software listed by pricing, by genuine
                customer rating & reviews, by features, by industry wise, by
                business type, by device supported. Schedule FREE demo now.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["home-cms"]} `}>
        {/* <Container>
          <Row>
            <Col lg={12}> */}
        <Tabs
          defaultActiveKey="All Products"
          id="justify-tab-example"
          className={`${styles["cms-tab"]} shadow mb-3`}
          // justify
        >
          <Tab eventKey="All Products" title="All Products">
            {/* <Lmsads1 styles={styles} /> */}
            <Lmslist styles={styles} />
            <Container>
              <Row>
                <Col lg={12}>
                <h3 className="mt-5">Top 10 Software Comparision Table</h3>
                <Cmpchat styles={styles} />
                </Col>
              </Row>
            </Container>
            {/* <Lmsrelated styles={styles} /> */}
            {/* <Review styles={styles}/> */}
            {/* <Compare styles={styles} /> */}
          </Tab>
          <Tab eventKey="Buyer's Guide" title="Buyer's Guide">
            <Lmsrecommend styles={styles} />
            {/* <Compare styles={styles} /> */}
          </Tab>
          {/* <Tab eventKey="Trends" title="Trends">
            <Lmstrend styles={styles} />
          </Tab> */}
          <Tab eventKey="Compare" title="Top 10 Software Comparision Table">
            <Cmpchat styles={styles} />
          </Tab>
        </Tabs>
        {/* </Col>
          </Row>
        </Container> */}
      </section>
    </>
  );
};

export default Index;
