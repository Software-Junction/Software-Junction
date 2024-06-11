import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Free Training and Support",
    "content": "CodeAchi offers free training sessions along with video tutorials. The training is structured to be user-friendly, enabling individuals to use the software effectively, even if they are not professional librarians. Additionally, the company provides<span style=\"color:#f95738 ;\"><strong> 24x7 online support</strong></span> through various channels, including live chat, WhatsApp, Skype, and email, ensuring assistance is readily available."
  },
  {
    "title": "Fully Featured",
    "content": "CodeAchi Library Management System is described as fully featured, encompassing all necessary functions for efficient library management. This includes features such as book entry, student entry, and versatile search options based on various criteria like title, author, rack number, and classification number."
  },
  {
    "title": "30 Days Refund Policy",
    "content": "CodeAchi expresses confidence in their product by offering a <span style=\"color:#f95738 ;\"><strong> 30-day refund policy</strong></span>. If users are not satisfied with the software within the first <span style=\"color:#f95738 ;\"><strong>30 days of purchase,</strong></span> they can request a refund, demonstrating the company's commitment to customer satisfaction."
  },
  {
    "title": "Global Trust",
    "content": "CodeAchi's Library Management System has gained trust globally, being utilized by universities, colleges, schools, and public libraries. The widespread adoption of the software in various educational and public institutions indicates its reliability and acceptance on a global scale."
  },
  {
    "title": "Cost Savings",
    "content": "Testimonials highlight cost savings achieved by schools and organizations after switching to CodeAchi's Library Management System. The ability to redirect funds previously allocated to expensive library software towards purchasing more books or upgrading infrastructure demonstrates the financial benefits of choosing CodeAchi."
  },
  {
    "title": "Efficient Data Migration",
    "content": "CodeAchi facilitates efficient data migration. Users can import their existing data, including books and borrower information, using Excel or CSV sheets quickly. This feature minimizes the effort required during the transition to CodeAchi's system, ensuring a smooth migration process."
  }
  
  
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Codeusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of CodeAchi Library Management System</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["cod-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Codeusp;
