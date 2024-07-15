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
            <h3>What is LOGIC ERP ?</h3>
            <p>
              LOGIC ERP is a Enterprise Resource Planning (ERP) and Point of
              Sale (POS) software designed to streamline retail store
              management. With robust features encompassing billing, inventory
              management, CRM, loyalty programs, schemes, discounts, e-commerce,
              accounts, and GST filing, it caters to diverse industries
              including Apparel & Footwear, FMCG, Pharma & Healthcare, Lifestyle
              & Fashion, Electrical & Electronics, Food & Beverages, Wellness &
              Salon, and Hardware. The software supports various retail formats
              such as COCO, COFO, SIS, LFS, FOFO, and FOCO, offering a flexible
              organizational structure with multiple operating units, retail
              outlets, warehouses, and supply points. It also facilitates
              dynamic pricing, rewards, customer loyalty programs, and
              omnichannel retailing, making it a versatile solution for modern
              businesses.
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
