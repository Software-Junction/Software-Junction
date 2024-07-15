import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Needhelp from '../../common/needHelp';

const Info = ({ styles }) => {

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
      <Container>
        <Row>
          <Col lg={7}>
            <h3>What is eFacto ?</h3>
            <p>
              eFacto® is a Retail ERP Software designed for diverse retail
              formats, including supermarkets, departmental stores, and
              hypermarkets in India, particularly in Delhi NCR. With optimized
              POS operations, it accommodates a large number of concurrent users
              and extends its effectiveness to industries like cosmetics,
              fashion, gifts, manufacturing, and warehousing. Boasting 1000+
              users in grocery stores, 300+ in gift galleries, and significant
              presence in cosmetic retail, apparels, and footwear, eFacto®
              stands out for its comprehensive modules covering procurement, POS
              billing, order management, repacking, CRM, loyalty programs,
              accounting, GST compliance, manufacturing, and more. Backed by
              strong support, customization capabilities, and a secure
              infrastructure, eFacto® is not just a retail billing software but
              a complete ERP solution trusted by prominent names like L'occitane
              India, Weedo Supermarket, Mamraj Retail Ltd, and Khera
              Departmental Store.
            </p>
           {/* <div
              className={`${styles["priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
            >
              <h5>Pricing Plans :</h5>
              <p>
                <Link href="#idpricing">View Detailed pricing</Link>
              </p>
            </div> */}
            <div>
              <Button variant="primary" href="#idpricing">View Pricing</Button>
            </div>
          </Col>
       <Col lg={{ span: 4, offset: 1 }}>
            <Needhelp />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
