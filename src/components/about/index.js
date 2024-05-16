import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Badge,
  Accordion,
  Card,
} from "react-bootstrap";

const Index = () => {
  return (
    <>
      <section className={styles["about-head"]}>
        <div>
          <Container fluid>
            <Row>
              <Col lg={12} className={styles["img-pad"]}>
                <Image
                  src="/images/aboutus.png"
                  alt="aboutus"
                  height="10"
                  width="1518"
                  className={styles["banner-img"]}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="my-5">
        <Container>
          <Row className="text-center">
            <Col lg={4}>
              <h3 className="fw-bold">$2B+</h3>
              <p>
                in global service
                <br /> projects annually
              </p>
            </Col>

            <Col
              lg={4}
              className={`${styles["border-mob"]} border-3 border-start border-end`}
            >
              <h3 className="fw-bold">15M+</h3>
              <p>
                active users
                <br /> annually
              </p>
            </Col>

            <Col lg={4}>
              <h3 className="fw-bold">
                Every
                <br /> 2 Seconds
              </h3>
              <p>
                buyers find a service provider
                <br /> on software bazaar
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["about"]} my-5`}>
        <Container>
          <Row>
            <Col lg={6} className="my-3">
              <Image
                src="/images/about1.png"
                alt="about1"
                height="500"
                width="500"
                className={styles["img-mob"]}
              />
            </Col>

            <Col lg={6} className="my-3">
              <h5 className="fw-bold">What is Software Bazaar ?</h5>
              <p className="text-secondary">
                Software Bazaar is an online marketplace for IT Solutions. We
                are a pioneer in this field, as we are taking IT solutions to
                SMBs & MSMEs in tier II & tier III cities and enabling
                digitization of day-to-day processes.
                <br />
                <br /> At the same time, we are facilitating corporate
                enterprises and public sector organizations in upgrading their
                IT environment to deal with current infrastructural hiccups.
                <br />
                <br /> Our Director Duo, Akash Nangia & Arjun Mittal started
                this venture with the vision of helping businesses use the best
                automation technologies to enhance their project management
                capabilities.
                <br />
                <br /> With our expertise in delivering IT solutions and
                licensing services, we are letting businesses deal with process
                challenges efficiently. With the listing of new OEMs on our
                e-commerce platform every day, the portfolio of IT solutions is
                getting vast and diversified.
              </p>
            </Col>

            <Col lg={6} className="my-3">
              <h5 className="fw-bold">Why Software Bazaar is Free ?</h5>
              <p className="text-secondary">
                Techjockey.com is the perfect choice for businesses looking to
                simplify their IT buying process. As a discovery platform, we
                offer a vast range of IT solutions for visitors to explore and
                compare, enabling them to make informed purchasing decisions.
                Our business model is centered around creating a comprehensive
                marketplace with a diverse range of technology solutions.
                <br />
                <br /> OEMs can take advantage of our free listing service to
                gain greater visibility and manage their sales. By facilitating
                the transition from manual processes to data-driven digital
                solutions, we are playing a key role in supporting businesses'
                digital transformation journeys. At Techjockey.com, we are
                committed to simplifying IT buying and driving success for our
                customers.
              </p>
            </Col>

            <Col lg={6} className="my-3">
              <Image
                src="/images/about2.png"
                alt="about2"
                height="500"
                width="500"
                className={styles["img-mob"]}
              />
            </Col>

            <Col lg={6} className="my-3">
              <Image
                src="/images/founder.png"
                alt="founder"
                height="500"
                width="500"
                className={styles["img-mob"]}
              />
            </Col>

            <Col lg={6} className="my-3">
              <h5 className="fw-bold">Our Founder</h5>
              <p>
                When he stepped into the corporate world as the director of
                Salud Care Pvt. Ltd. after completing his Masters from NMIMS &
                Bachelors from Symbiosis Pune, little did he know that he would
                find his calling somewhere else.
                <br />
                <br /> What started with the post of the Director of one of the
                Top 150 Pharma Companies of India ended up as the Co-Founder of
                SoftwareSuggest.com. Ankit decided to explore his interest in
                the digital world and now finds immense satisfaction in helping
                his customers find the right software solution for their
                business. Customer service is his sole objective and dedication
                is his mantra of success.
                <br />
                <br /> Having tasted the diverse life of various cities of India
                including Pune, Mumbai, Kolkata, Delhi, Chennai, Patna and
                currently Ahmedabad, nothing excites Ankit more than exploring a
                new city and meeting new people. Always open to fresh ideas and
                ever ready to explore newer horizons, Ankit now diligently
                manages his roles at Software Bazaar
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["workculture"]}>
        <Container className="mt-5">
          <Row>
            <Col lg={12}>
              <h3 className="fw-bold mb-5">Work Culture</h3>
            </Col>
            <Col lg={12}>
              <iframe
                class="about_iframe lazyloaded"
                src="https://www.youtube.com/embed/Fli_HqcC0a0"
                frameborder="0"
                marginwidth="0"
                marginheight="0"
                height="700"
                scrolling="no"
                llowfullscreen=""
                title="work culture"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["team"]} my-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="fw-bold mb-4">Our Team</h3>
            </Col>
            <Col lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team1.jpg" />
                <Card.Body>
                  <Card.Text className="fw-bold text-secondary text-center">
                    Employees of Sotware Bazaar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team1.jpg" />
                <Card.Body>
                  <Card.Text className="fw-bold text-secondary text-center">
                    Employees of Sotware Bazaar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team1.jpg" />
                <Card.Body>
                  <Card.Text className="fw-bold text-secondary text-center">
                    Employees of Sotware Bazaar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team1.jpg" />
                <Card.Body>
                  <Card.Text className="fw-bold text-secondary text-center">
                    Employees of Sotware Bazaar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team1.jpg" />
                <Card.Body>
                  <Card.Text className="fw-bold text-secondary text-center">
                    Employees of Sotware Bazaar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team1.jpg" />
                <Card.Body>
                  <Card.Text className="fw-bold text-secondary text-center">
                    Employees of Sotware Bazaar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team1.jpg" />
                <Card.Body>
                  <Card.Text className="fw-bold text-secondary text-center">
                    Employees of Sotware Bazaar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team1.jpg" />
                <Card.Body>
                  <Card.Text className="fw-bold text-secondary text-center">
                    Employees of Sotware Bazaar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
