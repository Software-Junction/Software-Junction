import React, { useState, useEffect } from "react";
import Ads1 from "./ads1";
import List from "./list";
import Related from "./related";
import Review from "./review";
import Compare from "./compare";
import Recommend from "./recommend";
import Trend from "./trend";
import Cmpchat from "./cmpchat";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Form,
  Modal,
  Button,
} from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import softwareData from "../home/software-data";
import Stillconfusedform from "../common/still-confused-form";
import styles from "./real.module.scss";

const Index = () => {
  const [activeKey, setActiveKey] = useState("All Products");

  const [showCall, setShowCall] = useState(false);

  const handleCloseCall = () => setShowCall(false);

  useEffect(() => {
    let timer;
    if (activeKey === "Compare") {
      timer = setTimeout(() => {
        setShowCall(true);
      }, 120000);
    } else {
      setShowCall(false);
    }
    return () => clearTimeout(timer);
  }, [activeKey]);

  const handleFormSubmit = async (values, actions) => {
    try {
      await axios.post(
        "https://software-bazaar-default-rtdb.firebaseio.com/leadform.json",
        values
      );
      actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setSubmitting(false);
    }
  };

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
                  <span style={{ color: "#f95738 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="">Real Estate Software</Link>
                  </li>
                </ul>
              </div>
              <h3>Best Real Estate Software</h3>
              <p className="my-3">
                The best real estate software are DaeBuild, Buildium, RSquare,
                Highrise, and StrategicERP. Real estate solutions help real
                estate professionals manage their business relationships with
                clients, vendors, and colleagues. Compare & choose the perfect
                software solution for your real estate business. All software
                listed by pricing, by genuine customer rating & reviews, by
                features, by industry wise, by business type, by device
                supported. Schedule FREE demo now.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["headbg-2"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Top 10 Campus Management Software</h3>
              <p>
                Explore the top 10 Campus Management Software solutions offering
                comprehensive automation, tailored customization, and global
                accessibility. Compare features, ratings, USP'S and pricing
                plans to find the perfect fit for your buisness needs.
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
          // defaultActiveKey="All Products"
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k)}
          id="justify-tab-example"
          className={`${styles["cms-tab"]} shadow mb-3`}
          // justify
        >
          <Tab eventKey="All Products" title="All Products">
            {/* <Ads1 styles={styles} /> */}
            <List styles={styles} />
            <Container>
              <Row>
                <Col lg={12}>
                  <h3 className="mt-5">Top 10 Software Comparision Table</h3>
                  <Cmpchat styles={styles} />
                </Col>
              </Row>
            </Container>
            {/* <Related styles={styles} /> */}
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
          <Tab eventKey="Compare" title="Top 10 Software Comparision Table">
            <Cmpchat styles={styles} />
          </Tab>
        </Tabs>
        {/* </Col>
          </Row>
        </Container> */}

        <Stillconfusedform show={showCall} handleClose={handleCloseCall} />
      </section>
    </>
  );
};

export default Index;
