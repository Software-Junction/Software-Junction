import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Employee Self Service Management" },
  { "title": "Leave Management" },
  { "title": "Email Integration" },
  { "title": "Time Tracking" },
  { "title": "Training Management" },
  { "title": "Project Management" },
  { "title": "Applicant tracking" },
  { "title": "Document Management" },
  { "title": "Recruitment Management" },
  { "title": "Mobile App" },
  { "title": "Performance Management" },
  { "title": "Travel Management" },
  { "title": "Workflow Management" },
  { "title": "Payroll Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Shift Management" },
  { "title": "Knowledge Management" },
  { "title": "Self Service Portal" },
  { "title": "Workflow Administration" },
  { "title": "Time & Attendance Management" },
  { "title": "Multi Company" },
  { "title": "Help Desk" },
  { "title": "Recruiting Management" },
  { "title": "Onboarding" }
];

const moreFeatures = [
  { "title": "Custom Rating Scales" },
  { "title": "Messaging" },
  { "title": "People Management" },
  { "title": "Biometric Recognition" },
  { "title": "Automated Scheduling" },
  { "title": "Punch card" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Time Off Management" },
  { "title": "Sick Leave Tracking" },
  { "title": "Review Cycle Tracking" },
  { "title": "MIS Reports" },
  { "title": "Schedule Distribution" },
  { "title": "Learning Management" },
  { "title": "Employee Database" },
  { "title": "Shift Swapping" },
  { "title": "Online Punch Card" },
  { "title": "Salary Information & History" },
  { "title": "360 Degree Feedback" },
  { "title": "Peer Appraisals" },
  { "title": "Customizable Templates" },
  { "title": "On-going Performance Tracking" },
  { "title": "Mobile Access" },
  { "title": "Benefits Management" },
  { "title": "Performance Appraisal" },
  { "title": "Vacation/Leave Tracking" },
  { "title": "Mobile Time Tracking" },
  { "title": "Self-Appraisals" },
  { "title": "Reporting/Analytics" },
  { "title": "Scheduling" }
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
