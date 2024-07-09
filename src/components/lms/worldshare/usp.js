import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../worldshare/share.module.scss";

const uspData = [
  {
    "title": "Integrated Management Services",
    "content": "OCLC's WorldShare platform offers a cloud-based, open architecture for library management. This enables libraries to streamline their workflows and achieve greater efficiencies in managing various aspects of their operations. The integrated nature of the platform allows for seamless sharing of data, collaborative work, and efficient resource allocation across different departments and locations within a library."
  },
  {
    "title": "WorldCat - Comprehensive Database",
    "content": "WorldCat is positioned as the most comprehensive database of information about library collections globally. It serves as a collective resource where libraries contribute and share bibliographic data. The aim is to connect users to a vast array of cultural and scholarly resources, making it a go-to platform for individuals seeking information from libraries around the world."
  },
  {
    "title": "Resource Sharing Revolutionized",
    "content": "OCLC's resource sharing services, particularly WorldShare Interlibrary Loan, bring automation to interlibrary borrowing and lending processes. This not only speeds up the fulfillment of interlibrary loan requests but also centralizes resource sharing workflows. The emphasis is on efficiency, reducing the complexities that may arise from managing resource sharing in multiple systems."
  },
  {
    "title": "Metadata Services for Visibility",
    "content": "OCLC Cataloging and Metadata Subscription is designed to save time for libraries by offering streamlined cataloging services. This enhances the visibility of library collections, making them more accessible to users. Dewey Services contribute to improved organization by applying the Dewey Decimal Classification system to materials. Contract Cataloging provides expert assistance for cataloging projects."
  },
  {
    "title": "Discovery and Reference Services",
    "content": "WorldCat.org and WorldCat Discovery are services geared towards improving the web visibility of library resources. WorldCat.org specifically focuses on web visibility, and WorldCat Discovery allows for a single search across all library collections. The goal is to ensure that users can easily find and access the materials they need, whether within their local library or from libraries worldwide."
  },
  {
    "title": "Library Analytics and Collection Management",
    "content": "Choreo Insights is highlighted as a library analytics solution that utilizes WorldCat holdings data. This allows libraries to gain insights into their collections and user behavior. GreenGlass is mentioned as a data-driven collection management and visualization tool, providing libraries with the means to make informed decisions about their collections based on data analysis."
  },
  {
    "title": "Global Connectivity",
    "content": "OCLC emphasizes its role in connecting libraries globally. The member stories provided showcase examples of libraries gaining international recognition for their efforts in preserving and sharing cultural heritage through OCLC's services."
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
            <h3 className="mb-3">USP of WorldShare Management Services</h3>
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
