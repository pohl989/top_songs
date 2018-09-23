import React, {Component} from 'react'
import { Form, Button } from 'semantic-ui-react';


class SongForm extends Component {
  state = { 
    title: '',
    artist: ''
 }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleArtistChange = (e) => {
    this.setState({ artist: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.title, this.state.artist);
    this.setState({ title: '' })
    this.setState({ artist: '' })
    document.getElementById("bestInputEver").focus();
  }

  render() {
    return (
      <div id="fancy-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Song Title</label>
            <input 
              id="bestInputEver"
              placeholder='Song Title' 
              required
              autoFocus
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Artist</label>
            <input 
              required
              placeholder='Artist' 
              value={this.state.artist}
              onChange={this.handleArtistChange}
            />
          </Form.Field>
          <Button type='submit' color="pink" >Submit</Button>
        </Form>
      </div>
    )
  }
}



export default SongForm;