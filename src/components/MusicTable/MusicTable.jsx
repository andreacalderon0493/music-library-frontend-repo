const MusicTable = ({ songs = [] }) => {
  console.log(songs);
  const songItems = songs.map((song, i) => <tr key={i}>{song.title}</tr>);
  return (
    <div>
      <table className="table flex-item">
        <thead>
          <tr>
            <td>{songs.title}</td>
            <td>{songs.artist}</td>
            <td>Album</td>
            <td>Genre</td>
            <td>Release Date</td>
          </tr>
        </thead>
      </table>
      <tbody>{songItems}</tbody>
    </div>
  );
};

export default MusicTable;
