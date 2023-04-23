import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../commponents/Product.component'
import { listProducts } from '../actions/productAction'

const HomePage = () => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch] )
  


  return (
    <>
    <h1>Latest Products</h1>
    {loading ? <h2>loading</h2> : error ? <h3>{error}</h3> :  
    <Row>
        {products.map(product => (
            <Col key={product._id}  sm={12} md={6} lg={4} xl={3}>
                <Product product={product} /> 
            </Col>
        ))}
    </Row>
    }
    </>
  )
}

export default HomePage
