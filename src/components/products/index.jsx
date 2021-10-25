import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import ProductItem from "../product-item"

const url = "http://localhost:3001/products"

export default class Products extends Component {
    state = {
        products: [],
    }

    fetchProducts = async () => {
        try {
            const response = await fetch(url)
            if (response.ok) {
                const products = await response.json()
                this.setState({ products })
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.fetchProducts()
    }
    render() {
        return (
            <Row>
                {this.state.products.map((product) => (
                    < Col md={4} style={{ marginBottom: 50 }}>
                        <ProductItem key={product.name} {...product} />
                    </Col>
                ))}
            </Row>
        )
    }
}