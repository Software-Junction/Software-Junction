import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";


const Recommend = ({ styles }) => {
  return (
    <>
      {/* <section className={`${styles["recommend"]} mt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Top 3 Campus Management System Recommendations</h3>
            </Col>
            <Col lg={6} className="mb-4">
              <div
                className={`${styles["box"]} box  shadow rounded-4 p-3 mt-4`}
              >
                <div className="d-flex">
                  <Image
                    src="/images/school.png"
                    alt="campus"
                    height="10"
                    width="170"
                    className="my-3"
                  />
                  <p className={styles["box-p"]}>Top Choice 1</p>
                </div>

                <h5 className="my-4">No.1 School ERP Software</h5>
                <Button className={`${styles["box-btn2"]} mt-2`} href="">
                  View Profile
                </Button>
                <div className={styles["badge1"]}>
                  <Image
                    src="/images/badge2.png"
                    alt="badge"
                    height="10"
                    width="250"
                  />
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div
                className={`${styles["box1"]} box shadow rounded-4 p-3 mt-4`}
              >
                <div className="d-flex ">
                  <Image
                    src="/images/teachmint.png"
                    alt="campus"
                    height="10"
                    width="100"
                  />

                  <p className="mt-3 ms-3 ">
                    Digitize your school and become future ready now
                  </p>
                </div>
                <p className={styles["box-p1"]}>Top Choice 2</p>
                <div className={styles["badge"]}>
                  <Image
                    src="/images/badge2.png"
                    alt="badge"
                    height="10"
                    width="150"
                  />
                </div>

                <Button className={styles["box-btn"]} size="sm" href="">
                  View Profile
                </Button>
              </div>
              <div
                className={`${styles["box2"]} box  shadow rounded-4 p-3 mt-4`}
              >
                <div className="d-flex">
                  <Image
                    src="/images/edumaat-.png"
                    alt="campus"
                    height="10"
                    width="50"
                  />

                  <p className="mt-3 ms-3">Best Campus Management System</p>
                </div>
                <p className={styles["box-p2"]}>Top Choice 3</p>
                <div className={styles["badge2"]}>
                  <Image
                    src="/images/badge2.png"
                    alt="badge"
                    height="10"
                    width="150"
                  />
                </div>
                <Button className={styles["box-btn1"]} size="sm" href="">
                  View Profile
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section className={`${styles['ads2']} mt-5`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className=" mb-4">Best Softwares 2</h3>
          </Col>
          <Col lg={3} className={styles["colmob-card"]}>
            <Card border="" className={`${styles['card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Teachmint
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["card-title"]}>
                      Teachmint
                    </Card.Title>
                  </div>
                  <div>
                    <p
                      className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                      style={{backgroundColor: '#f95738 '}}
                    >
                      4.4 <FaStar />
                    </p>
                  </div>
                </div>
                <Card.Text>
                  Digitize your school and become future ready now
                </Card.Text>
                <Button
                  className={styles["card-btn1"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles["colmob-card"]}>
            <Card border="" className={`${styles['card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
              >
                EDUMAAT
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["card-title"]}>
                      EDUMAAT
                    </Card.Title>
                  </div>
                  <div>
                    <p
                      className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                      style={{backgroundColor: '#f95738 '}}
                    >
                      4.4 <FaStar />
                    </p>
                  </div>
                </div>
                <Card.Text>Best Campus Management system</Card.Text>
                <Button
                  className={styles["card-btn"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles["colmob-card"]}>
            <Card border="" className={`${styles['card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Schoolcanvas
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["card-title"]}>
                      Schoolcanvas
                    </Card.Title>
                  </div>
                  <div>
                    <p
                      className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                      style={{backgroundColor: '#f95738 '}}
                    >
                      4.4 <FaStar />
                    </p>
                  </div>
                </div>
                <Card.Text>No.1 school ERP software</Card.Text>
                <Button
                  className={styles["card-btn"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className={styles["colmob-card"]}>
            <Card border="" className={`${styles['card-mob']} h-100 shadow`} style={{ width: "18rem" }}>
              <Card.Header
                className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
              >
                Astral School
              </Card.Header>
              <Card.Body>
                <div className="d-flex">
                  <div>
                    <Card.Title className={styles["card-title"]}>
                      Astral School
                    </Card.Title>
                  </div>
                  <div> 
                    <p
                      className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                      style={{backgroundColor: '#f95738 '}}
                    >
                      4.4 <FaStar />
                    </p>
                  </div>
                </div>
                <Card.Text>System by Astral Technologies</Card.Text>
                <Button
                  className={styles["card-btn"]}
                  size="sm"
                  variant="primary"
                >
                  Free demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </section> */}
      
      <section className={`${styles["content"]} mt-5 pb-5`}>
        <Container>
          <Row>
            {/* <Col lg={8}>
              <Image
                src="/images/campus.png"
                alt="campus"
                height="10"
                width="800"
                className={styles["camp-img-mob"]}
              />
            </Col> */}

            <Col lg={7} className="text-alignment">
              <div id="1">
                <h5 className="">What is a Campus Management Software ?</h5>
                <p className="mt-4">
                  Campus Management Software (CMS) is a comprehensive solution
                  tailored to the unique needs of educational institutions,
                  serving as a centralized platform to streamline various
                  administrative and academic processes. At its core, CMS
                  incorporates a Student Information System (SIS) to manage
                  student profiles, academic records, and attendance.
                  <br />
                  <br />
                  The software's Admissions Management feature automates the
                  entire admissions process, from application submission to
                  enrollment, providing a systematic approach to applicant
                  tracking. Course Management functionalities enable efficient
                  scheduling, faculty assignment, and academic progress
                  tracking.
                  <br />
                  <br />
                  Attendance Tracking features help monitor student attendance
                  patterns, facilitating timely interventions when necessary.
                  Grading and Evaluation modules simplify the grading process,
                  aiding teachers in inputting grades, calculating GPAs, and
                  generating transcripts.
                  <br />
                  <br />
                  Faculty Management capabilities encompass the organization of
                  faculty information, schedules, assignments, and performance
                  evaluations. Financial Management tools handle transactions
                  such as tuition fees, scholarships, and overall budgeting for
                  the institution.
                  <br />
                  <br />
                  Effective communication is facilitated through integrated
                  tools for announcements, messaging, and alerts. CMS often
                  includes library management features, ensuring efficient
                  cataloging, tracking of book loans, and inventory maintenance.
                  <br />
                  <br />
                  For institutions with on-campus housing, Hostel Management
                  functionalities assist in room assignments, occupancy
                  tracking, and related services. Integration with Learning
                  Management Systems (LMS) supports online learning, course
                  materials dissemination, and assessments.
                  <br />
                  <br />
                  Analytics and Reporting features offer insights into various
                  aspects of campus performance, student outcomes, and
                  institutional effectiveness. By providing a user-friendly
                  interface and optimizing resource utilization, Campus
                  Management Software enhances operational efficiency, allowing
                  educational institutions to focus on delivering high-quality
                  education.
                </p>
              </div>
              <div id="2">
                <h5 className="mt-4">
                  What features should I look for in campus management software
                  ?
                </h5>
                <p className="mt-4">
                  When choosing campus management software, it's essential to
                  consider a variety of features to ensure that the system meets
                  the specific needs of your educational institution. Here are
                  some key features to look for :
                  <br />
                  <br />
                  <strong>Student Information System (SIS) :</strong>
                  <br />
                  <br />
                  Demographics : Collect and store comprehensive information
                  about students, including personal details, contact
                  information, and demographic data.
                  <br />
                  <br />
                  Enrollment Details: Track students' enrollment history,
                  including program or course enrollment, admission dates, and
                  academic records.
                  <br />
                  <br />
                  Attendance Tracking: Monitor student attendance to identify
                  patterns, ensure compliance, and address any
                  attendance-related issues.
                  <br />
                  <br />
                  Grading: Manage and record students' grades and academic
                  performance, providing a centralized repository for academic
                  data.
                  <br />
                  <br />
                  <strong>Course Management :</strong>
                  <br />
                  <br />
                  Course Creation: Easily create and structure courses, defining
                  prerequisites and curriculum components.
                  <br />
                  <br />
                  Scheduling: Efficiently schedule classes, manage classroom
                  resources, and avoid conflicts in timetables.
                  <br />
                  <br />
                  Course Planning: Provide tools for academic departments to
                  plan course offerings and allocate resources effectively.
                  <br />
                  <br />
                  <strong>Faculty Management :</strong>
                  <br />
                  <br />
                  Information Management: Maintain detailed records of faculty
                  members, including qualifications, certifications, and contact
                  information.
                  <br />
                  <br />
                  Scheduling: Coordinate and manage faculty schedules, ensuring
                  optimal allocation of teaching resources.
                  <br />
                  <br />
                  Performance Evaluations: Conduct and record performance
                  evaluations, facilitating professional development and
                  feedback.
                  <br />
                  <br />
                  <strong>Learning Management System (LMS) :</strong>
                  <br />
                  <br />
                  Content Delivery: Support the creation, storage, and delivery
                  of educational content, including multimedia materials.
                  <br />
                  <br />
                  Assessment Tools: Provide tools for creating and conducting
                  assessments, quizzes, and examinations.
                  <br />
                  <br />
                  Collaboration Features: Facilitate online collaboration among
                  students and instructors through discussion forums, chat
                  features, and collaborative documents.
                  <br />
                  <br />
                  <strong>Admissions Management :</strong>
                  <br />
                  <br />
                  Online Applications: Streamline the admissions process with
                  online application forms, reducing paperwork and improving
                  efficiency.
                  <br />
                  <br />
                  Document Submission: Allow applicants to submit required
                  documents electronically.
                  <br />
                  <br />
                  Application Tracking: Provide a system for monitoring the
                  status of applications and making admission decisions.
                  <br />
                  <br />
                  <strong>Financial Management :</strong>
                  <br />
                  <br />
                  Tuition and Fee Management: Automate the calculation and
                  collection of tuition and fees, supporting various payment
                  methods.
                  <br />
                  <br />
                  Financial Aid Processing: Manage the distribution of financial
                  aid, scholarships, and grants.
                  <br />
                  <br />
                  Billing: Generate and manage invoices for students and track
                  payment status.
                  <br />
                  <br />
                  Financial Reporting: Provide robust reporting tools for
                  financial analysis and compliance reporting.
                  <br />
                  <br />
                  <strong>Communication and Collaboration Tools :</strong>
                  <br />
                  <br />
                  Messaging Systems: Implement internal messaging systems for
                  communication between students, faculty, and administrators.
                  <br />
                  <br />
                  Forums and Announcements: Foster communication and
                  collaboration through discussion forums, announcement
                  features, and news updates.
                  <br />
                  <br />
                  <strong>Attendance Tracking :</strong>
                  <br />
                  <br />
                  Automated Tracking: Use automated systems, such as biometric
                  scanners or card swipes, to track student attendance.
                  <br />
                  <br />
                  Reporting: Generate reports on attendance patterns to identify
                  potential issues and trends.
                  <br />
                  <br />
                  <strong>Library Management :</strong>
                  <br />
                  <br />
                  Cataloging: Manage and organize the library's collection,
                  including books, journals, and multimedia resources.
                  <br />
                  <br />
                  Circulation: Facilitate the borrowing and returning of library
                  materials.
                  <br />
                  <br />
                  Inventory Management: Track and update the library's
                  inventory, ensuring accurate records of available resources.
                  <br />
                  <br />
                  <strong> Integration Capabilities :</strong>
                  <br />
                  <br />
                  Third-Party Integration: Ensure the software can seamlessly
                  integrate with other systems, such as accounting software, CRM
                  systems, and third-party educational tools.
                  <br />
                  <br />
                  Data Exchange: Enable data exchange between different systems
                  to avoid duplication of efforts and data entry.
                  <br />
                  <br />
                  <strong> Security and Access Control :</strong>
                  <br />
                  <br />
                  Data Encryption: Implement encryption protocols to secure
                  sensitive data.
                  <br />
                  <br />
                  Role-Based Access: Define different user roles with varying
                  levels of access permissions to protect data integrity.
                  <br />
                  <br />
                  <strong> Mobile Accessibility :</strong>
                  <br />
                  <br />
                  Responsive Design: Ensure that the software has a responsive
                  design, adapting to different screen sizes and devices.
                  <br />
                  <br />
                  Mobile Apps: Provide dedicated mobile applications for easy
                  access and functionality on smartphones and tablets.
                  <br />
                  <br />
                  <strong> Scalabilit :</strong>
                  <br />
                  <br />
                  Performance: Assess the software's ability to handle a growing
                  number of students, courses, and administrative tasks without
                  compromising performance.
                  <br />
                  <br />
                  Upgrades: Confirm that the software vendor provides regular
                  updates and upgrades to meet evolving needs.
                  <br />
                  <br />
                  <strong> User-Friendly Interface :</strong>
                  <br />
                  <br />
                  Intuitive Design: Prioritize software with an intuitive and
                  user-friendly interface to reduce training time and improve
                  user adoption.
                  <br />
                  <br />
                  Customization: Allow users to customize their interface
                  preferences for a more personalized experience.
                </p>
              </div>
              <div id="3">
                <h5 className="mt-4">
                  What security measures does the software employ to protect
                  sensitive data ?
                </h5>
                <p className="mt-4">
                  <strong>Encryption :</strong>
                  <br />
                  <br />
                  Definition: Encryption is the process of converting readable
                  data (plaintext) into a coded format (ciphertext) using an
                  algorithm and a secret key. Only those with the correct key
                  can decipher the data.
                  <br />
                  <br />
                  Importance: It protects sensitive information from
                  unauthorized access, even if the data is intercepted.
                  <br />
                  <br />
                  <strong>Authentication and Authorization :</strong>
                  <br />
                  <br />
                  Authentication: The process of verifying the identity of a
                  user, system, or device through credentials like usernames and
                  passwords.
                  <br />
                  <br />
                  Authorization: Determines the permissions and access levels
                  granted to authenticated users based on their roles, ensuring
                  they only access the information relevant to their tasks.
                  <br />
                  <br />
                  <strong>SSL/TLS :</strong>
                  <br />
                  <br />
                  Secure Socket Layer (SSL) or Transport Layer Security (TLS):
                  Protocols that establish encrypted connections between a
                  user's browser and a web server, ensuring secure data
                  transmission over the internet.
                  <br />
                  <br />
                  <strong>Firewalls :</strong>
                  <br />
                  <br />
                  Definition: Firewalls are security barriers that monitor and
                  control incoming and outgoing network traffic based on
                  predetermined security rules.
                  <br />
                  <br />
                  Importance: They prevent unauthorized access and protect
                  against various cyber threats.
                  <br />
                  <br />
                  <strong>
                    Regular Software Updates and Patch Management :
                  </strong>
                  <br />
                  <br />
                  Updates: Regularly released by software vendors to fix bugs,
                  enhance performance, and, most importantly, address security
                  vulnerabilities.
                  <br />
                  <br />
                  Importance: Ensures that the software is protected against
                  known security issues.
                  <br />
                  <br />
                  <strong>Data Backups :</strong>
                  <br />
                  <br />
                  Definition: Making copies of important data to a secondary
                  location, providing a means of recovery in case of data loss
                  or a security incident.
                  <br />
                  <br />
                  Importance: Mitigates the impact of data loss due to
                  accidental deletion, corruption, or cyberattacks.
                  <br />
                  <br />
                  <strong>
                    Intrusion Detection and Prevention Systems (IDPS) :
                  </strong>
                  <br />
                  <br />
                  Detection: Monitors network and/or system activities for
                  suspicious behavior or security policy violations.
                  <br />
                  <br />
                  Prevention: Takes automated actions (e.g., blocking traffic)
                  to stop potential security threats before they can cause harm.
                  <br />
                  <br />
                  <strong>Audit Trails and Logging :</strong>
                  <br />
                  <br />
                  Audit Trails: Record of events and activities within a system.
                  <br />
                  <br />
                  Importance: Helps in post-incident analysis, compliance
                  monitoring, and identifying potential security breaches by
                  reviewing historical logs.
                  <br />
                  <br />
                  <strong>Endpoint Security :</strong>
                  <br />
                  <br />
                  Definition: Protecting individual devices (endpoints) from
                  various cyber threats using antivirus, anti-malware, and other
                  security tools.
                  <br />
                  <br />
                  Importance: Safeguards against malicious software that could
                  compromise sensitive data.
                  <br />
                  <br />
                  <strong>Secure Development Practices :</strong>
                  <br />
                  <br />
                  Definition: Incorporating security considerations into the
                  software development lifecycle to identify and address
                  vulnerabilities during the coding process.
                  <br />
                  <br />
                  Importance: Reduces the likelihood of security flaws and
                  ensures a more secure software product.
                  <br />
                  <br />
                  These security measures collectively create a multi-layered
                  defense strategy, known as defense-in-depth, to protect
                  sensitive data and systems from a variety of threats. The
                  effectiveness of these measures depends on their proper
                  implementation and ongoing maintenance.
                </p>
              </div>
              <div id="4">
                <h5 className="mt-4">
                  How does the campus management software handle data analytics
                  and reporting ?
                </h5>
                <p className="mt-4">
                  Campus management software typically handles data analytics
                  and reporting through a combination of features designed to
                  collect, process, analyze, and present data in a meaningful
                  way. Here are common ways in which campus management software
                  addresses these aspects:
                  <br />
                  <br />
                  <strong>Data Collection :</strong>
                  <br />
                  <br />
                  Student Information: This involves gathering comprehensive
                  data on students, including personal details, academic
                  records, attendance, disciplinary history, and extracurricular
                  activities. The software acts as a centralized repository for
                  student-related information.
                  <br />
                  <br />
                  Staff Information: The software manages information about
                  faculty and staff, including qualifications, teaching
                  schedules, professional development, and performance
                  evaluations.
                  <br />
                  <br />
                  Administrative Data: It collects data related to the
                  administrative aspects of the institution, such as financial
                  records, facilities management, and other operational data.
                  <br />
                  <br />
                  <strong>Integration :</strong>
                  <br />
                  <br />
                  Data Sources Integration: The software integrates with various
                  data sources across the campus, including learning management
                  systems, financial systems, HR systems, and any other relevant
                  platforms. This ensures a holistic view of the institution's
                  data.
                  <br />
                  <br />
                  <strong>Data Processing :</strong>
                  <br />
                  <br />
                  Real-time Updates: The system processes data in real-time,
                  ensuring that information is current and reflects the latest
                  changes.
                  <br />
                  <br />
                  Data Cleaning and Validation: Data goes through cleaning and
                  validation processes to eliminate errors and inconsistencies,
                  maintaining data accuracy and integrity.
                  <br />
                  <br />
                  <strong>Analytics :</strong>
                  <br />
                  <br />
                  Predictive Analytics: This involves using historical data to
                  identify patterns and trends, enabling the system to make
                  predictions about future outcomes. For example, predicting
                  student performance or identifying potential resource needs.
                  <br />
                  <br />
                  Descriptive Analytics: This form of analytics summarizes and
                  interprets historical data to provide insights into past
                  trends, helping stakeholders understand the current state of
                  affairs.
                  <br />
                  <br />
                  Prescriptive Analytics: The software offers recommendations
                  for actions to optimize processes and improve outcomes based
                  on data analysis.
                  <br />
                  <br />
                  <strong>Custom Reporting :</strong>
                  <br />
                  <br />
                  Ad Hoc Reporting: Users can create custom reports on the fly,
                  tailoring the information to their specific needs without
                  relying on pre-defined templates.
                  <br />
                  <br />
                  Dashboards: The software provides visual dashboards that
                  display key performance indicators (KPIs) and trends in a
                  graphical format, making it easier for users to interpret
                  complex data.
                  <br />
                  <br />
                  <strong>Data Security :</strong>
                  <br />
                  <br />
                  Access Controls: Role-based access controls are implemented to
                  ensure that only authorized personnel have access to sensitive
                  data. This helps protect student and staff privacy.
                  <br />
                  <br />
                  Data Encryption: Data is encrypted to safeguard it from
                  unauthorized access, both during transmission and when stored
                  in the system.
                  <br />
                  <br />
                  <strong>Compliance :</strong>
                  <br />
                  <br />
                  Regulatory Compliance: The software is designed to adhere to
                  relevant data protection and privacy regulations, ensuring
                  that the institution complies with legal requirements related
                  to handling sensitive information.
                  <br />
                  <br />
                  <strong>User-Friendly Interface :</strong>
                  <br />
                  <br />
                  Intuitive Design: The user interface is designed to be
                  user-friendly, allowing staff with varying technical expertise
                  to interact with the system easily. This includes features
                  like drag-and-drop report builders and easy navigation.
                  <br />
                  <br />
                  <strong>Scalability :</strong>
                  <br />
                  <br />
                  Handles Growing Data: The software architecture is scalable,
                  meaning it can accommodate a growing volume of data as the
                  institution expands. This scalability ensures that performance
                  is maintained even as the data load increases.
                  <br />
                  <br />
                  <strong>Support and Training :</strong>
                  <br />
                  <br />
                  User Training: The software provider typically offers training
                  sessions to help users understand how to effectively use the
                  analytics and reporting features. Ongoing support is also
                  provided to address any issues and ensure optimal use of the
                  system.
                </p>
              </div>
              <div id="5">
                <h5 className="mt-4">
                  How does the campus management software facilitate student
                  enrollment and admissions processes ?
                </h5>
                <p className="mt-4">
                  Campus management software plays a crucial role in
                  streamlining and enhancing the student enrollment and
                  admissions processes. Here are several ways in which it
                  facilitates these processes:
                  <br />
                  <br />
                </p>
                <ol>
                  <strong>
                    <li>Online Application Management:</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Convenience for Applicants :</strong> By offering
                      online application forms, institutions provide prospective
                      students with the convenience of applying from anywhere
                      with an internet connection.
                    </li>
                    <li>
                      <strong>Real-time Tracking :</strong> Applicants can
                      monitor the progress of their applications in real-time,
                      reducing anxiety and providing transparency throughout the
                      admissions process.
                    </li>
                  </ul>
                  <strong>
                    <li>Document Management :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Efficient Storage : </strong> Campus management
                      software facilitates the efficient storage of documents by
                      digitizing paperwork. This eliminates the need for
                      physical file storage and allows for easy retrieval of
                      information.
                    </li>
                    <li>
                      <strong>Reduced Errors : </strong> Digital document
                      management minimizes the risk of errors associated with
                      manual handling of paperwork.
                    </li>
                  </ul>
                  <strong>
                    <li>Automated Workflows :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Streamlined Processes :</strong>Automation ensures
                      that each step of the admissions process flows seamlessly
                      into the next, reducing bottlenecks and delays.
                    </li>
                    <li>
                      <strong> Notifications and Reminders :</strong> Automated
                      notifications and reminders keep both applicants and
                      admission staff informed about upcoming deadlines,
                      ensuring that all requirements are met promptly.
                    </li>
                  </ul>
                  <strong>
                    <li>Application Tracking :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Centralized System :</strong> A centralized system
                      for application tracking allows admission officers to
                      efficiently monitor and manage the status of each
                      application
                    </li>
                    <li>
                      <strong>Timely Decision-making :</strong>Real-time updates
                      enable prompt decision-making, improving the overall
                      efficiency of the admissions office.
                    </li>
                  </ul>
                  <strong>
                    <li>Integration with Academic Systems :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Data Consistency :</strong>Integration with
                      academic systems ensures that data is consistent across
                      different departments, reducing the likelihood of
                      discrepancies.
                    </li>
                    <li>
                      <strong>Efficient Transfer of Information :</strong>Once
                      students are admitted, their information seamlessly
                      transfers to the student information system (SIS),
                      eliminating the need for manual data entry.
                    </li>
                  </ul>
                  <strong>
                    <li>Fee Management :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Transparent Fee Structures :</strong> Institutions
                      can provide students with clear and accessible information
                      about fee structures through the software.
                    </li>
                    <li>
                      <strong>Online Payments :</strong>Students can make secure
                      online payments, and automated receipts streamline the
                      financial transaction process.
                    </li>
                  </ul>
                  <strong>
                    <li>Communication Tools :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Targeted Communication :</strong> The software's
                      communication tools enable institutions to send targeted
                      messages to specific groups of students, keeping them
                      informed about relevant events, deadlines, and
                      requirements.
                    </li>
                    <li>
                      <strong>Improved Engagement :</strong>Enhanced
                      communication tools contribute to better engagement
                      between the institution and prospective students.
                    </li>
                  </ul>
                  <strong>
                    <li>Reporting and Analytics :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Data-Driven Decision Making :</strong>The software
                      generates reports and analytics, providing institutions
                      with valuable insights into enrollment trends, admission
                      success rates, and other key metrics.
                    </li>
                    <li>
                      <strong>Continuous Improvement :</strong> Data-driven
                      decision-making helps institutions make informed
                      adjustments to their admissions strategies for continuous
                      improvement.
                    </li>
                  </ul>
                  <strong>
                    <li>Mobile Accessibility :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>On-the-Go Access :</strong> Mobile applications
                      associated with the campus management software allow
                      students to access important information, submit
                      documents, and receive updates on their smartphones.
                    </li>
                    <li>
                      <strong>Enhanced User Experience :</strong>Mobile
                      accessibility contributes to an enhanced user experience,
                      catering to the preferences of today's mobile-savvy
                      students
                    </li>
                  </ul>
                  <strong>
                    <li>Security and Compliance :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Data Security Measures :</strong> The software
                      incorporates robust security measures such as access
                      controls and encryption to safeguard sensitive student
                      data.
                    </li>
                    <li>
                      <strong>Compliance Assurance :</strong>Institutions can
                      use the software to ensure compliance with data protection
                      regulations, fostering trust among students and
                      stakeholders.
                    </li>
                  </ul>
                </ol>
              </div>
              <div id="6">
                <h5 className="mt-4">
                  Can the campus management software track and manage resources
                  such as classrooms, equipment, and materials efficiently ?
                </h5>
                <p className="mt-4">
                  Yes, campus management software is designed to track and
                  manage various resources efficiently, including classrooms,
                  equipment, and materials. These systems typically offer
                  features such as resource scheduling, inventory management,
                  and tracking functionalities.
                  <br />
                </p>
                <ol>
                  <strong>
                    <li>Classroom Management :</li>
                  </strong>
                  <ul>
                    <li>
                      The software can help schedule classes and allocate
                      appropriate classrooms based on availability and
                      requirements.
                    </li>
                    <li>
                      It can provide real-time updates on classroom occupancy
                      and availability.
                    </li>
                    <li>
                      Users can easily view and manage classroom bookings,
                      ensuring efficient utilization of available spaces.
                    </li>
                  </ul>
                  <strong>
                    <li>Equipment Tracking :</li>
                  </strong>
                  <ul>
                    <li>
                      The software allows for the tracking of equipment, such as
                      projectors, computers, or laboratory instruments.
                    </li>
                    <li>
                      It provides information on the current status, location,
                      and availability of equipment.
                    </li>
                    <li>
                      Maintenance schedules and histories can be managed within
                      the system, ensuring that equipment is well-maintained and
                      available when needed.
                    </li>
                  </ul>
                  <strong>
                    <li>Materials Management :</li>
                  </strong>
                  <ul>
                    <li>
                      Inventory management features enable efficient tracking of
                      materials and supplies.
                    </li>
                    <li>
                      The system can automate reordering processes based on
                      predefined inventory levels to prevent shortages.
                    </li>
                    <li>
                      Users can monitor the usage and consumption of materials,
                      helping to streamline procurement and reduce waste.
                    </li>
                  </ul>
                  <strong>
                    <li>Resource Utilization Reports :</li>
                  </strong>
                  <ul>
                    <li>
                      Campus management software often includes reporting tools
                      that provide insights into resource utilization.
                    </li>
                    <li>
                      Administrators can analyze data to make informed decisions
                      about resource allocation and identify areas for
                      improvement.
                    </li>
                  </ul>
                  <strong>
                    <li>Integration with Other Modules :</li>
                  </strong>
                  <ul>
                    <li>
                      Many campus management systems integrate resource
                      management with other modules, such as scheduling, student
                      information, and finance.
                    </li>
                    <li>
                      This integration ensures seamless communication between
                      different aspects of campus operations.
                    </li>
                  </ul>
                </ol>
              </div>
              <div id="7">
                <h5 className="mt-4">
                  How does the campus management software handle grading,
                  assessments, and feedback for students ?
                </h5>
                <p className="mt-4">
                  Campus management software plays a crucial role in handling
                  grading, assessments, and feedback for students. Here's a
                  breakdown of how these aspects are typically managed :
                  <br />
                </p>
                <ol>
                  <strong>
                    <li>Grading :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Automated Grading :</strong> The software often
                      includes a module for automated grading of assignments and
                      exams. This feature allows instructors to create and
                      distribute assessments digitally, and the system can
                      automatically grade multiple-choice questions or
                      assignments with predefined criteria.
                    </li>
                    <li>
                      <strong>Gradebook Management :</strong> The software
                      maintains a digital gradebook, where instructors can input
                      grades for various assignments, quizzes, and exams. This
                      centralized gradebook provides a comprehensive overview of
                      a student's performance throughout the course.
                    </li>
                  </ul>
                  <strong>
                    <li>Assessments :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Online Assessments :</strong>Campus management
                      software facilitates the creation and administration of
                      online assessments. Instructors can design quizzes, exams,
                      and assignments within the system, and students can access
                      and complete them online.
                    </li>
                    <li>
                      <strong>Diverse Question Formats :</strong>The software
                      supports various question formats, including
                      multiple-choice, short answer, essays, and more. This
                      flexibility allows educators to design assessments that
                      align with their teaching methods and course objectives.
                    </li>
                  </ul>
                  <strong>
                    <li>Feedback :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Online Feedback and Comments :</strong>Instructors
                      can provide feedback to students directly within the
                      software. This feedback may include comments on specific
                      questions, overall performance, and suggestions for
                      improvement. Students can access this feedback digitally,
                      promoting a more efficient and timely feedback loop
                    </li>
                    <li>
                      <strong>Rubrics and Grading Criteria :</strong> The
                      software often supports the use of rubrics and predefined
                      grading criteria. Instructors can use these tools to
                      communicate expectations to students and provide
                      transparent and consistent feedback.
                    </li>
                  </ul>
                  <strong>
                    <li>
                      Integration with Learning Management Systems (LMS) :
                    </li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Seamless Integration :</strong>Many campus
                      management systems integrate with Learning Management
                      Systems, creating a cohesive educational environment. This
                      integration ensures that grades, assessments, and feedback
                      are synchronized between the different platforms used in
                      the educational ecosystem.
                    </li>
                  </ul>
                  <strong>
                    <li>Analytics and Reporting :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Performance Analytics :</strong>The software may
                      offer analytics and reporting features that allow
                      administrators and instructors to track student
                      performance trends. This data can be used to identify
                      areas of improvement, evaluate teaching methods, and
                      implement targeted interventions for students who may be
                      struggling.
                    </li>
                  </ul>
                  <strong>
                    <li>Communication Channels :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Communication Tools :</strong>Campus management
                      software often includes communication tools such as
                      messaging systems or discussion forums. These features
                      enable instructors to communicate with students about
                      grades, assessments, and feedback in a centralized and
                      organized manner.
                    </li>
                  </ul>
                </ol>
              </div>
              <div id="8">
                <h5 className="mt-4">
                  What is the pricing model for campus management software, and
                  are there hidden costs to consider?
                </h5>
                <p className="mt-4">
                  The pricing model for campus management software can vary
                  based on the specific product and the vendor providing it.
                  However, there are some common pricing models and factors to
                  consider:
                  <br />
                  <br />
                </p>
                <ol>
                  <strong>
                    <li>Subscription-based Pricing :</li>
                  </strong>
                  <ul>
                    <li>
                      This model involves paying a recurring fee at regular
                      intervals, such as monthly or annually. The cost is
                      typically based on the number of users (administrators,
                      faculty, students) and the features included in the
                      subscription. Institutions need to budget for this ongoing
                      expense and consider potential increases as user numbers
                      grow.
                    </li>
                  </ul>
                  <strong>
                    <li>User-based Pricing :</li>
                  </strong>
                  <ul>
                    <li>
                      User-based pricing entails paying for the software based
                      on the number of users or accounts. This can include
                      administrators, faculty, staff, and students. Institutions
                      should carefully estimate their user count to ensure
                      accurate budgeting and avoid unexpected costs as the
                      institution expands.
                    </li>
                  </ul>
                  <strong>
                    <li>Module-based Pricing :</li>
                  </strong>
                  <ul>
                    <li>
                      Campus management software often comes with various
                      modules, each addressing a specific function (enrollment,
                      academic planning, grading, etc.). Vendors may charge
                      separately for each module, allowing institutions to
                      tailor their software package to specific needs. It's
                      important to assess which modules are essential and budget
                      accordingly.
                    </li>
                  </ul>
                  <strong>
                    <li>Custom Pricing :</li>
                  </strong>
                  <ul>
                    <li>
                      For larger institutions with unique requirements, vendors
                      may offer custom pricing. This involves negotiating a
                      price based on the specific features, scale, and needs of
                      the institution. While this offers flexibility, it's
                      crucial to ensure that all requirements are clearly
                      communicated to prevent unforeseen costs during
                      implementation.
                    </li>
                  </ul>
                  <strong>
                    <li>Implementation and Training Costs :</li>
                  </strong>
                  <ul>
                    <li>
                      Implementing campus management software may incur
                      additional costs, covering the setup and configuration of
                      the system. Training costs are associated with educating
                      users on how to effectively use the software. Institutions
                      should clarify what is included in the implementation and
                      training process and whether these services are bundled
                      into the overall cost.
                    </li>
                  </ul>
                  <strong>
                    <li>Support and Maintenance Costs :</li>
                  </strong>
                  <ul>
                    <li>
                      Ongoing support and maintenance are critical for the
                      proper functioning of the software. Vendors may charge
                      additional fees for technical support, software updates,
                      and maintenance services. Understanding the level of
                      support offered and associated costs is essential to
                      ensure timely assistance when needed.
                    </li>
                  </ul>
                  <strong>
                    <li>Integration Costs :</li>
                  </strong>
                  <ul>
                    <li>
                      If the campus management software needs to integrate with
                      existing systems or databases, there might be additional
                      costs associated with integration services. Institutions
                      should inquire about integration capabilities, potential
                      challenges, and any associated costs to seamlessly connect
                      the new software with existing infrastructure.
                    </li>
                  </ul>
                  <strong>
                    <li>Scalability Costs :</li>
                  </strong>
                  <ul>
                    <li>
                      Some vendors may adjust pricing based on the scalability
                      of the software. Institutions should understand how costs
                      will evolve as the number of users or the scale of
                      operations increases. Clear communication with the vendor
                      about future scalability plans can help avoid unexpected
                      cost hikes.
                    </li>
                  </ul>
                  <strong>
                    <li>Hidden Costs :</li>
                  </strong>
                  <ul>
                    <li>
                      Hidden costs refer to expenses not immediately apparent in
                      the initial pricing discussions. These could include
                      charges for exceeding user limits, data storage costs, or
                      additional fees for specific features. Thoroughly
                      reviewing the contract and discussing potential hidden
                      costs with the vendor is crucial to avoid financial
                      surprises.
                    </li>
                  </ul>
                  <strong>
                    <li>Data Migration Costs :</li>
                  </strong>
                  <ul>
                    <li>
                      If transitioning from another system, there may be costs
                      associated with migrating existing data to the new
                      software. Understanding the data migration process,
                      potential challenges, and associated costs is essential
                      for a smooth transition without unexpected financial
                      burdens.
                    </li>
                  </ul>
                </ol>
              </div>
              <div id="9">
                <h5 className="mt-4">
                  What options does the campus management software provide for
                  managing faculty workflows and tasks ?
                </h5>
                <p className="mt-4">
                  Campus management software plays a crucial role in
                  streamlining faculty workflows and tasks within educational
                  institutions. The specific features and options may vary among
                  different software solutions, but here are common
                  functionalities that such software typically provides for
                  managing faculty workflows:
                  <br />
                </p>
                <ol>
                  <strong>
                    <li>Course Planning and Scheduling :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Creation and management of course schedules :
                      </strong>{" "}
                      The software allows administrators and faculty to create
                      and manage detailed course schedules, including class
                      timings, locations, and faculty assignments.
                    </li>
                    <li>
                      <strong>
                        Allocation of faculty members to specific courses :
                      </strong>{" "}
                      It provides a system for assigning instructors to
                      particular courses, ensuring proper distribution of
                      teaching responsibilities.
                    </li>
                    <li>
                      <strong>Integration with academic calendars :</strong> The
                      software syncs with academic calendars, helping faculty
                      and administrators coordinate schedules with holidays,
                      exam periods, and other important dates.
                    </li>
                  </ul>
                  <strong>
                    <li>Attendance Tracking :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Monitoring and recording student attendance:
                      </strong>{" "}
                      The software automates the attendance tracking process,
                      allowing faculty to record and monitor student attendance
                      easily.
                    </li>
                    <li>
                      <strong>
                        Automated attendance reports for faculty members :
                      </strong>{" "}
                      Faculty members can generate automated attendance reports
                      to track student participation and identify trends or
                      issues.
                    </li>
                  </ul>
                  <strong>
                    <li>Grading and Assessment :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Tools for entering and managing grades :</strong>{" "}
                      The software provides a digital platform for faculty to
                      enter, manage, and update grades securely.
                    </li>
                    <li>
                      <strong>
                        Support for various grading systems and scales :
                      </strong>{" "}
                      It accommodates different grading systems, scales, and
                      grade calculation methods to suit the institution's
                      grading policies.
                    </li>
                    <li>
                      <strong>
                        Integration with assessment tools and plagiarism
                        detectors :
                      </strong>{" "}
                      Integrations with assessment tools and plagiarism
                      detection services enhance the evaluation process.
                    </li>
                  </ul>
                  <strong>
                    <li>Communication and Collaboration :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Internal messaging systems for faculty communication :
                      </strong>{" "}
                      The software includes messaging features to facilitate
                      internal communication among faculty members.
                    </li>
                    <li>
                      <strong>
                        Integration with email or other communication platforms
                        :
                      </strong>{" "}
                      It integrates with email or other communication tools,
                      ensuring seamless communication across different channels.
                    </li>
                    <li>
                      <strong>
                        Collaboration tools for sharing resources and
                        information :
                      </strong>{" "}
                      Collaborative features enable faculty to share resources,
                      discuss ideas, and collaborate on projects within the
                      platform.
                    </li>
                  </ul>
                  <strong>
                    <li>Faculty Performance Evaluation :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Performance tracking for faculty members :
                      </strong>{" "}
                      The software tracks and records faculty performance
                      metrics, including teaching evaluations, research
                      contributions, and service to the institution.
                    </li>
                    <li>
                      <strong>Automated evaluation processes :</strong> It
                      streamlines the faculty evaluation process, automating the
                      collection of data and feedback for performance
                      assessments.
                    </li>
                    <li>
                      <strong>
                        Integration with professional development plans :
                      </strong>{" "}
                      The software may link performance evaluations with
                      professional development plans to identify areas for
                      improvement and growth.
                    </li>
                  </ul>
                  <strong>
                    <li>Resource Management :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Allocation and management of classrooms, laboratories,
                        and other resources :
                      </strong>{" "}
                      The software helps allocate and manage physical resources
                      like classrooms and labs, ensuring optimal utilization.
                    </li>
                    <li>
                      <strong>
                        Booking systems for faculty meetings and events :
                      </strong>{" "}
                      Faculty can use the booking system to schedule and reserve
                      spaces for meetings, seminars, or other events.
                    </li>
                  </ul>
                  <strong>
                    <li>Leave Management :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Submission and approval of leave requests :
                      </strong>{" "}
                      Faculty members can submit leave requests through the
                      software, and administrators can efficiently approve or
                      deny requests.
                    </li>
                    <li>
                      <strong>
                        Tracking of faculty attendance and absences :
                      </strong>{" "}
                      The system tracks attendance and absences, aiding in the
                      management of faculty work hours and leave balances.
                    </li>
                  </ul>
                  <strong>
                    <li>Research and Publications :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Repository for faculty research and publications :
                      </strong>{" "}
                      The software includes a repository for storing and
                      organizing faculty research papers, articles, and
                      publications.
                    </li>
                    <li>
                      <strong>
                        Tools for tracking and managing research projects :
                      </strong>{" "}
                      Faculty can use tools to manage and track the progress of
                      their research projects within the platform.
                    </li>
                  </ul>
                  <strong>
                    <li>
                      Integration with Learning Management Systems (LMS) :
                    </li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Seamless integration with LMS platforms for course
                        content delivery :
                      </strong>{" "}
                      The software integrates with popular LMS platforms,
                      allowing faculty to seamlessly deliver course content and
                      assignments to students.
                    </li>
                    <li>
                      <strong>
                        Access to online resources and learning materials :
                      </strong>{" "}
                      Faculty members can access and share online resources and
                      learning materials through the integrated LMS.
                    </li>
                  </ul>
                  <strong>
                    <li>Analytics and Reporting :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Data analytics tools for tracking faculty and course
                        performance :
                      </strong>{" "}
                      The software provides analytics tools to track and analyze
                      faculty and course performance data.
                    </li>
                    <li>
                      <strong>
                        Generation of custom reports for decision-making :
                      </strong>{" "}
                      Users can generate custom reports to extract specific
                      insights for informed decision-making by administrators.
                    </li>
                  </ul>
                  <strong>
                    <li>Professional Development :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Tracking and managing faculty development programs :
                      </strong>{" "}
                      The software helps in tracking faculty participation in
                      workshops, conferences, and other professional development
                      programs.
                    </li>
                    <li>
                      <strong>
                        Support for continuing education and training :
                      </strong>{" "}
                      It may include features to support ongoing education and
                      training opportunities for faculty members.
                    </li>
                  </ul>
                  <strong>
                    <li>Workflow Automation :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Automation of routine administrative tasks :
                      </strong>{" "}
                      The software automates repetitive administrative tasks,
                      reducing manual workload and improving efficiency.
                    </li>
                    <li>
                      <strong>
                        Streamlining approval processes for various tasks :
                      </strong>{" "}
                      It streamlines approval processes for tasks such as leave
                      requests, course proposals, and research project
                      submissions.
                    </li>
                  </ul>
                  <strong>
                    <li>Document Management :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Centralized storage for faculty-related documents :
                      </strong>{" "}
                      The software provides a centralized repository for storing
                      and organizing faculty-related documents, such as resumes,
                      certifications, and official communications.
                    </li>
                    <li>
                      <strong>
                        Version control and access controls for sensitive
                        information :
                      </strong>{" "}
                      It may include version control mechanisms to track
                      document changes and access controls to protect sensitive
                      information.
                    </li>
                  </ul>
                  <strong>
                    <li>Accreditation Support :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Tools for managing accreditation processes :
                      </strong>{" "}
                      The software assists in managing and organizing
                      documentation required for accreditation processes.
                    </li>
                    <li>
                      <strong>
                        Generation of reports and documentation required for
                        accreditation :
                      </strong>{" "}
                      It facilitates the generation of reports and documentation
                      necessary for accreditation submissions.
                    </li>
                  </ul>
                  <strong>
                    <li>Security and Access Controls :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>
                        Role-based access controls to ensure data security :
                      </strong>{" "}
                      The software employs role-based access controls to ensure
                      that only authorized individuals have access to sensitive
                      data.
                    </li>
                    <li>
                      <strong>
                        Compliance with data protection regulations :
                      </strong>{" "}
                      It complies with data protection regulations to safeguard
                      faculty and student information and ensure privacy.
                    </li>
                  </ul>
                </ol>
              </div>
            </Col>
            <Col lg={{span:4, offset: 1}}>
              <div
                className={`${styles["content-box"]} box bg-light rounded-4 p-4 border overflow-auto`}
              >
                <h3>Table of content</h3>
                <div className="mt-3">
                  <ol>
                    <Link href="#1">
                      <li>What is a Campus Management Software ?</li>
                    </Link>
                    <hr />
                    <Link href="#2">
                      <li>
                      What features should I look for in campus management software ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#3">
                      <li>
                      What security measures does the software employ to protect sensitive data ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#4">
                      <li>
                      How does the campus management software handle data analytics and reporting ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#5">
                      <li>
                      How does the campus management software facilitate student enrollment and admissions processes ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#6">
                      <li>
                      Can the campus management software track and manage resources such as classrooms, equipment, and materials efficiently ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#7">
                      <li>
                      How does the campus management software handle grading, assessments, and feedback for students ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#8">
                      <li>
                      What is the pricing model for campus management software, and are there hidden costs to consider ?
                      </li>
                    </Link>
                    <hr/>
                    <Link href="#9">
                      <li>
                      What options does the campus management software provide for managing faculty workflows and tasks ?
                      </li>
                    </Link>
                  </ol>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Recommend;
