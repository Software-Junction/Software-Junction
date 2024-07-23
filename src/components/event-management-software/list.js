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
      name: "Whova",
      description: "All In One Event Management Apps For Event Planners",
      image: "/images/whova.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "whova",
      url: "/whova",
      rating: 0.0,
      reviews: 0,
      details:
        "Whova is an all-in-one Event Management Software designed for in-person, hybrid, and virtual events. It offers features such as affordable event registration, time-saving event management, and powerful event marketing. Trusted by distinguished innovators in corporate, academic, government, and association events, Whova ensures an enhanced attendee experience with its signature event app, providing real-time information, personalized agendas, live polls, and interactive features. The software streamlines event logistics, saving organizers time with tasks like agenda management, speaker coordination, and check-in. Whova also focuses on delivering high ROI for sponsors and exhibitors through various promotional opportunities and lead generation tools.",
    },
    {
      name: "EventPro",
      description: "All In One Event Registration Software",
      image: "/images/eventpro.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "eventpro",
      url: "/eventpro",
      rating: 0.0,
      reviews: 0,
      details:
        "EventPro is a versatile event management software designed to meet the diverse needs of professionals in various industries. Seamlessly integrating modules for venue booking, event planning, catering management, and more, EventPro offers a customizable solution to create an all-in-one system tailored to individual organizational requirements. With powerful features such as booking wizards, shared calendars, catering and beverage management, staffing, CRM, and online booking capabilities, EventPro streamlines the entire event lifecycle, from initial planning to post-event analysis. Whether deployed on-premises or in the cloud, EventPro provides a flexible solution for optimizing venue use, enhancing services, and adding value to events, ultimately saving time and boosting productivity.",
    },
    {
      name: "Planning Pod",
      description: "One Of The Best Event Planning Software",
      image: "/images/planningpod.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "planningpod",
      url: "/planningpod",
      rating: 0.0,
      reviews: 0,
      details:
        "Planning Pod is a event management software that streamlines processes and communications for event planners and venues. With over 20,000 events managed, it offers three powerful solutions in one platform: Venue Management Software for simplified event bookings, Event Planning Software for real-time tracking of event details, and Floor Plan Software for creating professional event layouts. The platform integrates over 180,000 events and provides 20+ easy-to-use tools that work together, helping users track details, save time, collaborate effectively, and work seamlessly in a virtual environment. Trusted by 20,000+ event professionals, Planning Pod is a go-to solution for event management, offering tools for CRM, lead management, email communications, floor plan creation, registrations, and more.",
    },
    {
      name: "Weve",
      description: "Weve changed the way you meet.",
      image: "/images/weve.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "weve",
      url: "/weve",
      rating: 0.0,
      reviews: 0,
      details:
        "Weve is a virtual event platform designed to elevate your company gatherings and team interactions. Partnered with The Go Game, Weve offers virtual, in-person, and hybrid experiences that cater to various budgets and team sizes. With the flexibility to customize events on short notice, Weve ensures seamless transitions from virtual to in-person or a combination of both. The platform hosts a range of engaging experiences, from team-building games like Murder on the Mystery Express and Original Game Show to interactive sessions like How to Talk to a Human with Radiolab founder, Jad Abumrad. Trusted by renowned companies like Adobe, Disney, Nike, and more, Weve is revolutionizing the way people connect, learn, and play in the virtual and hybrid event space.",
    },
    {
      name: "Ticket Tailor",
      description: "Software by Ticket Tailor",
      image: "/images/ticket.png",
      imageWidth: 120,
      imageHeight: 10,
      altText: "ticket",
      url: "/ticket-tailor",
      rating: 0.0,
      reviews: 0,
      details:
        "Ticket Tailor is a feature-rich event ticketing platform trusted by over 80,000 event creators worldwide. With unbeatable value and flexible pricing, it offers a straightforward, contract-free service, saving 73% compared to its lead competitor. The platform goes beyond ticketing, allowing events to have a positive impact on the planet, being a carbon-neutral B Corp. Founded by Jonny White, Ticket Tailor has successfully sold over 23 million tickets, offering a secure and reliable platform with 99.99% uptime, world-leading payments compliance, and a commitment to data security.",
    },
    {
      name: "Dryfta",
      description:
        "Dryfta is a Beautifully Event Booking Software with 30 Days Free Trial",
      image: "/images/dryfta.png",
      imageWidth: 110,
      imageHeight: 10,
      altText: "dryfta",
      url: "/dryfta",
      rating: 0.0,
      reviews: 0,
      details:
        "Dryfta is an enterprise-grade Event Operating System designed for universities, associations, nonprofits, enterprises, and governments. Serving as an all-in-one event platform, Dryfta simplifies the management of diverse event aspects, including ticket sales, abstract submissions, engagement, scheduling, and more. Trusted by universities and nonprofits across 20+ countries, Dryfta's unified dashboard enables organizers to seamlessly handle submissions and peer reviews, sell tickets online, manage event contacts, build schedules, and boost event visibility through integrated features such as EventBoost. With a focus on user-friendly interfaces, automation, and flexibility, Dryfta replaces the need for multiple tools, providing a holistic solution for efficient event planning and execution.",
    },
    {
      name: "ACTIVE Net",
      description: "Best Event Tracking Software",
      image: "/images/activenet.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "activenet",
      url: "/activenet",
      rating: 0.0,
      reviews: 0,
      details:
        "ACTIVE Net is a recreation management software designed to streamline the operations of parks, recreation departments, and similar organizations. It offers a unified solution for managing classes, facilities, memberships, camps, and more, eliminating the need for multiple systems. The software facilitates online registration, membership management, facility scheduling, and other essential functions. With features like point of sale, child care management, league management, and robust reporting capabilities, ACTIVE Net aims to enhance efficiency, customer experience, and overall organizational productivity. It caters to various sectors, including non-profits, parks and recreation, YMCA's, campus recreation, and government entities, providing a user-friendly platform accessible via computers and mobile devices.",
    },
    {
      name: "Arlo",
      description: "Best Event Registration software for SMBs",
      image: "/images/arlo.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "arlo",
      url: "/arlo",
      rating: 0.0,
      reviews: 0,
      details:
        "Arlo is a event management system designed for efficiently organizing recurring events, workshops, and seminars. With user-friendly features, it allows seamless scheduling, venue and presenter management, and customizable registration forms. The software streamlines administrative tasks through task sets, ensuring organized course management. Arlo provides a centralized platform for handling all aspects of events, including sessions, catering preferences, feedback surveys, name labels, certificates, and financial transactions. Tailored for diverse training providers, it enhances operational efficiency by offering tools for registration, course management, and reporting, making it a versatile solution for businesses across various industries.",
    },
    {
      name: "EventOrg",
      description: "Software by Cabot Technology Solutions Pvt Limited",
      image: "/images/eventorg.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "eventorg",
      url: "/eventorg",
      rating: 0.0,
      reviews: 0,
      details:
        "EventOrg is a event management software that streamlines the organizing process for any event, offering a user-friendly platform without requiring development efforts. Its enchanting features include promotional tools, paperless operations for eco-conscious organizers, and a multi-event app for customized branding. The platform accommodates various event types, equipped with flexible modules, an easy-to-use CMS, and features delighting attendees, such as an extensive agenda, virtual conference capabilities, live Q&A sessions, digital badges, and interactive engagement tools. EventOrg ensures efficient event management with its comprehensive suite of features, making planning and execution seamless for organizers worldwide.",
    },
    {
      name: "Airmeet",
      description: "Software by Airmeet",
      image: "/images/airmeet.jpg",
      imageWidth: 100,
      imageHeight: 10,
      altText: "airmeet",
      url: "/airmeet",
      rating: 0.0,
      reviews: 0,
      details:
        "Airmeet is a platform designed to host branded events and webinars, offering a seamless solution for producing captivating content. Users can leverage analytics tools to create, influence, and convert their sales pipeline effectively. With a focus on deep engagement, the software empowers businesses to grow better by providing a user-friendly interface for hosting events, managing content, and optimizing marketing strategies. Boasting a 4.6 rating based on 640+ reviews, the platform ensures a top-notch experience for users seeking to enhance their online presence and customer interactions.",
    },
    {
      name: "TicketsCandy",
      description: "Software by TicketsCandy",
      image: "/images/ticketscandy.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "ticketscandy",
      url: "/ticketscandy",
      rating: 0.0,
      reviews: 0,
      details:
        "TicketsCandy is a event ticketing and booking solution designed to boost ticket sales and revenue by up to 30%. With a stellar platform, intuitive dashboard, and game-changing marketing tools, it transforms events into sensations, offering an affordable ticketing solution that ensures every seat is filled. Whether through seamless online sales, integrated widgets, or captivating event pages, TicketsCandy maximizes reach through partnerships with social networks, newsletters, and paid advertising. As a strategic growth partner, it provides dedicated 7-day support, ensuring a smooth journey from event creation to success.",
    },
    {
      name: "Fantastical",
      description: "Software by Flexibits Inc",
      image: "/images/fantastical.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "fantastical",
      url: "/fantastical",
      rating: 0.0,
      reviews: 0,
      details:
        "Fantastical by Flexibits is a cross-platform calendar application that seamlessly integrates across Mac, iPad, iPhone, and Apple Watch. With its beautiful UI, powerful views, and time-saving features like event and task templates, Fantastical streamlines organization and productivity. The app prioritizes user privacy, keeping sensitive data on the device. It offers unique features such as conference call detection, time zone support, and widgets for quick access to upcoming events, tasks, and weather. Fantastical supports various calendar services and languages, making it a versatile and user-friendly scheduling solution for individuals and families.",
    },
    {
      name: "Eventleaf",
      description: "Online event management",
      image: "/images/eventleaf.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "eventleaf",
      url: "/eventleaf",
      rating: 0.0,
      reviews: 0,
      details:
        "Eventleaf is a online event management platform designed for simplicity, modernity, and affordability. Offering support for in-person, hybrid, and virtual events, it provides features such as online event registration and mobile event apps. Users can effortlessly create and promote events with unmatched design flexibility, streamline registration processes, and sell tickets online securely. The software facilitates efficient check-in procedures with badge printing options and supports engaging event experiences through polls, Q&A sessions, and surveys. Eventleaf is praised for its user-friendly interface and excellent customer service, making it an ideal choice for organizing conferences, workshops, meetings, and trade shows.",
    },
    {
      name: "EventAvenue",
      description: "Software by Event avenue",
      image: "/images/eventavenue.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "eventavenue",
      url: "/eventavenue",
      rating: 0.0,
      reviews: 0,
      details:
        "EventAvenue is a leading online registration and payment gateway software in India, catering to diverse organizations such as event organizers, corporations, schools, and non-profits. It offers a 24/7 solution for seamless online event management, including real-time registrations, secure payment processing, customizable tools, and interactive floor plan management. With a focus on accessibility, it allows global audience reach, easy data mining, and ensures the highest standards of security. EventAvenue supports a range of applications, from conferences and trade shows to class admissions, donation collections, and more, providing comprehensive control and insights for effective online registration and payment handling.",
    },
    {
      name: "EventsAir",
      description: "Software by Centium Software",
      image: "/images/eventsair.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "eventsair",
      url: "/eventsair",
      rating: 0.0,
      reviews: 0,
      details:
        "EventsAir is a centralized event management platform, empowering over 350,000 events globally. With a 30-year history, it has successfully supported major events like the London Olympics and G20 Summit. This all-in-one solution seamlessly handles virtual, in-person, and hybrid events, offering unlimited registrations and transparent flat-rate monthly pricing. From attracting exhibitors and managing sponsors to creating engaging experiences with features like interactive tools, social networking, and attendee apps, EventsAir ensures seamless event execution. With robust pre-event, during-event, and post-event capabilities, it caters to diverse needs, making it a preferred choice for conferences, meetings, and world events.",
    },
    {
      name: "Picatic E-Ticket",
      description: "Sell Event Tickets Online - Free Event Ticketing",
      image: "/images/picatic.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "picatic",
      url: "/picatic",
      rating: 0.0,
      reviews: 0,
      details:
        "Picatic E-Ticket, Inc. is an online event ticketing platform established in 2012. Specializing in marketing and advertising, the company offers eMarketing/Digital Marketing solutions with a focus on AdTech and E-commerce verticals. With notable investors such as BDC Capital, Highline VC, and Sequoia Capital, Picatic has successfully raised undisclosed amounts through completed seed deals dating back to 2012. The platform facilitates ticket sales, event promotion, and event space management, catering to a diverse range of clients in the dynamic realm of online events.",
    },
    {
      name: "NetXMS",
      description: "Software by RADEN SOLUTIONS",
      image: "/images/netxms.jpg",
      imageWidth: 150,
      imageHeight: 10,
      altText: "netxms",
      url: "/netxms",
      rating: 0.0,
      reviews: 0,
      details:
        "NetXMS is a network monitoring solution, exemplified by its latest version, NetXMS 4.5.1 (released on Jan 30, 2024). With a focus on proactive monitoring for hybrid systems, this enterprise-grade software offers elaborate zoning, proxy functionality, and versatile data processing options. NetXMS enables users to discover and manage diverse devices across their network, providing comprehensive observability through topological maps and connectivity views. Renowned for its modularity, extensive features, and scalability, NetXMS has garnered praise from users for its effectiveness in behavior-based issue sorting and seamless network management, making it an all-encompassing tool for organizations seeking robust, customizable, and secure network monitoring.",
    },
    {
      name: "Underboeck",
      description: "Software by Momentus Technologies",
      image: "/images/ungerboeck.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "ungerboeck",
      url: "/ungerboeck",
      rating: 0.0,
      reviews: 0,
      details:
        "Momentus Technologies offers Venue and Event Management Software designed to streamline operations for diverse sectors, including convention centers, higher education, corporate spaces, stadiums, arenas, and arts and culture organizations. This end-to-end platform unifies data and resources, providing a powerful suite of solutions such as CRM, booking, event management, accounting, reporting, and API integration. With a cloud-based, accessible-anywhere approach, Momentus empowers teams to enhance efficiency, unlock insights from quality analytics, and create extraordinary event experiences. Trusted by over 60,000 users globally, Momentus is dedicated to connecting people and technologies to manage the world's greatest spaces and deliver exceptional moments.",
    },
    {
      name: "Event Temple",
      description: "The Industry's Leading Venue Management System",
      image: "/images/eventtemple.png",
      imageWidth: 150,
      imageHeight: 10,
      altText: "eventtemple",
      url: "/eventtemple",
      rating: 0.0,
      reviews: 0,
      details:
        "Event Temple is a cloud-based hotel and venue management software designed to enhance efficiency and revenue generation. Voted #1 globally for Best Event Management and Best Group Sales in 2021, 2022, and 2023, it offers a comprehensive growth platform for hotels and venues. With features like digital proposals, quick response to inquiries, and powerful reporting, Event Temple streamlines sales processes, saves time on operations, and provides a user-friendly experience trusted by thousands of users in 40 countries. The software's success is highlighted by testimonials praising its automation, time-saving capabilities, and contribution to business growth.",
    },
    {
      name: "Tix",
      description: "Software by Tix, Inc",
      image: "/images/tix.png",
      imageWidth: 100,
      imageHeight: 10,
      altText: "tix",
      url: "/tix",
      rating: 0.0,
      reviews: 0,
      details:
        "Tix is a state-of-the-art ticketing system designed for diverse organizations such as universities, venues, promoters, and more. Offering a complete ticketing solution, Tix features integrated access controls, event management, and a robust reporting suite. With a user-friendly interface, Tix supports various sales channels, including online, mobile, and box office, allowing seamless ticket transactions. The system also includes CRM tools for enhanced customer relationships, email marketing capabilities, and secure payment processing with PCI Level 1 certification. Tix's transparent pricing structure, with no hidden fees and low service charges, makes it a risk-free choice for efficient and successful event ticketing.",
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
