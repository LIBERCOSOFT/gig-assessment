import axios from 'axios'
import {
  COUNTRIES_LIST_REQUEST,
  COUNTRIES_LIST_SUCCESS,
  COUNTRIES_LIST_FAIL,
  COUNTRY_DETAILS_REQUEST,
  COUNTRY_DETAILS_SUCCESS,
  COUNTRY_DETAILS_FAIL,
} from '../constants/action-types'

export const listCountries = () => async (dispatch) => {
  try {
    dispatch({ type: COUNTRIES_LIST_REQUEST })

    const { data } = await axios.get(`https://restcountries.com/v2/all`)

    dispatch({
      type: COUNTRIES_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COUNTRIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listCountryDetails = (countryDetails) => {
  return async (dispatch) => {
    try {
      dispatch({ type: COUNTRY_DETAILS_REQUEST })

      dispatch({
        type: COUNTRY_DETAILS_SUCCESS,
        payload: countryDetails,
      })
    } catch (error) {
      dispatch({
        type: COUNTRY_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
}
