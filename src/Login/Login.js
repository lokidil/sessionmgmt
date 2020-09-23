import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import './Login.css'

class Login extends Component {

    render() {
        return (
            <Container className="login">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <label>Username:</label>
                    </Col>
                    <Col md="auto">
                        <input type='text'></input>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <label>Password:</label>
                    </Col>
                    <Col md="auto">
                        <input type='password'></input>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <button type='submit' click={this.props.onLogin}>Login</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;