import React, { Component } from "react";
import { Container } from "react-bootstrap"
import Products from "../../components/products";

export default class Home extends Component {
    render() {
        return (
            <Container fluid="sm">
                <h1>Amazon Shopping</h1>
                <Products />
            </Container>
        )
    }
}