import countries from '../../assets/data/countriesList.json'

let countryList = JSON.parse(JSON.stringify(countries));
const initialState = {
  countries: countryList.countries
  // countries: countries
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
}

export default reducer;
