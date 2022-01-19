import {
  COUNTRIES_LIST_REQUEST,
  COUNTRIES_LIST_SUCCESS,
  COUNTRIES_LIST_FAIL,
  COUNTRY_DETAILS_REQUEST,
  COUNTRY_DETAILS_SUCCESS,
  COUNTRY_DETAILS_FAIL,
} from '../constants/action-types'

export const countriesListReducer = (
  state = {
    countries: [],
  },
  { type, payload }
) => {
  switch (type) {
    case COUNTRIES_LIST_REQUEST:
      return { countries: [] }
    case COUNTRIES_LIST_SUCCESS:
      return {
        ...state,
        countries: payload,
      }
    case COUNTRIES_LIST_FAIL:
      return { error: payload }
    default:
      return state
  }
}

export const countryDetailsReducer = (
  state = { country: [] },
  { type, payload }
) => {
  switch (type) {
    case COUNTRY_DETAILS_REQUEST:
      return { country: [] }
    case COUNTRY_DETAILS_SUCCESS:
      return {
        ...state,
        country: payload,
      }
    case COUNTRY_DETAILS_FAIL:
      return { error: payload }
    default:
      return state
  }
}
