import React, {Component} from 'react'

class SongForm extends React.Component {
  state = { title: '' }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add A Song Title"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          placeholder="Don't forget the artist"
        />
      </form>
    )
  }
}



export default SongForm;