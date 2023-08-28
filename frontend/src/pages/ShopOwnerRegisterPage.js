import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../commponents/message'
import Loader from '../commponents/loader'
import FormContainer from '../commponents/FormContainer'
import { registerShop } from '../actions/userAction'

const ShopOwnerRegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [shopDetails, setShopDetails] = useState(null)
  const [registerNumber, setRegisterNumber] = useState(null)
  // const [image, setImage] = useState(null)
  const [message, setMessage] = useState(null)

  const location = useLocation()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const shopRegister = useSelector((state) => state.shopRegister)
  const { loading, error, userInfo } = shopRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password != confirmPassword) {
      setMessage('Password does not match')
    } else {
      dispatch(
        registerShop(
          name,
          email,
          password,
          shopDetails,
          registerNumber
          // image
        )
      )
    }
  }

  return (
    <FormContainer>
      <h1>Register Shop-Owner</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="registerNumber">
          <Form.Label>Register Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter RegisterNumber"
            value={registerNumber}
            onChange={(e) => setRegisterNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="shopDetails">
          <Form.Label>shopDetails</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter shopDetails"
            value={shopDetails}
            onChange={(e) => setShopDetails(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* <Form.Group controlId="image">
          <Form.Label>image url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
        </Form.Group> */}

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register ShopOwner
        </Button>
      </Form>
      {/* 
      <Row className="py-3">
        <Col>
          Have An Account ? {''}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row> */}
    </FormContainer>
  )
}

export default ShopOwnerRegisterPage
