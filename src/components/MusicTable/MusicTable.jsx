const MusicTable = ({}) => {
  const labels = ["Title", "Artist", "Album", "Genre", "Release Date"];
  const labelItems = labels.map((label, i) => <div key={i}>{label}</div>);
  return (
    <div>
      <div>{labelItems}</div>
    </div>
  );
};

export default MusicTable;
