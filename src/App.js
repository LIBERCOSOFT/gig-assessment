import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CountryListing from './components/CountryListing'
import './App.css'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={CountryListing} />
          <Route path='/country/:country' component={CountryDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
