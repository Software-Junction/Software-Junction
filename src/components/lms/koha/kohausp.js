import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Free and Open Source",
    "content": "Koha being the 'world's first free and open source library system' means that the software is not only free to use but also comes with the freedom for users to view, modify, and distribute the source code. This fosters transparency, community collaboration, and the ability for libraries to customize the system according to their specific needs without the constraints of proprietary software."
  },
  {
    "title": "Community-Driven Development",
    "content": "The mention that development is sponsored by libraries, volunteers, and support companies worldwide emphasizes the collaborative nature of Koha's development. Libraries, regardless of their size or location, can contribute to its improvement. The diverse community involvement ensures that the software is shaped by the actual needs and experiences of libraries globally."
  },
  {
    "title": "Scalability",
    "content": "Koha being a scalable library management system means that it can accommodate libraries of different sizes and complexities. Whether it's a small community library or a large academic institution, Koha is designed to scale and adapt to the requirements of the library it serves."
  },
  {
    "title": "Regular Releases",
    "content": "The reference to a release schedule indicates that Koha has a commitment to regular updates and improvements. This benefits users by ensuring that the software stays current with the latest technologies, security patches, and feature enhancements. Regular releases also demonstrate an active and responsive development team."
  },
  {
    "title": "Global Community Support",
    "content": "The availability of community support through mailing lists, web forums, and social media channels suggests a robust ecosystem where users can seek assistance, share experiences, and collaborate on problem-solving. This creates a sense of community among Koha users globally, providing a valuable support network."
  },
  {
    "title": "Responsive Design",
    "content": "The mention of responsive devices indicates that Koha is designed to be accessible and user-friendly across various devices, including desktops, tablets, and mobile phones. This responsiveness is crucial for libraries and users who may need to access the system from different devices and locations."
  }
  
  
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Kohausp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Koha ILS</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["koh-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Kohausp;
