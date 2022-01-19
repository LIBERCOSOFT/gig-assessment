import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CountryComponent = ({ searchQuery, filterQuery }) => {
  const countries = useSelector((state) => state.allCountries.countries)

  let filtered = []

  let checkSearchQuery = (value) => {
    let countryName = value.name.toLowerCase()
    return countryName.includes(searchQuery)
  }
  filtered = countries.filter(checkSearchQuery)

  if (filterQuery) {
    let checkFilterQuery = (value) => {
      let countryRegion = value.region.toLowerCase()
      return countryRegion.includes(filterQuery)
    }
    filtered = filtered.filter(checkFilterQuery)
  }

  const renderList = filtered.map((country, i) => {
    const { svg } = country.flags
    const { name, population, region, capital } = country
    return (
      <div className='four wide column' key={i}>
        <Link to={`/country/${name}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={svg} alt='country flag' />
              </div>
              <div className='content'>
                <div className='header'>
                  <b>{name}</b>
                </div>
                <div className='meta price'>
                  Population: {population.toLocaleString()}
                </div>
                <div className='meta'>
                  {' '}
                  <b>Region:</b> {region}
                </div>
                <div className='meta'>
                  {' '}
                  <b>Capital:</b> {capital}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })
  return <>{renderList}</>
}

export default CountryComponent
