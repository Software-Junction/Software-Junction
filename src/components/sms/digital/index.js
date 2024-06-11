import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaPenToSquare, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Digidetails from "./digidetails";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../digital/digi.module.scss";
const Index = () => {
  return (
    <>
      <section className={styles["dig-heading"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${styles["dig-breadcr"]} `}>
                <ul>
                  <li>
                    {" "}
                    <Link href="/#">Home</Link>
                  </li>
                  &nbsp;
                  <span style={{ color: "#f95738 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="/sms">School Management System</Link>
                  </li>
                  &nbsp;
                  <span style={{ color: "#f95738 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="">Digital School Web Solution</Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="d-flex">
                  <Image
                    src="/images/digital.jpg"
                    alt="digital school"
                    width="150"
                    height="10"
                    className={`${styles["dig-box-img"]} border bg-light p-4 rounded-3 shadow me-4`}
                  />
                  <div>
                    <h3 className="text-light">Digital School Web Solution</h3>
                    <h5 className="text-light">
                      Best Software Unlimited Student || Renewal Free
                    </h5>
                    <span className="span-style">
                      0.0 <FaStar className="star-size" />
                    </span>
                    <div className="d-flex mt-3">
                      <Link href="">
                        <p className="text-light">
                          <span style={{ color: "#f95738 " }}>
                            <FaPenToSquare />
                          </span>
                          &nbsp; Write a review
                        </p>
                      </Link>
                      <Link href="">
                        <p className="ms-4 text-light">
                          Visit Website &nbsp;
                          <span style={{ color: "#f95738 " }}>
                            <FaArrowUpRightFromSquare />
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles["dig-detail-bg"]} pb-5`}>
        <Digidetails styles={styles} />
      </section>
    </>
  );
};

export default Index;
