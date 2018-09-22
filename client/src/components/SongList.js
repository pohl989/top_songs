import React from 'react'
import Song from './Song'
import { List, Container } from 'semantic-ui-react';



const SongList = ({songs, updateSong, deleteSong}) => (
  <div className="row">
  <Container>
    <List divided relaxed>

    { songs.map( single => 
      <Song
        key={single.id}
        {...single}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    )}
    </List>
  </Container>
  </div>
)

export default SongList;
