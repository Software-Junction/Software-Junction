import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Multi Currency" },
  { title: "Discounts & Coupons" },
  { title: "Abandoned Cart Reminder" },
  { title: "Product Database" },
  { title: "Email Marketing / SMS Marketing" },
  { title: "Content Management System" },
  { title: "Vendor Management" },
  { title: "Content Delivery Network" },
  { title: "Secure Sockets Layer (SSL)" },
  { title: "Orders Management" },
  { title: "Mobile Friendly Store" },
  { title: "Store Customization" },
  { title: "Catalog Management" },
  { title: "Custom Domain" },
  { title: "Payment Gateway Integration" },
  { title: "DIY Store" },
  { title: "Bulk Product Upload" },
  { title: "International Payment Acceptance" },
  { title: "Facebook Store" },
  { title: "Security" },
  { title: "Inventory Management" },
  { title: "Design Template Gallery" },
  { title: "Hosting" },
  { title: "Customer Support" },
];

const moreFeatures = [
  { title: "Quick Checkout" },
  { title: "SEO and Online Marketing" },
  { title: "Integration with marketplaces" },
  { title: "Mobile App" },
  { title: "Order Management" },
  { title: "Social Network Integration" },
  { title: "Order Status / Tracking and History" },
  { title: "SEO Management" },
  { title: "Storage & Number of Products" },
  { title: "Courier Tracking In-Platform" },
  { title: "External Apps & In-Built Features" },
  { title: "Offer & Offer Popup" },
  { title: "Plugin" },
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
