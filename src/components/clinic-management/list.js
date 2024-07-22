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
      name: "Healcon Practice",
      description: "India's #1 Clinic Management Software",
      image: "/images/healcon.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "healcon",
      url: "/healcon-practice",
      rating: 0.0,
      reviews: 0,
      details:
        "Healcon Practice is an all-in-one cloud-based medical software designed for doctors to efficiently manage clinic workflows. Offering features such as Practice Management, Electronic Medical Records (EMR), e-Prescription, Appointment Scheduling, Medical Billing, and more, it seamlessly integrates and automates various aspects of healthcare operations. With an emphasis on improved patient care, reduced no-shows, and streamlined front-office processes, Healcon Practice ensures a paperless and secure environment. Its industry-leading security features, including HIPAA-compliant data centers and multi-geography backups, make it a reliable choice for healthcare professionals globally.",
    },
    {
      name: "Practo Ray",
      description: "Software by Practo Technologies Private Limited",
      image: "/images/practo.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "practo",
      url: "/practo-ray",
      rating: 0.0,
      reviews: 0,
      details:
        "Practo Ray is a clinic management software, widely trusted in India and used by over 50,000 doctors across 5 countries. As Ayushman Bharat Digital Mission compliant, it ensures enhanced discoverability within the ABDM ecosystem. Offering features like automated appointment reminders, secure digital record-sharing, and post-consultation chats, Practo Ray streamlines operations, reduces no-shows, and improves patient engagement. With Practo Prime, a premium offering, clinics can further elevate patient experience, benefiting from features like a smart calling system and 24/7 instant online booking. The software prioritizes data security, boasting 256-bit end-to-end encryption and HIPAA-compliant data centers.",
    },
    {
      name: "ClinSav",
      description: "My Clinic in My Pocket",
      image: "/images/clinsav.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "clinsav",
      url: "/clinsav",
      rating: 0.0,
      reviews: 0,
      details:
        "ClinSav, 'My Clinic in My Pocket,' is a clinic management solution offering healthcare professionals complete control over patient data. It simplifies operations by digitizing patient information, providing real-time appointment tracking, and enabling flexible case paper management. The software facilitates seamless collaboration with staff through instant syncing and intercom communication. ClinSav automates financial tracking, prescription management, and supports the management of multiple clinics. Equipped with smart and voice assist features, ClinSav ensures an optimized clinic experience, making it an essential tool for healthcare practitioners.",
    },
    {
      name: "DocEngage",
      description: "India's No:1 EHR/EMR",
      image: "/images/docengage.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "docengage",
      url: "/docengage",
      rating: 0.0,
      reviews: 0,
      details:
        "DocEngage is a healthcare management software that serves as a comprehensive solution for both single and multi-speciality hospitals. Offering six products, over 30 apps, and 100+ integrations, it provides an advanced and secure platform for digital healthcare. From telehealth services and CRM to clinic management, EHR, homecare, and hospital management, DocEngage covers the entire spectrum of healthcare needs. Noteworthy for its emphasis on security, the software ensures data protection through SSL encryption, role-based access control, and compliance with HIPAA standards. Trusted by leading healthcare providers, DocEngage optimizes patient care through secure communication, mobile apps, and efficient practice management.",
    },
    {
      name: "CrelioHealth",
      description: "Advanced web-based LIMS, PACS/RIS with Mobile Apps",
      image: "/images/crelio.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "crelio",
      url: "/creliohealth",
      rating: 0.0,
      reviews: 0,
      details:
        "CrelioHealth's Patient Engagement Software is an all-encompassing solution designed to enhance patient experience and relationships in healthcare. It seamlessly integrates with websites, converting them into online stores for efficient patient bookings and secure online payments. With personalized promotions and targeted packages, the software ensures improved patient communication and conversions. Offering HIPAA-compliant features, the platform provides secure, automated patient reminders and notifications via Email, SMS, and WhatsApp. CrelioHealth's system is highly configurable, prioritizing privacy, brand identity, and a superior patient engagement experience, making it an essential tool for healthcare providers.",
    },
    {
      name: "Webmedy",
      description: "Software by Ardinia Systems Pvt Ltd",
      image: "/images/webmedy.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "webmedy",
      url: "/webmedy",
      rating: 0.0,
      reviews: 0,
      details:
        "Webmedy is a Electronic Health Records (EHR) practice management platform designed to enhance medical practices' efficiency and scalability. With a user-friendly interface and robust features, including customizable templates for quick note-taking, automated reminders, and cloud-based scheduling, Webmedy streamlines administrative tasks. The platform offers smart charting, clinical reports, and adherence to EHR standards, ensuring accurate and efficient patient care. Webmedy's billing module accelerates payment processes, while the patient portal fosters engagement, empowering individuals to manage their health decisions. Backed by top-tier data security and role-based access control, Webmedy is a HIPAA-compliant solution that prioritizes ease of use, functionality, and value for healthcare practitioners.",
    },
    {
      name: "Qmarksoft",
      description: "Online | Offline With Sync Facility & Mobile APP",
      image: "/images/qmark.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "qmark",
      url: "/qmarksoft",
      rating: 0.0,
      reviews: 0,
      details:
        "Qmarksoft's Pathology Lab Software is a comprehensive and customizable online solution for managing and reporting pathology lab activities. Offering both online and offline versions, it ensures unlimited data management, lightning-fast performance, and secure data handling. With features like barcode and QR code integration, automated communication via SMS, WhatsApp, and email, as well as mobile apps for both Android and iOS, the software streamlines operations, facilitates report access, and enables seamless interaction with patients. Its extensive capabilities encompass inventory management, employee and franchisee systems, making it an efficient, user-friendly, and versatile tool for pathology laboratories.",
    },
    {
      name: "Clinicmaster",
      description: "Software by Vimukti Technologies Pvt. Ltd.",
      image: "/images/clinicmaster.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "clinicmaster",
      url: "/clinicmaster",
      rating: 0.0,
      reviews: 0,
      details:
        "Clinicmaster is a practice management platform designed to streamline operations for healthcare clinics. Offering specialized solutions for Rehabilitation and Therapy Clinics, Health and Wellness Clinics, Medical Specialties, and more, Clinicmaster empowers clinics with features like intuitive scheduling, efficient billing, digital charting, dynamic marketing, and data-driven analytics. The software ensures patient engagement through portals, secure communication, and personalized care plans. With a focus on user roles, Clinicmaster caters to owners, administrators, clinicians, receptionists, and patients, fostering seamless connectivity across devices. Privacy is prioritized with encrypted data storage on Microsoft Azure servers, making Clinicmaster a secure and efficient choice for clinics aiming for growth and excellence in patient care.",
    },
    {
      name: "Medixcel",
      description: "Medical software for Clinics, Labs and Hospitals",
      image: "/images/medixcel.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "medixcel",
      url: "/medixcel",
      rating: 0.0,
      reviews: 0,
      details:
        "Medixcel harmonizing Electronic Medical Records (EMR), Practice Management, and Patient Engagement. Unleash a comprehensive toolset that empowers healthcare professionals to efficiently manage medical records, streamline practice operations, and elevate patient interaction. This robust platform, powered by advanced technology, ensures a user-friendly experience while optimizing workflows in medical practices. Explore the myriad features offered to enhance overall efficiency and patient engagement.",
    },
    {
      name: "Lybrate",
      description: "Software by Lybrate",
      image: "/images/lybrate.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "lybrate",
      url: "/lybrate",
      rating: 0.0,
      reviews: 0,
      details:
        "Lybrate is a dynamic clinic management software that streamlines medical practitioners' daily tasks. This user-friendly platform allows doctors to effortlessly manage patient records, prescriptions, and appointments. With secure data storage on Amazon Cloud servers, multilingual SMS reminders, and smart billing features, Lybrate ensures efficient practice management. The software facilitates seamless connectivity with patients through its Smart Patient Connect feature, fostering the exchange of medical documents for enhanced patient engagement. Lybrate stands out for its commitment to empowering doctors with essential patient information, emphasizing ease of use, transparent pricing, and reliable service.",
    },
    {
      name: "Halemind",
      description: "Connected EMR and Hospital Management System",
      image: "/images/hale.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "hale",
      url: "/halemind",
      rating: 0.0,
      reviews: 0,
      details:
        "Halemind is a Electronic Medical Records (EMR) and Hospital Management System (HMS) designed to elevate independent practices and hospitals. With advanced, secure, and specialty-driven EHR technology, it simplifies operations for private practices, hospitals, pharmacies, and labs. Halemind empowers healthcare professionals with evidence-based care, intuitive patient behavior tracking, and streamlined scheduling through a smart calendar. The platform offers a single-dashboard solution for administrators, encompassing connected records, billing, digital prescriptions, patient portals, and more. Beyond mere management, Halemind creates a connected healthcare platform, endorsed by satisfied users like Ophthalmologist Dr. Madhavi and Homeopathic Consultant Dr. Sandeep Selvinus, making it a comprehensive and user-friendly solution for modern healthcare needs.",
    },
    {
      name: "KareXpert's EMR/EHR Software",
      description: "More Time Caring. Less Time Charting.",
      image: "/images/karexpert.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "karexpert",
      url: "/karexpert",
      rating: 0.0,
      reviews: 0,
      details:
        "KareXpert's EMR/EHR Software is a solution designed to optimize healthcare operations. It digitizes patient records, allowing for efficient management of medical reports, prescriptions, and diagnostic data. The platform features hyper-coordinated workflows, medication and clinical order management, and a paperless hospital system, reducing administrative burdens. Specialized templates cater to diverse medical specialties, ensuring quick processing of patient data. With secure information handling and cost-effective solutions, KareXpert facilitates a seamless transition to digital healthcare, promoting improved patient care and streamlined workflows for healthcare providers.",
    },
    {
      name: "Medismart",
      description:
        "Software by HexaTech IT Ventures Pvt Ltd / Writer Business Services Pvt Ltd",
      image: "/images/medismart.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "medismart",
      url: "/medismart",
      rating: 0.0,
      reviews: 0,
      details:
        "Medismarts EMR is an innovative Electronic Medical Record system designed to enhance healthcare delivery. Seamlessly integrating clinical, administrative, and billing functions, it empowers healthcare providers to schedule and manage procedures efficiently, code diagnoses globally, automate workflows, generate reports, and streamline billing processes. Trusted by forward-thinking HMOs and providers, Medismarts EMR ensures real-time updates, easy integration with accounting software, and multiple payment options for patients. As a leading Med-Tech brand, Medismarts is committed to leveraging technology and data to create viable healthcare solutions, addressing both obvious and hidden challenges within the healthcare sector.",
    },
    {
      name: "MediSteer",
      description: "A web-based hospital management ERP",
      image: "/images/medisteer.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "medisteer",
      url: "/medisteer",
      rating: 0.0,
      reviews: 0,
      details:
        "MediSteer is a web-based hospital management system developed by Adroit Soft India. This comprehensive product addresses the operational and managerial needs of hospitals, ranging from small clinics to large-scale medical facilities. Designed collaboratively by medical professionals and engineers, MediSteer enhances operational efficiency, reduces costs, and minimizes medical errors. With seamless data flow across departments, online consultation capabilities, and integrated modules covering outpatient and inpatient management, pharmacy, laboratory, finance, and more, MediSteer ensures a holistic solution for healthcare institutions, promoting improved patient care, increased staff productivity, and overall customer satisfaction.",
    },
    {
      name: "Clinicea",
      description: "Software by Clinicea",
      image: "/images/clinicea.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "clinicea",
      url: "/clinicea",
      rating: 0.0,
      reviews: 0,
      details:
        "Clinicea, established in November 2012, is a globally acclaimed clinic management platform renowned for its simplicity and effectiveness. Operating across 6 continents and supporting 20+ medical specialties, Clinicea boasts a 4.9 satisfaction rating. Offering features such as customizable EMR, stunning prescription creation, and visual visit comparisons, it stands out with smart imaging tools and integrated virtual assistants. Emphasizing patient engagement, it facilitates online bookings, feedback, and loyalty programs. With a focus on data security and compliance, Clinicea is hosted on Microsoft Azure Cloud. Client testimonials highlight its customization, support, and seamless clinic operations.",
    },
    {
      name: "e-Hospital",
      description: "World-Class EHR Software at Affordable Price",
      image: "/images/ehospital.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "ehospital",
      url: "/ehospital",
      rating: 0.0,
      reviews: 0,
      details:
        "e-Hospital, an integral part of India's Ayushman Bharath Digital Mission, is a digital healthcare platform. Linked to the Ayushman Bharath Health Account (ABHA), it empowers patients with secure digital access to health records, lab reports, and prescriptions. Offering modules for patient registration, admission, billing, and clinic management, it enhances operational efficiency in outpatient and inpatient services. With seamless integration into the digital health ecosystem, e-Hospital is a transformative solution, fostering streamlined healthcare processes and patient-centric care.",
    },
    {
      name: "Prescription Pad",
      description: "Software by CompuRx Infotech Pvt Ltd",
      image: "/images/prescriptionpad.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "prescriptionpad",
      url: "/prescription-pad",
      rating: 0.0,
      reviews: 0,
      details:
        "Prescription Pad is a user-friendly medical software designed for doctors in India. Developed by Dr. Anil Vij, Chairman, and Medical Director, this software streamlines prescription writing with features such as offline prescription storage, duplicate medical certificates, readymade prescription templates, and day-to-day activity tracking. It ensures safe and error-free prescriptions, offering value-added services like educational handouts, appointment management, and health calculators. The software also incorporates a trusted pharmacopeia with information on 70,000 Indian, British, and American drug brands, making it a time-efficient solution for doctors to organize patient data, enhance clinical decision-making, and save valuable time.",
    },
    {
      name: "OPD PLUS Management Software",
      description: "Clinic Management Software",
      image: "/images/opdplus.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "opdplus",
      url: "/opd-plus",
      rating: 0.0,
      reviews: 0,
      details:
        "OPD PLUS Management Software is an all-encompassing solution tailored for efficient hospital management, emphasizing seamless patient registration, appointment scheduling, and automated digital prescription creation. The software facilitates a user-friendly front desk, ensuring real-time patient registration and streamlined operations for multiple doctors and departments. With customizable plans for individual practices, clinics with multiple doctors, and large healthcare organizations, it offers versatile options. Supported by 24/7 assistance on the Microsoft Azure platform, it ensures global accessibility, making it a flexible and environmentally conscious choice for optimizing medical practices.",
    },
    {
      name: "Easy Clinic",
      description: "Simple, Powerful & Complete Medical Software",
      image: "/images/easyclinic.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "easyclinic",
      url: "/easy-clinic",
      rating: 0.0,
      reviews: 0,
      details:
        "Easy Clinic is a premier EMR and Clinic Management Software designed by and for doctors, offering a seamless solution for individual practitioners or multi-user clinics. With over 10 years of experience, it boasts a user-friendly interface, empowering healthcare professionals to go paperless, streamline practice management, handle billing, conduct virtual consultations, and generate insightful reports. Customizable to diverse workflows, Easy Clinic ensures flexibility while prioritizing robust security with bank-level data protection. It stands out with outstanding customer service, real-time support, and a commitment to data privacy. Trusted by 5000+ doctors in 200+ cities worldwide, it's a powerful, secure, and growth-oriented choice for clinics of all sizes.",
    },
    {
      name: "Clinisys",
      description: "Software by Bio Analytical Technologies",
      image: "/images/clinicsys.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "clinicsys",
      url: "/clinisys",
      rating: 0.0,
      reviews: 0,
      details:
        "Clinisys is a leading clinical lab systems provider with a robust platform that seamlessly integrates data, serving over 3,500 customers globally. Their Clinisys Platform™ empowers laboratories to enhance healthcare services through informed decision-making, supports advancements in life sciences research, and contributes to public health by enabling disease surveillance and management at scale. With 40 years of expertise and a team of over 1,450 lab professionals, Clinisys offers tailored solutions across 22 research and test disciplines in nine industries. Their commitment to efficiency, productivity, and innovation positions Clinisys as a trusted partner in shaping a healthier and greener future.",
    },
    {
      name: "Nalam",
      description: "Software by Nalam+",
      image: "/images/nalam.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "nalam",
      url: "/nalam",
      rating: 0.0,
      reviews: 0,
      details:
        "Nalam+ by Nalam Healthcare IT Solutions is a multi-speciality hospital management software, offering features such as patient record maintenance, digital health ID with Medlocqr, NABH accreditation support, and innovative solutions like Nalam Lite for efficient computing. The software caters to Clinical Establishment Rules 2018, ensuring meticulous maintenance of medical records and patient databases. Nalam+ stands out for its networking support, connecting machines to streamline data sharing, and is backed by proactive support services, embodying the principle 'Prevention is better than Cure' even in the realm of software.",
    },
    {
      name: "ACE Health Solutions",
      description: "Software by Vaspaan Technologies",
      image: "/images/acehealth.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "acehealth",
      url: "/ace-health-solutions",
      rating: 0.0,
      reviews: 0,
      details:
        "ACE Health Solutions offers a comprehensive Practice Management software designed for healthcare providers and small hospitals. This robust solution covers key areas such as credentialing, operations re-design for compliance, patient volume increase through strategic marketing, provider recruiting with resume screening assistance, and thorough compliance measures including HIPAA and OSHA training. The software conducts organizational assessments, providing a complimentary 1-hour evaluation and in-depth analysis to define goals, create strategic plans, assess technology needs, and ensure adherence to industry regulations. Utilizing LEAN, Six Sigma Principles, and Quality Improvement Principles, ACE Health Solutions delivers effective and tailored solutions with industry best practices.",
    },
    {
      name: "Sara Technologies",
      description: "Software by Sara Technologies",
      image: "/images/sara.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "sara",
      url: "/sara-technologies",
      rating: 0.0,
      reviews: 0,
      details:
        "The Pathology Management Software developed by Sara Technologies streamlines laboratory operations, offering a user-friendly digital solution for efficient clinical and operational management. Tailored for path labs, the software ensures optimal resource utilization, increased productivity, and paperless record-keeping. It features comprehensive functionalities, including patients' data management, appointment scheduling, web reporting, and online MIS, adhering to NABH/NABL standards. With benefits such as quick information access, centralized patient data, and improved data safety, the software enhances overall workflow, making it an indispensable tool for modern diagnostic centers.",
    },
    {
      name: "MedigyneC Gynecology Hospital Management System",
      description:
        "Software by HexaTech IT Ventures Pvt Ltd / Writer Business Services Pvt Ltd",
      image: "/images/medigynec.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "medigynec",
      url: "/medigynec",
      rating: 0.0,
      reviews: 0,
      details:
        "The MedigyneC Gynecology Hospital Management System is an application designed to streamline gynecologists' workflows, allowing them to focus on patient care. With preloaded templates and advanced features, it efficiently handles administrative tasks, ensuring timely completion of patient records and detailed clinical documentation. The user-friendly interface facilitates specialty-specific templates, auto check-in kiosks, and digital images, reducing paperwork and enhancing efficiency. This solution offers a structured approach to women's reproductive health, covering a range of clinical conditions and providing actionable clinical intelligence. From labor and delivery to preventative care, MedigyneC ensures accurate and quick communication of patient information across stakeholders for improved healthcare outcomes.",
    },
    {
      name: "The iHMS (Hospital Management System)",
      description: "Software by TECHQUEST SERVICES",
      image: "/images/hms.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "hms",
      url: "/ihms",
      rating: 0.0,
      reviews: 0,
      details:
        "The iHMS (Hospital Management System) by ACGIL is an advanced software designed for efficient management of hospitals, clinics, diagnostic centers, and nursing homes. It offers a patient-centric approach, handling various cases such as outpatients, emergencies, and inpatients. With a fully configured web-based solution, it provides mobile-friendly features for quick decision-making and control over hospital processes. Key features include multi-user account support, responsive interface, regular updates, Codeigniter framework, and extensive functionalities like appointment management, medical reports, and medication history. It minimizes manpower, ensures instant information retrieval, and facilitates online appointment scheduling and payment processing.",
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
