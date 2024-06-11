import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { FaFaceSmile, FaFaceFrown } from "react-icons/fa6";

const Overallrev = ({ styles }) => {
  return (
    <>
      <section className={styles["overallrev"]}>
        
          
            <Col lg={10}>
              <div className={`${styles['main-box-mob']} box  bg-light rounded-4 p-4  mb-4 border`}>
                <div className={`${styles['box-mob']} box border  text-center rounded-2 p-4`}>
                    <div className={styles['box-rating']}>
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
                   <p>User Interface (UI) and User Experience (UX) <br/><span className="text-warning"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline/></span>&nbsp;<small>4/5</small></p>
                   <p>Value for Money <br/><span className="text-warning"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline/></span>&nbsp;<small>4/5</small></p>
                   </div>
                   <div>
                   <p>Features and Functionality <br/><span className="text-warning"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline/></span>&nbsp;<small>4/5</small></p>
                   <p>Customer Support <br/><span className="text-warning"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline/></span>&nbsp;<small>4/5</small></p>
                   </div>
                   <div>
                   <p>Performance and Speed <br/><span className="text-warning"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline/></span>&nbsp;<small>4/5</small></p>
                   <p>Integration Capabilities <br/><span className="text-warning"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline/></span>&nbsp;<small>4/5</small></p>
                   </div>
                   <div>
                   <p>Customization Options <br/><span className="text-warning"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline/></span>&nbsp;<small>4/5</small></p>
                   <p>Reporting and Analytics <br/><span className="text-warning"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline/></span>&nbsp;<small>4/5</small></p>
                   </div>
                    </div>
                    
                </div>
                <h5 className="mt-4">Schoolcanvas Pros and Cons</h5>
                <div className="d-flex mt-3">
                    <div>
                        <h5>Pros <span style={{color : '#f95738 '}}><FaFaceSmile/></span></h5>
                        <ul>
                            <li>Its User friendly software and awesome customer support whenever you need</li>
                            <li>All features in one app</li>
                            <li>All the modules provided by parents alarm is very beneficial for parents as well as school management.</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Cons <span style={{color : '#f95738 '}}><FaFaceFrown/></span></h5>
                        <ul>
                            <li>As of now I have used all Academic Features and SchoolCanvas have everything</li>
                            <li>Some connectivity issues</li>
                            <li>I do not find any cons. About it</li>
                        </ul>
                    </div>
                </div>
              </div>
            </Col>
          
        
      </section>
    </>
  );
};

export default Overallrev;
