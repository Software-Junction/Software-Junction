import React from "react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { FaFaceSmile, FaFaceFrown } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Review = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Celoxis User Reviews</h3>
          </Col>
          <Col lg={10}>
            <div
              className={`${styles["main-box-mob"]} box  bg-light rounded-4 p-4  mb-4 border`}
            >
              <div
                className={`${styles["box-mob"]} box border  text-center rounded-2 p-4`}
              >
                <div className={styles["box-rating"]}>
                  <div>
                    <p>Overall Score</p>
                    <h5>
                      4.3<small>/5</small>
                    </h5>
                    <p className="text-warning">
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarHalf />
                    </p>
                    <p>Based on the reviews</p>
                  </div>
                  <div>
                    <p>
                      User Interface (UI) and User Experience (UX) <br />
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      &nbsp;<small>4/5</small>
                    </p>
                    <p>
                      Value for Money <br />
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      &nbsp;<small>4/5</small>
                    </p>
                  </div>
                  <div>
                    <p>
                      Features and Functionality <br />
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      &nbsp;<small>4/5</small>
                    </p>
                    <p>
                      Customer Support <br />
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      &nbsp;<small>4/5</small>
                    </p>
                  </div>
                  <div>
                    <p>
                      Performance and Speed <br />
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      &nbsp;<small>4/5</small>
                    </p>
                    <p>
                      Integration Capabilities <br />
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      &nbsp;<small>4/5</small>
                    </p>
                  </div>
                  <div>
                    <p>
                      Customization Options <br />
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      &nbsp;<small>4/5</small>
                    </p>
                    <p>
                      Reporting and Analytics <br />
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      &nbsp;<small>4/5</small>
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="mt-4">Schoolcanvas Pros and Cons</h5>
              <div className="d-flex mt-3">
                <div>
                  <h5>
                    Pros{" "}
                    <span style={{ color: "#f95738 " }}>
                      <FaFaceSmile />
                    </span>
                  </h5>
                  <ul>
                    <li>
                      Its User friendly software and awesome customer support
                      whenever you need
                    </li>
                    <li>All features in one app</li>
                    <li>
                      All the modules provided by parents alarm is very
                      beneficial for parents as well as school management.
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>
                    Cons{" "}
                    <span style={{ color: "#f95738 " }}>
                      <FaFaceFrown />
                    </span>
                  </h5>
                  <ul>
                    <li>
                      As of now I have used all Academic Features and
                      SchoolCanvas have everything
                    </li>
                    <li>Some connectivity issues</li>
                    <li>I do not find any cons. About it</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
        <Col lg={12} >
        <div  className={`${styles["row-mob"]} box bg-light  border  rounded-4 p-4`}>
        <Row>

          <Col lg={3}>
            <Image src="/images/user.png" alt="user" width="60" height="10" />
            <h5 className="my-3">Kristen</h5>
            <p>
              Education Management, 201-500 employees Used daily for more than 2
              years
            </p>
            <p className="my-3">Reviewed August 2023</p>
            <h5>User Interface (UI) and User Experience (UX)</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Value for Money</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
              </span>
              4.5
            </p>
            <h5>Features and Functionality</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarOutline />
              </span>
              4
            </p>
            <h5>Customer Support</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Performance and Speed</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Integration Capabilities</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Customization Options</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Reporting and Analytics</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
          </Col>
          <Col lg={9}>
            <h5>Easy To Use</h5>
            <p>
              Schoolcanvas made my life easier as a busy teacher with a split
              job of teaching Spanish and EL. I could easily see my Spanish
              students' progress and didn't have to worry about trying to add
              scores to PowerSchool since it automatically synced. I could also
              see every class my EL students had and could see what they needed
              to complete or needed extra support with.
            </p>
            <h5 className="mt-4">
              Pros{" "}
              <span style={{ color: "#f95738 " }}>
                <FaFaceSmile />
              </span>
            </h5>
            <p>
              I loved being able to assign and see student progress. We also had
              the option of deciding what needed to be teacher graded. My
              favorite feature of all was that it automatically integrated and
              synced with PowerSchool.
            </p>
            <h5>
              Cons{" "}
              <span style={{ color: "#f95738 " }}>
                <FaFaceFrown />
              </span>
            </h5>
            <p>
              It took some time to get used to adding standards and just using
              it, but after that I don't feel like there was anything negative.
            </p>
          </Col>
          </Row>
        </div>

          </Col>
        </Row>
        <Row>
      <Col lg={12} >
        <div  className={`${styles["row-mob"]} box bg-light mt-4 border  rounded-4 p-4`}>
        <Row>
          <Col lg={3}>
            <Image src="/images/user.png" alt="user" width="60" height="10" />
            <h5 className="my-3">Kristen</h5>
            <p>
              Education Management, 201-500 employees Used daily for more than 2
              years
            </p>
            <p className="my-3">Reviewed August 2023</p>
            <h5>User Interface (UI) and User Experience (UX)</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Value for Money</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
              </span>
              4.5
            </p>
            <h5>Features and Functionality</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarOutline />
              </span>
              4
            </p>
            <h5>Customer Support</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Performance and Speed</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Integration Capabilities</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Customization Options</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
            <h5>Reporting and Analytics</h5>
            <p className="mt-3">
              <span className="text-warning">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
              5
            </p>
          </Col>
          <Col lg={9}>
            <h5>Easy To Use</h5>
            <p>
              Schoolcanvas made my life easier as a busy teacher with a split
              job of teaching Spanish and EL. I could easily see my Spanish
              students' progress and didn't have to worry about trying to add
              scores to PowerSchool since it automatically synced. I could also
              see every class my EL students had and could see what they needed
              to complete or needed extra support with.
            </p>
            <h5 className="mt-4">
              Pros{" "}
              <span style={{ color: "#f95738 " }}>
                <FaFaceSmile />
              </span>
            </h5>
            <p>
              I loved being able to assign and see student progress. We also had
              the option of deciding what needed to be teacher graded. My
              favorite feature of all was that it automatically integrated and
              synced with PowerSchool.
            </p>
            <h5>
              Cons{" "}
              <span style={{ color: "#f95738 " }}>
                <FaFaceFrown />
              </span>
            </h5>
            <p>
              It took some time to get used to adding standards and just using
              it, but after that I don't feel like there was anything negative.
            </p>
          </Col>
          </Row>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Review;
