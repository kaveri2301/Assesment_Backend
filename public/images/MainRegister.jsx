import React, { useState } from 'react'
import { Form, FormGroup, Container, Row, Col, Card, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function EmployeeRecord() {

    const [userName, setuserName] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [userEmail, setuserEmail] = useState([]);
    const [userRole, setuserRole] = useState([]);
    const [empRecordactivestatus, setempRecordactivestatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            userName,
            userPassword,
            userEmail,
            userRole,
            empRecordactivestatus
        });
    };


    return (
        <>
            <div className=' bg-primary'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <Card className="shadow-lg border-0 rounded-lg mt-5 mb-5">
                                <Card.Header>
                                    <h3 className="text-center font-weight-light my-4">
                                        User Registration
                                    </h3>
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>


                                        <Row className="mb-3">
                                            <Col md={12}>
                                                <Form.Floating className="mb-3 mb-md-0">
                                                    <Form.Control
                                                        type="text"
                                                        id="username"
                                                        placeholder="Enter User Name"
                                                        value={userName}
                                                        onChange={(e) => setuserName(e.target.value)}
                                                        
                                                    />
                                                    <label htmlFor="empnumber">UserName</label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Col md={12}>
                                                <Form.Floating>
                                                    <Form.Control
                                                        type="Password"
                                                        id="userPassword"
                                                        placeholder="Enter your password"
                                                        value={userPassword}
                                                        onChange={(e) => setuserPassword(e.target.value)}
                                                    
                                                    />
                                                    <label htmlFor="userPassword">Password</label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>

                                        <Row className="mb-3 ">
                                            <Col md={12}>
                                                <Form.Floating className="mb-3 mb-md-0">
                                                    <Form.Control
                                                        type="Email"
                                                        id="userEmail"
                                                        placeholder="Enter a Email"
                                                        value={userEmail}
                                                        onChange={(e) => setuserEmail(e.target.value)}
                                                        
                                                    />
                                                    <label htmlFor="userEmail">Email ID</label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>





                                        <Row className="mb-3">
                                            <Col md={12}>
                                                <FloatingLabel controlId="floatingSelect" label="Roles">
                                                    <Form.Select aria-label="Select Role" onChange={(e) => setuserRole(e.target.value)} value={userRole}>
                                                        <option>Select Role</option>
                                                        <option value="Pune">Employee</option>
                                                        <option value="Nashik">Administration</option>
                                                        <option value="California">Manager</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </Col>
                                        </Row>


                                       

                                        <Row className="mb-8">
                                            <div className="d-grid">
                                                <FormGroup>
                                                    <Col mdOffset={3} lg="12" sm="12" className=' text-center'>
                                                        <Button type="Submit" variant="primary" className='m-3'>
                                                            Register
                                                        </Button>
                                                    </Col>
                                                </FormGroup>
                                            </div>
                                        </Row>

                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

