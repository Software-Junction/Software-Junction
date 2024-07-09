import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../advanta/advanta.module.scss'

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Advanta Rapid ERP</h3>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Global Trust</h5>
              <br />
              <p>
                Trusted by users worldwide, Advanta Innovations has established
                a reputation for providing reliable and effective software
                solutions. The global user base attests to the software's
                adaptability and performance across different regions and
                industries.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Specialization and Experience</h5>
              <br />
              <p>
                With a focus on school management, college management, business
                accounting, ERP, inventory management, and more, Advanta brings
                a wealth of specialization and experience to each software
                solution. This targeted approach results in software that is
                finely tuned to meet the unique requirements of each sector.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Versatility with Modules</h5>
              <br />
              <p>
                <span style={{color:'#f95738 '}}><strong>Featuring 28 modules</strong></span> , Advanta's software provides a versatile
                and customizable experience. Users can tailor the software to
                their specific needs, choosing only the modules that are
                relevant to their operations. This adaptability ensures a
                streamlined and efficient workflow.
              </p>
            </div>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Usp;
