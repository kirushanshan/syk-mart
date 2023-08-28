import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addBrand } from '../actions/categoryAction'
import Message from '../commponents/message'
import Loader from '../commponents/loader'
import { Button, Form, Row, Col } from 'react-bootstrap'
import FormContainer from '../commponents/FormContainer'

const ManageBrandPage = () => {
  const [brandName, setBrandName] = useState('')
  const [message, setMessage] = useState(null)

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createBrand = useSelector((state) => state.createBrand)
  const { loading, error, brandInfo } = createBrand

  useEffect(() => {})

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(brandName)
    dispatch(addBrand(brandName))
  }

  return (
    <FormContainer>
      <h1>Create Brand</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>brandName</Form.Label>
          <Form.Control
            type="brandName"
            placeholder="Enter brandName"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Create Brand
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ManageBrandPage
