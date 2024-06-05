import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Courier Tracking In-Platform" },
  { title: "SEO and Online Marketing" },
  { title: "Orders Management" },
  { title: "Discounts & Coupons" },
  { title: "Product Database" },
  { title: "Mobile Friendly Store" },
  { title: "Hosting" },
  { title: "DIY Store" },
  { title: "Abandoned Cart Reminder" },
  { title: "Facebook Store" },
  { title: "Inventory Management" },
  { title: "Bulk Product Upload" },
  { title: "Secure Sockets Layer (SSL)" },
  { title: "Content Delivery Network" },
  { title: "Security" },
  { title: "Custom Domain" },
  { title: "Design Template Gallery" },
  { title: "Multi Currency" },
  { title: "Content Management System" },
  { title: "Payment Gateway Integration" },
  { title: "Store Customization" },
  { title: "International Payment Acceptance" },
  { title: "Catalog Management" },
  { title: "Quick Checkout" },
];

const moreFeatures = [
  { title: "Mobile App" },
  { title: "Order Status / Tracking and History" },
  { title: "Social Network Integration" },
  { title: "Storage & Number of Products" },
  { title: "Shopping Cart" },
  { title: "SEO Management" },
  { title: "Order Management" },
  { title: "Customer Account Profiles" },
  { title: "Multi-Store Management" },
  { title: "Product configurator" },
];

const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const combinedFeatures = [...featuresData, ...moreFeatures];
  const filteredFeatures = combinedFeatures.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayFeatures = searchQuery
    ? filteredFeatures
    : isShowMore
    ? combinedFeatures
    : featuresData;

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
            <Form>
              <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search Features..."
              value={searchQuery}
              onChange={handleSearch}
              className="mb-4"
            />
            </Form.Group>
            </Form>
          </Col>

          {displayFeatures.map((feature, index) => (
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

          {/* {isShowMore && 
          <>
          {filteredMoreFeatures.map((featureM, index) => (
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
          } */}
          {!searchQuery && (
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
           )}
        </Row>
      </Container>
    </>
  );
};

export default Features;
