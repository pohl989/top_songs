import React from 'react'
import { List, Button } from 'semantic-ui-react';



const Song = ({ title, artist, position_number, updateSong, deleteSong }) => (

    <List.Item>
      <List.Content floated='right'>
         <Button circular color='red' icon='delete' onClick={deleteSong} />
      </List.Content>
      <List.Icon name='music' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header >{title}</List.Header>
        <List.Description >by: {artist}</List.Description>
      </List.Content>
    </List.Item>
)

export default Song;