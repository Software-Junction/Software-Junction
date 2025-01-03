import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Demo from "../common/demo";
import Pricemodal from "../common/price-modal";
import Needhelp from "../common/needHelp";

const List = ({ styles }) => {
  const products = [
    {
      name: "FigJam",
      description: "Turn possibilities into plans",
      image: "/images/figjam.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "figjam",
      url: "/figjam",
      rating: 0.0,
      reviews: 0,
      details:
        "FigJam is a collaborative digital workspace designed to enhance team collaboration in the product development process. Trusted by leading companies like Square, Netflix, and Spotify, FigJam facilitates real-time brainstorming, diagramming, and agile workflows. With over 300 templates and AI features, teams can easily generate custom visuals, automate processes, and streamline decision-making. The platform allows users to express ideas through audio, live chat, and reactions, fostering dynamic conversations. Integrated seamlessly with Figma, FigJam enables a smooth transition from early ideation to final revisions, making it a versatile tool for UI/UX design, wireframing, strategic planning, and more.",
    },
    {
      name: "Zoho Projects",
      description: "Free online project management system in India",
      image: "/images/zoho-projects.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "zoho-projects",
      url: "/zoho-projects",
      rating: 0.0,
      reviews: 0,
      details:
        "Zoho Projects is an online project management platform designed to enhance productivity and collaboration within dynamic teams. With features like Gantt charts for visual project planning, automated task management, and efficient time tracking through integrated timesheets, it streamlines project workflows. The software offers seamless integration with various Zoho and third-party apps, ensuring flexibility and compatibility. Trusted by over 4.5 million projects, Zoho Projects provides a user-friendly interface, customizable dashboards, and enterprise-grade security, making it a leading solution for effective project management across diverse industries.",
    },
    {
      name: "BugHerd",
      description: "Software by BugHerd",
      image: "/images/bugherd.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "bugherd",
      url: "/bugherd",
      rating: 0.0,
      reviews: 0,
      details:
        "BugHerd is a bug tracking tool and visual feedback software designed for website development teams. With features like pinned feedback on webpages, BugHerd simplifies bug reporting and streamlines collaboration for developers, designers, project managers, and clients. The tool centralizes feedback on a task management board, complete with metadata such as browser details and screen resolution. Offering integrations with popular project management tools and receiving acclaim from over 10,000 companies worldwide, BugHerd enhances efficiency, saving time and money in the website development process.",
    },
    {
      name: "Jira Software",
      description: "Project software for all types of businesses",
      image: "/images/jira.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "jira",
      url: "/jira",
      rating: 0.0,
      reviews: 0,
      details:
        "Jira Software is a leading agile project management tool designed for software development teams. Trusted by over 100,000 organizations, it offers a comprehensive solution for planning, tracking, releasing, reporting, and automating workflows. With customizable templates for agile methodologies like Scrum and Kanban, Jira adapts to the unique needs of teams, promoting collaboration and visibility. Integrated with open DevOps principles, it streamlines development processes, leading to a 900% increase in deployments and a 50% decrease in cycle time. Whether for small or large teams, Jira Software provides a scalable, feature-rich platform to enhance collaboration and accelerate project delivery.",
    },
    {
      name: "WebWork Tracker",
      description: "Advanced Time Tracker for Work Management",
      image: "/images/web-work.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "webwork",
      url: "/webwork",
      rating: 0.0,
      reviews: 0,
      details:
        "WebWork Tracker is a time tracking and remote employee monitoring software designed to enhance productivity in a streamlined manner. It allows users to track and monitor remote employees' work through screenshots, automated attendance tracking, and real-time reports. The software features project management, task organization, and productivity monitoring, ensuring efficient collaboration in one platform. With additional capabilities like billable hours tracking, customizable reporting, and a built-in team chat, WebWork Tracker aims to optimize work processes, save time, and improve team performance. Trusted by over 140,000 happy users, it offers a 14-day free trial with no credit card required.",
    },
    {
      name: "Minitab Engage",
      description: "Software by Minitab",
      image: "/images/minitab-engage.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "minitab-engage",
      url: "/minitab-engage",
      rating: 0.0,
      reviews: 0,
      details:
        "Minitab Engage is an innovative solution designed to initiate, monitor, manage, and share improvement and innovation initiatives seamlessly. Tailored for organizations seeking operational excellence, it facilitates idea generation by fostering a culture of innovation, allowing employees to submit ideas using customizable forms. The software evaluates and aligns initiatives based on critical business criteria, automatically calculating benefit, effort, and risk ratings for prioritization. With real-time tracking of key performance metrics, Minitab Engage enables effective execution of projects, regardless of the improvement methodology employed, such as Lean or Six Sigma, providing comprehensive and customizable tools for efficient project management.",
    },
    {
      name: "Celoxis",
      description: "Best Project Management Software for Small Teams",
      image: "/images/celoxis.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "celoxis",
      url: "/celoxis",
      rating: 0.0,
      reviews: 0,
      details:
        "Celoxis is a all-in-one Project Portfolio Management (PPM) software designed to transform businesses by reimagining projects, processes, and data. It goes beyond traditional project management, offering advanced tools such as Intake Management for automated project request capture, What-if Analysis for strategic project optimization, and Custom Workflow Apps to streamline business processes. With features like Project Planning, Resource Management, and Portfolio Monitoring, Celoxis ensures efficient utilization of resources across diverse time zones. Its power-packed capabilities include Gantt Charts, Risk Management, Time Tracking, Kanban Style, Issue Tracking, and a Client Portal, allowing teams to stay focused and productive. Backed by top ratings and over ten years of industry leadership, Celoxis provides the most powerful reporting and dashboards, making it a 100% customizable, visually appealing, and data-driven solution for organizations seeking project management excellence.",
    },
    {
      name: "NetSuite OpenAir",
      description: "Software by NetSuite Inc.",
      image: "/images/netsuite-openair.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "netsuite-openair",
      url: "/netsuite-openair",
      rating: 0.0,
      reviews: 0,
      details:
        "NetSuite OpenAir is a robust cloud-based project management solution designed to streamline the entire project lifecycle for professional services firms. With real-time visibility and accessibility, it replaces spreadsheet reliance and disconnected systems, offering tools for project planning, tracking, and resource management. The software optimizes resource deployment, improves project profitability through analytics, ensures accurate financials, promotes better collaboration, and enables mobile access. OpenAir addresses challenges like reactive resourcing, consolidates project and billing solutions, enhances visibility into project profitability, and automates time and expense tracking. It provides a comprehensive solution for project-based businesses, facilitating efficient operations and profitability.",
    },
    {
      name: "ProProfs Project Management Software",
      description: "Simple Project Management Software",
      image: "/images/proprofs.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "proprofs",
      url: "/proprofs",
      rating: 0.0,
      reviews: 0,
      details:
        "ProProfs Project Management Software is a online solution designed for seamless project planning, execution, and completion. It offers 360° visibility of projects, promoting easy collaboration among teams in real-time. With features such as customizable dashboards, Gantt charts, and task management, it caters to diverse industries, including Information Technology, Marketing, and Creative & Design. The software facilitates efficient communication, timely progress tracking, and prioritization of tasks. Users can benefit from smart reports, analytics, and time tracking functionalities, making project management a delightful and productive experience.",
    },
    {
      name: "SmartTask",
      description: "Collaboration and Task management software",
      image: "/images/smart-task.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "smart-task",
      url: "/smart-task",
      rating: 0.0,
      reviews: 0,
      details:
        "SmartTask is an all-in-one collaboration tool designed to streamline work processes for teams across various functions. With a comprehensive set of features, it serves as a single platform for Task Management, Project Management, Marketing, Sales, HR, IT, and more. Trusted by over 20,000 teams worldwide, SmartTask offers customizable views, intuitive dashboards, and seamless communication through chat and video conferencing. Unique features include recurring tasks, subtasks, time tracking, and easy integration with existing tools. It promotes efficiency, balance, and a premium client experience, making it a go-to solution for diverse organizational needs.",
    },
    {
      name: "Tiemchart",
      description: "All-in-one online PMS software",
      image: "/images/tiemchart.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "tiemchart",
      url: "/tiem-chart",
      rating: 0.0,
      reviews: 0,
      details:
        "Tiemchart is an online project management software designed to streamline task, team, and resource management for businesses of all sizes. With interactive Gantt charts, it provides visibility into project timelines, allowing efficient deployment of resources for optimal results. Offering a unified platform, Tiemchart encompasses tools for task, team, time, and resource management, as well as project billing, costing, and reporting. It simplifies complex project portfolios, enhances project profitability control, and offers insightful resource workload visibility. Trusted by global enterprises, Tiemchart ensures clarity in project performance, making it an award-winning solution with a 14-day free trial and comprehensive customer support.",
    },
    {
      name: "Todoist",
      description: "Software by Todoist",
      image: "/images/todoist.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "todoist",
      url: "/todoist",
      rating: 0.0,
      reviews: 0,
      details:
        "Todoist is the world's premier task manager and to-do list app, celebrated by the New York Times' Wirecutter. Trusted by over 30 million individuals and teams, it offers a unique natural language recognition system for lightning-fast task input. With automatic organization into Today, Upcoming, and custom Filter views, users attain mental clarity and focus on what truly matters. Ideal for both personal and team use, Todoist ensures seamless collaboration and organization. Boasting a 16-year history and 334 days of development, it stands as a reliable, long-term solution for productivity, supported by millions of satisfied users worldwide.",
    },
    {
      name: "TeamGantt",
      description: "Software by TeamGantt",
      image: "/images/teamgantt.png",
      imageWidth: 130,
      imageHeight: 30,
      altText: "teamgantt",
      url: "/teamgantt",
      rating: 0.0,
      reviews: 0,
      details:
        "TeamGantt is a user-friendly, cloud-based project management platform offering a free, forever plan for creating top-rated Gantt charts. As the go-to choice for companies like Amazon and Netflix, TeamGantt stands out with its plan-first approach, enabling efficient task scheduling and seamless collaboration. With a clean interface and intuitive drag-and-drop features, users can build project Gantt charts in minutes, adapting to various work styles. The software facilitates resource management, centralizes project files, and provides real-time insights, making it an essential tool for diverse industries seeking streamlined project planning and execution.",
    },
    {
      name: "Asana",
      description: "One of the most popular project management software",
      image: "/images/asana.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "asana",
      url: "/asana",
      rating: 0.0,
      reviews: 0,
      details:
        "Asana is a Collaborative Work Management platform, with a focus on clarity and impact at scale. Asana connects work and workflows to company-wide goals, serving 80% of Fortune 100 companies. Offering features such as real-time progress tracking, AI-driven intelligence for enhanced productivity, and enterprise-grade security, Asana stands out with over 300 integrations and a user-friendly interface, recognized by 90% of users as 'easy to use.' Trusted by top companies like Amazon, Johnson & Johnson, and Dell, Asana empowers diverse departments, from marketing to operations, facilitating effective project management and goal attainment.",
    },
    {
      name: "Taskworld",
      description: "Work Smarter Together",
      image: "/images/taskworld.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "taskworld",
      url: "/taskworld",
      rating: 0.0,
      reviews: 0,
      details:
        "Taskworld is a project management platform designed for seamless collaboration across teams and departments, from entrepreneurs to enterprise-level businesses. With features like Projects & Boards, Tasks & Notes, and integrated Chat & Feedback, it ensures efficient organization and communication. The platform offers multiple views, GDPR compliance, remote readiness, and enhanced data security. Trusted by industry leaders, Taskworld facilitates visualizing projects, breaking them down for better organization, and keeping a bird's-eye view over everything. Recognized for its user-friendliness, it has earned awards for Best Usability and High Performer. The software supports asynchronous work and is backed by award-winning customer care.",
    },
    {
      name: "monday.com",
      description: "A project management software you'll enjoy using",
      image: "/images/monday-com.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "monday-com",
      url: "/monday-com",
      rating: 0.0,
      reviews: 0,
      details:
        "monday.com is a Work OS designed for modern work management, offering a revolutionary approach to streamline various aspects of work. It serves as a centralized platform where teams can customize workflows to fit their unique needs, enhancing alignment, efficiency, and overall productivity. Trusted by over 180,000 customers worldwide, including notable names like Coca Cola and Universal Music Group, monday.com empowers organizations to connect teams, break down silos, and maintain a single source of truth. With user testimonials highlighting significant improvements in collaboration and goal attainment, the platform provides visual boards and end-to-end products tailored for work management, sales CRM, and development, offering a comprehensive solution for diverse teams.",
    },
    {
      name: "Nifty",
      description: "Manage projects and communications in one place.",
      image: "/images/nifty.png",
      imageWidth: 140,
      imageHeight: 10,
      altText: "nifty",
      url: "/nifty",
      rating: 0.0,
      reviews: 0,
      details:
        "Nifty is a project management platform designed to streamline collaboration for over 20,000 highly productive teams. Serving as the ultimate project management OS, Nifty eliminates the need to switch between various tools by integrating roadmaps, tasks, discussions, docs, and forms into one cohesive app. With features such as visual goal timelines, flexible task organization, real-time collaboration, and automated reporting, Nifty caters to diverse teams including engineering, sales, marketing, product development, client management, and IT. The platform's powerful unification ensures team alignment, increased productivity, and smarter decision-making by consolidating data and processes seamlessly.",
    },
    {
      name: "Podio",
      description: "Software by Citrix Systems, Inc",
      image: "/images/podio.png",
      imageWidth: 180,
      imageHeight: 30,
      altText: "podio",
      url: "/podio",
      rating: 0.0,
      reviews: 0,
      details:
        "Podio is a low-code platform designed to streamline collaboration and project management. Serving as a centralized work hub, it consolidates data, integrates workflows, and offers robust tools for customizing business solutions. With a user-friendly interface and fast setup, Podio enhances team communication, accelerates project delivery, and ensures data security with features like automated workflows, granular access control, and compliance with rigorous security standards. Trusted by organizations like ChanceLight, Podio facilitates efficient, action-oriented collaboration, making it an indispensable tool for businesses aiming to drive projects forward seamlessly.",
    },
    {
      name: "Paymo",
      description: "Software by Paymo",
      image: "/images/paymo.png",
      imageWidth: 120,
      imageHeight: 30,
      altText: "paymo",
      url: "/paymo",
      rating: 0.0,
      reviews: 0,
      details:
        "Paymo is a work management platform designed to streamline project collaboration, time tracking, and invoicing. Trusted by over 100,000 users worldwide, it offers robust features such as task management with Kanban boards, Gantt charts for project visualization, and real-time time tracking across various devices. Paymo excels in enhancing team productivity, reducing project delays, and ensuring fair and timely compensation through efficient invoicing tools. With additional capabilities like client collaboration, design proofing, and profitability tracking, Paymo provides a centralized solution for businesses seeking effective project management and improved workflow efficiency.",
    },
  ];
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const handleFormSubmit = async (values, actions) => {
    try {
      await axios.post(
        "https://software-bazaar-default-rtdb.firebaseio.com/leadform.json",
        values
      );
      actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setSubmitting(false);
    }
  };

  const [refrence, setRefrence] = useState("");

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [showDemo, setShowDemo] = useState(false);

  const [showPrice, setShowPrice] = useState(false);

  const handleCloseDemo = () => setShowDemo(false);
  const handleShowDemo = (name) => {
    setShowDemo(true);
    setRefrence(name);
  };

  const handleClosePrice = () => setShowPrice(false);
  const handleShowPrice = (name) => {
    setShowPrice(true);
    setRefrence(name);
  };
  return (
    <>
      <section className={`${styles["list"]} mt-5 `}>
        <Container>
          <Row className="">
            <Col lg={12}>
              <h3>List of Best Softwares</h3>
            </Col>
            <Col lg={8}>
              {products
                .slice(0, isShowMore ? products.length : 10)
                .map((product, index) => (
                  <div
                    key={index}
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4`}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href={product.url}>
                          <Image
                            src={product.image}
                            alt={product.altText}
                            width={product.imageWidth}
                            height={product.imageHeight}
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href={product.url}>
                          <h5>{product.name}</h5>
                          <p>{product.description}</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href={product.url}>
                              <span className="span-style">
                                {product.rating.toFixed(1)}{" "}
                                <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>({product.reviews} Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">{product.details}</p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p></p>
                      </div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={() => handleShowDemo(product.name)}
                        >
                          Get Free Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="warning"
                          className="mx-3"
                          onClick={() => handleShowPrice(product.name)}
                        >
                          Get Pricing
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

              <Pricemodal
                reffer={refrence}
                show={showPrice}
                handleClose={handleClosePrice}
              />
              <Demo
                reffer={refrence}
                show={showDemo}
                handleClose={handleCloseDemo}
              />
            </Col>

            <Col lg={4}>
              <Needhelp />
            </Col>

            <Col lg={12}>
              <div className={styles["list-btn"]}>
                <Button className="mt-4" onClick={toggleReadMoreLess}>
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

export default List;
