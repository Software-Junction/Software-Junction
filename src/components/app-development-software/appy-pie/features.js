import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Dashboard" },
  { title: "Feedback Management" },
  { title: "Menus" },
  { title: "Campaign Management" },
  { title: "Permission Management" },
  { title: "Process Mapping" },
  { title: "Procurement Management" },
  { title: "Change Management" },
  { title: "Security" },
  { title: "Customization" },
  { title: "Contact Management" },
  { title: "Workflow Management" },
  { title: "Task Management" },
  { title: "Requirements Management" },
  { title: "File Management" },
  { title: "Search Feature" },
  { title: "Templates" },
  { title: "Application Development" },
  { title: "Chat" },
  { title: "Feedback System" },
  { title: "Error Monitoring" },
  { title: "Push Notifications" },
  { title: "Data Analysis" },
  { title: "Chat / Messaging" },
];

const moreFeatures = [
  { title: "Chat/Messaging" },
  { title: "Bluetooth Technology" },
  { title: "Chatbot" },
  { title: "Mobile Messaging" },
  { title: "Virtual Reality" },
  { title: "Performance Control" },
  { title: "Augmented Reality" },
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
