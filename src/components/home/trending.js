import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Accounting from "./accounting-cont";
import Education from "./education-cont";
import Erp from './erp-cont';
import Hr from './hr-cont';
import Crm from './crm-cont';

const Trending = ({ styles }) => {
  const [selectedCategory, setSelectedCategory] = useState("accounting");

  return (
    <>
      <section className={`${styles["trending"]} py-4`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">Trending Softwares</h3>
            </Col>
            <Col lg={3} className={styles["col-mob"]}>
              <h5
                onClick={() => setSelectedCategory("accounting")}
                className={selectedCategory === 'accounting' ? styles.activeCategory : styles.category}
                
              >
                Accounting
              </h5>
              <h5
                onClick={() => setSelectedCategory("education")}
                className={selectedCategory === 'education' ? styles.activeCategory : styles.category}
                
              >
                Education
              </h5>
              <h5
                onClick={() => setSelectedCategory("erp")}
                className={selectedCategory === 'erp' ? styles.activeCategory : styles.category}
                
              >
                ERP
              </h5>
              <h5
                onClick={() => setSelectedCategory("hr")}
                className={selectedCategory === 'hr' ? styles.activeCategory : styles.category}
                
              >
                HR
              </h5>
              <h5
                onClick={() => setSelectedCategory("crm")}
                className={selectedCategory === 'crm' ? styles.activeCategory : styles.category}
                
              >
                CRM
              </h5>
              {/* <h5>Accounting</h5>
              <h5>Education</h5>
              <h5>ERP</h5>
              <h5>HR</h5>
              <h5>CRM</h5> */}
            </Col>
            <Col lg={9}>
              {selectedCategory === "accounting" && (
                <Accounting styles={styles} />
              )}
              {selectedCategory === "education" && (
                <Education styles={styles} />
              )}
               {selectedCategory === "erp" && (
                <Erp styles={styles} />
              )}
               {selectedCategory === "hr" && (
                <Hr styles={styles} />
              )}
               {selectedCategory === "crm" && (
                <Crm styles={styles} />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Trending;

// <Col lg={4} className="mb-5">
//             <div className="d-flex h-100  box shadow rounded-2">
//               <div>
//                 <Image
//                   src="/images/quickheal.png"
//                   alt="quickheal"
//                   className="py-4 ps-2"
//                   height="100"
//                   width="100"
//                 />
//               </div>
//               <div>
//                 <h5 className="ps-4 pt-4">QuickHeal</h5>
//                 <p
//                   className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-4`}
//                   style={{backgroundColor: '#FC5185 '}}
//                 >
//                   4.4 <FaStar />
//                 </p>
//                 <p className={`${styles["p-font"]} ms-4`}>(13k reviews)</p>
//               </div>
//             </div>
//           </Col>

//           <Col lg={4} className="mb-5">
//             <div className="d-flex h-100 box shadow rounded-2">
//               <div>
//                 <Image
//                   src="/images/smartcloud.png"
//                   alt="smartcloud"
//                   className="py-4 ps-2"
//                   height="100"
//                   width="100"
//                 />
//               </div>
//               <div>
//                 <h5 className="ps-4 pt-4">Smartflo-cloud</h5>
//                 <p
//                   className={`${styles["p-style1"]} border text-light  ps-2 pt-1 rounded-3 ms-4`}
//                   style={{backgroundColor: '#FC5185 '}}
//                 >
//                   4.4 <FaStar />
//                 </p>
//                 <p className={`${styles["p-font"]} ms-4`}>(10k reviews)</p>
//               </div>
//             </div>
//           </Col>

//           <Col lg={4} className="mb-5">
//             <div className="d-flex h-100 box shadow rounded-2">
//               <div>
//                 <Image
//                   src="/images/superops.png"
//                   alt="superops"
//                   className="py-4 ps-2"
//                   height="100"
//                   width="100"
//                 />
//               </div>
//               <div>
//                 <h5 className="ps-4 pt-4">SuperOps.Ai</h5>
//                 <p
//                   className={`${styles["p-style2"]} border text-light  ps-2 pt-1 rounded-3 ms-4`}
//                   style={{backgroundColor: '#FC5185 '}}
//                 >
//                   4.4 <FaStar />
//                 </p>
//                 <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
//               </div>
//             </div>
//           </Col>

//           <Col lg={4} className="mb-5">
//             <div className="d-flex h-100 box shadow rounded-2">
//               <div>
//                 <Image
//                   src="/images/microsoft.png"
//                   alt="microsofte"
//                   className="py-4 ps-2"
//                   height="100"
//                   width="100"
//                 />
//               </div>
//               <div>
//                 <h5 className="ps-4 pt-4">Microsoft office 365</h5>
//                 <p
//                   className={`${styles["p-style3"]} border text-light  ps-2 pt-1 rounded-3 ms-4`}
//                   style={{backgroundColor: '#FC5185 '}}
//                 >
//                   4.4 <FaStar />
//                 </p>
//                 <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
//               </div>
//             </div>
//           </Col>

//           <Col lg={4} className="mb-5">
//             <div className="d-flex h-100 box shadow rounded-2">
//               <div>
//                 <Image
//                   src="/images/zohobooks.png"
//                   alt="zohobooks"
//                   className="py-4 ps-2"
//                   height="100"
//                   width="100"
//                 />
//               </div>
//               <div>
//                 <h5 className="ps-4 pt-4">Zoho Books</h5>
//                 <p
//                   className={`${styles["p-style4"]} border text-light  ps-2 pt-1 rounded-3 ms-4`}
//                   style={{backgroundColor: '#FC5185 '}}
//                 >
//                   4.4 <FaStar />
//                 </p>
//                 <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
//               </div>
//             </div>
//           </Col>

//           <Col lg={4} className="mb-5">
//             <div className="d-flex h-100 box shadow rounded-2">
//               <div>
//                 <Image
//                   src="/images/adobe.png"
//                   alt="adobe"
//                   className="py-4 ps-2"
//                   height="100"
//                   width="100"
//                 />
//               </div>
//               <div>
//                 <h5 className="ps-4 pt-4">Adobe Cloud for Enterprise</h5>
//                 <p
//                   className={`${styles["p-style5"]} border text-light  ps-2 pt-1 rounded-3 ms-4`}
//                   style={{backgroundColor: '#FC5185 '}}
//                 >
//                   4.4 <FaStar />
//                 </p>
//                 <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
//               </div>
//             </div>
//           </Col>
