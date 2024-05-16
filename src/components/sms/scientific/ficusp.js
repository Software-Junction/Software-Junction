import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Financial Management",
    "content": "Efficiently manage fees, admissions, salary, and accounts in one integrated system.Set up fees structures, online payments, concessions, and easily collect fees with minimal effort.Analyze fees collection with over <span style=\"color:#FC5185 ;\"><strong>50 detailed</strong></span> reports for transparent financial tracking."
  },
  {
    "title": "Communication Excellence",
    "content": "Streamline communication through various channels like messages, broadcasts, news, notices, and events.Send bulk messages to students, parents, and teachers, including web and app login details.Transparent communication with detailed message delivery reports for SMS."
  },
  {
    "title": "Report Card Customization and Management",
    "content": "Design and customize report cards according to the school's branding.Efficiently manage exam dates, enter marks, and freeze marks before publishing.Consolidated reporting, easy publishing of report cards, and in-depth analysis of academic performance."
  },
  {
    "title": "Fees Management for Cash Flow Optimization",
    "content": "Set up various fee types, categories, and installments.Collect fees effortlessly in-school and set up online payment options for students.Effectively manage overdue fees, analyze cash flow, and identify potential cash leakage with detailed reports."
  },
  {
    "title": "Admission Process Simplification",
    "content": "Set up a social admission enquiry page to manage online admission leads.Streamline the admission process with online registration and efficient task management.Monitor and review the growth of admissions in the school."
  },
  {
    "title": "Salary Management for Staff",
    "content": "Comprehensive salary management, including earning, deduction, pay scale, and increments.Efficiently draft, publish, and print salary slips for staff.In-depth analysis of salary details through detailed reports."
  },
  {
    "title": "Administration Modules for Overall School Management",
    "content": "Manage students, staff, attendance, helpdesk, calendar, leave, enquiry, gatepass, hostel, teams, library, documents, and transport seamlessly.Transparent data management with the ability to download school data anytime, anywhere.Simplify the hiring process by posting school job listings."
  },
  {
    "title": "Extra Features for Enhanced School Operations",
    "content": "Improve Google presence and local search for the school to attract admission leads.Automation of messages, lesson plans, social enquiry pages, questions, quizzes, online classes, digital library, alumni management, job postings, and website pages."
  },
  {
    "title": "Client Trust and Recognition",
    "content": "Highlight prestigious clients, including Tata, Aditya Birla, Indian Air Force, Goenka, and DPS.Empowering over 1000 schools worldwide for many years, demonstrating a track record of reliability."
  },
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Ficusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Scientific Study's School Management Software</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["fic-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Ficusp;
