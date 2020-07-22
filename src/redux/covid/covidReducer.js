import {
  FETCH_COVID_REQUEST,
  FETCH_COVID_FAILURE,
  FETCH_COVID_SUCCESS
} from './covidTypes'

const initialState = {
  loading: null,
  data: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COVID_REQUEST: return {
      ...state,
      loading: true
    }

    case FETCH_COVID_FAILURE: return {
      loading: false,
      data: [],
      error: action.payload
    }

    case FETCH_COVID_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: ''
    }

    default: return state
  }
}

export default reducer
