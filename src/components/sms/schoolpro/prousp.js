import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Easy to Use",
    "content": "SchoolPRO prioritizes user-friendly design, ensuring that administrators, teachers, and staff can navigate the system effortlessly. The intuitive interface streamlines day-to-day administrative tasks, making it accessible for users with varying levels of technical expertise. With SchoolPRO, schools can save time and reduce the learning curve associated with adopting new software."
  },
  {
    "title": "Rich in Functionality",
    "content": "SchoolPRO goes beyond basic school management, offering a wealth of features to enhance overall operational efficiency. These functionalities may include student information management, attendance tracking, gradebook management, and communication tools to foster collaboration between educators, students, and parents. The platform adapts to the diverse needs of educational institutions, providing a comprehensive solution for various administrative tasks."
  },
  {
    "title": "Customizable Reporting",
    "content": "SchoolPRO empowers schools to generate customized reports tailored to their specific requirements. Users can choose relevant data points, formats, and layouts, ensuring that reports provide meaningful insights into the school's performance. Customizable reporting enables schools to adapt to changing reporting needs and facilitates data-driven decision-making."
  },
  {
    "title": "Integration",
    "content": "SchoolPRO seamlessly integrates with commercial finance software packages and learning management systems. This integration enhances overall efficiency by reducing manual data entry, minimizing errors, and creating a cohesive ecosystem of educational tools. The deep integrations with other software solutions contribute to a more streamlined and interconnected administrative process."
  },
  {
    "title": "Global Reach",
    "content": "SchoolPRO is not limited by borders and has earned the trust of educational organizations across Australia, Asia, and beyond. Its global presence signifies the software's adaptability to diverse educational contexts and its ability to meet the unique needs of schools worldwide. Schools can confidently choose SchoolPRO as a reliable partner for managing their communities on a global scale."
  },
  {
    "title": "Digistorm Integration",
    "content": "The Digistorm integration showcases SchoolPRO's commitment to innovation in the education technology space. The collaboration between Digistorm ENROL and SchoolPRO automates the enrolment process, streamlining a critical aspect of school administration. This achievement highlights SchoolPRO's ongoing efforts to provide cutting-edge solutions that enhance the overall efficiency and effectiveness of school management."
  }
  
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Prousp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of SchoolPro</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["pro-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Prousp;
