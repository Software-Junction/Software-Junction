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
      name: "Vyapar",
      description: "Simplified hotel accounting software",
      image: "/images/vyaparhotel.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "vyaparhotel",
      url: "/vyapar-hotel",
      rating: 0.0,
      reviews: 0,
      details:
        "Vyapar is an advanced accounting software tailored for the hospitality industry, offering a comprehensive solution for billing, estimates, invoicing, and financial management. Specifically designed to address challenges faced by the hospitality sector, Vyapar streamlines accounting processes by managing cash flow, tracking income and expenses, and providing real-time financial analysis. With features such as expense management, inventory control, fixed asset management, and accounts receivable/payable, Vyapar ensures accurate and efficient financial record-keeping for hotel businesses. The software's user-friendly interface, automated functions, and real-time accessibility make it an essential tool for optimizing costs, managing records, and making strategic decisions in the dynamic hospitality environment.",
    },
    {
      name: "KWHotel",
      description: "Feature-rich hotel checkin software",
      image: "/images/kwhotel.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "kwhotel",
      url: "/kwhotel",
      rating: 0.0,
      reviews: 0,
      details:
        "KWHotel, an innovative hotel management solution designed to elevate your hospitality business to new heights. Trusted by over 5,000 hoteliers across 160 countries and available in 21 languages, KWHotel goes beyond traditional management software. With both desktop and web-based options, it offers features like reservation handling, pricing policy management, and invoicing. From rental management for apartments to a camping module with graphical representation, KWHotel ensures seamless operations. Stay ahead with online booking engines, channel management, and integrations like credit card services and SMS marketing. Experience a comprehensive tool tailored for the modern hotelier, committed to optimizing efficiency, reducing costs, and adapting to industry challenges. Take advantage of a free hotel audit, offering over 60 professional tips to navigate the complexities of the pandemic landscape. Welcome to a new era of hotel management with KWHotel—where innovation meets hospitality.",
    },
    {
      name: "Stayflexi",
      description: "Flexible hotel booking platform for hotel business",
      image: "/images/stayflexi.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "stayflexi",
      url: "/stayflexi",
      rating: 0.0,
      reviews: 0,
      details:
        "Stayflexi is an All-In-One platform revolutionizing the hospitality industry, offering a comprehensive Operating System for hotels and vacation rentals. Seamlessly integrating operations, sales, guest management, and payments, it provides a fully automated AI-powered Property Management System (PMS) to simplify tasks and reduce costs. With features like Magic Link automation, flexible booking options, and a global network of 2000+ trusted properties, Stayflexi ensures a hassle-free experience for hoteliers, enhancing guest satisfaction and driving revenue through direct bookings. It's the ultimate solution for modern property management, connecting last-minute unsold rooms with travelers, and supporting diverse property types worldwide.",
    },
    {
      name: "SYSOTEL.AI",
      description: "AI-powered hotel management system",
      image: "/images/sysotel.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "sysotel",
      url: "/sysotel",
      rating: 0.0,
      reviews: 0,
      details:
        "SYSOTEL.AI is India's pioneering Revenue & Yield Automation System, revolutionizing the hospitality sector. This innovative AI/ML-based platform offers a comprehensive single sign-on solution for hoteliers, addressing challenges and enabling a 15-20% increase in topline, 12-18% optimization of the bottom line, and improved operational efficiency. With seamless integration, real-time data insights, and a user-friendly interface, SYSOTEL.AI empowers businesses to streamline operations, boost revenue through intelligent booking engines, and strategically optimize profitability through advanced solutions. Trusted by a diverse clientele, SYSOTEL.AI shapes the future of hospitality with powerful collaborations and unmatched technology in the realms of PMS, channel management, payment gateways, OTAs, and meta search.",
    },
    {
      name: "eZee Absolute",
      description: "Best Hotel Software for Small and Medium Business",
      image: "/images/ezee.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "ezee",
      url: "/ezee-absolute",
      rating: 0.0,
      reviews: 0,
      details:
        "eZee Absolute, a Hotel Management System designed to elevate your hospitality business to new heights. With a focus on seamless operations, this comprehensive software offers a range of features, from efficient reservations and offline bookings to easy rate management and user role customization. The integrated Hotel Channel Manager connects your property to 130+ channels, ensuring maximum reach and instant updates. The commission-free Hotel Booking Engine empowers direct bookings, while the Restaurant POS System streamlines order management and integrates with popular food delivery portals. Explore the future of hospitality management with eZee Absolute – where innovation meets excellence.",
    },
    {
      name: "DJUBO",
      description: "Smart hotel booking engine",
      image: "/images/djubo.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "djubo",
      url: "/djubo",
      rating: 0.0,
      reviews: 0,
      details:
        "DJUBO is an all-in-one hospitality management software designed for hotels, offering a comprehensive suite of modules to streamline operations and maximize revenue. It integrates Property Management, Centralized Reservation, Channel Management, Booking & Payment Engine, Analytics, Meta-search Marketing, Point of Sale, Online Reputation Management, Rate Shopping, Intelligent Revenue Management, and more. Built by hoteliers for hoteliers, DJUBO's cloud-based solution enables seamless connectivity, reducing manual efforts and enhancing efficiency. With a user-friendly interface, mobile accessibility, and a commitment to innovation, DJUBO stands out as a versatile and integrated hotel technology solution.",
    },
    {
      name: "InnKey",
      description: "Cloud Based Hotel Management Software",
      image: "/images/innkey.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "innkey",
      url: "/innkey",
      rating: 0.0,
      reviews: 0,
      details:
        "InnKey – a revolutionary cloud-based solution that is reshaping the landscape of hotel management. InnKey sets itself apart by prioritizing simplicity and operational excellence, offering a centralized platform to streamline hotel operations. Say goodbye to the complexities of juggling multiple software versions and platforms as InnKey seamlessly integrates central reservation, front desk management, point of sale, and more. With a global footprint and cutting-edge property management system access, InnKey ensures efficient distribution and introduces genuine artificial price intelligence for advanced revenue management. Enjoy the perks of easy remote accessibility, scalability, and robust data security, making InnKey the go-to choice for hotels worldwide. Embark on a new era of hospitality management where efficiency meets exceptional customer service – welcome to the world of InnKey.",
    },
    {
      name: "SabeeApp",
      description: "Cloud-based hotel management software",
      image: "/images/sabeeapp.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "sabeeapp",
      url: "/sabeeapp",
      rating: 0.0,
      reviews: 0,
      details:
        "SabeeApp, a seamless and thriving hospitality experience. Our Software Suite is a powerhouse of tools, featuring the efficient Property Management System (PMS), Booking Engine, Channel Manager, SabeePay for secure multichannel payments, and cutting-edge Smart Solutions like digital hotel applications. Tailored for hotels, apartments, and hostels, SabeeApp is more than just a management system – it's a catalyst for automation, direct bookings, and elevated guest experiences. Embrace the future with our cloud-based platform, granting you access to critical data and operations anytime, anywhere. Join the league of global hoteliers who trust SabeeApp for personalized onboarding, industry integration, and a seamless blend of innovation and efficiency in every aspect of hospitality management.",
    },
    {
      name: "MyHotelLine",
      description: "Serving Hospitality",
      image: "/images/myhotelline.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "myhotelline",
      url: "/myhotelline",
      rating: 0.0,
      reviews: 0,
      details:
        "MyHotelLine, your gateway to a hotel management experience. As a leading cloud-based solution, MyHotelLine offers an integrated platform designed to centralize reservations, boost revenue, and deliver unparalleled guest experiences. With a single login, our powerful tools, including a cutting-edge hotel PMS, direct booking engine, channel manager, and advanced revenue management, cater to a diverse range of accommodations. Boasting a 99.5% uptime guarantee and backed by a highly experienced team with over 20 years in the industry, MyHotelLine is your one-stop solution for seamless, efficient, and cost-effective hotel management. Join over 1000 hospitality professionals worldwide who trust MyHotelLine to elevate their operations and enhance guest satisfaction.",
    },
    {
      name: "The Hotel Management Software",
      description: "hotel software, club software, resort software",
      image: "/images/thms.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "thms",
      url: "/hms",
      rating: 0.0,
      reviews: 0,
      details:
        "The Hotel Management Software by Truelogics Infotech Pvt. Ltd. is a comprehensive and user-friendly solution designed for the hospitality industry. It offers a 24/7 support system, catering to hotels, chain outlets, guest houses, motels, resorts, sweet shops, bakeries, and related services. With modules for restaurant, club, bar, banquet, spa, salon, and more, the cloud-based ERP system streamlines operations, including front office management, reservation tracking, inventory control, and accounting. The software stands out with its true booking engine, CRM integration, and channel manager for efficient guest bookings and feedback management. The product ensures data security, easy configuration, and 24x7 technical support, making it a reliable choice for businesses in the hospitality sector.",
    },
    {
      name: "Hotelogix",
      description: "Cloud-based property management system",
      image: "/images/hotelogix.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "hotelogix",
      url: "/hotelogix",
      rating: 0.0,
      reviews: 0,
      details:
        "Hotelogix is a cloud-based hotel management software that empowers hoteliers to enhance operational efficiency and guest experiences. With features such as reservation management, real-time channel updates, and mobile PMS, it offers a comprehensive solution for hotel operations. The software helps increase revenue by 20%, boosts online bookings by 45%, and saves 60% in staff time. Trusted by hoteliers in over 100 countries, Hotelogix provides a unified dashboard for managing multiple properties, a powerful web booking engine for commission-free direct bookings, and enthusiastic 24x7 support. It's a subscription-based model that facilitates cost-effective operations and real-time decision-making, ensuring a seamless hotel management experience.",
    },
    {
      name: "Oracle Hospitality",
      description: "Comprehensive hotel management suite",
      image: "/images/oraclehospitality.png",
      imageWidth: 130,
      imageHeight: 10,
      altText: "oraclehospitality",
      url: "/oracle-hospitality",
      rating: 0.0,
      reviews: 0,
      details:
        "Oracle Hospitality is a technology solution designed to elevate guest experiences and streamline operations in the hospitality industry. With over 40,000 active sites managing 4.8 million hotel rooms and integrating with 4,000 vendors, Oracle Hospitality offers a suite of AI and automation-powered tools. It seamlessly connects event sales, guest rooms, management, and point of sale systems, ensuring flawless operations from lobby to back office. The software enhances customer engagement, loyalty, and revenue by personalizing marketing, automating upselling opportunities, and optimizing back-office functions for improved efficiency and profitability.",
    },
    {
      name: "ShawMan PMS",
      description: "Software by ShawMan Software Pvt. Ltd.",
      image: "/images/shawman.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "shawman",
      url: "/shawman",
      rating: 0.0,
      reviews: 0,
      details:
        "ShawMan PMS is a Property Management System designed to efficiently handle room management, guest preferences, and various standard operations for diverse property types such as hotels, motels, resorts, clubs, B & B’s, hostels, and apartments. With features like centralized rate management and a Central Reservation System, it streamlines business processes for hotel chains, facilitating easy booking management from travel agents and FIT over the Internet. Boasting modern integrated modules, ShawMan PMS ensures comprehensive coverage of all aspects of property management. Developed by ShawMan Technologies, a pioneering force in hospitality technology for over 25 years, this software is user-friendly, secure, reliable, and scalable, making it an indispensable tool for the HoReCa industry.",
    },
    {
      name: "Maestro PMS",
      description: "Powerful property management system",
      image: "/images/maestro.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "maestro",
      url: "/maestro",
      rating: 0.0,
      reviews: 0,
      details:
        "Maestro PMS is a leading hospitality Property Management System (PMS) software, offering a versatile, all-in-one solution for independent hospitality groups. With a focus on safeguarding investments, it provides a comprehensive Web browser or Windows platform that can be deployed in the cloud, on-premise, or in a private cloud. This innovative software supports the latest mobile, contact-free, and web responsive technologies, enhancing the digital guest and staff experience. Maestro stands out with its flexibility, scalability, and a unique option for businesses to seamlessly transition between deployment models without incurring additional licensing fees, backed by industry-leading 24/7 support services and a vast collection of open APIs for over 800 third-party integrations.",
    },
    {
      name: "AxisRooms Channel Manager",
      description: "Update Inventory and Pricing from same place",
      image: "/images/axisrooms.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "axisrooms",
      url: "/axisrooms-channel-manager",
      rating: 0.0,
      reviews: 0,
      details:
        "AxisRooms Channel Manager is a hospitality solution designed to boost online sales and revenue for hotels. With efficient online distribution and advanced channel management capabilities, it empowers hoteliers to maximize their reach and visibility. The service, backed by over 12 years of industry expertise, offers a comprehensive suite of products, including Hotel Revenue Management Service and a Booking Engine. Leveraging the power of the cloud, AxisRooms has become a trusted partner for over 5,000 hotels across 61 countries, providing a well-designed channel manager with excellent support to ensure unparalleled growth in the hospitality business.",
    },
    {
      name: "Cheerze Connect",
      description: "Hospitality Unlimited",
      image: "/images/cheerze.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "cheerze",
      url: "/cheerze-connect",
      rating: 0.0,
      reviews: 0,
      details:
        "Cheerze Connect is a cutting-edge, cloud-based Hotel Management System designed for diverse properties worldwide, with a proven track record spanning 20+ countries and 750+ establishments. This 360° smart solution enhances operational efficiency, boosts revenue, and streamlines customer interactions for mid-size hoteliers, resorts, and restaurants. Notable features include user-defined reporting, commission-free bookings, 24x7 support, and a unique pay-as-you-go model for occupied rooms. With a robust reputation and accolades, Cheerze Connect stands out for its customization, third-party integrations, and recognition by industry experts, making it a preferred choice for seamless hotel management.",
    },
    {
      name: "mycloud Hospitality",
      description: "Web Based property management system",
      image: "/images/mycloud.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "mycloud",
      url: "/mycloud-hospitality",
      rating: 0.0,
      reviews: 0,
      details:
        "mycloud Hospitality is an award-winning cloud-based hotel management software developed by Prologic First, a top hospitality software company. With over 15 years of industry expertise, mycloud automates hotel operations, offering features like contactless check-in, check-out, and dining. Boasting a zero upfront fee, the software ensures a rapid live-in of the property management system within 4 hours, accompanied by 24/7 guaranteed support. Trusted by 2000 hotels across 40+ countries, mycloud is a fully customizable and budget-friendly solution, integrating various modules for seamless hotel management.",
    },
    {
      name: "Restora POS",
      description: "Software by Restora POS",
      image: "/images/restora.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "restora",
      url: "/restora",
      rating: 0.0,
      reviews: 0,
      details:
        "Restora POS is a restaurant management software designed to elevate food service businesses to new heights. Offering a cloud-based POS system with responsive support, it seamlessly integrates with websites and apps, enhancing online visibility and brand image. With features like digitalized restaurant management, efficient billing, online food ordering, and cloud kitchen support, Restora POS ensures a smooth, user-friendly experience. From contactless payments to human resource management, it covers all facets of restaurant operations, providing a world-class solution tailored to various food service types.",
    },
    {
      name: "Xperts Hotel",
      description: "Installation based Hotel Management software",
      image: "/images/experts.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "experts",
      url: "/xperts-hotel",
      rating: 0.0,
      reviews: 0,
      details:
        "Xperts Hotel is a Hotel Management software designed and implemented by Experts IN Solutions. This world-class software offers modules for Reception/Front Desk, Housekeeping/Hospitality, Restaurant/Room Service, and Back Office/Inventory, seamlessly integrated to meet diverse hospitality needs. Tailored for hotels, restaurants, resorts, and serviced apartments, Xperts Hotel ensures efficient operations with features like room availability tracking, billing, inventory management, and role-based security. Its user-friendly interface and external device integration, coupled with services like software consulting and application maintenance, make Xperts Hotel a powerful solution for businesses in the competitive hospitality industry.",
    },
    {
      name: "Frontdesk Anywhere",
      description: "Software by Frontdesk Anywhere",
      image: "/images/frontdesk.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "frontdesk",
      url: "/frontdesk-anywhere",
      rating: 0.0,
      reviews: 0,
      details:
        "Frontdesk Anywhere is an award-winning, cloud-based Hotel Management Software that revolutionizes the hospitality industry. It offers a comprehensive suite of solutions, including a Property Management System (PMS), Channel Manager, Booking Engine, Revenue Management, and Payment Processing. This user-friendly platform allows hoteliers to effortlessly manage operations, customize profiles, implement powerful rate management, and engage with guests through personalized messages. With a mobile-friendly booking engine and connectivity to over 350 major distribution channels, Frontdesk Anywhere empowers hotels to reduce costs, streamline operations, and increase revenue, making it a trusted choice for hotels in over 35 countries.",
    },
    {
      name: "Roomsy",
      description: "Best software for hotel management",
      image: "/images/roomsy.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "roomsy",
      url: "/roomsy",
      rating: 0.0,
      reviews: 0,
      details:
        "Roomsy is a efficient Hotel Property Management System (PMS) designed for hotels, bed & breakfasts, and guesthouses across 43 countries. Boasting a clean booking calendar, room management, customizable invoices, and online booking engine, Roomsy simplifies operations with necessary features. Integrated with 250+ Online Travel Agencies (OTAs), it offers secure payment processing and robust reporting. Trusted by global customers, Roomsy provides a 14-day risk-free trial, requiring no credit card details, making it an ideal solution for small independent property owners seeking hassle-free hotel management.",
    },
    {
      name: "Cloudbeds",
      description: "Best cloud-based hotel management platform",
      image: "/images/cloudbeds.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "cloudbeds",
      url: "/cloudbeds",
      rating: 0.0,
      reviews: 0,
      details:
        "Cloudbeds is a leading Hospitality Management System, offering a unified platform that empowers property owners to efficiently manage and grow their lodging businesses. Trusted by thousands of independent properties worldwide, Cloudbeds provides a comprehensive solution, seamlessly integrating Property Management, Channel Management, and Booking Engine functionalities. The platform enhances operational efficiency, simplifies reservations and distribution, and elevates guest experiences. With a focus on flexibility, Cloudbeds offers an Integrations Marketplace and an Open API, allowing users to connect with specialized apps and customize solutions. Backed by a dedicated support team, Cloudbeds is the go-to partner for hospitality success, as recognized by industry ratings and customer reviews.",
    },
    {
      name: "Sirvoy Booking System",
      description: "Hospitality Management Made Easy",
      image: "/images/sirvoy.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "sirvoy",
      url: "/sirvoy-booking-system",
      rating: 0.0,
      reviews: 0,
      details:
        "Sirvoy Booking System is a user-friendly hospitality management solution, encompassing a Property Management System, Booking Engine, and Channel Manager. Ideal for hotels, motels, B&Bs, and more, it provides easy access to bookings anytime, anywhere without the need for installations or updates. With a cost-effective starting price of $10/month, Sirvoy's responsive booking engine enables commission-free direct bookings via your website, while the Channel Manager facilitates seamless integration with major online booking channels. Offering fixed monthly fees, Sirvoy serves thousands of properties globally, providing comprehensive tools for efficient reservation management.",
    },
    {
      name: "MMI HOT inn - Hotel Software",
      description: "MOST RELIABLE E-MANAGER",
      image: "/images/hotinn.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "hotinn",
      url: "/mmi-hot-inn",
      rating: 0.0,
      reviews: 0,
      details:
        "Hot Inn ERP by MMI Softwares Pvt. Ltd. is a comprehensive Hotel Management Software designed for the hospitality industry in India. This innovative solution automates and streamlines key hotel operations, including front office tasks, reservations, billing, housekeeping, and payments. With a user-friendly interface and cloud-based functionality, Hot Inn ERP enhances efficiency, increases revenue for both independent hotels and hotel groups, and provides a seamless guest experience from booking to feedback. The software's all-in-one features, integrated channel manager, and booking engine make it a vital tool for effective hotel management in the dynamic global economic landscape.",
    },
    {
      name: "Hipar",
      description: "Software by Seawind Solution Pvt. Ltd.",
      image: "/images/hipar.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "hipar",
      url: "/hipar",
      rating: 0.0,
      reviews: 0,
      details:
        "Hipar is a full-service hotel management software designed for seamless operations in the hospitality industry. With unparalleled expertise, Hipar offers a comprehensive suite of information management systems tailored for hotels, restaurants, clubs, and resorts. Accessible anytime, anywhere, the software ensures fast and reliable front desk operations, reservations, inventory management, and accounts. Hipar stands out for its user-friendly interface, 24/7 customer support, and global presence. Elevate your business with smarter, faster, and easier transactions, connecting with Hipar through email and phone for efficient hotel management.",
    },
    {
      name: "Microgenn",
      description: "Always one step ahead in serving the Hospitality",
      image: "/images/microgenn.jpg",
      imageWidth: 120,
      imageHeight: 10,
      altText: "microgenn",
      url: "/microgenn",
      rating: 0.0,
      reviews: 0,
      details:
        "Microgenn offers specialized Hotel Management Software, providing tailored solutions for the hospitality industry. With 11 years of experience and a portfolio of 19 products, Microgenn ensures reduced complexity, pocket-friendly solutions, and user-friendly interfaces. From front office and point of sale to bar management and housekeeping, their comprehensive IT services empower businesses with all-encompassing support, earning them 13 awards and the trust of 292 happy clients. Elevate your business success with Microgenn's excellent IT solutions for the hotel industry.",
    },
    {
      name: "Clock PMS",
      description: "Modern all-round cloud hotel management system",
      image: "/images/clock.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "clock",
      url: "/clock-pms",
      rating: 0.0,
      reviews: 0,
      details:
        "Clock PMS+ is a cloud-based property management system designed to revolutionize hotel operations and enhance guest experiences. Since 1996, it has been trusted by leading hotels and resorts globally. This ultimate hotel solution empowers staff with tools for seamless operations, offers delightful guest journeys from booking to check-out, ensures competitive payment options, and facilitates the growth of services through integrated add-ons. With excellent connectivity to various applications and a user-friendly platform, Clock PMS+ stands as a cutting-edge solution for hotels aiming to stay ahead in the dynamic hospitality industry.",
    },
    {
      name: "Aatithya",
      description: "Software by Dataman Computer Systems.",
      image: "/images/aatithya.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "aatithya",
      url: "/aatithya",
      rating: 0.0,
      reviews: 0,
      details:
        "Aatithya is a highly flexible Hotel Management Software offered by Dataman Computer Systems Pvt Ltd. This comprehensive solution automates operations for mid-sized to large hotels, resorts, motels, restaurants, and cafes. Aatithya covers front office and back office management, restaurant POS, banquet management, club management, night audit, procurement, housekeeping, and payroll. With features like a booking engine and mobile app, it maximizes ease in handling diverse hotel and hospitality functions, enhancing revenue, and improving operational efficiency. Exceptional customer support and industry recognition make Aatithya a standout choice in hotel management software.",
    },
    {
      name: "iHospitality",
      description: "IBS Hotel management, Bar Management, Club Management",
      image: "/images/ibs.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "ibs",
      url: "/ihospitality",
      rating: 0.0,
      reviews: 0,
      details:
        "iHospitality by IBS Software is a transformative sales and distribution platform for the hospitality industry. It seamlessly connects suppliers, distribution partners, and users, ensuring the right product reaches the right guest at the right price and timing. This intelligent suite of precision distribution and sales products maximizes sales, increases guest engagement, and simplifies operational complexity for hotels. With a focus on creating a frictionless guest shopping and booking experience, iHospitality propels hotels into the digital era, driving revenue opportunities and enhancing operational efficiency in the evolving landscape of hospitality.",
    },
    {
      name: "Romio Technologies",
      description: "Best for chain of restaurants and hotels",
      image: "/images/romio.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "romio",
      url: "/romio-technologies",
      rating: 0.0,
      reviews: 0,
      details:
        "Romio Technologies offers a software solution with over 11 years of expertise, specializing in ERP for the Hospitality and F&B industry. Their POS and Billing Solutions feature a range of machines and accessories, seamlessly integrating cash drawers, thermal printers, card readers, customer displays, and scanners. The Digital Display Solutions include elegant LED Standees and Menu Boards, providing a complete solution with multiple display features. Their Billing and ERP Software Solutions cater to various businesses, offering an easy-to-use application with integrations for food aggregators, messaging, and payments. With a diverse clientele, Romio Technologies ensures smart, effective, and automated technology to streamline business operations and enhance customer satisfaction.",
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
