import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const Header = () => {
  return (
    <>
      <Grid stackable columns={2} container style={{ 'padding-top': '5px' }}>
        <Grid.Column>
          <h2>Where in the World?</h2>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Button icon labelPosition='left'>
            <Icon name='moon outline' />
            Dark Mode
          </Button>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Header
