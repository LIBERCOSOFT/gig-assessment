import React from 'react'
import { Input } from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'

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
      <Input
        icon='search'
        iconPosition='left'
        placeholder='Search a country...'
        onChange={handleSearch}
      />
      <Select
        placeholder='Filter by Region'
        options={countryOptions}
        onChange={handleFilter}
      />
    </>
  )
}

export default CountrySorting
