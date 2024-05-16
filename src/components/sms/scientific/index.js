import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaPenToSquare, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Ficdetails from "./ficdetails";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "../scientific/fic.module.scss";
const Index = () => {
  return (
    <>
      <section className={styles["fic-heading"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${styles["fic-breadcr"]} `}>
                <ul>
                  <li>
                    {" "}
                    <Link href="/#">Home</Link>
                  </li>
                  &nbsp;
                  <span style={{ color: "#FC5185 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="/sms">School Management System</Link>
                  </li>
                  &nbsp;
                  <span style={{ color: "#FC5185 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="">
                      Scientific Study's School Management Software
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="d-flex">
                  <Image
                    src="/images/scientific.png"
                    alt="scientific"
                    width="150"
                    height="10"
                    className={`${styles["fic-box-img"]} border bg-light p-4 rounded-3 shadow me-4`}
                  />
                  <div>
                    <h3 className="text-light">
                      Scientific Study's School Management Software
                    </h3>
                    <h5 className="text-light">
                      Your two Goals..Save Time & Save Money.
                    </h5>
                    <span className="span-style">
                      0.0 <FaStar className="star-size" />
                    </span>
                    <div className="d-flex mt-3">
                      <Link href="">
                        <p className="text-light">
                          <span style={{ color: "#FC5185 " }}>
                            <FaPenToSquare />
                          </span>
                          &nbsp; Write a review
                        </p>
                      </Link>
                      <Link href="">
                        <p className="ms-4 text-light">
                          Visit Website &nbsp;
                          <span style={{ color: "#FC5185 " }}>
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

      <section className={`${styles["fic-detail-bg"]} pb-5`}>
        <Ficdetails styles={styles} />
      </section>
    </>
  );
};

export default Index;
