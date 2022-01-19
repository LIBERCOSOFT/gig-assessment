import React from 'react'
import { Input, Select, Grid } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'africa', text: 'Africa' },
  { key: 'am', value: 'america', text: 'America' },
  { key: 'as', value: 'asia', text: 'Asia' },
  { key: 'at', value: 'antartica', text: 'Antartica' },
  { key: 'oc', value: 'oceania', text: 'Oceania' },
]

const CountrySorting = ({ handleSearch, handleFilter }) => {
  return (
    <>
      <Grid stackable columns={2} container>
        <Grid.Column>
          <Input
            icon='search'
            iconPosition='left'
            placeholder='Search a country...'
            onChange={handleSearch}
          />
        </Grid.Column>

        <Grid.Column textAlign='right'>
          <Select
            placeholder='Filter by Region'
            options={countryOptions}
            onChange={handleFilter}
          />
        </Grid.Column>
      </Grid>
    </>
  )
}

export default CountrySorting
