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
            <h3>What is Produce Inventory Control System ?</h3>
            <p>
              Produce Inventory Control System (PICS) is a robust and reliable
              software designed for businesses in the dynamic produce industry.
              It combines inventory management and traceability seamlessly,
              eliminating the need for separate software packages. PICS ensures
              accurate record-keeping through streamlined entries for receipts,
              shipments, and adjustments, making it more accurate,
              user-friendly, and cost-effective. The software, available through
              monthly subscription, meets regulatory requirements such as the
              Food Safety Modernization Act (FSMA) and the Safe Food for
              Canadians Act (SFCA). With features spanning buying, selling,
              production, and more, PICS caters to wholesalers, distributors,
              growers, and other produce-related businesses, providing
              comprehensive solutions since 1989.
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
