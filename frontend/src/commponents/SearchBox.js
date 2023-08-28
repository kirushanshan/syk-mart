import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`search/${keyword}`)
    } else {
      navigate(`/`)
    }
  }

  // return (
  //   <Form onSubmit={submitHandler} inline>
  //     <Form.Control
  //       type="text"
  //       name="q"
  //       onChange={(e) => setKeyword(e.target.value)}
  //       placeholder="search products..."
  //       className="mr-sm-2 ml-sm-5"
  //     ></Form.Control>
  //     <button type="submit" variant="outline-success" className="p-2">
  //       Search
  //     </button>
  //   </Form>
  // )

  return (
    <Form onSubmit={submitHandler}>
      <div className="d-flex">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search products..."
          className="mr-sm-2 ml-sm-5"
        />
        <Button type="submit" variant="outline-success" className="p-2">
          Search
        </Button>
      </div>
    </Form>
  )
}

export default SearchBox
