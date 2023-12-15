import React from "react";

const MusicRow = ({ music }) => {
  return (
    <tr>
      <td>{music.title}</td>
      <td>{music.artist}</td>
      <td>{music.album}</td>
      <td>{music.genre}</td>
      <td>{music.releaseDate}</td>
      <button type="button" class="btn btn-primary">
        Like
      </button>
      {/* <td>{music.like}</td> */}
      <td>{music.playlist}</td>
    </tr>
  );
};

export default MusicRow;
