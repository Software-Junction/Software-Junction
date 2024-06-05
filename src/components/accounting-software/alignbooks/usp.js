import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../alignbooks/align.module.scss";

const uspData = [
  {
    "title": "Approvals and User Access Management",
    "content": "Streamlined document approval hierarchy and user-based access control for enhanced oversight."
  },
  {
    "title": "Multi-Currency Support",
    "content": "Facilitates international transactions with real-time currency conversion."
  },
  {
    "title": "Multi-Location Operations",
    "content": "Operate and monitor multiple locations within a single company."
  },
  {
    "title": "Dashboards and MIS Management",
    "content": "Real-time dashboards for comprehensive business performance analysis."
  },
  {
    "title": "Email/SMS Notifications",
    "content": "Customizable alerts and automated customer communication."
  },
  {
    "title": "User-Defined Fields/Attributes",
    "content": "Capture and analyze more data for custom reports."
  },
  {
    "title": "Excel Data Import",
    "content": "Bulk invoice and voucher creation through predefined Excel templates."
  },
  {
    "title": "Salesman/Agent Based Tracking",
    "content": "Analyze sales and purchase performance with automated incentives."
  },
  {
    "title": "Price/Discount List",
    "content": "Automatically apply rates and discounts for accuracy."
  },
  {
    "title": "Document Classification",
    "content": "Extra levels of document classification for detailed analysis."
  },
  {
    "title": "Custom Document Print Format",
    "content": "Customize printable document formats with branding."
  },
  {
    "title": "Custom Reports",
    "content": "Generate custom reports as needed."
  },
  {
    "title": "Barcode Generation",
    "content": "Design and print unique barcodes with additional information."
  },
  {
    "title": "TDS/Withheld Tax Management",
    "content": "Automated TDS deduction and reporting."
  },
  {
    "title": "Open Developer API",
    "content": "Enhance functionality through API integrations."
  },
  {
    "title": "Multiple Financial Year Support",
    "content": "Access historical data for multiple years."
  },
  {
    "title": "Serial No (IMEI) based Inventory Management",
    "content": "Track inventory movement with unique serial numbers."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of AlignBooks</h3>
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
