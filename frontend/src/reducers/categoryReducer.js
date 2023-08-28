import {
  BRAND_CREATE_FAIL,
  BRAND_CREATE_REQUEST,
  BRAND_CREATE_SUCCESS,
  BRAND_LIST_FAIL,
  BRAND_LIST_REQUEST,
  BRAND_LIST_RESET,
  BRAND_LIST_SUCCESS,
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_LISt_FAIL,
  CATEGORY_LISt_REQUEST,
  CATEGORY_LISt_RESET,
  CATEGORY_LISt_SUCCESS,
} from '../constrants/productConstrants'

export const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CREATE_REQUEST:
      return { loading: true }

    case CATEGORY_CREATE_SUCCESS:
      return { loading: false, categoryInfo: action.payload }

    case CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

// get category list
export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LISt_REQUEST:
      return { loading: true }
    case CATEGORY_LISt_SUCCESS:
      return { loading: false, categories: action.payload }
    case CATEGORY_LISt_FAIL:
      return { loading: false, error: action.payload }
    case CATEGORY_LISt_RESET:
      return { categories: [] }
    default:
      return state
  }
}

// brand

export const createBrandReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_CREATE_REQUEST:
      return { loading: true }

    case BRAND_CREATE_SUCCESS:
      return { loading: false, brandInfo: action.payload }

    case BRAND_CREATE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

// brand list
export const brandListReducer = (state = { brands: [] }, action) => {
  switch (action.type) {
    case BRAND_LIST_REQUEST:
      return { loading: true }
    case BRAND_LIST_SUCCESS:
      return { loading: false, brands: action.payload }
    case BRAND_LIST_FAIL:
      return { loading: false, error: action.payload }
    case BRAND_LIST_RESET:
      return { brands: [] }
    default:
      return state
  }
}
