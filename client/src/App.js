import React, { Component } from 'react';
import logo from './logo.svg';
import SongForm from './components/SongForm';
import './App.css';
import { Header, Grid, Container } from 'semantic-ui-react';
import SongList from './components/SongList';


class App extends Component {

  state = { songs: [
    {id: 1, title: "The best Song Ever", artist: "Shania Twain", position_number: 3}, 
    {id: 2, title: "Tasty Treats", artist: "The White Stripes", position_number: 2}, 
    {id: 3, title: "Lemon Ginger", artist: "Mamachari", position_number: 1},
  ]}

  componentDidMount() {
    fetch('/api/songs')
      .then( res => res.json() )
      .then( songs => this.setState({ songs }) )
  }

  
  
  addSong = (title, artist) => {
    //TODO make api call to rails server to add item
    const { songs } = this.state;
    //Generate random id
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
    this.setState({ songs: [...songs, { id, title, artist }] });
  }

  deleteSong = (name) => {
    console.log('delete delete')
    const { songs } = this.state;
    // this.setState({ songs: songs.filter( t => t.id !== id ) })
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
          <Grid.Row columns={2}>
            <Container className="cool-title">
              <Header as='h1'>Best Songs Ever</Header>
            </Container>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              < SongForm 
                addSong={this.addSong}
              />
            </Grid.Column>
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
