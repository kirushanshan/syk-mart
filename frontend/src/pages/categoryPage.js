import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../actions/categoryAction'
import Message from '../commponents/message'
import Loader from '../commponents/loader'
import { Button, Form, Row, Col } from 'react-bootstrap'
import FormContainer from '../commponents/FormContainer'

const ManageCategoryPage = () => {
  const [categoryName, setCategoryName] = useState('')
  const [message, setMessage] = useState(null)

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createCategory = useSelector((state) => state.createCategory)
  const { loading, error, categoryInfo } = createCategory

  useEffect(() => {})

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(categoryName)
    dispatch(addCategory(categoryName))
  }

  return (
    <FormContainer>
      <h1>Create Category</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="categoryName"
            placeholder="Enter Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Create
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ManageCategoryPage
