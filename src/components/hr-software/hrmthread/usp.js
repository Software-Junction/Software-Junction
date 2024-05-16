import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Payslip Delivery via WhatsApp",
    "content": "HRMThread introduces a modern approach to payslip delivery by utilizing WhatsApp. This not only aligns with contemporary communication preferences but also streamlines the payroll process. Instant access to payslips contributes to employee satisfaction, and the eco-friendly digital delivery aligns with sustainability goals."
  },
  {
    "title": "Transparent Employee Self-Service",
    "content": "The Employee Self-Service (ESS) feature allows employees to view and update their personal payroll, benefits, and leave information. This transparency empowers employees, reduces the burden on HR for routine inquiries, and fosters trust by providing direct access to their relevant information."
  },
  {
    "title": "Compliance with Indian Payroll Regulations",
    "content": "Indian payroll regulations can be intricate, and HRMThread aims to simplify compliance. The software is designed to keep businesses updated on regulatory changes, helping them adhere to legal requirements, avoid penalties, and navigate the complex landscape of Indian labor laws."
  },
  {
    "title": "Enhanced Security for Employee Data",
    "content": "Security is paramount in HR and payroll software. HRMThread emphasizes enhanced security measures to protect sensitive employee data, ensuring that privacy is maintained, and confidential information remains secure from unauthorized access."
  },
  {
    "title": "Customer Testimonials",
    "content": "Positive testimonials from clients, such as those mentioned from Microworld Software Pvt. Ltd., Arch Pharma Labs, and Press Trust Of India, serve as real-world examples of the software's effectiveness. They provide social proof, showcasing how HRMThread has simplified processes and contributed to the success of diverse businesses."
  },
  {
    "title": "Accessibility Across Multiple Locations",
    "content": "HRMThread's availability in major cities across India, including Mumbai, Delhi & NCR, Bangalore, Hyderabad, Kolkata, Indore, Coimbatore, Vijaywada, Chennai, and Ahmedabad, makes it a practical choice for businesses with multiple branches or operations in different geographic locations. This ensures that the software is tailored to the needs of a diverse and widespread clientele."
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
            <h3 className="mb-3">USP of HRMThread</h3>
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
