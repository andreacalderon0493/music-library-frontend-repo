import MusicRow from "../MusicRow/MusicRow";

const MusicTable = ({ songs = [], onDelete, onUpdate }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const songItems = songs.map((song, i) => (
    <MusicRow
      key={i}
      music={song}
      onDelete={handleDelete}
      onUpdate={onUpdate}
    />
  ));
  return (
    <div>
      <table className="table flex-item ">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            {/* <th>Like</th>
            <th>Playlist</th> */}
          </tr>
        </thead>
        <tbody>{songItems}</tbody>
      </table>
    </div>
  );
};

export default MusicTable;
