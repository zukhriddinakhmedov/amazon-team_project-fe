import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router"

const url = "http://localhost:3001/products"

class Product extends Component {
    state = {
        product: {}
    }

    fetchProducts = async () => {
        try {
            const response = await fetch(url)
            if (response.ok) {
                const products = await response.json()
                const { _id } = this.props.match.params
                const product = products.find((product) => product._id === _id)
                if (product) {
                    this.setState({ product })
                } else {
                    this.props.history.push("/404")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }



    componentDidMount() {
        this.fetchProducts()
    }

    render() {
        const { product } = this.state
        return (
            <div className="product-details-root">
                <Container>
                    <Image className="product-details-image" src={product.imageUrl} fluid />
                    <h1 className="product-details-name">{product.name}</h1>
                </Container>
            </div>
        )
    }
}

export default withRouter(Product)