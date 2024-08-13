import React from "react";
import styles from "./contact.module.scss";
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
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

import { useRouter } from "next/router";

const Index = () => {

const router = useRouter();

  const handleReviewClick = () => {
    const extractedSoftwareName = router.pathname.split("/")[1]; // Extract the softwareName from the URL
    const formattedSoftwareName = extractedSoftwareName
    .split('-') // Split the string by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back with spaces
    // Redirect or perform other actions
    router.push(
      `/review?softwareName=${encodeURIComponent(formattedSoftwareName)}`
    );
  };

  return (
    <>
      <section className={styles["banner"]}>
        <Container fluid>
          <Row>
            <Col lg={12} className={styles["img-pad"]}>
              <Image
                src="/images/contactus.jpg"
                alt="contact"
                height="10"
                width="1518"
                className={styles["banner-img"]}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["contact"]} my-5`}>
        <Container>
          <Row>
            <Col lg={4}>
              <div className="box shadow rounded-4 border p-5">
                <h3 className="text-secondary fw-bold">Contact Us</h3>
                <hr />
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Type Message..."
                      rows={3}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>

            <Col lg={4}>
              <div className="p-5">
                <h5 className="fw-bold">Corporate Office</h5>
                <p className="text-secondary">
                  Shop no 4 , Ground Floor, Mohammedi Building, 2nd Peerkhan St,
                  Nagpada, Mumbai, Maharashtra 400008
                </p>
                <h5 className="fw-bold mt-4">Media Enquiry</h5>
                <p className="text-secondary">xyz@abc.com</p>
                <h5 className="fw-bold mt-4">Telephone</h5>
                <p className="text-secondary">+34 93 524 72 85</p>
                <div className="d-flex mt-4">
                  <Link href="/">
                    <div className="fs-4 text-secondary">
                      <BsFacebook />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className="fs-3 ms-4 text-secondary">
                      <AiFillInstagram />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className="fs-3 ms-4 text-secondary">
                      <AiFillLinkedin />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className="fs-3 ms-4 text-secondary">
                      <AiFillYoutube />
                    </div>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <iframe
                className=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.860107984761!2d72.8397202!3d18.9550594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf5cadca43%3A0x2f248f63460fcd4f!2sHeuristic%20Academy!5e0!3m2!1sen!2sin!4v1688651063244!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
