import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card, Image, Grid, Segment } from 'semantic-ui-react'

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
      <>
        <Link to={`/country/${name}`}>
          <Card>
            <Image src={svg} alt='country flag' style={{ height: '150px' }} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <p>
                <b>Population:</b> {population.toLocaleString()}
              </p>
              <p>
                <b>Region:</b> {region}
              </p>
              <p>
                <b>Capital:</b> {capital}
              </p>
            </Card.Content>
          </Card>
        </Link>
      </>
    )
  })
  return (
    <>
      <Grid columns={4} container doubling stackable>
        {renderList.map((val) => (
          <Grid.Column>
            <Segment>{val}</Segment>
          </Grid.Column>
        ))}
      </Grid>
    </>
  )
}

export default CountryComponent
