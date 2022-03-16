import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
const ContactView = () => {

// Fix validation
    return (
   
        <FormContainer>
            <div class="contactView">
            <Form>
                <h1>Contact</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required   />

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="email" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Write your message here"  />
                </Form.Group>
                <Form.Group className="text-center">
                    <Button  variant='dark'>Send</Button>
                </Form.Group>
            </Form>
            </div>
        </FormContainer>


    );

}


export default ContactView
