import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Accounting from "./trending softwares/accounting-cont";
import Erp from './trending softwares/erp-cont';
import Hr from './trending softwares/hr-cont';
import Crm from './trending softwares/crm-cont';
import Ecommerce from './trending softwares/ecommerce-cont';
import Billing from './trending softwares/billing-cont';
import Event from './trending softwares/event-cont';
import Project from './trending softwares/project-cont';
import Hotel from './trending softwares/hotel-cont';
import Call from './trending softwares/call-cont';
import Property from './trending softwares/property-cont';
import Hospital from './trending softwares/hospital-cont';
import Inventory from './trending softwares/inventory-cont';
import App from './trending softwares/app-cont';
import Retailing from './trending softwares/retailing-cont';



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
                Accounting Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("hr")}
                className={selectedCategory === 'hr' ? styles.activeCategory : styles.category}
                
              >
                HRMS Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("crm")}
                className={selectedCategory === 'crm' ? styles.activeCategory : styles.category}
                
              >
                CRM Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("erp")}
                className={selectedCategory === 'erp' ? styles.activeCategory : styles.category}
                
              >
                ERP Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("ecommerce")}
                className={selectedCategory === 'ecommerce' ? styles.activeCategory : styles.category}
                
              >
                Ecommerce Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("billing")}
                className={selectedCategory === 'billing' ? styles.activeCategory : styles.category}
                
              >
                Billing and Invoicing Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("event")}
                className={selectedCategory === 'event' ? styles.activeCategory : styles.category}
                
              >
                Event Management Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("project")}
                className={selectedCategory === 'project' ? styles.activeCategory : styles.category}
                
              >
                Project Management Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("hotel")}
                className={selectedCategory === 'hotel' ? styles.activeCategory : styles.category}
                
              >
                Hotel Management Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("call")}
                className={selectedCategory === 'call' ? styles.activeCategory : styles.category}
                
              >
                Call Center Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("property")}
                className={selectedCategory === 'property' ? styles.activeCategory : styles.category}
                
              >
                Property Management Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("hospital")}
                className={selectedCategory === 'hospital' ? styles.activeCategory : styles.category}
                
              >
                Hospital Management Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("inventory")}
                className={selectedCategory === 'inventory' ? styles.activeCategory : styles.category}
                
              >
                Inventory Management Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("app")}
                className={selectedCategory === 'app' ? styles.activeCategory : styles.category}
                
              >
                App Development Software
              </h5>
              <h5
                onClick={() => setSelectedCategory("retailing")}
                className={selectedCategory === 'retailing' ? styles.activeCategory : styles.category}
                
              >
                Retailing Software
              </h5>
              {/* <h5>Accounting</h5>
              <h5>Education</h5>
              <h5>ERP</h5>
              <h5>HR</h5>
              <h5>CRM</h5> */}
            </Col>
            <Col lg={9}>
              {selectedCategory === "accounting" && (
                <Accounting styles={styles} reffer={selectedCategory} />
              )}
               {selectedCategory === "hr" && (
                <Hr styles={styles} reffer={selectedCategory}/>
              )}
               {selectedCategory === "crm" && (
                <Crm styles={styles} reffer={selectedCategory}/>
              )}
               {selectedCategory === "erp" && (
                <Erp styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "ecommerce" && (
                <Ecommerce styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "billing" && (
                <Billing styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "event" && (
                <Event styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "project" && (
                <Project styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "hotel" && (
                <Hotel styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "call" && (
                <Call styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "property" && (
                <Property styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "hospital" && (
                <Hospital styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "inventory" && (
                <Inventory styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "app" && (
                <App styles={styles} reffer={selectedCategory}/>
              )}
              {selectedCategory === "retailing" && (
                <Retailing styles={styles} reffer={selectedCategory}/>
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
//                   style={{backgroundColor: '#f95738 '}}
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
//                   style={{backgroundColor: '#f95738 '}}
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
//                   style={{backgroundColor: '#f95738 '}}
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
//                   style={{backgroundColor: '#f95738 '}}
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
//                   style={{backgroundColor: '#f95738 '}}
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
//                   style={{backgroundColor: '#f95738 '}}
//                 >
//                   4.4 <FaStar />
//                 </p>
//                 <p className={`${styles["p-font"]} ms-4`}>(7k reviews)</p>
//               </div>
//             </div>
//           </Col>
