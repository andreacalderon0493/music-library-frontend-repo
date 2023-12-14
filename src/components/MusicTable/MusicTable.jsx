const MusicTable = ({}) => {
  const songs = [];
  const songItems = songs.map((song, i) => <div key={i}>{song}</div>);
  return (
    <div>
      <tr>
        <td>Title</td>
        <td>Artist</td>
        <td>Album</td>
        <td>Genre</td>
        <td>Release Date</td>
      </tr>
    </div>
  );
};

export default MusicTable;
