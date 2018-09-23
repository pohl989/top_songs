import React from 'react'
import { List, Button } from 'semantic-ui-react';



const Song = ({ title, id, artist, position_number, updateSong, deleteSong }) => (

    <List.Item>
      <List.Content floated='right'>
         <Button id={id} circular color='red' onClick={deleteSong}>X</ Button>
      </List.Content>
      <List.Icon name='music' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header >{title}</List.Header>
        <List.Description >by: {artist}</List.Description>
      </List.Content>
    </List.Item>
)

export default Song;