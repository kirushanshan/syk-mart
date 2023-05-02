import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Form, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../commponents/FormContainer'
import CheckoutSteps from '../commponents/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartAction'

const PaymentPage = ({ history }) => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymemtMethod, setPaymemtMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymemtMethod))
    navigate('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Creditcard"
              id="PayPal"
              name="paymemtMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymemtMethod(e.target.value)}
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymemtMethod"
              value="Stripe"
              onChange={(e) => setPaymemtMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage
