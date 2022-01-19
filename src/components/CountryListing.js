import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCountries } from '../redux/actions/countriesActions'
import CountryComponent from './CountryComponent'
import Header from './Header'
import CountrySorting from './CountrySorting'

const CountriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  // const countries = useSelector((state) => state.allCountries.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCountries())
  }, [dispatch])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }
  const handleFilter = (event, data) => {
    setFilterQuery(data.value)
  }
  return (
    <>
      <Header />
      <CountrySorting handleSearch={handleSearch} handleFilter={handleFilter} />
      <div className='ui grid container'>
        <CountryComponent searchQuery={searchQuery} filterQuery={filterQuery} />
      </div>
    </>
  )
}

export default CountriesPage
