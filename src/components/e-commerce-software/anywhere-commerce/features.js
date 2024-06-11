import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Payment Gateway Integration" },
  { title: "Warehouse Management" },
  { title: "Inventory control" },
  { title: "Store Customization" },
  { title: "Content Management System" },
  { title: "DIY Store" },
  { title: "Orders Management" },
  { title: "Discounts & Coupons" },
  { title: "Catalog Management" },
  { title: "Mobile Friendly Store" },
  { title: "SEO and Online Marketing" },
  { title: "Courier Tracking In-Platform" },
  { title: "CRM" },
  { title: "Security" },
  { title: "Customer Management" },
  { title: "Multi Currency" },
  { title: "Offer & Offer Popup" },
  { title: "Mobile App" },
  { title: "Plugin" },
  { title: "Data Security" },
  { title: "Quick Checkout" },
  { title: "Social Network Integration" },
  { title: "Order Status / Tracking and History" },
  { title: "Inventory Management" },
];

const moreFeatures = [
  { title: "Website Management" },
  { title: "Channel Management" },
  { title: "Campaign Management" },
  { title: "Back Order Management" },
  { title: "eCommerce Store" },
  { title: "Search Marketing" },
  { title: "Multi-Currency" },
  { title: "Order Fulfillment" },
  { title: "Payment Processing" },
  { title: "Point of Sale (POS)" },
  { title: "Order Tracking" },
  { title: "Order Management" },
  { title: "eCommerce" },
  { title: "Campaign Segmentation" },
  { title: "Content Syndication" },
  { title: "Multi-Store Management" },
  { title: "Shopping Cart" },
  { title: "Mobile Access" },
  { title: "Contest Management" },
  { title: "Templates" },
  { title: "Mobile Payments" },
  { title: "Content Library" },
  { title: "Reporting" },
  { title: "Online payments" },
  { title: "Email Marketing" },
  { title: "Discount Management" },
  { title: "Data Synchronization" },
  { title: "Credit Card Processing" },
  { title: "Data Collection" },
  { title: "Online Payment Processing" },
  { title: "Behavioral Targeting" },
  { title: "Abandoned Cart Saver" },
  { title: "Content Management" },
  { title: "Loyalty Program" },
  { title: "Channel Analysis" },
  { title: "Search Engine Optimization Management" },
  { title: "Custom Pricing Options" },
  { title: "Recommendation Engine" },
  { title: "Product Search" },
  { title: "Website Personalization" },
  { title: "Digital Asset Management" },
  { title: "AI / Machine Learning" },
  { title: "Data Capture and Transfer" },
  { title: "Data Cleansing" },
  { title: "Product Ratings / Reviews" },
  { title: "Coupon Management" },
  { title: "Desktop Publishing" },
  { title: "Online Store Builder" },
  { title: "Banner Management" },
  { title: "Social Commerce" },
  { title: "Channel Attribution" },
  { title: "ROI Tracking" },
  { title: "Website Analytics" },
  { title: "Cross Selling Functionality" },
  { title: "Audience Segmentation" },
  { title: "Customizable CTAs" },
  { title: "Landing Pages/Web Forms" },
  { title: "Product Comparison" },
  { title: "App Management" },
  { title: "Mobile Messaging" },
  { title: "Discount / Coupon Management" },
  { title: "Returns Management" },
  { title: "Multiple Payment Options" },
  { title: "Analytics" },
  { title: "Multi-Store" },
  { title: "Customizable Catalogs" },
  { title: "Marketplace Integration" },
  { title: "Mobile Commerce" },
  { title: "Debit Card Support" },
  { title: "Customizable Templates" },
  { title: "Data Management" },
  { title: "SEO Management" },
  { title: "Promotions Management" },
  { title: "Product Management" },
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
                  <span style={{ color: "#f95738 " }}>
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
                  <span style={{ color: "#f95738 " }}>
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
