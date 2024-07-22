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
      name: "HROne",
      description: "Most Popular Software for HR Manager",
      image: "/images/hrone.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "hrone",
      url: "/hrone",
      rating: 0.0,
      reviews: 0,
      details:
        "HROne is an advanced HR software. Trusted by over 1100 leading brands, it offers a unified platform covering 127 HR processes, including Workforce, Payroll, Attendance, and Performance Management. With cloud and mobile readiness, secure Microsoft Azure integration, and a user-friendly interface powered by InboxforHRTM, HROne stands out for its simplicity and configurability. It is the go-to solution for HR professionals aiming to automate complex operations, ensuring a seamless employee lifecycle and freeing up valuable time for building exceptional workplaces.",
    },
    {
      name: "Spine HRMS",
      description: "Spine is Simple and Best HR Software",
      image: "/images/spinehr.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "spinehr",
      url: "/spine-hrms",
      rating: 0.0,
      reviews: 0,
      details:
        "Spine Technologies provides a robust Human Resource Management System (HRMS) and Fixed Asset Management solution, boasting over two decades of industry experience. Their specialized functions contribute significantly to business success, aligning seamlessly with HR principles. The company prioritizes industry compliance through extensive knowledge acquired over the years. By integrating their solution, HR professionals can enhance their credibility, achieving a commendable return on investment. With scalability at its core, Spine's system efficiently manages the entire employee lifecycle, offering flexibility in deployment options for optimal organizational growth.",
    },
    {
      name: "Qandle",
      description: "One of the Best Global HR Solution Provider",
      image: "/images/qandle.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "qandle",
      url: "/qandle",
      rating: 0.0,
      reviews: 0,
      details:
        "Qandle is an all-in-one HR management software solution, recognized among the top 20 globally. With 40+ modules and a mobile-first approach, it simplifies processes from recruitment to analytics. The software's customizable design, quick implementation (within 2 weeks), and robust customer support ensure a seamless experience. Qandle boasts a 4.4 app rating and high user acceptance, making it a go-to choice for over 1,000 clients and 5,50,000 users across 35+ industries. It prioritizes employee well-being, offering smart integrations, and has been featured in the press for its efficiency.",
    },
    {
      name: "Keka",
      description: "Best HR Solution for Business",
      image: "/images/keka.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "keka",
      url: "/keka",
      rating: 0.0,
      reviews: 0,
      details:
        "Keka is an award-winning HR and payroll software designed to empower businesses of all sizes, ranging from 20 to 20,000 employees. With a comprehensive suite of features, including payroll automation, people analytics, performance management, and hiring tools, Keka enables companies to adapt, evolve, and scale in today's dynamic business environment. Loved by over 4,000 companies worldwide, Keka fosters high-performance cultures by centralizing employee information, automating HR processes, and providing valuable insights to drive smarter decisions. Whether in technology, manufacturing, finance, or retail, Keka offers industry-specific human capital management solutions to connect and optimize workforce experiences.",
    },
    {
      name: "factoHR",
      description: "Top HR Software Solution for Small and Enterprise Business",
      image: "/images/facto.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "facto",
      url: "/factohr",
      rating: 0.0,
      reviews: 0,
      details:
        "factoHR is an mobile-first Human Capital Management (HCM) platform that excels in automating HR operations, fostering employee engagement, and nurturing talent for a high-performing workforce. With over 17 years of expertise, it boasts top-notch security, serving 3500+ customers and 2.6 million employees across 20+ countries. What sets factoHR apart is its array of features, including a robust mobile app, integrated HR processes, scalability for diverse needs, and a user-friendly interface. Highly praised by clients such as Cycle Agarbatti and Kelvin Plastics, factoHR is the preferred HRTech partner, providing a seamless and transformative HR solution.",
    },
    {
      name: "WalletHR",
      description: "Leading HR Management Software with On-premise Options",
      image: "/images/wallet.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "wallet",
      url: "/wallethr",
      rating: 0.0,
      reviews: 0,
      details:
        "WalletHR is a 1-stop integrated HCM solution that caters to businesses of all sizes, offering a unified and user-friendly platform to automate daily HR processes. With options for both cloud and on-premises deployment, it has garnered over 300,000 satisfied users across 100+ cities globally and earned recognition through prestigious awards. From auto ancillary manufacturing to hospitality, WalletHR has proven success in diverse business verticals, providing comprehensive HR automation, including attendance integration, payroll management, and lifecycle support. Experience the transformative power of WalletHR for enhanced efficiency and substantial savings.",
    },
    {
      name: "Nitso HRMS",
      description: "Nitso HRMS",
      image: "/images/nitso.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "nitso",
      url: "/nitso-hrms",
      rating: 0.0,
      reviews: 0,
      details:
        "Nitso Technologies Pvt. Ltd. specializes in providing a suite of software solutions to streamline business processes. From Human Resource Management Software (HRMS) and Payroll Management to Fixed Asset Management and Employee Monitoring Software, Nitso Technologies aims to simplify and automate diverse workflows. Their applications boast a user-friendly interface, unique design, and easy integration with third-party applications. Whether through on-premises or cloud-based solutions, Nitso Technologies enhances workplace productivity by offering accessible, configurable, and state-of-the-art software that caters to the specific needs of businesses.",
    },
    {
      name: "HRMantra",
      description: "World's Most Powerful All in One HR Management Tool",
      image: "/images/mantra.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "mantra",
      url: "/hrmantra",
      rating: 0.0,
      reviews: 0,
      details:
        "HRMantra, a leading HR and Payroll Software, is a revolutionary solution powered by advanced AI technology. With a remarkable 23-year legacy in HRMS excellence, the software ensures a remarkable 10x return on investment, costing only a 3-minute average salary per employee while saving 30 minutes daily. Boasting extensive features like Human Resource Management, Recruitment, Attendance, and Payroll, HRMantra offers millions of configurable policies, multi-lingual support, and an intuitive interface accessible from smartphones. Trusted by 500+ clients, including industry giants like Google Sheets, Ferrero India, and Schneider, HRMantra has earned prestigious awards for its quality, innovation, and customer support.",
    },
    {
      name: "Peoplebox",
      description: "Enterprise-grade OKR software",
      image: "/images/peoplebox.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "peoplebox",
      url: "/peoplebox",
      rating: 0.0,
      reviews: 0,
      details:
        "Peoplebox is an all-encompassing platform revolutionizing goals and performance management, seamlessly integrating with existing workflows for 500+ leading enterprises. It acts as a single hub, connecting business and people goals, allowing real-time tracking of objectives, key results, projects, and tasks. With deep integrations into Slack/Teams, Peoplebox transforms the employee experience for performance reviews, running entire 360-degree assessments effortlessly. The platform goes beyond traditional HR tools, fostering an open feedback-driven culture through pulse surveys, engagement insights, and anonymous messaging. Offering 50+ ready-to-use integrations, Peoplebox stands out as the most-integrated OKR, Performance Management, and Employee Engagement Platform globally.",
    },
    {
      name: "Workable",
      description: "Empowering HR management",
      image: "/images/workable.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "workable",
      url: "/workable",
      rating: 0.0,
      reviews: 0,
      details:
        "Workable is a recruiting software designed to facilitate the entire hiring process, offering features for sourcing, evaluating, automating, and managing employee onboarding. With one-click job posting, AI-powered candidate sourcing, and collaborative applicant evaluation, Workable enables companies to efficiently find and hire the right talent. The platform automates tasks like interview scheduling, expediting the recruiting process. Trusted by over 27,000 companies globally since 2012, Workable is known for its user-friendly interface, world-class support, and commitment to data security, making it an essential tool for modern, efficient, and secure recruitment.",
    },
    {
      name: "Oracle Fusion Cloud HCM",
      description: "A complete HR solution that improves end to end em",
      image: "/images/oraclehcm.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "oraclehcm",
      url: "/oracle-fusion-hcm",
      rating: 0.0,
      reviews: 0,
      details:
        "Oracle Fusion Cloud HCM stands as a leading cloud-based Human Capital Management (HCM) solution, connecting and enhancing all HR processes within an enterprise. From Core Human Resources to Talent Management, Workforce Management, and Payroll, it offers a unified user experience, AI integration, and a singular data model. This comprehensive suite facilitates global workforce management, talent lifecycle optimization, and strategic alignment with business objectives. Recognized by Gartner as a leader for eight consecutive years, Oracle Cloud HCM emphasizes innovation, scalability, and security to empower organizations in achieving HR excellence and delivering an exceptional employee experience.",
    },
    {
      name: "SBS HR",
      description: "A dependable partner for your People & Business",
      image: "/images/sbshr.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "sbshr",
      url: "/sbshr",
      rating: 0.0,
      reviews: 0,
      details:
        "SBS HR, or Shreshtha Business Solutions HR, is a comprehensive HR outsourcing service that offers end-to-end solutions to streamline your organization's human resources functions. Whether you're a small startup or a large enterprise, SBS HR provides flexible and scalable HR outsourcing services. From efficient payroll services, including payroll calculation and statutory compliance automation, to global PEO and talent acquisition, SBS HR is designed to amplify your HR management services. With a focus on driving sustained growth and success, SBS HR allows your teams to process salaries, ensure compliance, and take actions throughout the month, eliminating month-end marathons.",
    },
    {
      name: "Farsight",
      description: "Next-Gen Human Resources Management Software for Team",
      image: "/images/farsight.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "farsight",
      url: "/farsight",
      rating: 0.0,
      reviews: 0,
      details:
        "Farsight's Integrated HR Platform offers a robust Human Capital Management (HCM) solution with plans tailored for SME/MSMEs and enterprises. From Essential HR to Professional and Premium editions, it provides a comprehensive Core HRIS Platform, encompassing legal entities, mobile applications, asset management, and document organization. The platform seamlessly integrates Time Office Management for attendance, leave, and payroll functions, ensuring compliance with statutory regulations. Users can enhance their HR capabilities with optional add-ons such as Recruitment, Onboarding, Performance Management, and more. The software comes with a structured implementation plan, featuring extensive support and resources for effective utilization.",
    },
    {
      name: "Darwinbox",
      description: "New age end-to-end HR platform",
      image: "/images/darwin.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "darwin",
      url: "/darwinbox",
      rating: 0.0,
      reviews: 0,
      details:
        "Darwinbox is an innovative Human Capital Management (HCM) platform, recognized as the Fastest Growing and Best Rated in Gartner Magic Quadrant 2023 for Cloud HCM in enterprises with 1000+ employees. With a robust suite of products covering Core HR, Time & Attendance, Payroll, and more, Darwinbox unifies the entire employee lifecycle on a single platform. Trusted by 850+ enterprises in 116+ countries, it boasts 2.2 million+ users. The platform empowers HR professionals with real-time insights, mobile-first HRMS capabilities, and interactive demos, making it a pivotal tool in fostering employee engagement, streamlining processes, and achieving organizational goals.",
    },
    {
      name: "greytHR",
      description: "For your business to grow, your people must grow",
      image: "/images/greythr.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "greythr",
      url: "/greythr",
      rating: 0.0,
      reviews: 0,
      details:
        "greytHR is a cloud-based HR platform catering to over 20,000 companies in 250+ cities. This comprehensive solution seamlessly integrates Performance Management, Employee Self Service (ESS), HRMS, Payroll Management, Leave Management, and Attendance Management. It empowers businesses by saving time, ensuring statutory compliance, and promoting transparent policy implementation. With a user-friendly interface and proactive customer support, greytHR simplifies HR operations, enabling companies to focus on growth. The platform also provides valuable resources through the greytHR Academy, greytribe Community, and a resource library, making it an indispensable tool for effective HR and payroll administration.",
    },
    {
      name: "Pocket HRMS",
      description: "Best HR and Payroll Software for Digital HR",
      image: "/images/pocket.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "pocket",
      url: "/pocket-hrms",
      rating: 0.0,
      reviews: 0,
      details:
        "Pocket HRMS is an advanced cloud-based HR management software, uniquely tailored for the Indian market and empowered by Microsoft GenAI and smHRt® AI. Revolutionizing employee management, it offers a seamless blend of cutting-edge technology and an intuitive user experience for modern HR professionals. With a track record of serving 15+ happy clients and over a million satisfied users, Pocket HRMS stands out as the only smHRt HRMS in India, delivering futuristic solutions for payroll, attendance management, leave management, and more. Elevate your HR operations with this AI-enabled platform that ensures smHRt experiences for businesses across various industries.",
    },
    {
      name: "BatchMaster HERD",
      description: "A 360-degree solution that serves all your HR need",
      image: "/images/batchmaster.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "batchmaster",
      url: "/batchmaster",
      rating: 0.0,
      reviews: 0,
      details:
        "BatchMaster HERD is a HRMS and Payroll Management Software designed to automate and optimize various HR processes. From payroll and attendance to performance appraisals and recruitment, HERD offers a 360-degree solution for diverse industries. It enables efficient human resources management by saving employee information, automating payroll processing, setting attendance policies, and conducting performance appraisals. With easy integration options, cloud availability, and a user-friendly interface, HERD facilitates remote access for employees, fostering collaboration and reducing costs. The software empowers organizations with in-depth analytics for data-driven insights, enhancing overall productivity and decision-making in the workplace.",
    },
    {
      name: "Zimyo",
      description: "Tomorrow's HR Tech, Delivered Today",
      image: "/images/zimyo.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "zimyo",
      url: "/zimyo",
      rating: 0.0,
      reviews: 0,
      details:
        "Zimyo is an advanced Human Capital Management (HCM) solution, revolutionizing the HR-Tech industry with its AI-powered platform. Boasting a user-friendly interface, it centralizes HR operations, offering a comprehensive suite of modules from Core HR to Recruitment, Payroll, and Performance Management. With 2,000+ satisfied customers and 5,000,000+ users globally, Zimyo ensures a seamless employee experience, coupled with robust data security measures, including VAPT, ISO, and AICPA SOC compliance. This cutting-edge HCM software automates tasks, optimizes processes, and provides valuable workforce insights, making it a leader with a stellar 4.6 average rating on global review platforms. Experience the future of HR technology today with Zimyo.",
    },
    {
      name: "Akrivia HCM",
      description: "Akrivia HCM is an integrated HRMS SaaS platform",
      image: "/images/akrivia.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "akrivia",
      url: "/akrivia",
      rating: 0.0,
      reviews: 0,
      details:
        "Akrivia HCM is an enterprise-level Human Capital Management (HCM) software designed to streamline and optimize the entire employee lifecycle. With 20+ modules and 100+ features, it offers a comprehensive solution for managing recruitment, time and attendance, leave, core HR, employee engagement, performance, learning, payroll, and expenses. The platform stands out with its configurable nature, enhanced employee experience, consumer-grade user interface, seamless integrations, and robust data security. Akrivia HCM is recognized as a leader in the industry, offering a consultative approach, AI-enabled chatbot, and multi-currency payroll capabilities across 15 countries.",
    },
    {
      name: "PeoplesHR",
      description: "Fully Integrated SaaS HR Solution",
      image: "/images/peoplehr.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "peoplehr",
      url: "/peopleshr",
      rating: 0.0,
      reviews: 0,
      details:
        "PeoplesHR, a leading name in the HR Tech industry across Asia Pacific, Africa, and the Middle East, stands out for its holistic Human Capital Management (HCM) solutions. With a user base exceeding a million in over 20 industries, PeoplesHR offers an end-to-end HR experience, streamlining processes from recruitment to retirement. What sets it apart is its commitment to data-driven decision-making, offering predictive analytics, interactive dashboards, and enterprise tools for informed HR management. Moreover, PeoplesHR goes beyond traditional software, providing plug-ins to create a comprehensive HR ecosystem, ensuring a seamless and enriched employee experience. Trusted by over 0 companies across 40+ countries, PeoplesHR is the go-to solution for organizations seeking digital HR transformation.",
    },
    {
      name: "InfowanHR",
      description: "Payroll HR Software Web Based and Desktop Based",
      image: "/images/infowanhr.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "infowanhr",
      url: "/infowanhr",
      rating: 0.0,
      reviews: 0,
      details:
        "InfowanHR, India's fastest-growing HRMS software, redefines workforce management with its cutting-edge features encompassing payroll, attendance, leave, and expenses. Delivering unparalleled efficiency, it ensures a remarkable time savings of 30 minutes per employee daily, promising over 10 times return on investment. Trusted by 15,000+ clients and embraced by 2.7 million satisfied users in four countries, InfowanHR stands out as a world-class solution offered by Infowan Technologies Pvt Ltd. Elevate your HR and payroll experience, choosing excellence with InfowanHR.",
    },
    {
      name: "OfficeKit HR",
      description: "End-To-End Human Resource Management Software",
      image: "/images/officehr.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "officehr",
      url: "/officekit",
      rating: 0.0,
      reviews: 0,
      details:
        "OfficeKit HR, established in 2016 by a dynamic team of visionary entrepreneurs, is a revolutionary HR management software committed to transforming traditional HR practices globally. With a passion for integrating Talent, Technology, and Transformation, our comprehensive solution covers everything from employee management to talent acquisition. Boasting a user-friendly interface, our software simplifies HR processes, aids in hiring the best-fit talent, and streamlines benefits management, fostering employee engagement and empowerment. Whether you're a small-scale business or a large enterprise, OfficeKit HR, with its worldwide presence in over 25 countries, stands as the perfect tool to amplify success and usher in a new era of efficient HR management.",
    },
    {
      name: "Zoho People",
      description: "Software by Zoho Corporation Pvt. Ltd.",
      image: "/images/zohopeop.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "zohopeop",
      url: "/zoho-people",
      rating: 0.0,
      reviews: 0,
      details:
        "Zoho People is a cloud-based HR software that has empowered HR teams for over 15 years, streamlining core HR tasks with features like efficient employee database management, smart HR workflows, and insightful analytics. The software optimizes time and attendance tracking, allowing focus on employee productivity and error-free reporting. With a robust performance management module, it provides flexible goal setting, continuous reviews, and 360-degree feedback to enhance organizational performance. Zoho People also reimagines learning and development with virtual classrooms, centralized course management, quizzes, and assessments. Trusted by over 1.2 million employees across 150+ countries, it caters to businesses of all sizes and industries, ensuring a high-performing and agile workforce.",
    },
    {
      name: "247HRM",
      description: "All Your HR & Payroll Processes On One Platform",
      image: "/images/24hrm.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "24hrm",
      url: "/247hrm",
      rating: 0.0,
      reviews: 0,
      details:
        "247HRM is an advanced Human Resource Management Software (HRMS) designed to streamline HR processes. With a complete suite of features, it encompasses payroll management, income tax automation, and efficient expense report tracking. The software facilitates performance appraisal, attendance, and leave management, all accessible through an intuitive Employee Self-Service Portal. Boasting over 60 years of HR experience, 800+ satisfied clients, and a presence in major cities, 247HRM is a reliable solution offering seamless integration, from statutory compliance and skill management to custom workflows. Trusted for its user-friendly interface and comprehensive automation, it stands as a go-to choice for diverse organizational needs.",
    },
    {
      name: "Gusto",
      description: "Payroll Management Software for Small Businesses",
      image: "/images/gusto.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "gusto",
      url: "/gusto",
      rating: 0.0,
      reviews: 0,
      details:
        "Gusto is a leading payroll and HR software, renowned as the #1 Payroll Software of 2023. Businesses benefit from its smart technology, allowing payroll processing in just a few clicks, syncing hours seamlessly, and facilitating state tax registration across all 50 states. With accolades like #1 in Small Business Payroll Satisfaction & HR Implementation, Gusto empowers users to run payroll efficiently, saving over 80 hours annually, as attested by Approveme.com. Beyond payroll, Gusto offers a holistic solution, including employee benefits administration at no extra cost, making it the go-to platform for businesses seeking a streamlined and joyful approach to workforce management.",
    },
    {
      name: "PulseHRM",
      description: "Complete HRMS and payroll for growing businesses",
      image: "/images/pulsehrm.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "pulsehrm",
      url: "/pulsehrm",
      rating: 0.0,
      reviews: 0,
      details:
        "PulseHRM is an integrated Human Resource Management platform offering a range of solutions to streamline HR processes. From Payroll and Recruitment & Talent Management to Project Management, Biometric Integration, and Performance Management, it covers the entire employee lifecycle. With features like paperless onboarding, centralized HRIS, and a mobile app, PulseHRM ensures efficient workforce management. The platform also includes modules for Employee Monitoring, Leave Management, and Self Service, providing a comprehensive and user-friendly solution. PulseHRM's focus on productivity, statutory compliance, and engagement makes it an essential tool for building and managing a connected workforce.",
    },
    {
      name: "eliteHRMS",
      description: "Your HR Needs",
      image: "/images/elite.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "elite",
      url: "/elitehrms",
      rating: 0.0,
      reviews: 0,
      details:
        "eliteHRMS is a proven and tested Human Resource Management System catering to various industries, including IT/ITES, Production, and Food and Beverage. This system ensures seamless HR operations by simplifying employee movements and maintaining a robust database. With a focus on user-friendly functionality, eliteHRMS stands out for its dynamic HR reports, alleviating the longstanding challenges associated with report generation. It offers a powerful solution for payroll and statutory compliance, particularly beneficial as employee numbers increase. The software includes a feature-rich Employee Self Service (ESS) and Manager Self Service (MSS), enhancing operational efficiency and providing quick resolutions to employee needs. Moreover, eliteHRMS is accessible on mobile devices, facilitating on-the-go monitoring and approvals for effective management services.",
    },
    {
      name: "Timelabs HR Software",
      description: "Reinvent your HR",
      image: "/images/timelabs.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "timelabs",
      url: "/timelabs",
      rating: 0.0,
      reviews: 0,
      details:
        "Timelabs HR Software, with over a decade of domain expertise, stands out as an efficient and trusted solution for human resource management. Processing 700,000 employee records monthly and endorsed by 700+ businesses, it offers a comprehensive suite of modules such as Applicant Tracking, Onboarding, Payroll, and Performance Management. Recognized by industry authorities and awarded for its value, Timelabs is a humanized system that seamlessly integrates HR processes, ensuring optimal talent management and workplace productivity.",
    },
    {
      name: "PeopleWorks",
      description: "New Age HCM for New Age Workforce",
      image: "/images/peopleworks.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "peopleworks",
      url: "/peopleworks",
      rating: 0.0,
      reviews: 0,
      details:
        "PeopleWorks is an advanced Human Resource Management System (HRMS) offering intelligent solutions across industries. From streamlined recruitment and electronic onboarding to efficient payroll management and productivity enhancement, PeopleWorks ensures end-to-end HR support. Prioritizing user experience, talent management, and mobility solutions, it provides a centralized platform that automates tasks and aligns organizational and employee goals seamlessly. With a commitment to speedy implementation, customized setups, and exceptional customer support, PeopleWorks stands as a futuristic, innovative, and scalable HRMS choice, addressing the evolving needs of modern businesses.",
      startingPrice: "Available on Request",
    },
    {
      name: "HRMThread",
      description: "Efficient HRMS - Human Resource Management System",
      image: "/images/hrmthread.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "hrmthread",
      url: "/hrmthread",
      rating: 0.0,
      reviews: 0,
      details:
        "HRMThread is a web-based Payroll and HR software solution for businesses in India, relied upon by over 5000 users. Offering unparalleled convenience, it simplifies complex tasks, providing swift access to payroll and employee databases. With optimized features like Mobile App accessibility, robust Payroll management, comprehensive Time & Attendance tracking, Leave management, efficient Claim & Reimbursement monitoring, and simplified TDS & Tax Planner, HRMThread stands out. It introduces a progressive payslip delivery system on WhatsApp, emphasizing transparency, efficiency, and eco-friendly practices. Recognized by the World HRD Congress, HRMThread is the preferred choice for businesses seeking streamlined HR and payroll operations.",
      startingPrice: "Available on Request",
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
