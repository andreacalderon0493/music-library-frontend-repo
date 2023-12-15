import React from "react";

const MusicRow = ({ music }) => {
  return (
    <tr>
      <td>{music.title}</td>
      <td>{music.artist}</td>
      <td>{music.album}</td>
      <td>{music.genre}</td>
      <td>{music.releaseDate}</td>
      <td>{music.like}</td>
      <td>{music.playlist}</td>
    </tr>
  );
};

export default MusicRow;
