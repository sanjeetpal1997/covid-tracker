import { combineReducers } from 'redux'
import countriesReducer from './countries/countriesReducer'
import covidReducer from './covid/covidReducer'

const rootReducer = combineReducers({
  countries: countriesReducer,
  covidData: covidReducer
})

export default rootReducer
