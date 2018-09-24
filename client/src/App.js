import React, { Component } from 'react';
import Pohl989Logo from './Pohl989Logo-1.png';
import SongForm from './components/SongForm';
import './App.css';
import { Header, Grid, Container, Image } from 'semantic-ui-react';
import SongList from './components/SongList';


class App extends Component {

  state = { songs: [
    {id: 1, title: "The best Song Ever", artist: "Cool Artist", position_number: 3, isEditing: false}, 
    {id: 2, title: "Another Great Song", artist: "Sum42", position_number: 2, isEditing: false}, 
    {id: 3, title: "Lemon Ginger", artist: "Mamachari", position_number: 1, isEditing: false},
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

  deleteSong = (id) => {
    fetch(`/api/songs/${id}`, { method: 'DELETE' })
      .then( () => {
        const { songs } = this.state;
        this.setState({ songs: songs.filter( t => t.id !== id ) })
      })
    this.componentDidMount()
   }

   updateSong = (id) => {
    fetch(`/api/songs/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( item => {
        let songs = this.state.songs.map( t => {
          if (t.id === id)
            return item
          return t;
      });
      this.setState({ songs });
    })
  }

  render() {
    return (
      <div>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Container className="cool-title">
              <img src={Pohl989Logo} className="App-logo" alt="logo" />
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
