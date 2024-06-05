import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../bhamni/bha.module.scss'

const uspData = [
  {
    "title": "Integrated Solution",
    "content": "Bahmni combines and enhances existing open source products, including OpenMRS for electronic medical records, OpenERP for inventory and billing, OpenELIS for laboratory management, and DICOM/PACS integration. This integration provides a comprehensive solution for managing patient information from registration to billing."
  },
  {
    "title": "Infrastructure Appropriate",
    "content": "Designed for low-resource settings, Bahmni can be hosted and operated at the hospital site, requiring no dependence on the Internet. This feature is crucial for healthcare facilities in rural areas with limited connectivity."
  },
  {
    "title": "Modular Approach",
    "content": "Bahmni follows a modular approach, enabling users to choose specific components and integrate them with existing systems. This modular flexibility ensures that hospitals can tailor the software to their requirements."
  },
  {
    "title": "Extensive Implementations",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong>500 sites across 50+</strong></span> countries and more than<span style=\"color:#FC5185 ;\"><strong> 4,000</strong></span> users managing over <span style=\"color:#FC5185 ;\"><strong>2 million</strong></span> patient records, Bahmni has a proven track record of successful implementations worldwide."
  },
  {
    "title": "Digital Public Good Recognition",
    "content": "Bahmni has been recognized as a Digital Public Good, listed in various catalogues, including the Digital Public Goods Alliance Registry, UNDP Digital X, and the Digital Impact Alliance (DIAL) solution catalogue."
  },
  {
    "title": "Collaboration with SNOMED CT",
    "content": "The collaboration with SNOMED CT demonstrates Bahmni's commitment to interoperability and standards. The integration with Snowstorm terminology server allows for recording data in SNOMED CT, contributing to better insights and decision-making in healthcare."
  },
  {
    "title": "Open Source and Community-Driven",
    "content": "Managed by the Bahmni Coalition, Bahmni is an open source project, encouraging community participation. This open approach fosters innovation, transparency, and continuous improvement."
  }
  
  
  
  
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Bahmni</h3>
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
