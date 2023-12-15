import MusicRow from "../MusicRow/MusicRow";

const MusicTable = ({ songs = [] }) => {
  console.log(songs);
  const songItems = songs.map((song, i) => <MusicRow key={i} music={song} />);
  return (
    <div>
      <table className="table flex-item">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Like</th>
            <th>Playlist</th>
          </tr>
        </thead>
        <tbody>{songItems}</tbody>
      </table>
    </div>
  );
};

export default MusicTable;
