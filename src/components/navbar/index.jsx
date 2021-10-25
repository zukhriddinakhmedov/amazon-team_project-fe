import React, { Component } from "react"
import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AiFillAmazonCircle } from "react-icons/ai"
// import { Link } from "react-router-dom"


export default class NavBar extends Component {
    render() {
        return (
            <Navbar expand="lg" className="blog-navbar" fixed="top" bg="dark">
                <Container className="justify-content-between">
                    <Navbar.Brand as={Link} to="/" style={{ color: "white" }} className="amazon-logo">
                        <AiFillAmazonCircle />mazon
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}