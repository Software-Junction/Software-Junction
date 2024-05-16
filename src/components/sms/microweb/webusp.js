import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Custom Dashboards",
    "content": "The software provides custom dashboards for users. This means that individuals can have personalized views and insights based on their roles and responsibilities within the school. Custom dashboards contribute to a more user-friendly and efficient interface."
  },
  {
    "title": "No Need for IT Team",
    "content": "The ERP system is user-friendly and does not require a dedicated IT team for management. This feature is advantageous for schools with limited resources, as it reduces the dependency on specialized IT personnel and associated costs."
  },
  {
    "title": "Manage Multiple Institutes",
    "content": "The software is capable of managing multiple institutes. This is particularly beneficial for educational organizations with multiple branches or campuses, as they can efficiently oversee and coordinate administrative tasks across different locations from a centralized system."
  },
  {
    "title": "Automation Enabled",
    "content": "Microweb Solutions ERP is equipped with automation features. Automation streamlines various processes, reducing the need for manual intervention. This not only saves time but also minimizes the risk of errors in routine administrative tasks."
  },
  {
    "title": "Data Security",
    "content": "The system prioritizes data security. It employs measures to ensure the confidentiality and integrity of school-related information. This commitment to data security is crucial for protecting sensitive student and organizational data."
  },
  {
    "title": "No Infrastructure Needed",
    "content": "Schools do not need to invest in additional infrastructure to implement Microweb Solutions ERP. This feature leads to cost savings, as schools can leverage the software without the need for extensive hardware or server investments."
  },
  {
    "title": "Server Backup",
    "content": "The software includes server backup features. Regular server backups ensure the safety and integrity of data. In the event of data loss or system failures, schools can restore information from backups, preventing significant disruptions to operations."
  },
  {
    "title": "Quick Setup",
    "content": "Microweb Solutions ERP offers a quick setup. This means that schools can implement the system efficiently and start using it promptly. Quick setup contributes to a smooth transition to the new software solution."
  },
  {
    "title": "Reduced Workload",
    "content": "Through automation and efficient features, the ERP system helps in reducing the workload on school staff. Routine administrative tasks can be automated, allowing staff to focus on more strategic and value-added activities that contribute to the overall improvement of the educational environment."
  },
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Webusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Microweb Solutions</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["web-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Webusp;
