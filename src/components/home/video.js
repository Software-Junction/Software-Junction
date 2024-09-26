import React from "react";
import Link from "next/link";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Video = ({ styles }) => {
  return (
    <>
      <section className={`${styles["video-sec"]} my-4`}>
        <Container>
          <Row>
            <Col lg={6}>
              <iframe
                width="560"
                height="350"
                src="https://www.youtube.com/embed/hdI2bqOjy3c?si=P0c-uGc8qPl5xnOL"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="rounded-3"
              ></iframe>
            </Col>
            <Col lg={6}>
              <div>
                <h3>Effortless Software Comparisons</h3>
                <h5 className="mb-3" style={{textAlign:"justify"}}>
                  We understand that choosing the right software for your needs
                  can be a daunting task with countless options available in the
                  market. That&#39;s why we&#39;ve created a dedicated section
                  on our website that serves as your go-to resource for software
                  comparisons across various categories. Our exclusive Software
                  Comparison table is designed to simplify your decision-making
                  process, providing you with a wealth of information with just
                  few clicks.
                </h5>
                <div>
                  <ul>
                    <li>
                      <strong>Comprehensive Overview :</strong> Our comparison
                      table offers a comprehensive overview of 10 leading
                      software solutions across different categories.
                    </li>
                    <li>
                      <strong>In-Depth Analysis :</strong> Dive into detailed
                      analyses of each software&#39;s features, USP’S, and
                      pricing structures.
                    </li>
                    <li>
                      <strong>User-Friendly Interface :</strong> Our
                      user-friendly interface ensures that navigating through
                      the comparison table is a breeze.
                    </li>
                    <li>
                      <strong>Save Time and Resources :</strong> Our Software
                      Comparison Chart is a time-saving resource, consolidating
                      valuable data and streamlining your research process.
                      Spend less time searching and more time selecting the
                      software that suits your needs.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Video;
