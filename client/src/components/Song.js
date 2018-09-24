import React from 'react'
import { List, Button, Icon } from 'semantic-ui-react';



class Song extends React.Component {
  
  state = {isEditing: false}

  toggleState(){
    const { isEditing } = this.state;
    this.setState({
      isEditing:!isEditing
    })
  }

  editSong(){
    this.setState({
      isEditing: true 
    })
  }



  updateTodo = (id) => {

  }
  
  renderSong = () =>  {
    const { title, id, artist, position_number, deleteSong } = this.props;
    return (
      <List.Item>
        <List.Content floated='left'>
          <h3 class="position-number">{id}</h3>
        </List.Content>
        <List.Content floated='right'>
          <Button circular color='blue' icon='pencil' onClick={() => this.editSong(id)}/>
          <Button circular color='red' icon='delete' onClick={() => deleteSong(id)}/>
        </List.Content>
        <List.Icon name='music' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header >{title}</List.Header>
          <List.Description >by: {artist}</List.Description>
        </List.Content>
      </List.Item>
    )
  }

  renderEdit = () =>  {
    const { title, id, artist, position_number, updateSong, } = this.props;
    return (
      <List.Item>
        <List.Content floated='left'>
          <h3 class="position-number">EDIT</h3>
        </List.Content>
        <List.Content floated='right'>
          <Button circular color='blue' icon='pencil' onClick={() => updateSong(id)}/>
        </List.Content>
        <List.Icon name='music' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header >{title}</List.Header>
          <List.Description >by: {artist}</List.Description>
        </List.Content>
      </List.Item>
    )
  }



  render() {
    return( this.state.isEditing ? this.renderEdit() : this.renderSong())
  }
}
export default Song;