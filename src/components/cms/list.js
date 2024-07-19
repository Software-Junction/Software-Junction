import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Demo from "../common/demo";
import Pricemodal from "../common/price-modal";
import Needhelp from "../common/needHelp";

const List = ({ styles }) => {
  const products = [
    {
      name: "Schoolcanvas.com",
      description: "No. 1 School ERP Software",
      image: "/images/school.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "school",
      url: "/schoolcanva",
      rating: 0.0,
      reviews: 0,
      details:
        "School Canvas is an all-encompassing school management software that seamlessly automates diverse educational processes. From admission procedures to fee collection, academic analysis, and more, this platform provides a 360-degree solution. Boasting technical benefits such as customization through open APIs, user-friendly interfaces, and 24/7 support with a 'Zero Trust' data security model, School Canvas stands out as an end-to-end solution. With modules covering Admission Management, Transport & GPS, Learning Management, and more, it's a paperless, efficient tool for 550+ schools with over 13 years of experience and a 5-minute customer support guarantee.",
    },
    {
      name: "EDUMAAT",
      description: "Best Campus Management system",
      image: "/images/edumaat-.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "edumaat",
      url: "/edumaat",
      rating: 0.0,
      reviews: 0,
      details:
        "EDUMAAT is a powerful and customizable Education ERP Software designed to streamline institute management processes in India. With features tailored for management, faculty, students, and parents, it offers automation, insightful reporting, and efficient communication. Available in 100+ languages, it boasts customization options, AWS hosting for speed, and flexible pricing plans. The software's success stories showcase its impact on institutions worldwide, emphasizing user-friendliness, time-saving, and excellent customer support. EDUMAAT is an integrated education management system providing a comprehensive solution for institutes seeking efficient administration and enhanced collaboration.",
    },
    {
      name: "Astral Technologies",
      description: "System by Astral Technologies",
      image: "/images/astral.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "astral",
      url: "/astral",
      rating: 0.0,
      reviews: 0,
      details:
        "Astral Technologies' School Management System is a robust cross-functional enterprise solution tailored for educational institutes. With modules like Management Dashboard, Student MIS, and Payroll Management, this web-based and cloud-deployed application streamlines processes such as fees collection, admission processing, and inventory management. Providing real-time access from anywhere, it enhances administrative efficiency, eliminates data redundancy, and lowers operational costs. The system's secure platform ensures a comprehensive view for higher management, facilitating informed decision-making and fostering a streamlined educational environment.",
    },
    {
      name: "Ctrl Campus",
      description: "Best Campus Management system",
      image: "/images/ctrla.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "ctrla",
      url: "/ctrl",
      rating: 0.0,
      reviews: 0,
      details:
        "Ctrl Campus is India's premier user-friendly campus management software, recognized as the top choice for educational institutions. With advanced ERP systems, it intelligently handles admission, academics, and administration processes. This comprehensive software includes modules for student information management, finance tracking, admissions management, and efficient human resource oversight. Offering customized solutions, fast implementation, data security, and seamless integration, Ctrl Campus stands as the go-to choice for streamlining educational institution operations. Experience the future of campus management with Ctrl Campus where innovation meets efficiency.",
    },
    {
      name: "Class Matrix",
      description: "System by Classmatrix",
      image: "/images/classmatrix.png",
      imageWidth: 80,
      imageHeight: 10,
      altText: "classmatrix",
      url: "/matrix",
      rating: 0.0,
      reviews: 0,
      details:
        "Class Matrix is an all-encompassing school management software that revolutionizes educational institutions by seamlessly integrating interactive online lectures, online exams, and an E-payment system. It streamlines academic and operational processes, offering features such as live teaching with Zoom integration, efficient fee collection through a payment gateway, and comprehensive tools for online assessment tracking and progress reporting. With functionalities like student CRM, staff management, and real-time notifications, Class Matrix provides a robust solution for educational institutions, ensuring efficient administration, transparent fee management, and anytime, anywhere access through cloud hosting.",
    },
    {
      name: "CampSteer",
      description: "A web-based Campus Management ERP product",
      image: "/images/campsteer.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "campsteer",
      url: "/camp",
      rating: 0.0,
      reviews: 0,
      details:
        "CampSteer is a campus management system that integrates modules such as Admission Management, Fee Management, Academics, Library Management, Hostel Management, Fleet Management, Purchase, Assets, HRM, Finance, and Reports. This software simplifies tasks like scrutinizing applications, managing student demographics, handling fee collection, academic scheduling, library operations, hostel facilities, fleet management, procurement, HR management, and financial transactions. With features like member registration, barcode generation, and automated asset maintenance, CampSteer offers a holistic solution for educational institutions, promoting efficiency and seamless operations across various administrative functions.",
    },
    {
      name: "iSchool",
      description: "System by Ceon Solutions Pvt Ltd",
      image: "/images/ischool.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "ischool",
      url: "/ischool",
      rating: 0.0,
      reviews: 0,
      details:
        "iSchool is a fully integrated & intelligent online software solution to automate and enhance the quality of education and administration at schools with single point of control in campus and at home also. iSchool enables information flow between three key pillars of academic institution academics, administration, and finance.",
    },
    {
      name: "Advanta Rapid ERP",
      description: "System by Advanta Innovations",
      image: "/images/advanta.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "advanta",
      url: "/advanta",
      rating: 0.0,
      reviews: 0,
      details:
        "Advanta Rapid ERP, a flagship product from Advanta Innovations, stands as a versatile and comprehensive software solution. Tailored for schools, colleges, and businesses, this Reliable, Affordable, and User-friendly platform integrates 28 modules. It adeptly manages diverse operations, including school and college administration, business accounting, inventory, invoice printing, VAT, GST, and more. Globally trusted and adorned with awards, it ensures seamless operations, quick decision-making, and heightened productivity. With a free trial/demo available, Advanta Rapid ERP emerges as the go-to choice, offering a single-click solution for businesses seeking optimal software to streamline their operations.",
    },
    {
      name: "ShriConnect",
      description: "System by Shri Educare Ltd.",
      image: "/images/shrieducare.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "shrieducare",
      url: "/shriconnect",
      rating: 0.0,
      reviews: 0,
      details:
        "ShriConnect is an award-winning School ERP software designed for the new age, recognized as 'The Innovative School ERP Solution' at The World Education Summit. With over 0+ modules and serving 2,374+ schools with 200,000+ students, it empowers the rise of a modern education ecosystem. This user-friendly system offers enhanced student-parent experiences, customizable features, and ensures 100% data security. ShriConnect provides master-driven customization, training modules, and a range of features like dynamic school calendar management, online/offline admission and fee management, online assessment, and comprehensive student analytics, making it a dynamic and future-ready Education Management Information System",
    },
    {
      name: "Vedanta School ERP",
      description: "World's best software for school/college/institues",
      image: "/images/vedanta.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "vedanta",
      url: "/vedanta",
      rating: 0.0,
      reviews: 0,
      details:
        "Vedanta School ERP, developed by Connect Icon Pvt Ltd, is a cutting-edge Institution Automation System designed exclusively for the education sector. Founded in 2012 by industry veterans Rajesh Dagar and Nisha Tomar, the company leverages their 20+ years of collective experience from esteemed organizations like Fidelity Investment, Sapient, IDBI Bank, Vodafone, and HP. This true SaaS Education ERP offers a unified platform covering academic and administrative processes, ensuring real-time decision-making for over 700 clients. With a focus on user roles rather than modules, Vedanta ERP features five key pillars - Front Office, People, Academics, Finance, and Infrastructure, providing adaptable reporting and secure access.",
    },
    {
      name: "Eduflex",
      description: "CAMPUS ERP SOLUTION",
      image: "/images/eduflex.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "eduflex",
      url: "/eduflex",
      rating: 0.0,
      reviews: 0,
      details:
        "Eduflex stands as the ultimate Education ERP, automating your entire campus seamlessly. This software simplifies student assessment, provides a reliable Parent/Student Portal for updates on attendance and progress, and enables online tracking of transport through a user-friendly mobile application. With a 'Service Oriented Approach,' Eduflex ensures swift access to synchronized data, speeding up tasks across educational institutions. Offering modules for admissions, registration, billing, financial aid, and more, Eduflex is the comprehensive solution for schools, colleges, and universities striving to do more with less in today's competitive and budget-constrained educational landscape.",
    },
    {
      name: "SchoolMate",
      description: "School Management Software with Mobile App.",
      image: "/images/schoolmate.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "schoolmate",
      url: "/schoolmate",
      rating: 0.0,
      reviews: 0,
      details:
        "SchoolMate is an advanced language school management system that simplifies tasks for administrators, teachers, and students. With modules covering administration, academics, finance, registration, study drive, CRM, resources, reports, surveys, and online bank feeds, it efficiently manages schedules, invoicing, and materials. Boasting features like multilingual support, online lesson integration, and mobile apps, SchoolMate promotes seamless communication. Its user-friendly design enhances productivity, fosters teacher-student interactions, and facilitates data-driven decision-making through robust reporting tools.",
    },
    {
      name: "Iolite School Management Software",
      description: "Software for Companies for easier work-flow manage",
      image: "/images/iolite.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "iolite",
      url: "/iolite",
      rating: 0.0,
      reviews: 0,
      details:
        "Iolite School Management Software is a specialized solution meticulously crafted for educational institutions, serving various school boards such as GSEB, CBSE, and ICSE. With multilingual support in Hindi, Gujarati, and English, it simplifies administrative tasks, academic management, HR functions, and financial calculations. The software features a customizable Content Management System for dynamic website management, efficient attendance tracking, library administration, and seamless communication with students, parents, and teachers. Trusted by over 20 clients and utilized by more than 5,000 users across India, Iolite School Management Software significantly enhances overall school administration and workflow efficiency.",
    },
    {
      name: "eduERP",
      description: "Software for Companies for easier work-flow manage",
      image: "/images/eduerp.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "eduerp",
      url: "/eduerp",
      rating: 0.0,
      reviews: 0,
      details:
        "eduERP® is an advanced ERP System tailored for educational institutions, schools, and universities, functioning as a comprehensive Campus Management System. This web and mobile solution caters to administrators, faculty, and management, complemented by a dedicated mobile app for students and parents. It addresses the crucial need for efficient management in educational settings, freeing up academic staff from manual paperwork to prioritize teaching and skill development. With its user-friendly interface, eduERP® stands as a technology-driven solution that enhances the functionality of schools, colleges, and universities, making it an indispensable asset in the education sector.",
    },
    {
      name: "OneSchool ",
      description: "One School is a multipurpose system used by educat",
      image: "/images/oneschool.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "oneschool",
      url: "/oneschool",
      rating: 0.0,
      reviews: 0,
      details:
        "OneSchool Global's innovative learning management software facilitates self-directed learning through a comprehensive framework. Designed for a network of 130 campuses across 20 countries, this software empowers students from Year 3 to Year 12 to take initiative and responsibility for their education. The Learning to Learn Framework guides students through assignments, lessons, and study, fostering independence and collaboration. Learning Centers, equipped with diverse resources, serve as dynamic hubs for self-directed learning. With a focus on digital literacy and a global approach, OneSchool Global's software transforms traditional education, creating a technology-rich environment for both students and teachers worldwide.",
    },
    {
      name: "Innate Infotech ",
      description: "School Management System Software is user friendly",
      image: "/images/innate.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "innate",
      url: "/infotech",
      rating: 0.0,
      reviews: 0,
      details:
        "Innate Infotech presents a holistic software solution, uniting a decade of expertise in IT services. Our dedicated team excels in software programming, web development, SEO, and more, ensuring client satisfaction globally. We specialize in custom software and web development, domain registration, web hosting, content writing, and internet marketing. With a commitment to client success, we provide innovative solutions for web design, secure domain registration, reliable hosting, SEO-optimized content creation, and impactful internet marketing strategies. Innate Infotech stands as your all-encompassing partner for elevating online presence and maximizing business profitability.",
    },
    {
      name: "icampushub ",
      description: "Online School and College Management Software",
      image: "/images/icampus.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "icampus",
      url: "/campushub",
      rating: 0.0,
      reviews: 0,
      details:
        "TechQuest Services presents icampushub an advanced School and College Management System Software meticulously crafted for efficient student, academic, and administrative operations. This ERP software, situated in Salem and Coimbatore, encompasses modules such as student management, attendance tracking, examinations, admissions, and more. Featuring a secure and cloud-enabled architecture, it guarantees data integrity, standardization, and a paperless workflow. Trusted by 100+ schools and colleges, this system boasts a decision aid, a user-friendly interface, and seamless integration, offering a streamlined solution for campus-wide management.",
    },
    {
      name: "VClassrooming",
      description: "System by Voniz Venture LLP.",
      image: "/images/vclassroom.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "vclassroom",
      url: "/vclassroom",
      rating: 0.0,
      reviews: 0,
      details:
        "VClassrooming is an integrated learning management and enterprise resource planning (ERP) software designed to transform educational institutions into modern digital campuses. Offering a comprehensive suite of features, including a robust Learning Management System (LMS) for K-12 and higher education, as well as ERP tools for data-driven decision-making, the software enhances student engagement, learning outcomes, and administrative efficiency. With user-friendly interfaces, powerful reporting capabilities, and unlimited user access, VClassrooming provides institutions with a seamless, secure, and personalized digital experience. Accelerate your campus's performance with this integrated software, fostering a dynamic and progressive learning environment.",
    },
    {
      name: "Vidyalaya School ERP",
      description: "Computerizing Your School",
      image: "/images/vidyalaya.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "vidyalaya",
      url: "/vidyala",
      rating: 0.0,
      reviews: 0,
      details:
        "Vidyalaya, a School Management System, is a transformative solution for educational institutions worldwide. With a track record of 22+ successful years and a global clientele of 1600+, Vidyalaya redefines education management through cutting-edge technology. This comprehensive software handles all aspects, from admissions to academic and staff management, integrating features such as biometrics, virtual classes, and more. The 96% client retention rate, 1500+ reports, and 2500+ verified reviews highlight its success. Vidyalaya's recognition through awards makes it the preferred choice for institutions seeking an efficient, user-friendly, and affordable school management solution.",
    },
    {
      name: "Teachmint",
      description: "Digitize your school and become future ready now",
      image: "/images/teachmint.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "teachmint",
      url: "/teachmint",
      rating: 0.0,
      reviews: 0,
      details:
        "Teachmint, an award-winning Integrated School Platform, serves as a robust solution for efficient exam management. With its Complete Mobile and Web Solution, Teachmint simplifies operations for schools, offering features like Fee Management, Student Information System, Admission Management, and a powerful Learning Management System. Trusted by over 15 million users across 25+ countries, Teachmint stands out for its user-friendly interface, dynamic fee structures, and real-time engagement tools. It not only automates administrative processes for schools but also provides a seamless learning experience, making it a preferred choice for educators, students, and parents worldwide.",
    },
    {
      name: "Mac EDMS",
      description: "Educational Data Management System",
      image: "/images/mac.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "mac",
      url: "/macedms",
      rating: 0.0,
      reviews: 0,
      details:
        "Mac EDMS is the premier Educational Data Management System, standing out with its intelligent features and cutting-edge technology. Trusted by over 1000 clients in India and the UAE, it caters to 150+ school boards, offering a customized school management system. With a focus on user-friendly yet affordable experiences, Mac EDMS brings a paperless administration, reducing costs by 98%, and integrates an SMS system for efficient communication. Boasting 20+ modules, it ensures seamless solutions for educational institutes, supported by 15+ years of experience, 100% customer satisfaction, and a track record of 527 satisfied principals.",
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
