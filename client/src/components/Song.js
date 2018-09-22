import React from 'react'


const Song = ({ title, artist, position_number, updateSong, deleteSong }) => (
  <div>
    <p>{title}</p>
    <p>{artist}</p>
    <p>{position_number}</p>
  </div>

)

export default Song;