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
      name: "KOOBA Library",
      description: "Library Mangement - Easy Now!!!",
      image: "/images/kooba.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "kooba",
      url: "/koob",
      rating: 0.0,
      reviews: 0,
      details:
        "KOOBA™ is an all-encompassing web-based Library Automation Software featuring Barcode and RFID capabilities. It ensures real-time access to comprehensive book and member data, seamlessly syncing with Android and iOS mobile apps. With functionalities such as multi-location library management, hierarchy controls, and streamlined membership processes, KOOBA™ simplifies library operations. Its robust features include efficient book acquisition, barcode-enabled issue/return, and management tools for inactive members and refunds. Offering 100% security and real-time accessibility, KOOBA™ supports mobile library operations, making it a reliable choice for efficient and on-the-go library management.",
    },
    {
      name: "Alexandria",
      description: "Software by COMPanion",
      image: "/images/alex.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "alexandria",
      url: "/alexandria",
      rating: 0.0,
      reviews: 0,
      details:
        "Alexandria™ is an innovative library automation software that goes beyond traditional systems, positioning your library as the central hub of community learning. With a focus on advocacy, it ensures a positive impact on patrons by streamlining daily tasks, enhancing catalog discoverability, and increasing circulation. Offering unlimited user licensing, Alexandria is accessible on any device, meeting WCAG/ADA standards. The software excels in catalog enrichment, analytics, and seamless integration with top library solution providers. Unmatched in the industry, it provides 24/7 live support and is committed to empowering librarians to foster a lifelong learning experience for their communities.",
    },
    {
      name: "Koha ILS",
      description: "All the book-records on your fingertips",
      image: "/images/koha.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "koha",
      url: "/koha",
      rating: 0.0,
      reviews: 0,
      details:
        "Koha, the world's pioneer in free and open-source library systems, is a fully featured and scalable library management solution. Developed through collaborative efforts involving libraries, volunteers, and global support companies, Koha sets the standard for innovation. The recent release of version 23.05 showcases its ongoing commitment to enhancement, offering responsive design for diverse devices. With a vibrant community shaping its evolution, Koha stands as a dynamic and inclusive platform, transforming library operations globally.",
    },
    {
      name: "SmartLib",
      description: "World-class Library Management Software",
      image: "/images/smart.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "smartlib",
      url: "/smart",
      rating: 0.0,
      reviews: 0,
      details:
        "SmartLib stands as the world's foremost Cloud-Based Library Management Software, providing a cutting-edge solution for efficient and seamless library administration. With its best-in-class features, SmartLib enables systematic organization and quick access to all library tasks within a few clicks. This software redefines the standard, offering the most advanced methods for managing and accessing the entire library operation. Experience the future of library management with SmartLib, a revolutionary solution designed to optimize and streamline library tasks effortlessly.",
    },
    {
      name: "Librarian",
      description: "Software by CR2 Technologies Limited",
      image: "/images/librarian.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "librarian",
      url: "/librarian",
      rating: 0.0,
      reviews: 0,
      details:
        "Librarian by Broadcom is a mainframe software offering advanced library management services. With its Change Control Facility (CCF), Librarian automates control features for efficient manipulation of libraries, supporting parallel and concurrent development. This solution simplifies application management through comprehensive change control methodologies, including reporting, performance monitoring, security, and archiving. Librarian enhances compliance with an audit trail for tracking and reporting changes, while its interactive CCF streamlines change processes for source code development. Ultimately, Librarian empowers organizations to work smarter by providing real-time results in mainframe environment management.",
    },
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
      name: "DIGITAL SCHOOL WEB SOLUTION",
      description: "Best Software Unlimited Student || Renewal Free",
      image: "/images/digital.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "digital school",
      url: "/digital",
      rating: 0.0,
      reviews: 0,
      details:
        "DIGITAL SCHOOL WEB SOLUTION is a leading indigenous, customizable online school management software. This comprehensive system addresses modern school administration challenges by offering features such as a free school website for global visibility, a custom mobile app for effective communication, an extensive e-library with curriculum-based e-books, accurate result checking, and free computer-based testing. Additionally, it provides realistic science simulations, making subjects come alive for students. The platform is user-friendly and covers automated students' registration, course registration, finance management, staff and student database management, email services, bulk SMS, e-examinations, web content management, JAMB CBT testing, E-Library, and payment systems. Transform your school administration seamlessly with DIGITAL SCHOOL WEB SOLUTION.",
    },
    {
      name: "Campus 365",
      description: "Cloud-based school management software by Campus 365",
      image: "/images/camp365.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "campus365",
      url: "/campus",
      rating: 0.0,
      reviews: 0,
      details:
        "Campus 365 is a pinnacle in institution and school ERP software, serving as a holistic solution for educational entities globally. With an intuitive interface, it seamlessly automates the entire organizational value chain, covering admissions, fee management, exam analysis, attendance tracking, and library integration. Boasting powerful features and adaptable dashboards, Campus 365 suits institutions of all sizes, eliminating the need for extensive customization. Trusted by over 2,000 institutes across 20+ countries, it facilitates educational excellence through paperless admissions, real-time exam insights, automated fee processing, and seamless collaboration among students, parents, and teachers.",
    },
    {
      name: "Chanakya ERP",
      description: "Innovating Schools",
      image: "/images/chanakya.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "chanakya",
      url: "/chanakya",
      rating: 0.0,
      reviews: 0,
      details:
        "Chanakya ERP, developed by Bicore Chanakya ERP Pvt. Ltd., is a cutting-edge accounting and business management software with 100% automation in accounting. Recognized as India's first software featuring an inbuilt GST return system, it facilitates seamless filing with a single click, eliminating the need to log in to the GST portal. Serving over 56,000 satisfied clients nationwide, including various industries, Chanakya ERP offers hassle-free support through a ticketing system and covers inventory, accounting, GST, e-Way Bill, and e-Invoice processes. With affordable pricing options, lifetime licenses, and advanced features like data backup, it ensures efficient and error-free business operations.",
    },
    {
      name: "Fedena",
      description: "All in one College & School Management Software",
      image: "/images/fedena.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "fedena",
      url: "/fedena",
      rating: 0.0,
      reviews: 0,
      details:
        "Fedena is an All-In-One College and School Management Software, serving 40,000+ schools and colleges across 200+ countries in 20+ languages. This multipurpose system automates daily operations, generates insightful reports, and facilitates better decision-making for stakeholders. With 100+ modules, including Exam & Gradebook, Admission Tracking, Timetable & Attendance, Fees Management, and Online Classes integration, Fedena is tailored for various education boards. Its user-friendly design ensures simplicity for teachers, while powerful features cater to all institutional needs. With dedicated mobile apps and up to 20 integrations, Fedena is a preferred choice, lauded for its efficiency by institutes like Vidya Vikas Academy.",
    },
    {
      name: "LibraryWorld",
      description: "Software by LibraryWorld",
      image: "/images/world.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "world",
      url: "/library",
      rating: 0.0,
      reviews: 0,
      details:
        "LibraryWorld is an innovative web-based library automation service that eliminates the need for expensive software and hardware, offering a state-of-the-art system for effortless collection management and circulation. With a commitment to simplicity, it provides a 30-day free trial showcasing its comprehensive features, including cataloging, patron management, circulation tracking, and more. Trusted by thousands of libraries leveraging the power of the Internet, LibraryWorld's service plans encompass all library applications, ensuring cost-effectiveness and streamlined operations. Backed by dedicated customer support via online, email, and a 1-800 number, LibraryWorld is the go-to solution for libraries seeking efficient, value-driven automation.",
    },
    {
      name: "WorldShare Management Services",
      description: "Software by OCLC",
      image: "/images/share.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "worldshare",
      url: "/worldshare",
      rating: 0.0,
      reviews: 0,
      details:
        "OCLC's WorldShare is a library management system tailored to meet the evolving challenges libraries face today. With products such as WorldShare Acquisitions, WorldCat Discovery, and WorldShare Interlibrary Loan, it facilitates streamlined workflows, efficient data sharing, and global collaboration among libraries. WorldCat, the world's most extensive bibliographic database, serves as a global connector for libraries, fostering the contribution and enhancement of bibliographic data on a worldwide scale. WorldShare operates on a cloud-based platform, empowering libraries to manage collections effectively, automate processes, and enhance resource visibility. OCLC's innovative solutions enable libraries to adapt to changing user needs, measure impact, and achieve greater efficiency in the dynamic library landscape.",
    },
    {
      name: "CodeAchi Library Management System",
      description: "LMS system for Librarian",
      image: "/images/code.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "code",
      url: "/codeachi",
      rating: 0.0,
      reviews: 0,
      details:
        "CodeAchi Library Management System is a software solution that stands out for its simplicity and comprehensive features. With digital cataloging, adding new books and monitoring their circulation is straightforward. The software supports easy book issuance and return using any barcode scanner, automates fine calculations, and sends notifications via email and SMS. It allows users to generate various reports and customize data categories swiftly using Excel or CSV sheets. CodeAchi offers standalone installation on Windows systems with a 30-day free trial, backed by 24/7 customer support. Its transparent pricing, free training, and a 30-day refund policy contribute to its global reputation in universities, colleges, schools, and public libraries. The software has received positive reviews for its user-friendly interface, data security measures, and continuous customer support.",
    },
    {
      name: "icampushub",
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
      name: "Innate Infotech",
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
      name: "OneSchool",
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
