import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Institutional Management",
    "content": "Campus 365 stands out as an all-encompassing solution that seamlessly integrates every aspect of institutional management. From admissions to exams, fees management to attendance tracking, the software covers the entire value chain of educational organizations, eliminating the need for multiple disjointed systems."
  },
  {
    "title": "Powerful and Customizable",
    "content": "Campus 365 provides a powerful set of features that cater to the diverse needs of educational institutions. What sets it apart is its capability to meet these needs without the necessity for extensive customization. The software is ready to use, saving time and resources for educational institutions."
  },
  {
    "title": "Scalability",
    "content": "With the ability to include unlimited student licenses, Campus 365 caters to institutions of all sizes - large, small, and those experiencing growth. This scalability ensures that the software evolves with the institution, accommodating changing requirements and expanding user bases."
  },
  {
    "title": "Real-Time Connectivity",
    "content": "The software promotes real-time connectivity between students, parents, and teachers through its mobile app. This feature facilitates constant communication and collaboration, keeping all stakeholders in the loop with the latest updates, events, and academic progress."
  },
  {
    "title": "Innovative Features",
    "content": "Campus 365 introduces innovative features such as paperless admission, comprehensive exam and gradebook dashboards, fee management automation, timetable creation, and attendance tracking. These features not only streamline operations but also contribute to the institution's overall efficiency."
  },
  {
    "title": "Proven Track Record",
    "content": "<span style=\"color:#FC5185 ;\"><strong>Trusted by more than 2,000 institutes in over 20 countries,</strong></span> Campus 365 has gained recognition through partnerships with notable institutions, including Daikin, Unacademy, Sanfort Group of Schools, Microtek Institute, and others. Its track record attests to its effectiveness in enhancing institutional excellence."
  },
  {
    "title": "Continuous Improvement and Updates",
    "content": "Campus 365 is committed to staying at the forefront of educational technology. The software regularly undergoes updates and improvements to incorporate the latest advancements, ensuring that institutions using it benefit from cutting-edge features and functionalities."
  },
  {
    "title": "Secure and Reliable",
    "content": "The software prioritizes data security and privacy. With data encryption and backup facilities, Campus 365 provides a secure environment for storing and retrieving sensitive school information, instilling confidence in users regarding the safety of their data."
  },
  {
    "title": "Industry Recognition",
    "content": "Campus 365 has received accolades such as the<span style=\"color:#FC5185 ;\"><strong> Top 10 Hottest Startups by CB Insights (2017),</strong></span> Best Education Platform at IAMA Awards (2017), <span style=\"color:#FC5185 ;\"><strong> and Top 20 Startups at EdTech Global Awards (2019).</strong></span> These recognitions highlight the software's impact and significance in the education technology landscape."
  }
];
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Pususp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Campus 365</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["pus-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Pususp;
