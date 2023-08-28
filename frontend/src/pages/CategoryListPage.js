import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../commponents/message'
import Loader from '../commponents/loader'
// import { listUsers, deleteUsers } from '../actions/userAction'
import { listCategory } from '../actions/categoryAction'

const CategoryListPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, categories } = categoryList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    dispatch(listCategory())
  }, [userInfo, successDelete, dispatch, navigate])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      //   dispatch(deleteUsers(id))
    }
  }

  return (
    <>
      <h1>Items Categories</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th> Categories Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id}>
                <td>{category._id}</td>
                <td>{category.name}</td>
                <td>
                  <LinkContainer to={`/admin/user/${category._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => {
                      deleteHandler(category._id)
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default CategoryListPage
