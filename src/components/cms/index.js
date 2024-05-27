import React from "react";
import Best from "./best";
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
import styles from "./cms.module.scss";

const Index = () => {
  return (
    <>
      <section className={`${styles["head-bg"]} `}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${styles['breadcr']} `}>
                <ul>
                 <li> <Link href="/#">Home</Link></li>&nbsp;<span style={{color : '#FC5185 '}}><MdKeyboardDoubleArrowRight /></span>&nbsp;
                  <li><Link href="">Campus Management System</Link></li>
                </ul>
             </div>
              <h3>Best Campus Management Software</h3>
              <p className="my-3">
                Best campus management systems are Schoolcanvas.com, Teachmint,
                EDUMAAT, and Astral. All these campus management software and
                solutions are aimed at streamlining the routine operations of
                the institution and promoting a paperless environment.
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
                  {/* <Best styles={styles} /> */}
                  <List styles={styles} />
                  <Container>
              <Row>
                <Col lg={12}>
                <h3 className="mt-5">Top 10 Software Comparision Table</h3>
                <Cmpchat styles={styles} />
                </Col>
              </Row>
            </Container>
                  {/* <Container>
              <Row>
                <Col lg={12}>
                <h3 className="mt-5">Top 10 Software Comparision Table</h3>
                <Cmpchat styles={styles} />
                </Col>
              </Row>
            </Container>
{/* <Related styles={styles} /> */}                  {/* <Review styles={styles}/> */}
                  {/* <Compare styles={styles} /> */}
                </Tab>
                <Tab eventKey="Buyer's Guide" title="Buyer's Guide">
                  <Recommend styles={styles} />
                  {/* <Compare styles={styles} /> */}
                </Tab>
                {/* <Tab eventKey="Trends" title="Trends">
                  <Trend styles={styles} />
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
