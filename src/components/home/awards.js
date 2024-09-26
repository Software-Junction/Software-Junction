import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Awards = ({ styles }) => {
  return (
    <>
      <section className={`${styles["awards"]} my-5`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <h3>Showcase Your Excellence: Awards & Recognition</h3>
                <h5 className="mb-3" style={{ textAlign: "justify" }}>
                  Our Awards & Recognition section lets software companies
                  highlight their achievements, building trust and credibility
                  with potential customers. Featuring industry accolades
                  enhances visibility, differentiates your product from
                  competitors, and reinforces your brand’s authority. Drive more
                  engagement by showcasing award-winning features, and leverage
                  recognitions to boost conversions with enhanced reputation and
                  market presence.
                </h5>
                <div>
                  <ul>
                    <li>
                      <strong>Enhanced Credibility:</strong> Build trust with potential customers by showcasing industry accolades.
                    </li>
                    <li>
                      <strong>Increased Visibility:</strong> Stand out in a competitive market by highlighting award-winning features.
                    </li>
                    <li>
                      <strong>Boosted Engagement:</strong>  Awards help capture more attention, encouraging visitors to explore your product further.
                    </li>
                    <li>
                      <strong>Stronger Brand Image:</strong>  Position your brand as a market leader with visible achievements. 
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className={`${styles["main-img-box"]} `}
              >
                <div className="d-flex justify-content-between">
                <div>
                  <Image
                    src="/images/award-1-box.png"
                    alt="Award Image"
                    width={210}
                    height={10}
                    className={`${styles['award-img-1']} shadow rounded-3`}
                  />
                </div>
                <div>
                  <Image
                    src='/images/techscout-logo.png'
                    alt="TechScout Logo"
                    width={150}
                    height={50}
                    className={`${styles['logo']} `}
                  />
                </div>
                <div>
                  <Image
                    src="/images/award-3-box.png"
                    alt="Award Image"
                    width={210}
                    height={10}
                    className={`${styles['award-img-3']} shadow rounded-3`}
                  />
                </div>
                </div>
                <div>
                  <Image
                    src="/images/award-2-box.png"
                    alt="Award Image"
                    width={210}
                    height={10}
                    className={`${styles['award-img-2']} shadow rounded-3`}
                  />
                </div>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Awards;
