import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon, Grid } from 'semantic-ui-react'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <Grid divided='vertically'>
      <Grid.Row columns={6}>
        <Grid.Column>
        <Button color='purple' size='mini' fluid >Click Click</Button>
        </Grid.Column>
        <Grid.Column>
        <Button color='blue' size='mini' fluid >Click Click</Button>
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row columns={3}>
        <Grid.Column>
        <Button color='green' size='mini' fluid >Click Click</Button>
        </Grid.Column>
        <Grid.Column>
        <Button color='pink' size='mini' fluid >Click Click</Button>
        </Grid.Column>
        <Grid.Column>
        <Button color='red' size='mini' fluid >Click Click</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    

    );
  }
}

export default App;
