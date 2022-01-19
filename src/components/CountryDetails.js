import React, { useEffect } from 'react'
import axios from 'axios'
import { Grid, Segment, Image } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import { listCountryDetails } from '../redux/actions/countriesActions'
import { Button, Icon } from 'semantic-ui-react'

const CountryDetails = () => {
  const { country } = useParams()
  let countryDetails = useSelector((state) => state.selectedCountry.country)
  const dispatch = useDispatch()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCountryDetail = async (countryName) => {
    const response = await axios
      .get(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
      .catch((err) => {
        console.log('Err: ', err)
      })
    dispatch(listCountryDetails(response.data))
  }

  useEffect(() => {
    if (country && country !== '') fetchCountryDetail(country)
  }, [country, fetchCountryDetail])

  return (
    <div className='ui grid container'>
      <Header />
      <Button
        icon
        labelPosition='left'
        as={Link}
        to='/'
        style={{ marginLeft: '25px' }}
      >
        <Icon name='long arrow alternate left' />
        Back
      </Button>
      {countryDetails.length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Grid stackable columns={2} container>
          <Grid.Column>
            <Segment>
              <Image src={countryDetails[0].flags.svg} fluid />
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <h1>{countryDetails[0].name}</h1>
              <Grid columns={2} style={{ margin: '10px 0 10px 0' }}>
                <Grid.Column>
                  <h4>
                    <b>Native Name:</b> {countryDetails[0].nativeName}
                  </h4>
                  <h4>
                    <b>Population:</b> {countryDetails[0].population}
                  </h4>
                  <h4>
                    <b>Region:</b> {countryDetails[0].region}
                  </h4>
                  <h4>
                    <b>Sub Region:</b> {countryDetails[0].subregion}
                  </h4>
                  <h4>
                    <b>Capital:</b> {countryDetails[0].capital}
                  </h4>
                </Grid.Column>
                <Grid.Column>
                  <h4>
                    <b>Top Level Domain:</b> {countryDetails[0].topLevelDomain}
                  </h4>
                  <h4>
                    <b>Currencies:</b> {countryDetails[0].currencies[0].name}
                  </h4>
                  <h4>
                    <b>Languages:</b>{' '}
                    {countryDetails[0].languages.map((val) => (
                      <span>{val.name} </span>
                    ))}
                  </h4>
                </Grid.Column>
              </Grid>
              <h4>
                <b>Border Countries: </b>{' '}
                {countryDetails[0].borders.map((val) => (
                  <span>{val} </span>
                ))}
              </h4>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
    </div>
  )
}

export default CountryDetails
