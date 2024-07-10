import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../library/liry.module.scss";

const Price = () => {
  const handleFormSubmit = async (values, actions) => {
    try {
      await axios.post(
        "https://software-bazaar-default-rtdb.firebaseio.com/leadform.json",
        values
      );
      actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setSubmitting(false);
    }
  };

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [showDemo, setShowDemo] = useState(false);

  const handleCloseDemo = () => setShowDemo(false);
  const handleShowDemo = () => setShowDemo(true);
  return (
    <>
      <Container>
        <Row>
            <Col lg={12}>
                <h3 className='mb-3'>LibraryWorld Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Free<br/><br/>&#8377; 0</h5>
                    <p>library (annual billing)</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>500,000 catalog records per library</li>
                        <li>No management Sharing</li>
                        <li>No cover jacket sharing</li>
                        <li>Patron searching</li>
                        
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Active Library<br/><br/>&#8377; 35640</h5>
                    <p>library (annual billing)</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>500,000 catalog records per library</li>
                        <li>Management Sharing</li>
                        <li>Cover jacket sharing</li>
                        <li>Patron searching</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
         
            
           
          
        </Row>
      </Container>
    </>
  )
}

export default Price
