import axios from 'axios'

import {
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_FAIL,
  BRAND_CREATE_SUCCESS,
  BRAND_CREATE_REQUEST,
  BRAND_CREATE_FAIL,
  CATEGORY_LISt_REQUEST,
  CATEGORY_LISt_SUCCESS,
  CATEGORY_LISt_FAIL,
  BRAND_LIST_REQUEST,
  BRAND_LIST_SUCCESS,
  BRAND_LIST_FAIL,
} from '../constrants/productConstrants'

export const addCategory = (categoryName) => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_CREATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/category', { categoryName }, config)

    dispatch({
      type: CATEGORY_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CATEGORY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// get Category List
export const listCategory = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CATEGORY_LISt_REQUEST,
    })

    const config = {
      headers: {},
    }

    const { data } = await axios.get(`/api/category`, config)

    dispatch({
      type: CATEGORY_LISt_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CATEGORY_LISt_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// brand
export const addBrand = (brandName) => async (dispatch) => {
  try {
    dispatch({
      type: BRAND_CREATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/brand', { brandName }, config)

    dispatch({
      type: BRAND_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BRAND_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//get brand list
export const listBrand = () => async (dispatch) => {
  try {
    dispatch({
      type: BRAND_LIST_REQUEST,
    })

    const config = {
      headers: {},
    }

    const { data } = await axios.get(`/api/brand`, config)

    dispatch({
      type: BRAND_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BRAND_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
