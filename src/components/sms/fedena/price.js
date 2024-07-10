import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from '../fedena/fed.module.scss'

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
                <h3 className='mb-3'>Fedena Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Small<br/><br/>&#8377; 18000</h5>
                    <p>per year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Basic features</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Medium<br/><br/>&#8377; 6</h5>
                    <p>Student/Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>All features</li>
                        <li>Priority Support (Email & Phone Support)</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Students above 1000<br/><br/>&#8377; 5</h5>
                    <p>Student/Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>All features</li>
                        <li>Priority Support (Email & Phone Support)</li>
                        <li>24/7 Email and Chat Support</li>
                        <li>Contact us for best Price</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm'>Free Trail</Button>
                    </div>
                </div>
            </Col>
            
           
          
        </Row>
      </Container>
    </>
  )
}

export default Price
