import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Recommend = ({ styles }) => {
  return (
    <>
      {/* <section className={`${styles["recommend"]} mt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Top 3 Campus Management System Recommendations</h3>
            </Col>
            <Col lg={6} className="mb-4">
              <div
                className={`${styles["box"]} box  shadow rounded-4 p-3 mt-4`}
              >
                <div className="d-flex">
                  <Image
                    src="/images/school.png"
                    alt="campus"
                    height="10"
                    width="170"
                    className="my-3"
                  />
                  <p className={styles["box-p"]}>Top Choice 1</p>
                </div>

                <h5 className="my-4">No.1 School ERP Software</h5>
                <Button className={`${styles["box-btn2"]} mt-2`} href="">
                  View Profile
                </Button>
                <div className={styles["badge1"]}>
                  <Image
                    src="/images/badge2.png"
                    alt="badge"
                    height="10"
                    width="250"
                  />
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div
                className={`${styles["box1"]} box shadow rounded-4 p-3 mt-4`}
              >
                <div className="d-flex ">
                  <Image
                    src="/images/teachmint.png"
                    alt="campus"
                    height="10"
                    width="100"
                  />

                  <p className="mt-3 ms-3 ">
                    Digitize your school and become future ready now
                  </p>
                </div>
                <p className={styles["box-p1"]}>Top Choice 2</p>
                <div className={styles["badge"]}>
                  <Image
                    src="/images/badge2.png"
                    alt="badge"
                    height="10"
                    width="150"
                  />
                </div>

                <Button className={styles["box-btn"]} size="sm" href="">
                  View Profile
                </Button>
              </div>
              <div
                className={`${styles["box2"]} box  shadow rounded-4 p-3 mt-4`}
              >
                <div className="d-flex">
                  <Image
                    src="/images/edumaat-.png"
                    alt="campus"
                    height="10"
                    width="50"
                  />

                  <p className="mt-3 ms-3">Best Campus Management System</p>
                </div>
                <p className={styles["box-p2"]}>Top Choice 3</p>
                <div className={styles["badge2"]}>
                  <Image
                    src="/images/badge2.png"
                    alt="badge"
                    height="10"
                    width="150"
                  />
                </div>
                <Button className={styles["box-btn1"]} size="sm" href="">
                  View Profile
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section className={`${styles["ads2"]} mt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className=" mb-4">Best Softwares 2</h3>
            </Col>
            <Col lg={3} className={styles["colmob-card"]}>
              <Card
                border=""
                className={`${styles["card-mob"]} h-100 shadow`}
                style={{ width: "18rem" }}
              >
                <Card.Header
                  className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
                >
                  Teachmint
                </Card.Header>
                <Card.Body>
                  <div className="d-flex">
                    <div>
                      <Card.Title className={styles["card-title"]}>
                        Teachmint
                      </Card.Title>
                    </div>
                    <div>
                      <p
                        className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                        style={{ backgroundColor: "#FC5185 " }}
                      >
                        4.4 <FaStar />
                      </p>
                    </div>
                  </div>
                  <Card.Text>
                    Digitize your school and become future ready now
                  </Card.Text>
                  <Button
                    className={styles["card-btn1"]}
                    size="sm"
                    variant="primary"
                  >
                    Free demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className={styles["colmob-card"]}>
              <Card
                border=""
                className={`${styles["card-mob"]} h-100 shadow`}
                style={{ width: "18rem" }}
              >
                <Card.Header
                  className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
                >
                  EDUMAAT
                </Card.Header>
                <Card.Body>
                  <div className="d-flex">
                    <div>
                      <Card.Title className={styles["card-title"]}>
                        EDUMAAT
                      </Card.Title>
                    </div>
                    <div>
                      <p
                        className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                        style={{ backgroundColor: "#FC5185 " }}
                      >
                        4.4 <FaStar />
                      </p>
                    </div>
                  </div>
                  <Card.Text>Best Campus Management system</Card.Text>
                  <Button
                    className={styles["card-btn"]}
                    size="sm"
                    variant="primary"
                  >
                    Free demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className={styles["colmob-card"]}>
              <Card
                border=""
                className={`${styles["card-mob"]} h-100 shadow`}
                style={{ width: "18rem" }}
              >
                <Card.Header
                  className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
                >
                  Schoolcanvas
                </Card.Header>
                <Card.Body>
                  <div className="d-flex">
                    <div>
                      <Card.Title className={styles["card-title"]}>
                        Schoolcanvas
                      </Card.Title>
                    </div>
                    <div>
                      <p
                        className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                        style={{ backgroundColor: "#FC5185 " }}
                      >
                        4.4 <FaStar />
                      </p>
                    </div>
                  </div>
                  <Card.Text>No.1 school ERP software</Card.Text>
                  <Button
                    className={styles["card-btn"]}
                    size="sm"
                    variant="primary"
                  >
                    Free demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} className={styles["colmob-card"]}>
              <Card
                border=""
                className={`${styles["card-mob"]} h-100 shadow`}
                style={{ width: "18rem" }}
              >
                <Card.Header
                  className={`${styles["card-head"]} bg-dark text-light fw-bold p-5`}
                >
                  Astral School
                </Card.Header>
                <Card.Body>
                  <div className="d-flex">
                    <div>
                      <Card.Title className={styles["card-title"]}>
                        Astral School
                      </Card.Title>
                    </div>
                    <div>
                      <p
                        className={`${styles["p-style"]} border text-light  ps-2 pt-1 rounded-3 ms-5`}
                        style={{ backgroundColor: "#FC5185 " }}
                      >
                        4.4 <FaStar />
                      </p>
                    </div>
                  </div>
                  <Card.Text>System by Astral Technologies</Card.Text>
                  <Button
                    className={styles["card-btn"]}
                    size="sm"
                    variant="primary"
                  >
                    Free demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className={`${styles["content"]} mt-5 pb-5`}>
        <Container>
          <Row>
            <Col lg={8}>
              <Image
                src="/images/campus.png"
                alt="campus"
                height="10"
                width="800"
                className={styles["camp-img-mob"]}
              />
            </Col>

            <Col lg={8}>
              <div id="1">
                <h5 className="mt-5">
                  What is a property management software ?
                </h5>
                <p className="mt-4">
                  Property management software is a specialized tool designed to
                  assist property managers in efficiently overseeing rental
                  properties. It streamlines tasks such as tenant management,
                  lease tracking, and rent collection, promoting organization
                  and automation. The software facilitates the creation and
                  management of lease agreements and contracts, ensuring legal
                  compliance. It enables online rent payments, enhancing
                  convenience for both tenants and property managers.
                  Maintenance and repair tracking features help schedule and
                  monitor property upkeep. Financial management tools assist in
                  budgeting, accounting, and generating financial reports.
                  Property marketing capabilities aid in creating listings and
                  managing inquiries for vacant properties. The software serves
                  as a centralized repository for storing crucial documents
                  related to properties and contracts. Communication tools
                  facilitate effective interaction with tenants, property
                  owners, and other stakeholders. Task automation reduces manual
                  effort by handling repetitive tasks like rent reminders and
                  lease renewals. Reporting and analytics features provide
                  insights into property performance and financial metrics.
                  Overall, property management software optimizes processes,
                  improves communication, and enhances the overall management of
                  rental properties, making it invaluable for property
                  professionals overseeing multiple units or properties.
                </p>
              </div>
              <div id="2">
                <h5 className="mt-4">
                  What are the top features to look for in property management
                  software ?
                </h5>
                <p className="mt-4">
                  When selecting property management software, it's essential to
                  consider features that streamline operations, enhance
                  efficiency, and provide comprehensive tools for managing
                  properties. Here are some top features to look for:
                </p>
                <ol>
                  <li>
                    <strong>User-Friendly Interface:</strong>
                    An intuitive and user-friendly interface is crucial for
                    property management software. It should allow users to
                    navigate the platform easily, access necessary information,
                    and perform tasks without a steep learning curve.
                  </li>
                  <li>
                    <strong>Online Rent Payment:</strong>
                    This feature enables tenants to pay their rent securely
                    through an online portal. It simplifies the rent collection
                    process, reduces paperwork, and provides a convenient way
                    for tenants to make payments.
                  </li>
                  <li>
                    <strong>Accounting and Financial Management:</strong>
                    Robust accounting features include tools for tracking income
                    and expenses, generating financial reports, managing
                    budgets, and handling transactions. It should facilitate
                    easy tracking of property-related finances.
                  </li>
                  <li>
                    <strong>Tenant and Lease Management:</strong>A centralized
                    database for tenant information and lease management is
                    essential. It should include details such as contact
                    information, rental history, lease terms, and any
                    communication logs between property managers and tenants.
                  </li>
                  <li>
                    <strong>Maintenance Request Tracking:</strong>
                    This feature allows tenants to submit maintenance requests
                    online. Property managers can then efficiently track,
                    prioritize, and manage these requests, ensuring timely
                    maintenance and repairs.
                  </li>
                  <li>
                    <strong>Document Management:</strong>A system for organizing
                    and storing important documents, such as leases, contracts,
                    insurance policies, and inspection reports. This feature
                    helps in easy retrieval of documents when needed.
                  </li>
                  <li>
                    <strong>Automated Communication:</strong>
                    Automated communication tools, such as email or text
                    notifications, help in keeping tenants informed about rent
                    due dates, maintenance schedules, and other important
                    updates. It improves communication efficiency.
                  </li>
                  <li>
                    <strong>Integration with Online Listing Platforms:</strong>
                    Seamless integration with popular online listing platforms
                    simplifies the process of marketing vacant properties. This
                    feature allows property managers to update property details
                    across multiple platforms simultaneously.
                  </li>
                  <li>
                    <strong>Mobile Accessibility:</strong>
                    Mobile-friendly applications or responsive interfaces enable
                    property managers to access and manage property-related
                    tasks on the go. This is especially useful for tasks that
                    require immediate attention.
                  </li>
                  <li>
                    <strong>Reporting and Analytics:</strong>
                    Robust reporting tools provide insights into the financial
                    performance of properties, occupancy rates, rental income,
                    and other key metrics. This helps in making informed
                    decisions and optimizing property management strategies.
                  </li>
                  <li>
                    <strong>Tenant Screening:</strong>
                    This feature includes tools for background checks, credit
                    checks, and rental history verification. It helps property
                    managers assess the suitability of potential tenants and
                    reduce the risk of problematic tenancies.
                  </li>
                  <li>
                    <strong>Compliance Management:</strong>
                    Features that assist property managers in ensuring
                    compliance with local regulations and laws. This includes
                    lease agreement compliance, fair housing laws, and other
                    legal requirements.
                  </li>
                  <li>
                    <strong>Work Order Management:</strong>
                    Streamlined workflow for creating, assigning, and tracking
                    work orders related to property maintenance. It ensures that
                    maintenance tasks are promptly addressed, enhancing tenant
                    satisfaction.
                  </li>
                  <li>
                    <strong>Integration with Accounting Software:</strong>
                    Compatibility with popular accounting software streamlines
                    the financial management process. It allows for the seamless
                    transfer of financial data between property management and
                    accounting systems.
                  </li>
                  <li>
                    <strong>Security and Data Protection:</strong>
                    Robust security measures, such as data encryption and secure
                    login protocols, protect sensitive tenant and property
                    information from unauthorized access and data breaches.
                  </li>
                  <li>
                    <strong>Scalability:</strong>
                    The software should be scalable to accommodate the growth of
                    your property portfolio. It should handle an increasing
                    number of properties, tenants, and transactions without
                    compromising performance.
                  </li>
                  <li>
                    <strong>Customer Support and Training:</strong>
                    Responsive customer support ensures that property managers
                    can get assistance when needed. Comprehensive training
                    resources, including tutorials and documentation, help users
                    maximize the software's capabilities.
                  </li>
                  <li>
                    <strong>Customization Options:</strong>
                    The ability to customize features based on specific property
                    management needs ensures that the software aligns with your
                    unique requirements. This may include custom reporting, user
                    roles, and other configurable settings.
                  </li>
                </ol>
              </div>
              <div id="3">
                <h5 className="mt-4">
                  Comparing cloud-based vs. on-premise property management
                  solutions – which is right for you ?
                </h5>
                <p className="mt-4">
                  Choosing between cloud-based and on-premise property
                  management solutions depends on various factors, and each
                  option has its own set of advantages and disadvantages. Let's
                  explore key considerations to help you make an informed
                  decision.
                </p>
                <ol>
                  <li>
                    <strong>Accessibility:</strong>
                    <ul>
                      <li>
                        <strong>Cloud-based:</strong>
                        <ul>
                          <li>
                            Pros: Users can access the property management
                            system from anywhere with an internet connection,
                            fostering flexibility and remote work. This is
                            particularly advantageous for property managers who
                            need to handle tasks on the go or from multiple
                            locations.
                          </li>
                          <li>
                            Cons: Relies on consistent internet access, and in
                            regions with poor connectivity, accessing the system
                            may be challenging.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>On-premise:</strong>
                        <ul>
                          <li>
                            Pros: Accessibility is limited to the physical
                            location where the software is installed. This can
                            be beneficial if security concerns dictate that the
                            system should only be accessible within the property
                            premises.
                          </li>
                          <li>
                            Cons: Restricts flexibility for remote work and may
                            hinder collaboration for teams spread across
                            different locations.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cost:</strong>
                    <ul>
                      <li>
                        <strong>Cloud-based:</strong>
                        <ul>
                          <li>
                            Pros: Involves lower upfront costs with a
                            subscription-based pricing model. This can be
                            advantageous for smaller property management
                            businesses with limited initial capital.
                          </li>
                          <li>
                            Cons: Over time, subscription fees can accumulate,
                            and in the long run, the total cost of ownership may
                            surpass that of an on-premise solution.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>On-premise:</strong>
                        <ul>
                          <li>
                            Pros: Requires a significant upfront investment, but
                            long-term costs may be lower if the software is used
                            for an extended period without major updates.
                          </li>
                          <li>
                            Cons: Initial costs can be a barrier for small
                            businesses, and ongoing maintenance expenses may add
                            up.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Maintenance and Updates:</strong>
                    <ul>
                      <li>
                        <strong>Cloud-based:</strong>
                        <ul>
                          <li>
                            Pros: Providers handle maintenance, updates, and
                            backups, reducing the workload on your IT staff.
                            Updates are typically automatic and seamless,
                            ensuring the system is always up to date.
                          </li>
                          <li>
                            Cons: Limited control over the timing of updates,
                            and reliance on the provider's infrastructure.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>On-premise:</strong>
                        <ul>
                          <li>
                            Pros: Offers direct control over maintenance
                            schedules and updates. IT staff can tailor updates
                            to the property's specific needs.
                          </li>
                          <li>
                            Cons: Requires dedicated in-house IT support, which
                            can be costly. Updates may be more manual and
                            time-consuming.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Scalability:</strong>
                    <ul>
                      <li>
                        <strong>Cloud-based:</strong>
                        <ul>
                          <li>
                            Pros: Easily scalable, allowing you to adjust
                            resources based on the property management needs.
                            This is beneficial for businesses with fluctuating
                            workloads or those planning for growth.
                          </li>
                          <li>
                            Cons: Scalability is dependent on the provider's
                            infrastructure, and costs may increase as usage
                            grows.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>On-premise:</strong>
                        <ul>
                          <li>
                            Pros: Scalability may involve significant hardware
                            and software upgrades. This can be time-consuming
                            and expensive but provides more control over the
                            process.
                          </li>
                          <li>
                            Cons: Less flexible for businesses with changing
                            requirements, and scalability may require
                            significant upfront investment.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Security:</strong>
                    <ul>
                      <li>
                        <strong>Cloud-based:</strong>
                        <ul>
                          <li>
                            Pros: Reputable cloud providers invest heavily in
                            security measures, including data encryption,
                            firewalls, and regular audits. They often have
                            dedicated teams focused on security.
                          </li>
                          <li>
                            Cons: Concerns about data residing off-site and
                            reliance on the provider's security measures.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>On-premise:</strong>
                        <ul>
                          <li>
                            Pros: Provides direct control over data security,
                            allowing for the implementation of specific measures
                            based on the property's unique needs.
                          </li>
                          <li>
                            Cons: Requires vigilant in-house efforts to maintain
                            robust security. Small businesses may lack the
                            expertise or resources for comprehensive security
                            measures.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Integration:</strong>
                    <ul>
                      <li>
                        <strong>Cloud-based:</strong>
                        <ul>
                          <li>
                            Pros: Cloud solutions are often designed with APIs
                            (Application Programming Interfaces) to facilitate
                            integration with other cloud services and
                            third-party applications, creating a more connected
                            and streamlined ecosystem.
                          </li>
                          <li>
                            Cons: Integration may still require effort and
                            depend on the software's compatibility with other
                            systems.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>On-premise:</strong>
                        <ul>
                          <li>
                            Pros: Greater flexibility for customization and
                            integration based on the property's specific
                            requirements.
                          </li>
                          <li>
                            Cons: Integration may be more complex, requiring
                            custom solutions and potentially leading to
                            compatibility issues.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Customization:</strong>
                    <ul>
                      <li>
                        <strong>Cloud-based:</strong>
                        <ul>
                          <li>
                            Pros: Typically offers limited customization options
                            to ensure uniformity and ease of maintenance.
                            Customizations are often controlled by the provider
                            to maintain system stability.
                          </li>
                          <li>
                            Cons: Users may have to adapt their processes to fit
                            the standardized system.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>On-premise:</strong>
                        <ul>
                          <li>
                            Pros: Allows for greater customization to meet
                            specific business needs. Property managers have more
                            control over software configuration.
                          </li>
                          <li>
                            Cons: Customizations may result in increased
                            complexity and could lead to challenges during
                            system upgrades.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div id="4">
                <h5 className="mt-4">
                  What role does virtual reality play in property management
                  software for property tours and inspections ?
                </h5>
                <p className="mt-4">
                  Virtual Reality (VR) plays a significant role in property
                  management software, particularly in enhancing property tours
                  and inspections. Here are some key ways in which VR is
                  utilized in this context:
                </p>
                <ol>
                  <li>
                    <strong>Virtual Property Tours:</strong>
                    <ul>
                      <li>
                        <strong>Immersive Experience:</strong>
                        Virtual Property Tours through VR create a 3D immersive
                        experience that allows users to navigate through a
                        property as if they were physically present. This
                        includes the ability to look around in all directions,
                        providing a more comprehensive understanding of the
                        space compared to traditional 2D images or videos.
                      </li>
                      <li>
                        <strong>Remote Exploration:</strong>
                        Prospective tenants or buyers can explore properties
                        remotely using VR headsets or even through web browsers.
                        This is particularly beneficial for individuals who may
                        be geographically distant or unable to attend in-person
                        property tours.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Remote Inspections:</strong>
                    <ul>
                      <li>
                        <strong>Efficient Assessment:</strong>
                        Property managers can use VR to conduct inspections
                        remotely. They can examine the condition of a property
                        in detail, zooming in on specific features or areas of
                        concern without being physically present. This
                        efficiency is especially valuable for managing multiple
                        properties across different locations.
                      </li>
                      <li>
                        <strong>Time and Cost Savings:</strong>
                        Virtual inspections reduce the need for property
                        managers and clients to travel to each site. This not
                        only saves time but also minimizes associated costs,
                        making property management more resource-efficient.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Property Visualization:</strong>
                    <ul>
                      <li>
                        <strong>Design and Layout:</strong>
                        VR can be employed to visualize different design options
                        and layouts for a property. This allows property
                        managers and clients to experiment with various
                        configurations before making decisions about renovations
                        or interior design.
                      </li>
                      <li>
                        <strong>Furniture Placement:</strong>
                        Virtual reality can simulate the placement of furniture
                        within a property. This helps clients envision how the
                        space will look once furnished, aiding in
                        decision-making and potentially influencing leasing or
                        purchasing choices.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Collaboration and Communication:</strong>
                    <ul>
                      <li>
                        <strong>Remote Collaboration:</strong>
                        VR enables property managers, clients, and other
                        stakeholders to collaborate in real-time regardless of
                        their physical locations. They can discuss property
                        details, share insights, and collectively make decisions
                        without the need for face-to-face meetings.
                      </li>
                      <li>
                        <strong>Real-Time Communication:</strong>
                        Users can communicate during virtual tours or
                        inspections, enhancing the experience by addressing
                        questions or concerns immediately. This real-time
                        communication fosters a more interactive and engaging
                        process.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Training and Onboarding:</strong>
                    <ul>
                      <li>
                        <strong>Staff Training:</strong>
                        VR can be utilized for training property management
                        staff in conducting inspections. This hands-on training
                        allows staff to practice in a virtual environment,
                        improving their skills and ensuring consistency in the
                        inspection process.
                      </li>
                      <li>
                        <strong>Onboarding Clients:</strong>
                        Property management software with VR capabilities can be
                        used to onboard clients. This involves familiarizing
                        them with property features, management processes, and
                        using VR tools, creating a smoother and more informed
                        client onboarding experience.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Marketing and Promotion:</strong>
                    <ul>
                      <li>
                        <strong>Engaging Marketing Material:</strong>
                        VR tours serve as highly engaging marketing material.
                        They provide a memorable and interactive way to showcase
                        properties, attracting potential tenants or buyers by
                        offering a unique and modern presentation.
                      </li>
                      <li>
                        <strong>Competitive Advantage:</strong>
                        Property management companies incorporating VR gain a
                        competitive advantage. The use of innovative technology
                        demonstrates a commitment to providing a cutting-edge
                        and client-focused service, setting them apart from
                        competitors who rely solely on traditional marketing
                        methods.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Data Collection and Analysis:</strong>
                    <ul>
                      <li>
                        <strong>Feedback and Analytics:</strong>
                        VR systems can collect data on user interactions during
                        virtual tours. This includes information on which parts
                        of the property users focus on, how long they spend in
                        different areas, and any interactions they have with the
                        virtual environment.
                      </li>
                      <li>
                        <strong>Improving User Experience:</strong>
                        The collected data can be analyzed to improve the VR
                        experience. Property management software can be refined
                        based on user feedback and behavior, ensuring that
                        future virtual tours and inspections are more
                        user-friendly, engaging, and effective.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div id="5">
                <h5 className="mt-4">
                  How does property management software handle communication and
                  collaboration between landlords and tenants ?
                </h5>
                <p className="mt-4">
                  Property management software plays a crucial role in
                  facilitating communication and collaboration between landlords
                  and tenants. Here are some common features and functionalities
                  that are typically found in property management software to
                  handle communication and collaboration:The cost of ownership
                  for project management software can vary significantly between
                  on-premise and cloud-based solutions. Here are key factors
                  differentiating the two:
                </p>
                <ol>
                  <li>
                    <strong>Online Portals:</strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Landlord Portal: </strong>
                      This is a secure online space where landlords can access
                      information about their properties. It typically includes
                      details such as property listings, financial reports, and
                      tenant information. Landlords can use this portal to
                      communicate with tenants, manage lease agreements, and
                      monitor the overall performance of their properties.
                    </li>
                    <li>
                      <strong> Tenant Portal</strong>
                      Tenants have their own dedicated portal to interact with
                      the property management system. They can view lease
                      details, track rent payments, submit maintenance requests,
                      and communicate with the landlord or property manager. The
                      tenant portal serves as a central hub for all
                      tenant-related activities. Cloud solutions have lower
                      initial costs since there's no need to invest in physical
                      hardware. Instead, users subscribe to the service and pay
                      based on usage, often on a monthly or annual basis.
                    </li>
                  </ul>
                  <li>
                    <strong>Messaging and Notifications:</strong>
                    The integrated messaging system allows seamless
                    communication between landlords and tenants. This could
                    include important announcements, reminders for upcoming
                    events (e.g., property inspections), or discussions about
                    specific issues. Notifications are often sent via email or
                    within the platform to keep both parties informed in
                    real-time.
                  </li>
                  <li>
                    <strong>Document Sharing:</strong>
                    Property management software enables the secure sharing of
                    documents. Landlords can upload and share lease agreements,
                    inspection reports, and other important documents with
                    tenants. This ensures that all relevant parties have easy
                    access to crucial information, reducing the likelihood of
                    miscommunication.
                  </li>
                  <li>
                    <strong>Maintenance Requests:</strong>
                    Tenants can use the software to submit maintenance requests
                    online. Landlords or property managers can then track these
                    requests, prioritize them, and assign them to maintenance
                    staff if necessary. The system provides a transparent way to
                    manage and communicate about property maintenance, leading
                    to quicker issue resolution.
                  </li>
                  <li>
                    <strong>Rent Payments:</strong>
                    Online rent payment features allow tenants to pay their rent
                    electronically through the property management system.
                    Landlords can track payment history, set up automated
                    reminders for rent due dates, and easily reconcile financial
                    transactions. This eliminates the need for manual rent
                    collection and promotes timely payments.
                  </li>
                  <li>
                    <strong>Calendar and Scheduling:</strong>
                    Integrated calendars help landlords and tenants organize and
                    keep track of important dates. This includes lease renewal
                    dates, property inspection schedules, and other events. Both
                    parties can access and update the calendar, ensuring that
                    everyone is on the same page regarding property-related
                    activities.
                  </li>
                  <li>
                    <strong>Task Management:</strong>
                    Task management features allow landlords and property
                    managers to create, assign, and track tasks related to
                    property management. This could include tasks such as
                    conducting routine inspections, addressing maintenance
                    issues, or managing tenant move-ins and move-outs. The
                    system helps ensure that responsibilities are clearly
                    defined and completed in a timely manner.
                  </li>
                  <li>
                    <strong>Online Applications and Screening:</strong>
                    Landlords can use the software to streamline the tenant
                    application process. This may involve online application
                    forms, background checks, and credit checks. By managing
                    these processes within the software, landlords can
                    efficiently screen potential tenants and make informed
                    leasing decisions.
                  </li>
                  <li>
                    <strong>Analytics and Reporting:</strong>
                    Property management software often includes analytics and
                    reporting tools that provide insights into property
                    performance. Landlords can access financial reports,
                    occupancy rates, and other key metrics. These analytics help
                    in making data-driven decisions, and the information can be
                    shared with tenants to promote transparency regarding
                    property operations.
                  </li>
                  <li>
                    <strong>Compliance and Legal Notices:</strong>
                    The software may include templates for legal notices, such
                    as eviction notices or lease renewal notifications, to help
                    landlords stay compliant with local regulations. This
                    feature ensures that landlords provide the required
                    documentation in a timely and accurate manner, reducing the
                    risk of legal issues.
                  </li>
                </ol>
              </div>
              <div id="6">
                <h5 className="mt-4">
                  What are the key considerations for property managers when
                  selecting software for multi-unit complexes ?
                </h5>
                <p className="mt-4">
                  Selecting the right software for managing multi-unit complexes
                  is crucial for property managers to streamline operations and
                  enhance efficiency. Here are key considerations to keep in
                  mind:
                </p>
                <ol>
                  <li>
                    <strong> Scalability: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Ensure the software can handle the growth of your property
                      portfolio over time. It should effectively manage an
                      increasing number of units, tenants, and properties
                      without slowing down or compromising performance.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Scalability is crucial as property management companies
                      often expand their portfolios. Choosing scalable software
                      ensures that the system can grow with the business without
                      the need for frequent migrations or disruptions.
                    </li>
                  </ul>

                  <li>
                    <strong> User-Friendly Interface: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Opt for software with an interface that is easy to
                      navigate and understand. A user-friendly design reduces
                      the learning curve for property managers, staff, and
                      tenants, leading to increased efficiency and decreased
                      likelihood of errors.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Intuitive interfaces contribute to a positive user
                      experience, allowing users to quickly adapt to the
                      software and perform tasks more efficiently.
                    </li>
                  </ul>

                  <li>
                    <strong> Feature Set: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Evaluate the software's features to ensure it covers
                      essential property management aspects, such as rent
                      collection, maintenance tracking, lease management, and
                      financial reporting.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      The right feature set streamlines daily tasks, centralizes
                      information, and provides comprehensive insights, making
                      property management more efficient and effective.
                    </li>
                  </ul>

                  <li>
                    <strong> Integration Capability: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Check if the software can integrate with other tools and
                      systems, such as accounting software, online payment
                      gateways, and communication platforms.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Integration capability reduces data silos, enhances
                      workflow efficiency, and minimizes manual data entry.
                      Seamless integration with existing tools improves overall
                      productivity.
                    </li>
                  </ul>

                  <li>
                    <strong> Customization: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Choose software that allows customization to adapt to the
                      unique processes and requirements of your multi-unit
                      complexes. Customizable fields and workflows accommodate
                      specific business needs.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Customization ensures that the software aligns with your
                      specific property management workflows and can be tailored
                      to address the nuances of your business.
                    </li>
                  </ul>

                  <li>
                    <strong> Mobile Accessibility: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Ensure that the software is accessible via mobile devices,
                      allowing property managers to manage tasks on the go.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Mobile accessibility provides flexibility, enabling
                      property managers to respond promptly to urgent matters,
                      access information remotely, and stay connected while away
                      from the office.
                    </li>
                  </ul>

                  <li>
                    <strong> Tenant Portals: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Check if the software offers tenant portals for online
                      rent payments, maintenance requests, and communication
                      between property managers and tenants.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Tenant portals enhance tenant satisfaction by providing
                      convenient, online self-service options. They also
                      streamline communication and transaction processes,
                      reducing administrative burden.
                    </li>
                  </ul>

                  <li>
                    <strong> Reporting and Analytics: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Evaluate the reporting and analytics capabilities of the
                      software to gain insights into property performance,
                      financial metrics, and other key indicators.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Robust reporting tools enable property managers to make
                      informed decisions, identify trends, and assess the
                      overall health of the property portfolio.
                    </li>
                  </ul>

                  <li>
                    <strong> Compliance and Security: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Confirm that the software complies with industry
                      regulations and standards. Ensure it has robust security
                      features to protect sensitive data.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Compliance ensures adherence to legal requirements, while
                      strong security safeguards against data breaches and
                      unauthorized access, protecting both property managers and
                      tenants.
                    </li>
                  </ul>

                  <li>
                    <strong> Customer Support: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Assess the level of customer support provided by the
                      software vendor, including responsiveness and expertise.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Reliable customer support is crucial for resolving issues
                      quickly, minimizing downtime, and ensuring that property
                      managers can effectively use the software.
                    </li>
                  </ul>

                  <li>
                    <strong> Cost and ROI: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Consider the total cost of ownership, including
                      subscription fees, implementation costs, and any
                      additional fees. Evaluate the return on investment in
                      terms of time saved, efficiency gained, and improved
                      property management.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      Understanding the full cost and potential benefits helps
                      in making an informed decision about the software's
                      affordability and long-term value.
                    </li>
                  </ul>

                  <li>
                    <strong> User Reviews and References: </strong>
                  </li>
                  <ul>
                    <li>
                      <strong> Explanation</strong>
                      Research user reviews and seek references from other
                      property managers using the software to gather insights
                      into real-world experiences.
                    </li>
                    <li>
                      <strong> Importance</strong>
                      User reviews and references provide valuable perspectives
                      on the software's performance, reliability, and how well
                      it meets the needs of property managers in practical
                      scenarios.
                    </li>
                  </ul>
                </ol>
              </div>
            </Col>
            <Col lg={4}>
              <div
                className={`${styles["content-box"]} box bg-light rounded-4 p-4 border overflow-auto mt-5`}
              >
                <h5>Table of content</h5>
                <div className="mt-3">
                  <ol>
                    <Link href="#1">
                      <li>What is a property management software ?</li>
                    </Link>
                    <hr />
                    <Link href="#2">
                      <li>
                        What are the top features to look for in property
                        management software ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#3">
                      <li>
                        Comparing cloud-based vs. on-premise property management
                        solutions – which is right for you ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#4">
                      <li>
                        What role does virtual reality play in property
                        management software for property tours and inspections ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#5">
                      <li>
                        How does property management software handle
                        communication and collaboration between landlords and
                        tenants ?
                      </li>
                    </Link>
                    <hr />
                    <Link href="#6">
                      <li>
                        What are the key considerations for property managers
                        when selecting software for multi-unit complexes ?
                      </li>
                    </Link>
                    <hr />
                  </ol>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Recommend;
