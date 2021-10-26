import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom";
import "./style.css"
import "react-quill/dist/quill.snow.css";

const NewProduct = ({ match }) => {
    const url = "http://localhost:3001/products"
    const id = match.params._id
    const [newProductId, setNewProductId] = useState("")
    const [productToUpdate, setProductToUpdate] = useState({})
    const [name, setName] = useState(id ? productToUpdate : "")
    const [category, setCategory] = useState("")
    const [descriptioin, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState({ file: null })

    const getProducts = async () => {
        const response = await fetch(url)
        if (response.ok) {
            const products = await response.json()
            const toUpdate = products.find((product) => product._id === id)
        }
    }
    const reviewsUrl = ""
    const productsUrl = id ? url + id : url
    const method = id ? "PUT" : "POST"

    const uploadFile = (e) => {
        setImageUrl({ file: e.target.files[0] })
    }
    const postImg = async (product) => {
        let formData = new FormData()
        let file = imageUrl.file
        formData.append("imageUrl", file)
        try {
            const response = await fetch(id ? `${productsUrl}/imageUrl` : `${productsUrl}/${product._id}/imageUrl`,
                {
                    method: "PUT",
                    body: formData,
                }
            )
            if (response.ok) {
                const img = await response.json()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const sendProduct = async () => {
        const productObj = id
            ? {
                ...productToUpdate,
                name,
                description,
                brand,
                imageUrl,
                price,
                category
            }
            : {
                name,
                description,
                brand,
                imageUrl,
                price,
                category,
                imageUrl
            }
    }
    try {
        const response = await fetch(productsUrl, {
            method,
            body: JSON.stringify(productObj),
            headers: {
                "Content-type": "application/json"
            }
        })
        if (response.ok) {
            const product = await response.json()
        }
    } catch (error) {
        console.log(error)
    }
    useEffect(() => {
        id && getProducts()
    }, [])
    return (
        <Container className="new-product-container">
            <Form>
                <Form.Group className="mb-3">
                    < Form.Label >Name</Form.Label >
                    <Form.Control
                        type="name"
                        placeholder={"Name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group >
                <Form.Group className="mb-3">
                    < Form.Label >Description of the product</Form.Label >
                    <Form.Control type="text" placeholder="Please add a description" />
                </Form.Group >
                <Form.Group className="mb-3">
                    < Form.Label >Brand</Form.Label >
                    <Form.Control type="brand" placeholder="Please add a brand of the product" />
                </Form.Group >
                <Form.Group className="mb-3">
                    < Form.Label >Price</Form.Label >
                    <Form.Control type="number" placeholder="Please add the price of the product" />
                </Form.Group >
                <Form.Group controlId="blog-category" className="mt-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        size="lg" as="select">
                        <option>Electronics</option>
                        <option>Beauty</option>
                        <option>Health & Personal Care</option>
                        <option>Home</option>
                        <option>Toys</option>
                    </Form.Control>
                </Form.Group>
                <Button type="reset" vairant="outline-dark">
                    Reset
                </Button>
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        sendProduct()
                        id && postImg()
                    }}
                    variant="primary" type="submit">
                    Submit
                </Button>
            </Form >
        </Container >
    )
}

export default withRouter(NewProduct)