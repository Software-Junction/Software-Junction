import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Requirements Management" },
  { "title": "Ad Hoc Reports" },
  { "title": "Recruiting Management" },
  { "title": "Collaboration" },
  { "title": "Mobile App" },
  { "title": "Workflow Management" },
  { "title": "Compliance Management" },
  { "title": "Qualitative Analysis" },
  { "title": "Document Management" },
  { "title": "Fee Management" },
  { "title": "Admissions Management" },
  { "title": "Event Management" },
  { "title": "Ad hoc Analysis" },
  { "title": "Consolidation / Roll-Up" },
  { "title": "Member Portal" },
  { "title": "Strategic Planning" },
  { "title": "Fundraising Management" },
  { "title": "Rich Text Editor" },
  { "title": "Self Service Portal" },
  { "title": "Candidate Management" },
  { "title": "Dashboard" },
  { "title": "Event Calendar" },
  { "title": "Mailing list management" },
  { "title": "Budgeting & Forecasting" },
  { "title": "Assessment Management" },
  { "title": "Auto-Formatting Manuscripts" },
  { "title": "Student Portal" },
  { "title": "Reviewer Portal" },
];
const moreFeatures = [
  { "title": "Spell Check" },
  { "title": "Curriculum Management" },
  { "title": "Import references" },
  { "title": "Colleges / Universities" },
  { "title": "Faculty / Staff Management" },
  { "title": "K-12" },
  { "title": "Certification Tracking" },
  { "title": "User Access Permissions" },
  { "title": "Style Check" },
  { "title": "Customisable Sections" },
  { "title": "Download in PDF" },
  { "title": "Alumni Management" },
  { "title": "Tables" },
  { "title": "Equation Editor" },
  { "title": "Scorecards" },
  { "title": "Multi-User Collaboration" },
  { "title": "Applicant Portal" },
  { "title": "Orientation Management" },
  { "title": "Communication Tools" },
  { "title": "Automatic Citation Numbering" },
  { "title": "Contextual Speller" },
  { "title": "Applicant Management" },
  { "title": "White Label" },
  { "title": "Behavior Management" },
  { "title": "Suggestions" },
  { "title": "Reporting & Statistics" },
  { "title": "Student Information / Records" },
  { "title": "LaTeX" },
  { "title": "Scoring" },
  { "title": "Event Management" },
  { "title": "Faculty Management" },
  { "title": "Event Calendar" },
  { "title": "Certification Management" },
  { "title": "Financial Management" },
  { "title": "SMS Integration" },
  { "title": "Biometric Attendance Management" },
  { "title": "Document Management" },
  { "title": "Commenting / Notes" },
  { "title": "Customizable Forms" },
  { "title": "Attendance Tracking" },
  { "title": "Recommendations Management" },
  { "title": "Self Assessment" },
  { "title": "Upcoming Batches" },
  { "title": "Application Management" },
  { "title": "Member Accounts" },
  { "title": "Scorecarding" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Communication Management" },
  { "title": "Orientation Management" }
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

          {displayFeatures.length > 0 ? (
          displayFeatures.map((feature, index) => (
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
          ))
        ) : (
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

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
