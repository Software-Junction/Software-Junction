import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Attendance management" },
  { "title": "Bonus" },
  { "title": "Expense Management" },
  { "title": "Project Management" },
  { "title": "Shift Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Travel Management" },
  { "title": "Help Desk" },
  { "title": "Loan & Advances Management" },
  { "title": "Recruitment Management" },
  { "title": "Email Integration" },
  { "title": "Workflow Administration" },
  { "title": "Statutory Compliances" },
  { "title": "Document Management" },
  { "title": "Payroll Management" },
  { "title": "Training Management" },
  { "title": "Reimbursement Management" },
  { "title": "Employee Self Service Management" },
  { "title": "Mobile Support" },
  { "title": "Performance Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Asset Management" },
  { "title": "Exit Management & Seperation Management" },
  { "title": "Time Tracking" },
  { "title": "HR & Payroll" },
  { "title": "Mobile App" },
  { "title": "Pay Slip" },
  { "title": "Workflow Administration" }
];

const moreFeatures = [
  { "title": "Leave Management" },
  { "title": "Employee Lifecycle Management" },
  { "title": "Employee Reward Programs" },
  { "title": "Employee Portal" },
  { "title": "Talent Management" },
  { "title": "Onboarding" },
  { "title": "Employee Management" },
  { "title": "Employee Database" },
  { "title": "Performance Appraisal" },
  { "title": "Employee Engagement" },
  { "title": "Performance Journals" },
  { "title": "Goal Setting / Tracking" },
  { "title": "Rewards Management" },
  { "title": "Succession Planning" },
  { "title": "Collaboration Platform" },
  { "title": "Time & Attendance" },
  { "title": "Timesheets" },
  { "title": "Feedback Management" },
  { "title": "Job Requisition" },
  { "title": "Resume Parsing" },
  { "title": "Goal Setting" },
  { "title": "Career Development" },
  { "title": "Interview Scheduling" },
  { "title": "Background Vendor Login" },
  { "title": "Multi Company" },
  { "title": "Applicant tracking" },
  { "title": "On-going Performance Tracking" },
  { "title": "Roster Management" },
  { "title": "Peer-to-Peer Recognition" },
  { "title": "Rewards Points" },
  { "title": "Biometric Attendance Management" },
  { "title": "Salary Information & History" },
  { "title": "Rewards Program" },
  { "title": "IP Restriction on Attendance" },
  { "title": "Normalization" },
  { "title": "Data Source Integrations" },
  { "title": "Geo Fencing" },
  { "title": "Geo Tagging" },
  { "title": "Job Requisition" },
  { "title": "Manager Self Service" },
  { "title": "Voicebot" },
  { "title": "Digital Offer Letters" },
  { "title": "Mobile Friendly" },
  { "title": "Full & Final Settlements" },
  { "title": "Analytics" },
  { "title": "Reporting/Analytics" },
  { "title": "Enable Self Service" },
  { "title": "Document Creation & Storage" },
  { "title": "Exit Management" }
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
