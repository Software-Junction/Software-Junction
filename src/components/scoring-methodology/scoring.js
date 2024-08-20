import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./scoring.module.scss";

const Scoring = () => {

    const handleFormSubmit = async (values, actions) => {
    //     const {username,email,number,employee} = values
    //     const body ={
    //       "fullName": username,
    //       "phoneNo": number,
    //       "email": email,
    //       "softwareCategory": params.pathname.split('/')[1],
    //       "employeeStrength": employee
    //   }
    //     // return console.log(body);
        console.log("Form value",values);
    //     actions.resetForm();
    //       actions.setSubmitting(false);
    //       alert("Form submitted successfully.");
        
    //     PostAPi('softCategory',body).then((response)=>console.log(response))
        
      };
    
  return (
    <>
      <section className={`${styles["scoring-methd"]} mb-4`}>
        <Container>
          <Row>
            <Col lg={8} className={styles['text']}>
              <h3>Software Junction : Scoring Methodology</h3>
              <p>
                At Software Junction, our mission is to empower visitors and
                software companies with the most insightful, reliable, and
                transparent information available in the software marketplace.
                We understand that choosing the right software is a critical
                decision, whether you&#39;re a business owner seeking to
                optimize operations or a software company looking to showcase
                your product&#39;s strengths. To guide you through this
                decision-making process, we&#39;ve meticulously developed a
                comprehensive scoring methodology that evaluates software
                products on our platform through four key metrics: Review Rating
                Score, Product Page Score, Content Score, and Market Presence
                Score. These metrics, each contributing equally to the overall
                evaluation, ensure a balanced and thorough assessment of every
                software product listed on Software Junction.
              </p>
              <h5>1. Review Rating Score</h5>
              <p>
                The Review Rating Score is the cornerstone of our evaluation
                process, capturing the authentic voices of those who have
                firsthand experience with the software. This metric is derived
                from the average rating provided by users who have utilized the
                software and chosen to share their insights on Software
                Junction. We believe that user-generated reviews are among the
                most valuable resources available when evaluating software, as
                they reflect real-world experiences and outcomes.
                <br />
                <br />
                To encourage an open and helpful dialogue, we invite all our
                visitors to rate and review the software they use. This
                collective wisdom creates a transparent environment where both
                positive feedback and constructive criticism contribute to a
                clearer understanding of each product&#39;s strengths and
                potential areas for improvement. Our team continually monitors
                these reviews to ensure they are genuine, relevant, and
                unbiased, further enhancing the reliability of the Review Rating
                Score.
              </p>
              <h5>2. Product Page Score</h5>
              <p>
                A well-crafted product page can make a significant difference in
                how potential users perceive and understand a software product.
                The Product Page Score on Software Junction is designed to
                reflect the quality, clarity, and completeness of a software
                product&#39;s profile on our platform. This score assesses
                various elements that contribute to a compelling and informative
                product page, including high-quality product images, detailed
                company presentations, and comprehensive descriptions of
                features and functionalities.
                <br />
                <br />
                We encourage software companies to invest in their product pages
                by providing as much relevant information as possible. A
                thorough and visually appealing product page not only helps
                potential users make informed decisions but also enhances the
                credibility and appeal of the software itself. Companies that
                excel in creating rich, informative product pages are rewarded
                with higher Product Page Scores, signaling to visitors that they
                are viewing a well-represented product.
              </p>
              <h5>3. Content Score</h5>
              <p>
                In today&#39;s digital age, content is king, and nowhere is this
                more evident than in the world of software selection. Our
                Content Score evaluates the richness, depth, and relevance of
                the content provided for each software product on Software
                Junction. This metric takes into account the detailed
                descriptions of features, the articulation of unique selling
                propositions (USPs), and the frequency of updates to the
                content, such as monthly feature highlights or news about
                product upgrades.
                <br />
                <br />
                Additionally, the Content Score rewards software products that
                offer exclusive insights, such as interviews with founders or
                key team members, which can provide visitors with a deeper
                understanding of the product&#39;s vision and the people behind
                it. By focusing on the quality of content, we aim to ensure that
                our visitors have access to all the information they need to
                make well-informed decisions. A high Content Score indicates
                that a software product is not only feature-rich but also
                well-documented, making it easier for potential users to grasp
                its full value.
              </p>
              <h5>4. Market Presence Score</h5>
              <p>
                The Market Presence Score provides a holistic view of a software
                product&#39;s visibility and impact within the broader market.
                This score is derived from various indicators that reflect the
                software&#39;s standing in the industry, including Google
                Ratings, website traffic data from Semrush, and any notable
                awards or recognitions the product has received.
                <br />
                <br />A strong market presence often correlates with a
                product&#39;s success and reliability, as it suggests that the
                software is widely recognized and trusted by a large user base.
                By incorporating these external factors into our scoring
                methodology, we ensure that the Market Presence Score accurately
                reflects the software&#39;s influence and reputation in the
                marketplace. This score helps our visitors identify products
                that are not only high-quality but also well-regarded by the
                broader community.
              </p>
              <h5>Balancing the Scores for a Complete Evaluation</h5>
              <p>
                Each of the four metrics—Review Rating Score, Product Page
                Score, Content Score, and Market Presence Score—contributes 25%
                to the overall evaluation of a software product on Software
                Junction. This balanced approach ensures that no single aspect
                dominates the assessment, providing a well-rounded perspective
                on each product&#39;s strengths and areas for growth.
              </p>
              <h5>Why Our Scoring Methodology Matters</h5>
              <p>
                In a crowded software market, distinguishing the best products
                can be challenging.Our scoring methodology is not just a set of
                numbers; it represents our commitment to helping users find the
                software that best meets their needs and helping software
                companies showcase their products effectively.
                <br />
                <br />
                We believe that by providing a clear, unbiased assessment of
                each software product, we can foster a more informed and
                empowered community of users and providers. Whether you&#39;re a
                software developer looking to highlight your product&#39;s
                strengths or a business owner searching for the perfect
                solution, our scoring methodology is here to support you every
                step of the way.
              </p>
            </Col>
            <Col lg={4}>
            <div className={`${styles["box-clr"]} box shadow mt-4 rounded-4 p-4`}>
        <div className="text-center text-light">
          <h5>Boost Your Software&#39;s Visibility: Improve Your Score with Us!</h5>
          <p>
          Fill out the form below, and let’s work together to enhance your software’s presence
          </p>
        </div>
        <div className="mt-3">
          <Formik
            initialValues={{
              companyname:"",
              companywebsite:"",
              username: "",
              email: "",
              number: "",
              employee: "",
              postTimestamp: new Date().toUTCString(),
            }}
            validationSchema={Yup.object().shape({
                companyname: Yup.string().required("Please enter your Company name."),
                companywebsite: Yup.string().required("Please enter your Company Website."),
              username: Yup.string().required("Please enter your full name."),
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address."),
              number: Yup.string()
              .required("Please enter your phone number.")
              .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
              employee: Yup.string().required(
                "Please select employee strength."
              ),
            })}
            onSubmit={handleFormSubmit}
          >
            {(formik) => (
              <Form method="post" id="contact-form">
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Field
                    className={`form-control ${
                      formik.touched.companyname && formik.errors.companyname
                        ? "is-invalid"
                        : ""
                    }`}
                    type="text"
                    name="companyname"
                    placeholder="Company Name"
                  />
                  <ErrorMessage
                    name="companyname"
                    component="div"
                    className={`${styles["valid-clr"]} invalid-feedback`}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Field
                    className={`form-control ${
                      formik.touched.companywebsite && formik.errors.companywebsite
                        ? "is-invalid"
                        : ""
                    }`}
                    type="text"
                    name="companywebsite"
                    placeholder="Company Website"
                  />
                  <ErrorMessage
                    name="companywebsite"
                    component="div"
                    className={`${styles["valid-clr"]} invalid-feedback`}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Field
                    className={`form-control ${
                      formik.touched.username && formik.errors.username
                        ? "is-invalid"
                        : ""
                    }`}
                    type="text"
                    name="username"
                    placeholder="Full name"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className={`${styles["valid-clr"]} invalid-feedback`}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicnumber">
                  <Field
                    className={`form-control ${
                      formik.touched.number && formik.errors.number
                        ? "is-invalid"
                        : ""
                    }`}
                    type="number"
                    name="number"
                    placeholder="Phone number"
                    maxLength="10"
                  />
                  <ErrorMessage
                    name="number"
                    component="div"
                    className={`${styles["valid-clr"]} invalid-feedback`}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Field
                    as="select"
                    id="mySelect"
                    className={`form-select ${
                      formik.touched.employee && formik.errors.employee
                        ? "is-invalid"
                        : ""
                    }`}
                    name="employee"
                  >
                    <option value="" disabled selected>
                      Employee Strength :
                    </option>
                    <option value="Under 20">Under 20</option>
                    <option value="20- 150">20- 150</option>
                    <option value="150- 500">150- 500</option>
                    <option value="500 - 1000">500 - 1000</option>
                    <option value="Over 1000">Over 1000</option>
                  </Field>
                  <ErrorMessage
                    name="employee"
                    component="div"
                    className={`${styles["valid-clr"]} invalid-feedback`}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Field
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={`${styles["valid-clr"]} invalid-feedback`}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button
                  size="sm"
                  className="text-light"
                  variant="warning"
                  type="submit"
                  onClick={formik.handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Scoring;
