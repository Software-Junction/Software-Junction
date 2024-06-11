import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../mmi-software/mmi.module.scss";

const uspData = [
  {
    "title": "Versatility Across Industries",
    "content": "The software is positioned as a versatile solution catering to a range of businesses, including departmental stores, electronic showrooms, garments showrooms, hardware tiles and sanitary showrooms, as well as any retail showroom and factories/mfg. units. This implies that the software is adaptable to various industry needs."
  },
  {
    "title": "Comprehensive Modules",
    "content": "The mention of \"MODULES\" suggests that the software offers a comprehensive suite of modules or features, potentially covering various aspects of business operations. This indicates that users can expect an all-in-one solution for their business management needs."
  },
  {
    "title": "Tailored for Specific Business Types",
    "content": "The software is explicitly highlighted as suitable for specific business types, such as departmental stores, electronic showrooms, garments showrooms, etc. This suggests that the software is designed with the unique requirements of these industries in mind, potentially offering specialized features tailored to their needs."
  },
  {
    "title": "Years of Establishment",
    "content": "The copyright notice \"<span style=\"color:#f95738 ;\"><strong>© 2018</strong></span> MMI Softwares Pvt. Ltd.\" indicates that the company has been in operation since 2018. This could be seen as a testament to their experience and longevity in the industry, potentially instilling trust in their products and services."
  },
  {
    "title": "Professional Website Design and Development",
    "content": "While not explicitly mentioned as a USP, the inclusion of \"WEBSITE DESIGN AND DEVELOPMENT\" in their service offerings could suggest that the company offers a holistic approach to digital solutions, covering both software and website development."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of MMI Softwares Pvt. Ltd</h3>
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
