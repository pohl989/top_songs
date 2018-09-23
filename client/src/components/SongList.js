import React from 'react'
import Song from './Song'
import { List, Container } from 'semantic-ui-react';


class SongList extends React.Component {
  render() {
     const {deleteSong, updateSong, songs} = this.props;

    return (
      <div className="row">
        <Container>
          <List celled>
      
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
  }
}

export default SongList;
