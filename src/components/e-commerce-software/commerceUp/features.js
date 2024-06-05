import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Custom Domain" },
  { title: "Product Database" },
  { title: "Security" },
  { title: "Store Customization" },
  { title: "Content Management System" },
  { title: "Secure Sockets Layer (SSL)" },
  { title: "Facebook Store" },
  { title: "Orders Management" },
  { title: "Discounts & Coupons" },
  { title: "Design Template Gallery" },
  { title: "Catalog Management" },
  { title: "Bulk Product Upload" },
  { title: "Abandoned Cart Reminder" },
  { title: "Hosting" },
  { title: "Mobile Friendly Store" },
  { title: "International Payment Acceptance" },
  { title: "SEO and Online Marketing" },
  { title: "Payment Gateway Integration" },
  { title: "Customer Management" },
  { title: "Inventory Management" },
  { title: "Multi Currency" },
  { title: "Customer Support" },
  { title: "DIY Store" },
  { title: "Email Marketing / SMS Marketing" },
];

const moreFeatures = [
  { title: "Self Service Portal" },
  { title: "Order Fulfillment" },
  { title: "Shipping Management" },
  { title: "Performance Metrics" },
  { title: "Billing & Invoicing" },
  { title: "Tax Management" },
  { title: "Website Management" },
  { title: "Returns Management" },
  { title: "Analytics" },
  { title: "Integration with marketplaces" },
  { title: "SEO Management" },
  { title: "Promotions Management" },
  { title: "Live chat system" },
  { title: "Product Management" },
  { title: "eCommerce Store" },
  { title: "Order Management" },
  { title: "Customer Account Profiles" },
  { title: "Reviews Management" },
  { title: "Shopping Cart" },
  { title: "Templates" },
  { title: "Remote Access" },
  { title: "Customer Accounts" },
  { title: "eCommerce" },
  { title: "Return Policy" },
  { title: "Wishlist" },
  { title: "Website Personalization" },
  { title: "Multi-Language" },
  { title: "External Apps & In-Built Features" },
  { title: "Mobile App" },
  { title: "Offer & Offer Popup" },
  { title: "Plugin" },
  { title: "Quick Checkout" },
  { title: "Social Network Integration" },
  { title: "Order Status / Tracking and History" },
  { title: "Storage & Number of Products" },
  { title: "Product configurator" },
  { title: "Customer DataBase" },
  { title: "Order Tracking" },
  { title: "Real Time Editing" },
  { title: "Catalogs" },
  { title: "Website Analytics" },
  { title: "Sales Intelligence" },
  { title: "Post Management" },
  { title: "WYSIWYG Rich Text Editing" },
  { title: "Multi-Store" },
  { title: "Catalog Creation" },
  { title: "Marketplace Integration" },
  { title: "Mobile Commerce" },
  { title: "Reward Distribution" },
  { title: "Reporting" },
  { title: "Full Text Search" },
  { title: "IP Address Extraction" },
  { title: "Filtering" },
  { title: "Dashboard" },
  { title: "Online payments" },
  { title: "Discount Management" },
  { title: "Search" },
  { title: "Credit Card Processing" },
  { title: "App Management" },
  { title: "Discount / Coupon Management" },
  { title: "Product Recommendations" },
  { title: "Product Search" },
  { title: "Mobile Payments" },
  { title: "Multi-Vendor Functionality" },
  { title: "SEO Wizard" },
  { title: "Abandoned Cart Tool" },
  { title: "Online Payment Processing" },
  { title: "Checkout" },
  { title: "Content Management" },
  { title: "Loyalty Program" },
  { title: "Payment Management" },
  { title: "Social Media Links" },
  { title: "Responsive" },
  { title: "Search Engine Optimization Management" },
  { title: "Shipping Options" },
  { title: "Product Ratings / Reviews" },
  { title: "Coupon Management" },
  { title: "Banner Management" },
  { title: "Faceted Search / Filtering" },
  { title: "Online Store Builder" },
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
