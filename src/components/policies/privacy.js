import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./policies.module.scss";
const Privacy = () => {
  return (
    <>
      <section className={`${styles["privacy"]}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-3">Privacy Policy</h3>
              <h5>1. Introduction</h5>
              <p>
                Welcome to TechScout This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our
                website [Your Website URL], use our services, and interact with
                us. Please read this Privacy Policy carefully. If you do not
                agree with the terms of this Privacy Policy, please do not
                access the site.
              </p>
              <h5>2. Information We Collect</h5>
              <p>
                We may collect and process the following types of information:
              </p>
              <h5 className="mb-3">2.1 Personal Data</h5>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number, and mailing address.
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password, and
                  other registration details.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website and services, such as your IP address, browser type,
                  operating system, pages visited, and the time and date of your
                  visit.
                </li>
              </ul>
              <h5 className="mb-3">2.2 Non-Personal Data</h5>
              <ul>
                <li>
                  <strong>Technical Data:</strong> Information about your device
                  and internet connection, such as your IP address, browser
                  type, and operating system.
                </li>
                <li>
                  <strong>Aggregated Data:</strong> Statistical data about our
                  users, which does not identify individuals.
                </li>
              </ul>
              <h5 className="mb-3">
                3. How We Use Your Information We use the information we collect
                for various purposes, including:
              </h5>
              <ul>
                <li>
                  <strong>To Provide and Improve Our Services:</strong>{" "}
                  Delivering the services you request, maintaining and improving
                  our website, and personalizing your experience.
                </li>
                <li>
                  <strong>To Communicate With You:</strong> Responding to your
                  inquiries, sending newsletters, marketing communications, and
                  updates about our services.
                </li>
                <li>
                  <strong>To Analyze and Improve Our Website:</strong>{" "}
                  Monitoring and analyzing usage patterns to improve the
                  functionality and user experience of our website.
                </li>
                <li>
                  <strong>To Comply With Legal Obligations:</strong> Ensuring
                  compliance with applicable laws, regulations, and legal
                  processes.
                </li>
              </ul>
              <h5>4. Sharing Your Information</h5>
              <p>
                We may share your information with third parties in the
                following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share your
                  information with third-party vendors, consultants, and service
                  providers who perform services on our behalf.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of all or a portion of our assets, your
                  information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your
                  information if required by law, regulation, or legal process.
                </li>
              </ul>
              <h5>5. Cookies and Tracking Technologies</h5>
              <p>
                We use cookies and similar tracking technologies to collect and
                use personal information about you, including to serve
                interest-based advertising. For more information about the types
                of cookies we use and how to manage your cookie preferences,
                please read our.
              </p>
              <h5>6. Data Security</h5>
              <p>
                We implement reasonable security measures to protect your
                information from unauthorized access, use, or disclosure.
                However, no data transmission over the internet or electronic
                storage is completely secure, so we cannot guarantee absolute
                security.
              </p>
              <h5>7. Your Data Protection Rights</h5>
              <p>
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> The right to access and receive a
                  copy of your personal data.
                </li>
                <li>
                  <strong>Rectification:</strong> The right to correct
                  inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Erasure:</strong> The right to request the deletion of
                  your personal data.
                </li>
                <li>
                  <strong>Restriction:</strong> The right to restrict the
                  processing of your personal data.
                </li>
                <li>
                  <strong>Objection:</strong> The right to object to the
                  processing of your personal data.
                </li>
                <li>
                  <strong>Data Portability:</strong> The right to request the
                  transfer of your personal data to another organization.
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at [your contact
                email].
              </p>
              <h5>8. Third-Party Links</h5>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or the content of
                these third-party sites. Please review the privacy policies of
                any third-party websites you visit.
              </p>
              <h5>9. Changes to This Privacy Policy</h5>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the effective date. You are advised to
                review this Privacy Policy periodically for any changes.
              </p>
              <h5>10. Contact Us</h5>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <ul>
              <li>
                  <strong>Email:</strong>  [your contact email]
                </li>
                <li>
                  <strong>Phone:</strong> [your contact number]
                </li>
                <li>
                  <strong>Address:</strong> [your physical address, if applicable]
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Privacy;
