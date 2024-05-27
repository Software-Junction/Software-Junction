import React from "react";
import Smsads1 from "./smsads1";
import Smslist from "./smslist";
import Smsrelated from "./smsrelated";
import Smsreview from "./smsreview";
import Compare from "./compare";
import Smsrecommend from "./smsrecommend";
import Smstrend from "./smstrend";
import Cmpchat from "./cmpchat";
import Link from "next/link";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./sms.module.scss";

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
                    <Link href="">School Management System</Link>
                  </li>
                </ul>
              </div>
              <h3>Best School Management Software</h3>
              <p className="my-3">
                Best school management software includes Schoolcanvas,
                Vidhyalaya School, iGradePlus, ParentLocker, and PraxiSchool.
                Such school software automates and streamlines various
                administrative and academic tasks within educational
                institutions.
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
            {/* <Smsads1 styles={styles} /> */}
            <Smslist styles={styles} />
            <Container>
              <Row>
                <Col lg={12}>
                <h3 className="mt-5">Top 10 Software Comparision Table</h3>
                <Cmpchat styles={styles} />
                </Col>
              </Row>
            </Container>
            {/* <Smsrelated styles={styles} /> */}
            {/* <Review styles={styles}/> */}
            {/* <Compare styles={styles} /> */}
          </Tab>
          <Tab eventKey="Buyer's Guide" title="Buyer's Guide">
            <Smsrecommend styles={styles} />
            {/* <Compare styles={styles} /> */}
          </Tab>
          {/* <Tab eventKey="Trends" title="Trends">
            <Smstrend styles={styles} />
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
