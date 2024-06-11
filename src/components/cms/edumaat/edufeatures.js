import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const Edufeatures = ({ styles }) => {
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

          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Leave Policy Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Grant Opportunity Search
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; For Classroom
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Member Accounts
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Support Audio/Images/Video
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Medical Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Reviewer Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Event Calendar
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Expense Tracking
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Reception & Front Office
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Taxation & Assessment
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Dispatch Monitoring
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Voting Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Church Libraries
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Student Group Management
              </h5>
            </div>
          </Col>
          <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">
              {" "}
              <h5>
                <span style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                &nbsp; Facial Recognition Attendance
              </h5>
            </div>
          </Col>
          {isShowMore && (
            <>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Shift Planner
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; School Libraries
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Applicant Portal
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Recognition Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Insightful Statistics
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Parent Communication
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Expense Manager
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Exam Planner
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Business Coaching
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Law Libraries
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Built in LMS
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Teacher Dashboard
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Confirmation/Reminders
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Event Registration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Report Cards
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Video Conferencing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online Registration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Scorecards
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Surveys
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Commenting / Notes
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Internal Meetings
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Post-Meeting Tools
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Evaluation Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Financial Aid Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Reviewer Portal
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; HR Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Academic/Education
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Feedback System
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Journal Formats
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Employee Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Attendance management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Time Table
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Time Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Reception & Front Office
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Time & Attendance Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mobile App
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; HR & Payroll
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Inventory Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Library Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Payment Gateway Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Event Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Leave Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; SMS Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Payroll Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Multi-Location
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Admissions Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Punctuation Check
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; DOCX
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; LaTeX
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Customized Report Cards
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Download in PDF
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; School branded App
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Practice Test Question Bank
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mobile Donations
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Self Assessment
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Grammar Check
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Plagiarism Detection
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Gamification
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Style Check
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Scenario Planning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Analytics & Reporting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Contextual Speller
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Dictionary / Thesaurus
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Spell Check
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Test / Quiz Creation
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Live Tutorials
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; User Access Permissions
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Barcoding/RFID
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Skill Testing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Check-in / Check-out
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Member Communities
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Learner Portal
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Volunteer Profiles
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Leave & Absence Reporting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Faculty / Staff Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Expiration Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Form Builder
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Real-time Chat
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Text Messaging
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; KPIs
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Onsite Registration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Group Registration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Refund Automation
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Class Summary
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Curve Scores
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Independent/Private
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Certification Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Grade Calculations
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Weighted Assignments
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Lesson Planning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Electronic Assignments & Tests
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Parent/Student Portal
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Parent / Child Records
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; For Private Schools
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; For Summer Camps
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Academic / Education
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Food Program Records
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Lesson Plan Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Committee Meetings
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Board Meetings
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Self Check-in/Check-out
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Instructor Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Customizable Forms
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Applicant Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; View Student Monitors
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Food Service Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Class Loading
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Field Reporting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Incident Mapping
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Public Libraries
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Communication Tools
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Private Libraries
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Lesson Notes
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Life Coaching
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Interactive Learning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mentor/Coach Matching
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Sport Coaching
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Recommendations Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; White Label
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Reviewer Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Computer Based Test
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online Classes
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Upcoming Batches
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Group Attendance
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Geofencing Time And Attendance
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Attendance Reporting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Employee Hourly Wages
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Live Class Enablement
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Admin Controls
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Automatic Test Creation & Grading
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Dedicated Support Manager
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Centralized Finance Manager
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Deviceless GPS Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Immunization Records
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Testing / Assessments
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Transcripts
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Media Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Tests/Assessments
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Virtual Classroom
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Progress Reports
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Discount/Coupon Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Class Registration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Activity Registration
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Remote Access/Control
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Learning Plans
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Grant Award Tracking
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Individual Reports
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online Applications
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Aggregate Reports
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Group Summary Report
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Rater Tracking
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Photo Gallery
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Orientation Management
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Agenda Management
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Meeting Preparation Tools
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Skills Assessments
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Individualized Assessments
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Colleges / Universities
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Program Management
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Engagement Monitoring
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Scoring
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online Calendar
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Corporate/Business
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Menu Planning
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Content Management
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Reporting/Analytics
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Automated Shift Scheduling
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Import references
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Centralized Monitoring
                  </h5>
                </div>
              </Col>

              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Real-time Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Resource Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Class Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Space Planning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Room Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Parents Survey
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online Assessment
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Re-Formatting Manuscripts
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Customisable Sections
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Automatic Citation Numbering
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Tables
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Auto-Formatting Manuscripts
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Equation Editor
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Suggestions
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Admission CRM
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; School Bus Attendance
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Student Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Daily Reports
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Parent App
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Teacher App
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Alumni Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Recurring Donations
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Receipts / Statements
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Donor Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Recurring Giving
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Member Database
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online Donations
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Contribution Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Committee Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Approval Process Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Minutes Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Overtime Calculation
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; GPS tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Competency Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Automated Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Group Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Donor Database
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Donation Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Email Marketing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Reporting & Statistics
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Fees
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Gift Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online payments
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Class Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Certification Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Gradebook
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Social Learning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Training Companies
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; eCommerce
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Synchronous Learning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Blended Learning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Live / Video Conferencing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Appointment Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Skills Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Built-In Course Authoring
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Corporate / Business
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Asynchronous Learning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Group Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Audio / Video Conferencing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Discussion Boards
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Brainstorming
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Materials Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Pledge Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Fixed Asset Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Time Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Member Directory
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Volunteer Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Internet Usage Monitoring
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Succession Planning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Scorecarding
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Communication Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Progress Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Multi-User Collaboration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Weighted Questions
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Maintenance Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Individual Development Plans
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Wait List Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; K-12
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Student Portal
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Question Randomizing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; School District
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Student Information / Records
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Question Branching
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Results Reporting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Special Education
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Parent Portal
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Cafeteria Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Enrollment Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Housing Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Clinic Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Higher Education
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Independent / Private
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Facility Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Curriculum Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Classroom Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Assessment Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Behavior Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Bookstore Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Attendance Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Member Portal
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Facility Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Badge Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; HRM
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Paper Tests
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Client Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Generate Reports
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Employee Training
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Overtime Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Student Manage
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Roadmapping
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Customization
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mailing list management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Question Bank
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Quizzes
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Marketing Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Automatic Grading
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Customizable Workflows
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Certification
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Time Reminder
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Result Release
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; School Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; College Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Purchase Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Accessibility
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Multi-Located Branched Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Biometric Attendance Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Student Evaluation Report
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Faculty Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Staff Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Lecture Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Laboratory Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Course Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Data Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Reporting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Grading Assessment System Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Job Category Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Admission Receipt Generation
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; E-library Members Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Rich Text Editor
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mileage Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Self-Registration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Vehicle Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Integrate Different Payment Gateways
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Forms Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Purchasing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Customizable Reporting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online Results Declaration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Student Assessment Reports
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Calendar Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Polls / Voting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Role-Based Permissions
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Contract Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mass Texting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Approval Process Control
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Self Check-in / Check-Out
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Ad hoc Analysis
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Feedback Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Goal Setting / Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Key Performance Indicators
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Strategic Planning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Kiosk Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Budgeting & Forecasting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Surveys & Feedback
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Consolidation / Roll-Up
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Serials Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Ad Hoc Reports
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Quantitative Analysis
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Qualitative Analysis
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Campaign Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Goal Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Unicode Compliance
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Acquisition Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; OPAC
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Reserve Shelf Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Circulation Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Payment Processing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Barcoding / RFID
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Fee Collection
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Search Functionality
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Patron Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Residential Properties
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Periodicals Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Resource Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Accounting Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Requirements Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Billing & Invoicing
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Idea Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Overtime Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Collaboration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Workflow Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Electronic Signature
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Compliance Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Absence Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Employee Scheduling
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Timesheet Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; FMLA Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Franchise Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Work order management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; User Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Assessments
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Applications Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Interview Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Self Service Portal
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Candidate Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Onboarding
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Recruiting Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Collaboration Tools
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Employee Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Application Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Fundraising Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Barcode Scanning
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; General Ledger
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Invoices
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Applicant tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Data Security
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Dispatching
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Accounts payable
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Fund accounting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Catalog Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; API Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mobile App
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Membership Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Contact Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Travel Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Transport / Fleet management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Training Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; User Customisation
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; SMS
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Registration Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Student Info Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Survey Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Shift Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Multiuser Login & Role-based access control
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Project Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Payroll Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Online Tests & Psychometric Tests
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Knowledge Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mobile Support
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Kiosk System
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Mass Email
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Expense Tracking
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Help Desk
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Event Calendar
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Financial Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Hostel Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Fee Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Employee Self Service Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Examination Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; CRM integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Activities
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Database backup/restore (Management)
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Attendance management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Customer Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Document Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Email Integration
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Courses and Batches Management
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; CRM
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Admission
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Accounting
                  </h5>
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                  {" "}
                  <h5>
                    <span style={{ color: "#f95738 " }}>
                      <FaCheck />
                    </span>
                    &nbsp; Academics
                  </h5>
                </div>
              </Col>
            </>
          )}
          <Col lg={12}>
            <div className={styles["edu-feature-btn"]}>
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

export default Edufeatures;
