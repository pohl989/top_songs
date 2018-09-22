import React, { Component } from 'react';
import logo from './logo.svg';
import SongForm from './components/SongForm';
import './App.css';
import { Button, Icon, Grid } from 'semantic-ui-react';
import SongList from './components/SongList';


class App extends Component {

  state = { songs: [
    {id: 1, title: "The best Song Ever", artist: "Shania Twain", position_number: 3}, 
    {id: 2, title: "Tasty Treats", artist: "The White Strips", position_number: 2}, 
    {id: 3, title: "Lemon Ginger", artist: "Mamachari", position_number: 1},
  ]}

  componentDidMount() {
    //TODO make a call to our rails server to get Items

  } 
  
  
  addSong = (name) => {
    //TODO make api call to rails server to add item
    const { songs } = this.state;
    //Generate random id
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
    this.setState({ songs: [...songs, { id, name }] });
  }

  deleteSong = (name) => {
    //TODO make api call to delete todo
    //TODO remove it from state
  }

  updateSong = (song) => {
    //TODO make api call to update todo
    //TODO update state
  }

  render() {
    return (
      <div>
        <Grid divided='vertically'>
        <Grid.Row columns={6}>
          <Grid.Column>
            < SongForm 
              addSong={this.addSong}
            />
          </Grid.Column>
          <Grid.Column>
            <Button color='blue' size='mini' fluid >Click Click</Button>
          </Grid.Column>
        </Grid.Row>
    
        <Grid.Row columns={1}>
          <Grid.Column>
            <SongList 
              songs={this.state.songs}
              updateSong={this.updateSong} 
              deleteSong={this.deleteSong}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    

    );
  }
}

export default App;
