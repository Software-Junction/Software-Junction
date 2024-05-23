import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Fully Integrated HMIS",
    "content": "AAROGYA provides a comprehensive Hospital Management Information System (HMIS) that integrates seamlessly with various hospital functionalities, catering to mid-size to large hospitals, investigation labs, and polyclinics."
  },
  {
    "title": "Efficient OPD Management",
    "content": "The software ensures organized Outpatient Department (OPD) management, facilitating the handling of a large number of patients attended by multiple doctors. It covers the complete OPD cycle, including registration, patient history, diagnosis, and prescription management."
  },
  {
    "title": "Comprehensive IPD Management",
    "content": "AAROGYA offers a complete Inpatient Management Module, overseeing all inpatient functionalities from patient registration to billing, with detailed tracking of patient records."
  },
  {
    "title": "Streamlined OT Management",
    "content": "The Operation Theater module efficiently handles the scheduling of operation theaters, surgery teams, patient tracking, consumable management, accounting, and roster management, including the issuance of death and birth certificates."
  },
  {
    "title": "Integrated TPA Module",
    "content": "AAROGYA comes with an integrated Third-Party Administrator (TPA) module, providing seamless insurance management for processing bill settlements of patients covered under insurance."
  },
  {
    "title": "Advanced Pathology Lab Management",
    "content": "The software supports fully configurable laboratory test reports, facilitating the definition of laboratory tests and instant ordering in both outpatient and inpatient scenarios."
  },
  {
    "title": "Centralized Pharmacy Software",
    "content": "AAROGYA includes a centralized and distributed pharmacy system with functionalities such as stock tracking, ordering, and medicine receipt from wholesalers/vendors."
  },
  {
    "title": "Robust Financial & Accounting Management",
    "content": "The financial module optimizes monetary flow, providing transparency and accountability, aiding in achieving monetary goals effectively."
  },
  {
    "title": "Integrated Payroll and HR Management",
    "content": "AAROGYA covers routine HR activities, including attendance and leave management, payroll processing, loan tracking, and employee records for both existing and contractual employees."
  },
  {
    "title": "Efficient Radiology Module",
    "content": "AAROGYA's Radiology Module allows for multiple tests, providing prompt access to results."
  },
  {
    "title": "Geographical Presence",
    "content": "With offices in Kanpur, Mumbai, Delhi, and Bengaluru, AAROGYA demonstrates a widespread geographical presence for better client accessibility and support."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Aarogya HMIS</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
