import React, { Component } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./style.css"


export default class ProductItem extends Component {
    render() {
        const { name, description, imageUrl, _id, price, brand } = this.props

        return (
            <Link to={`/product/${_id}`} className="product-link">
                <Card className="product-card">
                    <Card.Img variant="top" src={imageUrl} className="product-image" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {price}{brand}
                    </Card.Footer>
                </Card>
            </Link >
        )
    }
}