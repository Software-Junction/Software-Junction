import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Real-time Inventory Tracking",
    "content": "Prêtture offers a real-time inventory tracking solution for raw material, work-in-progress, wastage, and finished goods. It helps manufacturers avoid the challenges of managing multiple production batches through Excel sheets or inefficient software."
  },
  {
    "title": "Cost Tracking and Analysis",
    "content": "Prêtture enables precise tracking of costs associated with materials, work-in-progress, and finished goods at various stages of production. Users can track consumption, wastage costs, process costs, and overall production batch costs."
  },
  {
    "title": "Auto BOM (Bill of Material)",
    "content": "The software automates the creation of Bills of Material, streamlining the production process and ensuring accuracy."
  },
  {
    "title": "Proactive Alerts for Timely Decisions",
    "content": "Prêtture provides proactive alerts for overdue job works and pending purchase orders, helping users make timely decisions and avoid wastage or order cancellations."
  },
  {
    "title": "Performance Analysis",
    "content": "Users can analyze the performance of in-house and outsourced jobbers through consolidated reports, identifying efficient contributors and areas for improvement."
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
            <h3 className="mb-3">USP of Pretture</h3>
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
