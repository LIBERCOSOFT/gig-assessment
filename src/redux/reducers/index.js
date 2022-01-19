import { combineReducers } from "redux";
import {countriesListReducer, countryDetailsReducer} from './countriesReducer'
const reducers = combineReducers({
  allCountries: countriesListReducer,
  selectedCountry: countryDetailsReducer,
});
export default reducers;
