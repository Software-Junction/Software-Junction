import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Inventory Amplification",
    content:
      "Synchronized stock across multiple locations, including  <span style=\"color:#FC5185 ;\"><strong> 3PL </strong></span>and FBA. Automated replenishment based on low stock or backorder. Warehouse Management System (WMS) for optimized picklists and precise inventory tracking down to bin locations. Automated Workflows: Order processing that can split orders across locations based on inventory. Unified pick, pack, and ship processes across channels. Dropshipping capabilities with automated purchase order creation. Truly Omnichannel: Real-time inventory synchronization across online channels, <span style=\"color:#FC5185 ;\"><strong> B2B</strong></span>, POS, and phone orders. Catalog management with bundle creation and price lists for better control over pricing. In-built POS module for retail chains and <span style=\"color:#FC5185 ;\"><strong> B2B</strong></span> order processing.",
  },
  {
    title: "Ease of Use",
    content:
      'Primaseller prides itself on being easy to use, with a quick setup process that allows users to connect all channels within <span style="color:#FC5185 ;"><strong>10</strong></span> minutes. Features like importing catalogs and customers from online channels and Excel imports contribute to user-friendly operations.',
  },
  {
    title: "Focus on Growth",
    content:
      "The software enables businesses to focus on growth by unifying operations. This is achieved by eliminating the need for time-consuming tasks like manually managing spreadsheets, logging into multiple seller panels,",
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Primaseller</h3>
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
