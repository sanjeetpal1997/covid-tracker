import axios from 'axios'
import {
  FETCH_COVID_REQUEST,
  FETCH_COVID_FAILURE,
  FETCH_COVID_SUCCESS
} from './covidTypes'

export const fetchCovidRequest = () => {
  return {
    type: FETCH_COVID_REQUEST
  }
}

export const fetchCovidSuccess = (data) => {
  return {
    type: FETCH_COVID_SUCCESS,
    payload: data
  }
}

export const fetchCovidFailure = (error) => {
  return {
    type: FETCH_COVID_FAILURE,
    payload: error
  }
}
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const fetchCovidData = (code) => {
  return (dispatch) => {
    dispatch(fetchCovidRequest())
    axios(`https://cors-anywhere.herokuapp.com/https://corona-api.com/countries/${code}`)
    .then(response => {
      // const users = response.data
      dispatch(fetchCovidSuccess(response.data.data))
    })
    .catch(error => {
      dispatch(fetchCovidFailure(error.message))
    })
  }
}
