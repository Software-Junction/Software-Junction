import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Recruitment Management" },
  { "title": "Referral Management" },
  { "title": "Job Board Integration" },
  { "title": "Internal HR" },
  { "title": "Onboarding" },
  { "title": "Interview Management" },
  { "title": "Recruiting Management" },
  { "title": "Performance Metrics" },
  { "title": "Assessments" },
  { "title": "Candidate Management" },
  { "title": "Background Screening" },
  { "title": "Scheduling" },
  { "title": "Reporting" },
  { "title": "Application Sharing" },
  { "title": "Social Recruiting" },
  { "title": "Job Requisition & Posting" },
  { "title": "Recruiting Firms" },
  { "title": "Status Tracking" },
  { "title": "Online Tests & Psychometric Tests" },
  { "title": "Collaboration" },
  { "title": "Application Integration" },
  { "title": "Resume Search" },
  { "title": "Jobs Board Integration" },
  { "title": "Self Service Portal" },
  { "title": "On-Boarding" },
  { "title": "Job Management" },
  { "title": "Talent Management" },
  { "title": "Mobile Support" }
];

const moreFeatures = [
  { "title": "Role Management" },
  { "title": "Reporting/Analytics" },
  { "title": "Profile Management" },
  { "title": "Candidate Tracking and Status Updates" },
  { "title": "Job Description Management" },
  { "title": "Results Reporting" },
  { "title": "Resume Management" },
  { "title": "Resume Parsing and Extraction" },
  { "title": "Mobile Friendly" },
  { "title": "Interview Scheduling and Management" },
  { "title": "Role Management" },
  { "title": "Letter generation" },
  { "title": "Recruitment Analytics and Reporting" },
  { "title": "Candidate Screening and Filtering" },
  { "title": "Onboarding and New Hire Management" },
  { "title": "Candidate Relationship Management (CRM)" },
  { "title": "Talent Pool Creation" },
  { "title": "Offer Letter and Contract Management" },
  { "title": "Resume Parsing and Parsing" },
  { "title": "Scoring" },
  { "title": "Real-time Candidate Notifications" },
  { "title": "Recruitment Workflow Automation" },
  { "title": "Offer Letter and Contract Management" },
  { "title": "Candidate Matching and Job Recommendations" },
  { "title": "Resume Ranking and Scoring" },
  { "title": "Candidate Experience Tracking" },
  { "title": "Talent Acquisition Metrics and KPIs" },
  { "title": "Recruitment Marketing" },
  { "title": "Reference and Background Check" },
  { "title": "Training & Qualifications" },
  { "title": "Resume Database Management" },
  { "title": "Publishing / Sharing" },
  { "title": "Resume Database Search" },
  { "title": "Messaging" },
  { "title": "Personality Testing" },
  { "title": "Applicant Tracking System (ATS) Integration" },
  { "title": "One-on-One Interviews" },
  { "title": "Candidate Contact Management" },
  { "title": "Recruitment Marketing" },
  { "title": "Mobile Accessibility and Application" },
  { "title": "Interview Training and Assessment Tools" },
  { "title": "Recruitment Workflow Automation" },
  { "title": "Candidate Sourcing and Recruitment Marketing" },
  { "title": "Candidate Matching and Job Recommendations" },
  { "title": "Resume Parsing" },
  { "title": "Roles & Permissions" },
  { "title": "Job portal Ready" },
  { "title": "Recruitment Workflow Automation" }
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
