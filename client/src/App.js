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
    let song = { title, artist };
    fetch('/api/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(song)
    }).then( res => res.json() )
      .then( song => {
        const { songs } = this.state;
        this.setState({ songs: [...songs, song] });
    })
  }

  deleteSong = (e) => {
    let id = e.target.id
    fetch(`/api/songs/${id}`, { method: 'DELETE' })
      .then( () => {
        const { songs } = this.state;
        this.setState({ songs: songs.filter( t => t.id !== id ) })
      })
    this.componentDidMount()
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
