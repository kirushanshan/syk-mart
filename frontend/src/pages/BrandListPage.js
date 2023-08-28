import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../commponents/message'
import Loader from '../commponents/loader'
// import { listUsers, deleteUsers } from '../actions/userAction'
import { listBrand } from '../actions/categoryAction'

const BrandListPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const brandList = useSelector((state) => state.brandList)
  const { loading, error, brands } = brandList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    dispatch(listBrand())
  }, [userInfo, successDelete, dispatch, navigate])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      //   dispatch(deleteUsers(id))
    }
  }

  return (
    <>
      <h1>Items Brands</h1>
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
            {brands.map((brand) => (
              <tr key={brand._id}>
                <td>{brand._id}</td>
                <td>{brand.name}</td>
                <td>
                  <LinkContainer to={`/admin/user/${brand._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => {
                      deleteHandler(brand._id)
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

export default BrandListPage
