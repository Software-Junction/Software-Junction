import React from "react";
import Ads1 from "./ads1";
import List from "./list";
import Related from "./related";
import Review from "./review";
import Compare from "./compare";
import Recommend from "./recommend";
import Trend from "./trend";
import Cmpchat from "./cmpchat";
import Link from "next/link";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./crm.module.scss";

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
                    <Link href="">CRM Software</Link>
                  </li>
                </ul>
              </div>
              <h3>Best CRM Software</h3>
              <p className="my-3">
                Top-rated CRM Software is Salesforce Sales Cloud, HubSpot CRM,
                Zoho CRM, Pipedrive & Freshsales CRM. These CRM tools assist
                businesses in maintaining strong connections with customers,
                optimizing operations, and enhancing overall profitability.
                Compare a diverse range of software options to find the perfect
                solution for your needs and make a confident purchase decision
                with updated reviews, features, pricing, and free demo.
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
            {/* <Ads1 styles={styles} /> */}
            <List styles={styles} />
            <Related styles={styles} />
            {/* <Review styles={styles}/> */}
            {/* <Compare styles={styles} /> */}
          </Tab>
          <Tab eventKey="Buyer's Guide" title="Buyer's Guide">
            <Recommend styles={styles} />
            {/* <Compare styles={styles} /> */}
          </Tab>
          {/* <Tab eventKey="Trends" title="Trends">
            <Trend styles={styles} />
          </Tab> */}
          <Tab eventKey="Compare" title="Compare">
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
