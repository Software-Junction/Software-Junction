import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const Readmore = ({styles}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <section className={`${styles["features"]} `}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">Key Features</h3>
            </Col>

            <Col lg={3} className="mb-4">
             <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Absence Management</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
           <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Scheduling</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
           <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Fee Collection</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
           <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Dashboard</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
           <div className="box h-100 shadow border rounded-4 p-4 bg-light">   <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Vehicle Tracking</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
           <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Staff Management</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Purchase Management</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Generate Reports</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; School Management</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Student Evaluation Report</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Biometric Attendance Management</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Role-Based Permissions</h5></div>
            </Col>
            <Col lg={3} className="mb-4">
            <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Customizable Forms</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; White Label</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Expense Manager</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Parent Communication</h5></div>
                </Col>
            {isShowMore && (
              <>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Admin Controls</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; School Libraries</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Academic/Education</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; For Private Schools</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Support Audio/Images/Video</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Report Cards</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Parent/Student Portal</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Lesson Plan Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Applicant Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Tests/Assessments</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Photo Gallery</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Faculty / Staff Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Scorecards</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Parent App</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Student Information / Records</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Student Portal</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; GPS tracking</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Higher Education</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Online payments</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Attendance Tracking</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Data Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Reporting & Statistics</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Student Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Financial Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Event Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Examination Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Fee Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Database backup/restore (Management)</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Academics</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Admission</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Attendance management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Time Table</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Time Tracking</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Reception & Front Office</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Time & Attendance Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Mobile App</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Payroll Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Inventory Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Library Management</h5></div>
                </Col><Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Payment Gateway Integration</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; HR & Payroll</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Leave Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; SMS Integration</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Payroll Integration</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Multi-Location</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Admissions Management</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Punctuation Check</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; DOCX</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light">  <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; LaTeX</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Customized Report Cards</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Download in PDF</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; School branded App</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Centralized Monitoring</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Reporting/Analytics</h5></div>
                </Col>
                <Col lg={3} className="mb-4">
                <div className="box h-100 shadow border rounded-4 p-4 bg-light"> <h5><span style={{color :'#f95738 '}} ><FaCheck /></span>&nbsp; Self Assessment</h5></div>
                </Col>
                
              </>
            )}
            <Col lg={12}>
                <div className={styles['feature-btn']}>
            <Button className="mt-4"  onClick={toggleReadMoreLess}>
              {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
            </Button>
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      
    </>
  );
};

export default Readmore;
