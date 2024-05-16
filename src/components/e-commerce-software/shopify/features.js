import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Design Template Gallery" },
  { title: "Store Customization" },
  { title: "Discounts & Coupons" },
  { title: "Custom Domain" },
  { title: "Catalog Management" },
  { title: "DIY Store" },
  { title: "Content Management System" },
  { title: "Orders Management" },
  { title: "Bulk Product Upload" },
  { title: "Hosting" },
  { title: "Customer Support" },
  { title: "Inventory Management" },
  { title: "Multi Currency" },
  { title: "Payment Gateway Integration" },
  { title: "Mobile Friendly Store" },
  { title: "International Payment Acceptance" },
  { title: "Integration with marketplaces" },
  { title: "SEO and Online Marketing" },
  { title: "POS invoicing" },
  { title: "Product Database" },
  { title: "Security" },
  { title: "Abandoned Cart Reminder" },
  { title: "Courier Tracking In-Platform" },
  { title: "Secure Sockets Layer (SSL)" },
];

const moreFeatures = [
  { title: "Mobile App" },
  { title: "External Apps & In-Built Features" },
  { title: "Quick Checkout" },
  { title: "Offer & Offer Popup" },
  { title: "Storage & Number of Products" },
  { title: "Order Status / Tracking and History" },
];

const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
          </Col>

          {featuresData.map((feature, index) => (
            <Col lg={3} className="mb-4" key={index}>
              <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                {" "}
                <h5>
                  <span style={{ color: "#FC5185 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {feature.title}
                </h5>
              </div>
            </Col>
          ))}

          {isShowMore && (
            <>
              {moreFeatures.map((featureM, index) => (
                <Col lg={3} className="mb-4" key={index}>
                  <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                    {" "}
                    <h5>
                      <span style={{ color: "#FC5185 " }}>
                        <FaCheck />
                      </span>
                      &nbsp; {featureM.title}
                    </h5>
                  </div>
                </Col>
              ))}
            </>
          )}
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
