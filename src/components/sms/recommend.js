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

      {/* <section className={`${styles["ads2"]} mt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className=" mb-4">Best Softwares 2</h3>
            </Col>
            <Col lg={3} className={styles["colmob-card"]}>
              <Card
                border=""
                className={`${styles["card-mob"]} h-100 shadow`}
                style={{ width: "18rem" }}
              >
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
                        style={{ backgroundColor: "#f95738 " }}
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
              <Card
                border=""
                className={`${styles["card-mob"]} h-100 shadow`}
                style={{ width: "18rem" }}
              >
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
                        style={{ backgroundColor: "#f95738 " }}
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
              <Card
                border=""
                className={`${styles["card-mob"]} h-100 shadow`}
                style={{ width: "18rem" }}
              >
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
                        style={{ backgroundColor: "#f95738 " }}
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
              <Card
                border=""
                className={`${styles["card-mob"]} h-100 shadow`}
                style={{ width: "18rem" }}
              >
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
                        style={{ backgroundColor: "#f95738 " }}
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
              <div id="1" className="question">
                <h5 className="">What is School management software ?</h5>
                <p className="mt-4">
                  School management software is a computerized solution
                  specifically designed to automate and streamline the various
                  administrative and academic processes within educational
                  institutions. Its primary purpose is to replace manual,
                  time-consuming tasks with efficient and automated digital
                  processes.
                  <br />
                  <br />
                  The software typically includes modules for managing student
                  information, such as personal details and academic
                  performance, as well as tracking attendance and generating
                  reports. It aids in creating and managing class schedules,
                  ensuring optimal use of resources and minimizing scheduling
                  conflicts.
                  <br />
                  <br />
                  Communication tools within the software facilitate easy and
                  effective interaction between teachers, students, and parents.
                  This can include messaging systems or dedicated portals where
                  important information and updates are shared.
                  <br />
                  <br />
                  Other key features encompass library management, fee tracking,
                  and human resources functionalities, including staff
                  information, attendance, and payroll management. The software
                  often includes tools for managing examinations, from
                  scheduling to result processing.
                  <br />
                  <br />
                  Moreover, it provides portals for parents and students to
                  access real-time academic information, fostering transparency
                  and communication. Financial management features help in
                  budgeting, expense tracking, and financial reporting.
                  <br />
                  <br />
                  One of the crucial aspects of school management software is
                  its commitment to data security, ensuring the confidentiality
                  and privacy of sensitive information in compliance with data
                  protection regulations.
                  <br />
                  <br />
                  By integrating these diverse functions into a centralized
                  digital platform, school management software significantly
                  improves operational efficiency, reduces paperwork, and
                  enhances overall communication and collaboration within the
                  educational institution. It serves as a comprehensive and
                  indispensable tool for modernizing and optimizing daily school
                  operations in the digital age
                </p>
              </div>
              <div id="2">
                <h5 className="mt-4">
                  What are the key features in a school management software ?
                </h5>
                <p className="mt-4">
                  A school management software typically includes a range of
                  features to streamline administrative tasks, enhance
                  communication, and improve overall efficiency in educational
                  institutions. Here are some key features commonly found in
                  school management software :
                  </p>
                  <br />
                  <br />
                  <ol>
                    <strong>
                      <li>Student Information System (SIS) :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Student Profiles: :</strong>This includes
                        personal details such as name, date of birth, contact
                        information, and any relevant medical information. It
                        provides a comprehensive overview of the student.
                      </li>
                      <li>
                        <strong>Enrollment Management :</strong> The system
                        manages the entire enrollment process, from application
                        to admission and registration. It tracks each
                        student&#39;s academic history and progress.
                      </li>
                    </ul>
                    <strong>
                      <li>Attendance Management :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Automated Tracking : </strong> Attendance can be
                        recorded automatically through various means, such as
                        biometric systems, RFID cards, or mobile apps. This
                        minimizes manual effort and errors.
                      </li>
                      <li>
                        <strong>Reporting and Analysis : </strong>The software
                        generates reports on attendance data, allowing
                        administrators to analyze trends, identify patterns, and
                        address attendance issues promptly.
                      </li>
                    </ul>
                    <strong>
                      <li>Gradebook and Academic Progress :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Online Gradebooks :</strong>Teachers can input
                        grades digitally, and the system calculates overall
                        academic performance. This enables real- time tracking
                        of student progress.
                      </li>
                      <li>
                        <strong> Progress Tracking :</strong>The software
                        maintains a historical record of students&#39; academic
                        achievements, making it easier to identify areas of
                        improvement or excellence.
                      </li>
                    </ul>
                    <strong>
                      <li>Timetable and Scheduling :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Class Schedules :</strong> The system creates
                        and manages timetables for classes, exams, and other
                        school activities. It ensures a well-organized and
                        efficient use of time and resources.
                      </li>
                      <li>
                        <strong>Room Allocation :</strong>Assigning appropriate
                        classrooms or resources for each class or activity,
                        preventing scheduling conflicts.
                      </li>
                    </ul>
                    <strong>
                      <li>Communication Tools :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Parent-Teacher Portals :</strong>These platforms
                        enable direct communication between parents and
                        teachers. They often provide updates on student
                        performance, attendance, and general announcements.
                      </li>
                      <li>
                        <strong>Internal Messaging Systems: :</strong>
                        Facilitating communication among staff members,
                        promoting collaboration and efficient information
                        sharing.
                      </li>
                    </ul>
                    <strong>
                      <li>Fee Management :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Billing and Invoicing :</strong>The software
                        automates the billing process for tuition fees and other
                        charges. Invoices are generated, and payment details are
                        tracked.
                      </li>
                      <li>
                        <strong>Payment Tracking :</strong>It monitors payment
                        statuses, tracks overdue fees, and provides financial
                        reports, streamlining the financial management of the
                        institution.
                      </li>
                    </ul>
                    <strong>
                      <li>Library Management :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Cataloging Resources :</strong> The system
                        organizes and indexes library materials, making it easy
                        for students and staff to locate and borrow resources.
                      </li>
                      <li>
                        <strong>Check-in/Check-out Systems :</strong>Automated
                        systems track when library resources are borrowed and
                        returned, reducing manual bookkeeping.
                      </li>
                    </ul>
                    <strong>
                      <li>Human Resources Management :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Staff Profiles :</strong>Detailed records for
                        each staff member, including personal information,
                        qualifications, and work history.
                      </li>
                      <li>
                        <strong>Payroll Processing :</strong> The software
                        automates salary calculations, tax deductions, and
                        generates pay slips, simplifying payroll management.
                      </li>
                    </ul>
                    <strong>
                      <li>Examination and Assessment :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Exam Scheduling :</strong> The system helps in
                        planning and organizing exam schedules, ensuring a
                        smooth and systematic examination process.
                      </li>
                      <li>
                        <strong>Automated Grading :</strong>It streamlines the
                        grading process, reducing the time and effort required
                        by teachers.
                      </li>
                    </ul>
                    <strong>
                      <li>Transportation Management :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Bus Route Tracking :</strong> Monitoring school
                        bus routes in real-time to ensure timely and safe
                        transportation.
                      </li>
                      <li>
                        <strong>Attendance Tracking :</strong>Keeping track of
                        students who use school transportation services,
                        ensuring their safety.
                      </li>
                    </ul>
                    <strong>
                      <li>Admissions Management :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Online Application :</strong> Prospective
                        students can apply online, simplifying the application
                        process.
                      </li>
                      <li>
                        <strong>Admission Status Tracking :</strong>The system
                        provides real-time updates on the status of
                        applications, making it easier for administrators to
                        manage admissions.
                      </li>
                    </ul>
                    <strong>
                      <li>Data Security and Access Control :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Role-Based Access :</strong>Different users have
                        access levels based on their roles, ensuring that
                        sensitive information is only accessible to authorized
                        personnel.
                      </li>
                      <li>
                        <strong>Encryption :</strong>The software uses
                        encryption methods to secure sensitive data, protecting
                        it from unauthorized access.
                      </li>
                    </ul>
                    <strong>
                      <li>
                        Integration with Learning Management Systems (LMS) :
                      </li>
                    </strong>
                    <ul>
                      <li>
                        <strong> Seamless Integration :</strong> The school
                        management software integrates seamlessly with LMS
                        platforms, providing a unified experience for students
                        and educators.
                      </li>
                      <li>
                        <strong>Course Content Management :</strong>The system
                        assists in managing and delivering digital course
                        content, enhancing the learning experience.
                      </li>
                    </ul>
                    <strong>
                      <li>Custom Reporting :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Tailored Reports :</strong> Administrators can
                        create custom reports based on specific data points and
                        criteria, providing insights into various aspects of
                        school operations.
                      </li>
                    </ul>
                    <strong>
                      <li>Mobile Accessibility :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Mobile Apps/Responsive Design :</strong> The
                        software is accessible through mobile devices, allowing
                        users to manage tasks and access information on the go.
                      </li>
                    </ul>
                    <strong>
                      <li>Event Management :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Planning and Scheduling :</strong> The system
                        assists in planning and scheduling school events,
                        meetings, and activities, ensuring a well- coordinated
                        calendar.
                      </li>
                    </ul>
                    <strong>
                      <li>Document Management :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Centralized Storage :</strong> The software
                        provides a centralized location for storing and managing
                        important documents and files, facilitating easy access
                        and collaboration.
                      </li>
                    </ul>
                    <strong>
                      <li>Health and Attendance Monitoring :</li>
                    </strong>
                    <ul>
                      <li>
                        <strong>Health Records :</strong> The system maintains
                        records of students&#39; health information, including
                        allergies, vaccinations, and medical history.
                      </li>
                      <li>
                        <strong>Well-being Monitoring :</strong>It tracks
                        students&#39; overall well-being and health-related
                        incidents, ensuring a safe and healthy school
                        environment.
                      </li>
                    </ul>
                  </ol>
                
              </div>
              <div id="3">
                <h5 className="mt-4">
                  What are the key challenges school faces that a school
                  management software can address ?
                </h5>
                <p className="mt-4">
                  School management software can address several key challenges
                  that educational institutions commonly face. Here are some of
                  the prominent ones :
                  </p>
                  <br />
                  <br />
                  <ol>
                    <strong>
                      <li>Administrative Efficiency :</li>
                    </strong>
                    <ul>
                      <li>
                        School management software automates administrative
                        tasks like student enrollment, staff management, and
                        resource allocation. It provides a centralized platform
                        for administrators to oversee various processes,
                        reducing manual work and minimizing errors.
                      </li>
                    </ul>
                    <strong>
                      <li>Communication Gap :</li>
                    </strong>
                    <ul>
                      <li>
                        The software offers communication tools such as
                        messaging systems, announcements, and online portals.
                        This ensures that teachers, students, and parents can
                        easily communicate and stay informed about important
                        updates, events, and academic progress.
                      </li>
                    </ul>
                    <strong>
                      <li>Data Management :</li>
                    </strong>
                    <ul>
                      <li>
                        Centralized databases in school management software
                        efficiently store and manage student records, attendance
                        data, and other essential information. This streamlines
                        data retrieval, reduces redundancy, and ensures data
                        accuracy.
                      </li>
                    </ul>
                    <strong>
                      <li>Attendance Tracking :</li>
                    </strong>
                    <ul>
                      <li>
                        Automation of attendance tracking eliminates the need
                        for manual recording. Teachers can take attendance using
                        digital methods, and the system provides real-time data
                        on student attendance, helping identify trends and
                        address issues promptly.
                      </li>
                    </ul>
                    <strong>
                      <li>Grade and Exam Management :</li>
                    </strong>
                    <ul>
                      <li>
                        The software simplifies grading processes by automating
                        score calculations and grade assignments. It also
                        assists in exam scheduling, paper setting, and result
                        generation, ensuring accuracy and timely distribution of
                        academic reports.
                      </li>
                    </ul>
                    <strong>
                      <li>Parental Involvement :</li>
                    </strong>
                    <ul>
                      <li>
                        Parent portals in the software allow parents to access
                        their child&#39;s academic performance, attendance
                        records, and communicate with teachers. This fosters a
                        collaborative relationship between parents and
                        educators, promoting student success.
                      </li>
                    </ul>
                    <strong>
                      <li>Fee Management :</li>
                    </strong>
                    <ul>
                      <li>
                        Automated fee management modules handle invoicing, fee
                        collection, and record-keeping. The system can send
                        automated reminders for pending payments, reducing the
                        workload on administrative staff and ensuring timely
                        financial transactions.
                      </li>
                    </ul>
                    <strong>
                      <li>Timetable Scheduling :</li>
                    </strong>
                    <ul>
                      <li>
                        Timetable creation becomes efficient with software tools
                        that consider teacher availability, subject
                        requirements, and classroom availability. This reduces
                        scheduling conflicts, ensures optimal use of resources,
                        and provides a structured learning environment.
                      </li>
                    </ul>
                    <strong>
                      <li>Library Management :</li>
                    </strong>
                    <ul>
                      <li>
                        The software aids in cataloging library resources,
                        managing check-ins and check-outs, and tracking book
                        availability. This ensures that the library operates
                        smoothly, and students have easy access to the resources
                        they need.
                      </li>
                    </ul>
                    <strong>
                      <li>Security and Access Control :</li>
                    </strong>
                    <ul>
                      <li>
                        Access control features ensure that sensitive
                        information, such as student and staff data, is
                        accessible only to authorized personnel. This helps
                        maintain the confidentiality and security of important
                        records.
                      </li>
                    </ul>
                    <strong>
                      <li>Admissions and Enrollment :</li>
                    </strong>
                    <ul>
                      <li>
                        The software streamlines the admissions process by
                        providing online forms, document submission, and
                        application tracking. It also manages student enrollment
                        records, making the onboarding process smoother for both
                        students and administrators.
                      </li>
                    </ul>
                    <strong>
                      <li>Custom Reporting :</li>
                    </strong>
                    <ul>
                      <li>
                        Customizable reporting features allow schools to
                        generate reports tailored to their specific needs. This
                        flexibility enables administrators to extract insights
                        into various aspects of academic and administrative
                        performance, supporting data- driven decision-making.
                      </li>
                    </ul>
                  </ol>
                  In summary, school management software addresses these
                  challenges by providing a comprehensive and integrated
                  solution that enhances overall efficiency and effectiveness in
                  educational institutions.
                
              </div>
              <div id="4">
                <h5 className="mt-4">
                  What security measures does the software have in place to
                  protect sensitive data ?
                </h5>
                <p className="mt-4">
                  The security measures implemented in software can vary
                  depending on the specific application and its intended use.
                  However, here are some common security features and practices
                  that software developers often incorporate to protect
                  sensitive data :
                  </p>
                  <br />
                  <br />
                
                <ol>
                  <strong>
                    <li>Encryption :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>In Transit :</strong> Utilizing protocols like
                      SSL/TLS for encrypting data as it travels between a
                      user&#39;s device and the server. This prevents
                      unauthorized parties from intercepting and reading
                      sensitive information during transmission.
                    </li>
                    <li>
                      <strong>At Rest :</strong> Employing encryption algorithms
                      to secure stored data on servers or devices. This ensures
                      that even if someone gains physical access to the storage
                      media, they cannot retrieve meaningful information without
                      the proper decryption keys.
                    </li>
                  </ul>
                  <strong>
                    <li>Access Control :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>User Authentication : </strong> Verifying the
                      identity of users through methods like usernames and
                      passwords. Multi-factor authentication adds an extra layer
                      of security by requiring additional verification, such as
                      a temporary code sent to a user&#39;s mobile device.
                    </li>
                    <li>
                      <strong>Role-Based Access Control (RBAC) : </strong>{" "}
                      Assigning specific roles and permissions to users based on
                      their responsibilities within the system. This ensures
                      that users have access only to the functionalities and
                      data necessary for their tasks.
                    </li>
                  </ul>
                  <strong>
                    <li>Authentication and Authorization :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Authentication :</strong>Confirming the identity
                      of users through secure mechanisms. This can include
                      biometric authentication, smart cards, or other advanced
                      methods.
                    </li>
                    <li>
                      <strong>Authorization :</strong> Granting appropriate
                      permissions to authenticated users. This involves defining
                      and managing user access levels to ensure the principle of
                      least privilege, where users have only the minimum access
                      needed for their roles.
                    </li>
                  </ul>
                  <strong>
                    <li>Secure Communication Protocols :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>HTTPS (HTTP Secure) :</strong>Encrypting
                      communication between a user&#39;s browser and the web
                      server. This is achieved through the use of SSL/TLS
                      protocols, providing a secure and private channel for data
                      exchange.
                    </li>
                  </ul>
                  <strong>
                    <li>Regular Software Updates :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Patch Management :</strong>Keeping software up to
                      date with the latest security patches is essential for
                      addressing vulnerabilities. This involves monitoring for
                      updates released by software vendors and promptly applying
                      them to the system.
                    </li>
                  </ul>
                  <strong>
                    <li>Audit Trails and Logging :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Logging :</strong> Recording detailed information
                      about user activities, system events, and potential
                      security incidents. This information is crucial for
                      monitoring, analysis, and forensic investigations.
                    </li>
                    <li>
                      <strong>Audit Trails :</strong>Creating a trail of user
                      actions and system events, allowing administrators to
                      review and analyze historical data to detect anomalies or
                      unauthorized access.
                    </li>
                  </ul>
                  <strong>
                    <li>Data Backups :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Regular Backups :</strong> Creating regular,
                      secure backups of critical data is essential to ensure
                      data integrity and availability. This practice facilitates
                      data recovery in the event of accidental deletion, data
                      corruption, or a security breach.
                    </li>
                  </ul>
                  <strong>
                    <li>Security Audits and Penetration Testing :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Audits :</strong>Conducting systematic reviews of
                      security controls, policies, and procedures to identify
                      weaknesses and ensure compliance with security standards.
                    </li>
                    <li>
                      <strong>Penetration Testing :</strong>Simulating
                      cyberattacks to identify vulnerabilities and weaknesses in
                      a system&#39;s defenses. This proactive approach helps
                      address potential security risks before malicious actors
                      can exploit them.
                    </li>
                  </ul>
                  <strong>
                    <li>Firewalls :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Network Firewalls :</strong> Implementing
                      firewalls to monitor and control incoming and outgoing
                      network traffic based on predetermined security rules.
                      This helps prevent unauthorized access and protects
                      against various cyber threats, such as malware and
                      denial-of-service attacks.
                    </li>
                  </ul>
                  <strong>
                    <li>Incident Response Plan :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Preparation :</strong> Developing a comprehensive
                      incident response plan that outlines procedures for
                      detecting, reporting, and responding to security
                      incidents.
                    </li>
                    <li>
                      <strong>Coordination :</strong>Establishing a coordinated
                      approach involving IT teams, management, legal, and
                      communication teams to effectively address and mitigate
                      security incidents.
                    </li>
                    <li>
                      <strong>Post-Incident Analysis :</strong>Conducting a
                      thorough analysis of security incidents to understand
                      their root causes and improve future incident response
                      efforts.
                    </li>
                  </ul>
                </ol>
              </div>
              <div id="5">
                <h5 className="mt-4">
                  How does artificial intelligence play a role in modern school
                  management solutions ?
                </h5>
                <p className="mt-4">
                  Artificial Intelligence (AI) plays a significant role in
                  modern school management solutions by enhancing efficiency,
                  automation, and decision-making processes. Here are some key
                  ways AI contributes to school management :
                  </p>
                  <br />
               
                <ol>
                  <strong>
                    <li>Administrative Automation :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Attendance Tracking :</strong>AI systems,
                      particularly facial recognition or biometric technology,
                      can automate the attendance tracking process. This reduces
                      the need for manual attendance taking, minimizes
                    </li>
                    <li>
                      <strong>Scheduling and Timetabling :</strong>AI algorithms
                      can optimize school schedules by considering factors such
                      as teacher availability, classroom capacity, and subject
                      requirements. This ensures an efficient use of resources
                      and minimizes scheduling conflicts.
                    </li>
                  </ul>
                  <strong>
                    <li>Student Performance Analysis :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Predictive Analytics :</strong>AI analyzes
                      historical data such as grades, attendance, and
                      participation to predict future performance trends. Early
                      identification of struggling students allows for timely
                      intervention and personalized support.
                    </li>
                    <li>
                      <strong>Grading Automation :</strong>AI tools can automate
                      the grading process for certain types of assessments, such
                      as multiple-choice tests. This not only speeds up the
                      grading process but also reduces the likelihood of human
                      errors.
                    </li>
                  </ul>
                  <strong>
                    <li>Personalized Learning :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Adaptive Learning Platforms :</strong>AI-driven
                      adaptive learning systems use data on students&#39; past
                      performance to customize the learning experience. They
                      adjust the difficulty and pace of lessons to match
                      individual students&#39; needs and learning styles.
                    </li>
                    <li>
                      <strong>Recommendation Systems :</strong>AI algorithms
                      analyze students&#39; preferences, performance, and
                      interests to recommend relevant learning resources,
                      courses, or extracurricular activities. This enhances
                      student engagement and satisfaction.
                    </li>
                  </ul>
                  <strong>
                    <li>Communication and Engagement :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Chatbots :</strong>AI-powered chatbots can handle
                      routine inquiries from students, parents, and staff. They
                      provide quick and accurate responses, offering information
                      on schedules, events, and other relevant topics, freeing
                      up administrative staff for more complex tasks.
                    </li>
                    <li>
                      <strong>Parent-Teacher Communication :</strong>AI tools
                      facilitate communication by sending automated updates on
                      students&#39; progress, attendance, and school events to
                      parents. This strengthens the parent-teacher relationship
                      and keeps parents informed.
                    </li>
                  </ul>
                  <strong>
                    <li>Resource Management :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Inventory and Asset Tracking :</strong>AI assists
                      in managing school resources by tracking inventory and
                      optimizing asset allocation. For instance, it can help
                      identify when textbooks need replenishing or when
                      equipment requires maintenance.
                    </li>
                    <li>
                      <strong>Financial Management :</strong>AI algorithms
                      analyze financial data to identify patterns and
                      opportunities for cost-saving. This ensures efficient
                      budget allocation and helps in making informed financial
                      decisions.
                    </li>
                  </ul>
                  <strong>
                    <li>Security and Safety :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Surveillance Systems :</strong>AI-enhanced
                      surveillance systems use facial recognition and anomaly
                      detection to enhance campus security. They can alert
                      authorities to unusual activities or identify unauthorized
                      individuals, contributing to a safer environment.
                    </li>
                    <li>
                      <strong>Emergency Response :</strong>AI can contribute to
                      developing efficient emergency response plans by analyzing
                      historical data and simulating various crisis scenarios.
                      This preparation ensures a quick and effective response to
                      emergencies.
                    </li>
                  </ul>
                  <strong>
                    <li>Professional Development :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Teacher Training :</strong>AI can identify areas
                      where teachers may need additional training or support
                      based on performance data. Personalized training programs
                      can then be developed to enhance teachers&#39; skills and
                      effectiveness in the classroom.
                    </li>
                  </ul>
                  <strong>
                    <li>Data Insights and Reporting :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Analytics Dashboards :</strong>AI-driven analytics
                      tools provide administrators with comprehensive insights
                      into various aspects of school performance. This includes
                      student achievement, teacher effectiveness, and overall
                      institutional efficiency, enabling data- driven
                      decision-making.
                    </li>
                  </ul>
                </ol>
              </div>
              <div id="6">
                <h5 className="mt-4">
                  What are the advantages of cloud-based school management
                  software over on-premise solutions ?
                </h5>
                <p className="mt-4">
                  Cloud-based school management software offers several
                  advantages over on-premise solutions, providing educational
                  institutions with more flexibility, scalability, and
                  accessibility. Here are some key advantages :
                  </p>
                  <br />
                
                <ol>
                  <strong>
                    <li>Accessibility and Flexibility :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Access Anytime, Anywhere :</strong> Cloud-based
                      solutions allow users to access the system from any
                      location with an internet connection. This is particularly
                      beneficial for educators, students, and parents who may
                      need to check information or perform tasks remotely.
                    </li>
                    <li>
                      <strong>Device Independence :</strong> Users can access
                      the software from various devices such as laptops,
                      tablets, and smartphones, providing flexibility in how
                      they interact with the system.
                    </li>
                  </ul>
                  <strong>
                    <li>Cost-Efficiency :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Lower Initial Costs :</strong>Cloud-based
                      solutions often have lower upfront costs compared to
                      on-premise solutions. Educational institutions can avoid
                      significant initial investments in hardware,
                      infrastructure, and IT personnel.
                    </li>
                    <li>
                      <strong>Pay-as-You-Go Models :</strong>Cloud-based
                      services often operate on a subscription or pay-as-you-go
                      model, allowing schools to pay only for the resources they
                      use. This can lead to more predictable and manageable
                      expenses.
                    </li>
                  </ul>
                  <strong>
                    <li>Scalability :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Easy Scaling :</strong>Cloud solutions can easily
                      scale up or down based on the changing needs of an
                      educational institution. This is particularly beneficial
                      for schools experiencing growth or fluctuations in student
                      enrollment.
                    </li>
                    <li>
                      <strong>Automatic Updates :</strong> Cloud-based software
                      providers handle updates and maintenance, ensuring that
                      schools always have access to the latest features without
                      the need for manual installations.
                    </li>
                  </ul>
                  <strong>
                    <li>Data Security and Backup :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Enhanced Security Measures :</strong>Reputable
                      cloud providers often implement robust security measures,
                      including encryption, firewalls, and regular security
                      audits, to protect sensitive student and administrative
                      data.
                    </li>
                    <li>
                      <strong>Automated Backups :</strong>Cloud-based solutions
                      typically include automated backup features, reducing the
                      risk of data loss due to system failures or other
                      unforeseen events.
                    </li>
                  </ul>
                  <strong>
                    <li>Collaboration and Communication :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Improved Collaboration :</strong>Cloud-based
                      platforms facilitate collaboration among teachers,
                      students, and parents by providing a centralized and
                      easily accessible platform for sharing information,
                      grades, and announcements.
                    </li>
                    <li>
                      <strong>Real-time Communication :</strong>Cloud-based
                      systems often include communication tools such as
                      messaging and notifications, enabling real-time
                      communication between stakeholders.
                    </li>
                  </ul>
                  <strong>
                    <li>Disaster Recovery :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Improved Disaster Recovery :</strong>In the event
                      of a disaster or data loss, cloud-based solutions often
                      have robust disaster recovery mechanisms in place,
                      ensuring that critical data can be quickly restored.
                    </li>
                  </ul>
                  <strong>
                    <li>Automatic Software Updates :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Effortless Updates :</strong>Cloud-based systems
                      automatically update to the latest versions without
                      requiring manual intervention from the school&#39;s IT
                      staff. This ensures that the software is always up-to-date
                      with the latest features and security patches.
                    </li>
                  </ul>
                </ol>
                <p>
                  In summary, cloud-based school management software provides a
                  more agile, cost- effective, and accessible solution compared
                  to traditional on-premise alternatives. The advantages include
                  improved accessibility, lower upfront costs, scalability,
                  enhanced security, and seamless collaboration.
                </p>
              </div>
              <div id="7">
                <h5 className="mt-4">
                  How does the software facilitate communication between
                  teachers, parents, and students ?
                </h5>
                <p className="mt-4">
                  Certainly! There are various ways in which software can
                  facilitate communication between teachers, parents, and
                  students. Here are some common features and methods :
                  </p>
                  <br />
                  <br />
               
                <ol>
                  <strong>
                    <li>Messaging Platforms :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Instant Messaging :</strong>This feature allows
                      teachers, parents, and students to engage in real-time
                      conversations. It&#39;s useful for quick queries,
                      clarifications, or urgent communication. Teachers can use
                      this for one-on-one communication or create group chats
                      for specific classes or projects.
                    </li>
                    <li>
                      <strong>Announcements :</strong>Teachers can post
                      important announcements on the platform. This could
                      include information about upcoming exams, project due
                      dates, or general updates about the class. Announcements
                      ensure that everyone involved is on the same page
                      regarding essential information.
                    </li>
                  </ul>
                  <strong>
                    <li>Parent-Teacher Portals :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Online Portals :</strong>These are secure online
                      spaces where parents can access a variety of information
                      about their child&#39;s academic journey. This may include
                      grades, attendance records, and teacher feedback. It
                      provides parents with a comprehensive overview of their
                      child&#39;s progress.
                    </li>
                    <li>
                      <strong>Gradebook :</strong>An online gradebook allows
                      parents to view their child&#39;s grades on individual
                      assignments as well as overall performance in the class.
                      It promotes transparency and enables parents to address
                      any concerns promptly.
                    </li>
                  </ul>
                  <strong>
                    <li>Email Integration :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Automated Emails :</strong>The software can
                      automatically send out emails for various purposes, such
                      as notifying parents about a missed assignment, upcoming
                      parent-teacher conferences, or changes in the class
                      schedule.
                    </li>
                    <li>
                      <strong>Individual Communication :</strong>Teachers can
                      use the software to send personalized emails to parents
                      and students. This is particularly useful for discussing
                      specific concerns, recognizing achievements, or providing
                      detailed feedback.
                    </li>
                  </ul>
                  <strong>
                    <li>Calendar Integration :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Event Scheduling :</strong>The calendar feature
                      allows for the scheduling of important events such as
                      parent-teacher conferences, exams, or extracurricular
                      activities. It helps in organizing and planning, and
                      parents can stay informed about crucial dates.
                    </li>
                    <li>
                      <strong>Reminders :</strong>Automated reminders can be set
                      to notify parents and students about approaching deadlines
                      or events. This reduces the likelihood of missing
                      important dates and fosters better time management.
                    </li>
                  </ul>
                  <strong>
                    <li>File Sharing :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Assignment Submission :</strong>Students can
                      submit assignments electronically through the software.
                      Teachers can then grade and provide feedback online,
                      streamlining the feedback loop.
                    </li>
                    <li>
                      <strong>Document Sharing :</strong>Teachers can share
                      learning materials, presentations, or additional resources
                      with parents and students. This ensures that everyone has
                      access to necessary educational materials.
                    </li>
                  </ul>
                  <strong>
                    <li>Feedback and Assessment :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Real-Time Feedback :</strong>Teachers can provide
                      immediate feedback on student performance. This could be
                      comments on assignments, quizzes, or participation,
                      fostering a continuous feedback loop for improvement.
                    </li>
                    <li>
                      <strong>Progress Reports :</strong>Parents can access
                      digital progress reports that detail their child&#39;s
                      academic achievements and areas that may need improvement.
                      This comprehensive overview helps parents stay actively
                      involved in their child&#39;s education.
                    </li>
                  </ul>
                  <strong>
                    <li>Attendance Tracking :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Real-Time Attendance :</strong>Parents can view
                      their child&#39;s attendance records in real-time. This
                      feature helps parents stay informed about their
                      child&#39;s attendance patterns and quickly address any
                      concerns about irregularities.
                    </li>
                    <li>
                      <strong>Absentee Notifications :</strong>Automated
                      notifications can be sent to parents if their child is
                      absent from class. This ensures that parents are promptly
                      informed about any unexpected absences.
                    </li>
                  </ul>
                  <strong>
                    <li>Mobile Applications :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Accessibility :</strong>Mobile apps allow parents
                      and students to access the platform from anywhere. This
                      ensures that they can stay connected and informed, even
                      when they are not at a computer.
                    </li>
                  </ul>
                  <strong>
                    <li>Survey and Poll Features :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Feedback Collection :</strong>The software may
                      include features for sending surveys or polls to parents
                      and students. This feedback collection mechanism helps in
                      understanding the effectiveness of teaching methods, the
                      overall learning experience, and areas for improvement.
                    </li>
                  </ul>
                  <strong>
                    <li>Security and Privacy Measures :</li>
                  </strong>
                  <ul>
                    <li>
                      <strong>Secure Access :</strong>The software prioritizes
                      the security of user data. It ensures that only authorized
                      individuals, such as parents, teachers, and students, have
                      access to sensitive information. Robust security measures
                      protect against unauthorized access.
                    </li>
                  </ul>
                </ol>
              </div>
              <div id="8">
                <h5 className="mt-4">
                  How does the software assist in managing extracurricular
                  activities and events ?
                </h5>
                <p className="mt-4">
                  The software can assist in managing extracurricular activities
                  and events through various functionalities designed to
                  streamline the organizational process. Here are some ways in
                  which the software can be helpful :
                  </p>
                  <br />
               
                <ol>
                  <strong>
                    <li>Event Scheduling and Calendar Integration :</li>
                  </strong>
                  <ul>
                    <li>
                      The software can provide a centralized platform for
                      scheduling and managing extracurricular events. Users can
                      input details such as event date, time, venue, and any
                      other relevant information.
                    </li>
                    <li>
                      Integration with calendars allows participants to receive
                      automated reminders, reducing the likelihood of missed
                      events.
                    </li>
                  </ul>
                  <strong>
                    <li>Communication and Notifications :</li>
                  </strong>
                  <ul>
                    <li>
                      The software can facilitate communication between
                      organizers, participants, and other stakeholders. This can
                      include announcements, updates, and important information
                      related to activities and events.
                    </li>
                    <li>
                      Automated notifications can be set up to remind
                      participants of upcoming events, deadlines, or any changes
                      in plans.
                    </li>
                  </ul>
                  <strong>
                    <li>Participant Registration and Tracking :</li>
                  </strong>
                  <ul>
                    <li>
                      The software can offer a registration system where
                      participants can sign up for various activities and
                      events. This helps organizers gauge interest and plan
                      accordingly.
                    </li>
                    <li>
                      Tracking participant attendance and engagement can also be
                      managed through the software, providing valuable data for
                      future planning.
                    </li>
                  </ul>
                  <strong>
                    <li>Resource Allocation and Management :</li>
                  </strong>
                  <ul>
                    <li>
                      For events that require specific resources (such as
                      venues, equipment, or materials), the software can assist
                      in managing and allocating these resources efficiently.
                    </li>
                    <li>
                      Organizers can keep track of available resources, reserve
                      them for specific events, and ensure everything is in
                      place for a successful activity.
                    </li>
                  </ul>
                  <strong>
                    <li>Financial Management :</li>
                  </strong>
                  <ul>
                    <li>
                      If applicable, the software can assist in managing
                      finances related to extracurricular activities. This
                      includes budgeting, tracking expenses, and handling
                      payments for events or memberships.
                    </li>
                  </ul>
                  <strong>
                    <li>Feedback and Evaluation :</li>
                  </strong>
                  <ul>
                    <li>
                      The software can facilitate the collection of feedback
                      from participants, allowing organizers to assess the
                      success of events and identify areas for improvement.
                    </li>
                    <li>
                      Evaluation tools can help measure the impact of
                      extracurricular activities on participants, informing
                      future planning and decision- making.
                    </li>
                  </ul>
                  <strong>
                    <li>Document and Media Sharing :</li>
                  </strong>
                  <ul>
                    <li>
                      Organizers can use the software to share important
                      documents, such as event guidelines, schedules, or
                      informational materials.
                    </li>
                    <li>
                      Media sharing features allow for the distribution of
                      photos, videos, or other content related to
                      extracurricular activities.
                    </li>
                  </ul>
                  <strong>
                    <li>Security and Privacy :</li>
                  </strong>
                  <ul>
                    <li>
                      The software should prioritize security and privacy
                      features to protect sensitive information about
                      participants and organizers.
                    </li>
                  </ul>
                </ol>
                <p>
                  By offering these functionalities, the software aims to
                  simplify the management of extracurricular activities and
                  events, fostering a more organized and engaging experience for
                  all involved parties.
                </p>
              </div>
              <div id="9">
                <h5 className="mt-4">
                  How does School management software help streamline admission
                  processes and student enrolment ?
                </h5>
                <p className="mt-4">
                  School management software plays a crucial role in
                  streamlining admission processes and student enrollment by
                  leveraging technology to automate and optimize various tasks.
                  Here are several ways in which school management software
                  contributes to this process :
                  </p>
                  <br />
                
                <ol>
                  <strong>
                    <li>Online Application and Registration :</li>
                  </strong>
                  <ul>
                    <li>
                      School management software enables the creation of
                      electronic admission forms and registration portals. These
                      online platforms allow prospective students and parents to
                      fill out necessary information, such as personal details,
                      academic history, and other required data. This eliminates
                      the need for traditional paper-based applications, making
                      the process more convenient and accessible.
                    </li>
                  </ul>
                  <strong>
                    <li>Document Management :</li>
                  </strong>
                  <ul>
                    <li>
                      The software provides a centralized repository for storing
                      and managing admission-related documents. This includes
                      academic transcripts, recommendation letters,
                      identification documents, and other essential paperwork.
                      Having a digital document management system reduces the
                      risk of physical document loss, ensures data integrity,
                      and allows for easy retrieval when needed.
                    </li>
                  </ul>
                  <strong>
                    <li>Automated Communication :</li>
                  </strong>
                  <ul>
                    <li>
                      Automated communication features in school management
                      software streamline the interaction between the school and
                      applicants. The system can send automated email
                      notifications and alerts to applicants, keeping them
                      informed about the status of their application, any
                      missing documents, and upcoming deadlines. This improves
                      transparency and helps applicants stay engaged throughout
                      the enrollment process.
                    </li>
                  </ul>
                  <strong>
                    <li>Application Tracking :</li>
                  </strong>
                  <ul>
                    <li>
                      The software includes tools to track the progress of each
                      application. Administrators can monitor the status of
                      applications in real-time, identify incomplete
                      submissions, and track the overall progress of the
                      admission process. This tracking capability ensures that
                      all required information is collected and that the process
                      is moving forward smoothly.
                    </li>
                  </ul>
                  <strong>
                    <li>Admission Criteria Management :</li>
                  </strong>
                  <ul>
                    <li>
                      School management systems allow administrators to define
                      and manage admission criteria easily. This involves
                      setting academic requirements, specifying acceptable
                      entrance exam scores, and any other prerequisites for
                      admission. Automated checks can be implemented to ensure
                      that applicants meet these criteria, streamlining the
                      initial screening process.
                    </li>
                  </ul>
                  <strong>
                    <li>Payment Processing :</li>
                  </strong>
                  <ul>
                    <li>
                      For schools that require application fees or other
                      payments during the enrollment process, the software can
                      integrate secure online payment gateways. This allows
                      applicants to make payments electronically, reducing the
                      reliance on manual handling of cash or checks. Integration
                      with payment systems also ensures accurate and timely
                      processing of financial transactions.
                    </li>
                  </ul>
                  <strong>
                    <li>Enrollment Analytics :</li>
                  </strong>
                  <ul>
                    <li>
                      School management software often includes reporting and
                      analytics features. Administrators can generate reports on
                      various aspects of enrollment, such as demographics,
                      geographical distribution of applicants, and trends over
                      time. Analyzing this data provides valuable insights for
                      making informed decisions, optimizing admission
                      strategies, and planning for future enrollment cycles.
                    </li>
                  </ul>
                  <strong>
                    <li>Integration with Student Information System (SIS) :</li>
                  </strong>
                  <ul>
                    <li>
                      Seamless integration with the school&#39;s Student
                      Information System ensures a smooth transition from the
                      admission phase to the ongoing management of student
                      records. Once students are admitted, their information
                      seamlessly flows into the main database, avoiding data
                      entry duplication and maintaining consistency in student
                      records.
                    </li>
                  </ul>
                  <strong>
                    <li>Centralized Database :</li>
                  </strong>
                  <ul>
                    <li>
                      The software maintains a centralized database where all
                      information related to admissions and student enrollment
                      is stored securely. This centralized approach enhances
                      data security, streamlines access for authorized
                      personnel, and ensures that accurate and up-to-date
                      information is readily available when needed.
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
                      <li>What is School management software ?</li>
                    </Link>
                    <hr />
                    <Link href="#2">
                      <li>
                        What are the key features in a school management
                        software ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#3">
                      <li>
                        What are the key challenges school faces that a school
                        management software can address ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#4">
                      <li>
                        What security measures does the software have in place
                        to protect sensitive data ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#5">
                      <li>
                        How does artificial intelligence play a role in modern
                        school management solutions ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#6">
                      <li>
                        What are the advantages of cloud-based school management
                        software over on- premise solutions ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#7">
                      <li>
                        How does the software facilitate communication between
                        teachers, parents, and students ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#8">
                      <li>
                        How does the software assist in managing extracurricular
                        activities and events ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#9">
                      <li>
                        How does School management software help streamline
                        admission processes and student enrolment ?
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
