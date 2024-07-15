import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Demo from '../common/demo';
import Pricemodal from '../common/price-modal';
import Needhelp from '../common/needHelp';

const List = ({ styles }) => {
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

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [showDemo, setShowDemo] = useState(false);

  const [showPrice, setShowPrice] = useState(false);

  const handleCloseDemo = () => setShowDemo(false);
  const handleShowDemo = () => setShowDemo(true);

  const handleClosePrice = () => setShowPrice(false);
  const handleShowPrice = () => setShowPrice(true);
  return (
    <>
      <section className={`${styles["list"]} mt-5 `}>
        <Container>
          <Row className="">
            <Col lg={12}>
              <h3>List of Best Softwares</h3>
            </Col>
            <Col lg={8}>
              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/oracle-cloud-infrastructure">
                      <Image
                        src="/images/oracle-cloud-infrastructure.png"
                        alt="oracle-cloud-infrastructure"
                        width="140"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracle-cloud-infrastructure">
                      {" "}
                      <h5>Oracle Cloud Infrastructure (OCI)</h5>
                      <p>A complete cloud infrastructure platform for migra</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracle-cloud-infrastructure">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Oracle Cloud Infrastructure (OCI) is a next-generation cloud
                  platform designed to efficiently run diverse applications with
                  enhanced speed and security at a reduced cost. Recognized as a
                  leader in strategic cloud platform services and distributed
                  hybrid infrastructure by Gartner®, OCI offers a comprehensive
                  suite of over 100 services globally. With features like
                  multicloud integration, consistent pricing, and dedicated
                  cloud options, OCI ensures flexibility and efficiency. Its
                  distributed cloud model allows deployment anywhere, including
                  data centers, offering complete infrastructure and platform
                  services to meet diverse workload needs, from databases and AI
                  to networking and security.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/oracledatabase">
                      <Image
                        src="/images/oracle-database.png"
                        alt="oracle-database"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracledatabase">
                      {" "}
                      <h5>Oracle Database</h5>
                      <p>Leading enterprise-grade relational database</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracledatabase">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Oracle Database is a, high-performance, and cost-optimized
                  database management system offering various services and
                  products, including Autonomous Database, Exadata, and MySQL
                  HeatWave. It supports multiple data models, such as
                  relational, NoSQL, and in-memory databases, catering to
                  diverse application needs. The Autonomous Database, available
                  on Oracle Cloud, simplifies management tasks through
                  automation, ensuring high performance, reliability, and
                  security. Oracle's solutions enable flexible deployment
                  options, including on-premises, public cloud, or private
                  cloud, allowing organizations to meet specific requirements
                  for data residency, latency, and scalability. The platform
                  also excels in data security, offering encryption, key
                  management, and advanced security features to guard against
                  data breaches.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/ready-4s">
                      <Image
                        src="/images/ready-4s.png"
                        alt="ready-4s"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/ready-4s">
                      {" "}
                      <h5>Ready4S</h5>
                      <p>Software by Ready4S</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/ready-4s">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Ready4S is a distinguished software development company with
                  over a decade of expertise, renowned for turning innovative
                  ideas into scalable, custom solutions. Boasting a 5-star
                  rating on Clutch and a roster of 85+ satisfied clients
                  including Uber, Roche, and Coca-Cola, the company specializes
                  in accelerating time-to-market, augmenting IT teams, and
                  optimizing processes. With a robust technology stack
                  encompassing Angular, React, Vue, Node.JS, PHP, Java, and
                  .Net(C#), Ready4S leverages a full-stack, self-managed team
                  approach to deliver enterprise-grade solutions. Their
                  client-centric approach involves 1150+ consultations annually,
                  fostering innovation, agile development, and the modernization
                  of legacy technologies. Positioned in Kraków, Poland, Ready4S
                  is committed to confidentiality, as evidenced by their NDA
                  guarantee, ensuring the development of tailored, high-quality
                  software that propels businesses to the next level.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/alpha-software">
                      <Image
                        src="/images/alpha-software.png"
                        alt="alpha-software"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/alpha-software">
                      {" "}
                      <h5>Alpha Software</h5>
                      <p>Rapid low-code development without limits.</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/alpha-software">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Alpha Software provides a unified mobile and web app
                  development and deployment platform with distinct "no-code"
                  and "low-code" components. With Alpha TransForm's no-code
                  solution, both business users and developers can easily turn
                  any form into a mobile app in minutes, leveraging the full
                  capabilities of smartphones. For more complex applications,
                  Alpha Anywhere, the low-code environment, allows IT developers
                  to build web and mobile business apps from scratch, integrate
                  data with existing systems, and enhance security measures.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/appy-pie">
                      <Image
                        src="/images/appy-pie.png"
                        alt="appy-pie"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/appy-pie">
                      {" "}
                      <h5>Appy Pie </h5>
                      <p>Software by Appy Pie</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/appy-pie">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Appy Pie is a no-code development platform that enables
                  individuals and businesses to effortlessly create
                  fully-functional apps and websites without the need for
                  traditional coding expertise. With its drag-and-drop
                  functionality, Appy Pie's no-code platform simplifies data
                  integration, offering seamless connections with various data
                  sources and applications. It stands out by being
                  cost-effective, at least 1/10th of industry standards, and
                  expedites product launch ten times faster than competitors.
                  Additionally, Appy Pie extends its innovative features to
                  AI-powered design tools and workflow automation, providing a
                  comprehensive solution for efficient and affordable app and
                  website development.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/hedgehog-lab">
                      <Image
                        src="/images/hedgehog-lab.png"
                        alt="hedgehog-lab"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/hedgehog-lab">
                      {" "}
                      <h5>hedgehog lab</h5>
                      <p>Software by hedgehog lab</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/hedgehog-lab">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  hedgehog lab is a tech solution that blends consultancy,
                  design, and development to tackle complex business challenges.
                  Specializing in mobile and web apps, AI, data engineering, and
                  digital transformation, this human-centered global tech
                  consultancy partners with industry leaders to create impactful
                  solutions. With a focus on diverse sectors like financial
                  services, healthcare, and retail, they offer a range of
                  services, including UX research, product strategy, and
                  enterprise software development. Their dedication to human
                  progress through technology is evident in their innovative
                  projects, making them a go-to choice for those seeking
                  transformative and socially impactful digital solutions.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/intellij-idea">
                      <Image
                        src="/images/intellij-idea.png"
                        alt="intellij-idea"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/intellij-idea">
                      {" "}
                      <h5>IntelliJ IDEA</h5>
                      <p>The Leading Java and Kotlin IDE</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/intellij-idea">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  IntelliJ IDEA is a leading integrated development environment
                  (IDE) designed by JetBrains for Java and Kotlin developers.
                  Offering the most advanced code editor, it facilitates
                  high-quality coding with real-time error detection and
                  improvement suggestions. With deep code understanding, it
                  provides swift navigation and intelligent assistance. The
                  Ultimate edition extends features to cover web development,
                  profiling, Spring, Jakarta EE, database tools, cloud
                  deployment, and remote development. Notably, the introduction
                  of JetBrains AI Assistant enhances productivity by offering
                  context-aware chat, code generation, and error explanations.
                  Trusted by 78% of Java developers, IntelliJ IDEA ensures an
                  unbeatable toolset and a seamless development experience.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/appsheet">
                      <Image
                        src="/images/appsheet.png"
                        alt="appsheet"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/appsheet">
                      {" "}
                      <h5>AppSheet</h5>
                      <p>Software by AppSheet</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/appsheet">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  AppSheet is a application development platform offered by
                  Google that empowers users to build robust mobile and desktop
                  apps tailored to their business requirements without the need
                  for coding. With features like form-based data capture,
                  automation through workflow logic and bots, and seamless
                  integration with Google Workspace and third-party apps,
                  AppSheet streamlines work processes efficiently. The platform
                  facilitates the creation of custom applications for diverse
                  purposes, such as vehicle inspection, workflow automation, and
                  data management. It has garnered praise from various
                  organizations, including Singapore Press Holdings, Pantechs
                  Laboratories, Carrefour Property, Globe Telecom, and
                  Metropolitan Thames Valley Housing, showcasing its
                  adaptability and impact. Over 4.5 million apps have already
                  been created with AppSheet, underlining its widespread
                  adoption and effectiveness in accelerating app development.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/mag+">
                      <Image
                        src="/images/mag+.png"
                        alt="mag+"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/mag+">
                      {" "}
                      <h5>Mag+</h5>
                      <p>Software by mag+</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/mag+ ">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Mag+ is a digital magazine publishing software and online
                  platform that empowers businesses to effortlessly create,
                  manage, and publish interactive content across various
                  channels. With a user-friendly drag-and-drop editor, it
                  enables swift and unique content creation, enhancing brand
                  identity and catering to diverse enterprise needs. Mag+'s
                  advanced content management system centralizes content
                  control, fostering efficient teamwork and collaboration. The
                  software excels in performance tracking, providing insightful
                  analytics for downloads, page views, and more, facilitating
                  informed decision-making. Trusted by renowned brands globally,
                  Mag+ offers flexible solutions for marketing, sales
                  enablement, product catalogs, corporate communications, and
                  magazines, boosting productivity through streamlined
                  workflows.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/mobincube">
                      <Image
                        src="/images/mobincube.png"
                        alt="mobincube"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/mobincube">
                      {" "}
                      <h5>Mobincube</h5>
                      <p>Software by Mobincube</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/mobincube">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Mobincube is a no-code mobile app development platform that
                  empowers individuals to create their own applications
                  effortlessly. With over $2 million earned by users and more
                  than 171 million published applications, Mobincube allows you
                  to build native applications without any coding skills. The
                  platform offers a seamless four-step process: sign up, create,
                  build, and publish. Users can monetize their apps and join the
                  success stories of individuals earning significant income,
                  making it an ideal choice for those seeking a simple yet
                  powerful app development solution.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                  </div>
                </div>
              </div>

              {isShowMore && (
                <>
                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/outsystem">
                          <Image
                            src="/images/outsystem.png"
                            alt="outsystem"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/outsystem">
                          {" "}
                          <h5>OutSystems</h5>
                          <p>Software by OutSystems</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/outsystem">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      OutSystems is a leading low-code platform that
                      revolutionizes software development by seamlessly
                      integrating design, coding, and deployment. As the #1
                      Low-Code Platform®, it empowers users to create
                      high-performance applications and portals swiftly,
                      catering to diverse needs such as customer engagement,
                      workforce innovation, and core business systems. With
                      recognition from industry analysts like Gartner and
                      Forrester, OutSystems stands out for its cloud-native
                      architecture, full-stack development capabilities, and
                      low-code integration, enabling teams to deliver
                      top-quality applications at an accelerated pace with the
                      added benefits of artificial intelligence.
                    </p>

                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/brainvire-infotech">
                          <Image
                            src="/images/brainvire-infotech.png"
                            alt="brainvire-infotech"
                            width="110"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/brainvire-infotech">
                          {" "}
                          <h5>Brainvire Infotech</h5>
                          <p>Software by Brainvire Infotech Inc</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/brainvire-infotech">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Brainvire Infotech offers a comprehensive suite of digital
                      solutions to transform businesses through innovative
                      technologies. As a globally acclaimed company, they
                      specialize in eCommerce services, mobile app development,
                      enterprise solutions, Microsoft partnership services,
                      cloud management, and data-driven digital marketing
                      strategies. With a portfolio featuring collaborations with
                      over 200 renowned brands, Brainvire emphasizes delivering
                      exceptional customer experiences. Their success stories
                      include aiding Dr. Reddy's Laboratories in achieving a
                      360-degree platform transformation. Recognized as Company
                      of the Year, Brainvire's expertise spans diverse
                      industries, including retail, real estate, education,
                      finance, healthcare, automotive, media, entertainment, and
                      more.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/mobiscroll">
                          <Image
                            src="/images/mobiscroll.png"
                            alt="mobiscroll"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/mobiscroll">
                          {" "}
                          <h5>Mobiscroll</h5>
                          <p>Software by Acid Media LLC</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/agolytics">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Mobiscroll is a UI components suite designed for
                      effortless calendaring and scheduling experiences.
                      Offering responsive tools with easy setup, it stands out
                      from the drawbacks of DIY approaches, open-source plugins,
                      and complex commercial libraries. With features like
                      date/time pickers, booking calendars, event calendars,
                      pickers/dropdowns, and form components, Mobiscroll
                      streamlines development for various frameworks like
                      jQuery, Angular, React, and Vue. Its user-friendly design,
                      backed by strong technical support, sets it apart as a
                      polished, mobile-friendly solution trusted by over 7,700
                      companies for efficient UI development.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/unity">
                          <Image
                            src="/images/unity.png"
                            alt="unity"
                            width="110"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/unity">
                          {" "}
                          <h5>Unity</h5>
                          <p> Software by Unity Technologies</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/unity">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Unity, Empowering over 20 platforms and boasting 3.6
                      billion monthly downloads, Unity is the go-to choice for
                      82% of the top 100 games. Dive into a world of creativity
                      with end-to-end tools, AI integration, and success stories
                      that showcase Unity's global impact. Join a dynamic
                      community, access deep resources, and explore subscription
                      plans tailored for personal, pro, and enterprise needs.
                      Elevate your vision and bring it to life with Unity –
                      where innovation meets boundless potential."
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/appikr-labs">
                          <Image
                            src="/images/appikr-labs.jpg"
                            alt="appikr-labs"
                            width="110"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/appikr-labs">
                          {" "}
                          <h5>Appikr Labs </h5>
                          <p>
                            Appikr is your one-stop destination for all the An
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/appikr-labs">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Appikr Labs is a leading mobile app development company
                      with over 10 years of industry experience, specializing in
                      creating Fortune 500-level apps. With a global presence in
                      UAE, USA, and UK, Appikr Labs offers comprehensive
                      solutions for startups, SMEs, and enterprises across
                      various industries. Boasting a portfolio of 350+ delivered
                      apps and a 90% retention rate, they provide end-to-end
                      services, from ideation and design to development and
                      post-launch support. Their innovative approach, skilled
                      team of 175+ developers, and a range of benefits,
                      including a 100% money-back guarantee, make them the #1
                      choice for mobile app development.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/mysalesdialerpro">
                          <Image
                            src="/images/mysalesdialerpro.jpg"
                            alt="mysalesdialerpro"
                            width="110"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/mysalesdialerpro">
                          {" "}
                          <h5>MySalesDialerPro</h5>
                          <p>
                            MySalesDialerPro is enterprise CRM based solution.
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/mysalesdialerpro">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      MySalesDialerPro is a dynamic Inside Sales mobile and
                      cloud solution for businesses worldwide. It empowers sales
                      reps by offering a robust auto-dialer, real-time
                      geo-tracking, and a versatile mobile and web CRM for
                      conducting sales from anywhere. With features like task
                      management, Salesforce integration, and team collaboration
                      tools, it enhances productivity and supports multiple
                      communication channels. Priced at $29.99 per month/user,
                      it caters to individual sales agents and managers,
                      ensuring easy lead distribution and efficient sales
                      campaigns. The cloud-based solution, praised for its
                      effectiveness, is compatible with Android and iOS
                      platforms, making it a comprehensive tool for transforming
                      inside sales across various industries.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/dronahq">
                          <Image
                            src="/images/dronahq.jpg"
                            alt="dronahq"
                            width="110"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/dronahq">
                          {" "}
                          <h5>DronaHQ</h5>
                          <p>Low Code App Development Platform</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/dronahq">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      DronaHQ is a powerful low-code platform enabling
                      engineering and business operations teams to swiftly build
                      custom applications and internal tools. With a
                      user-friendly drag-and-drop interface, it facilitates the
                      creation of pixel-perfect GUIs, admin panels, and
                      embeddable features, cutting down development time from
                      weeks to days. The platform offers seamless integrations
                      with diverse data sources, including databases, APIs, and
                      third-party apps. Developers appreciate its extensibility,
                      allowing them to use JavaScript for data manipulation,
                      import libraries, and debug with precision. DronaHQ
                      ensures secure deployment, compliance, and version
                      management, making it an ideal choice for organizations
                      ranging from startups to Fortune 500 companies.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/workflowgen">
                          <Image
                            src="/images/workflowgen.png"
                            alt="workflowgen"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/workflowgen">
                          {" "}
                          <h5>WorkflowGen</h5>
                          <p>
                            Grow your digital business with process automation
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/workflowgen">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      WorkflowGen is a digital process automation platform
                      designed to streamline and optimize business workflows in
                      a low-code environment. Trusted by global corporations
                      such as 3M, ABB, and Sony, it enables the creation of
                      adaptive workflows with fast prototyping and low-code
                      approaches, ensuring quick delivery of customized
                      solutions. With advanced features like GraphQL API,
                      webhooks, and Node.js integrations, it facilitates highly
                      integrated processes, supporting mobile apps, web
                      applications, and microservices. Cloud-optimized for
                      Azure, WorkflowGen seamlessly connects to Office 365 and G
                      Suite, offering a competitive process automation component
                      to enhance software offerings and boost team efficiency.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                        <Button
                      size="sm"
                      variant="warning"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
<Pricemodal show={showPrice} handleClose={handleClosePrice}/>
              <Demo show={showDemo} handleClose={handleCloseDemo}/>
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
