import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "All-in-One GST Solutions",
    "content": "Chanakya ERP is the pioneering accounting software in India with an integrated GST return system. Simplifies the GST filing process, requiring just a single click within the software, eliminating the need for separate logins on the GST portal."
  },
  {
    "title": "Built-in e-Invoicing and e-WayBill Generation",
    "content": "Instantly generate and manage e-invoices and e-WayBills through Chanakya ERP. Functionality remains uninterrupted, even during GST server overloads or downtime."
  },
  {
    "title": "Diverse and Satisfied Clientele",
    "content": "<span style=\"color:#FC5185 ;\"><strong>With over 56,000</strong></span> delighted clients spanning various business segments like automobile, hardware, pharma, FMCG, grocery, and manufacturing, Chanakya ERP has a proven track record."
  },
  {
    "title": "Tailored for Professionals",
    "content": "The Pro Login feature caters specifically to GSTP, CAs, tax advocates, and accounting professionals. Enhances efficiency and reduces complications during reconciliation and GST return filing."
  },
  {
    "title": "Robust Data Security and Backup",
    "content": "Chanakya ERP prioritizes data security, employing a proven technology for automatic backup and restoration. Users can save data conveniently, even on platforms like Google Drive."
  },
  {
    "title": "Versatile Printing Options",
    "content": "Offers a variety of standard printing formats<span style=\"color:#FC5185 ;\"><strong> (15 types) </strong></span>compliant with GST regulations. Users can choose the desired format, providing flexibility for different needs."
  }
];
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Chanusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Chanakya ERP</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["cha-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Chanusp;
