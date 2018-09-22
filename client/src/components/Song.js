import React from 'react'
import { List } from 'semantic-ui-react';



const Song = ({ title, artist, position_number, updateSong, deleteSong }) => (
  <div>

    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header >{title}</List.Header>
        <List.Description >by: {artist}</List.Description>
      </List.Content>
    </List.Item>
  </div>

)

export default Song;