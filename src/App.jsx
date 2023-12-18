import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import AddSongForm from "./components/AddSongForm/AddSongForm";

function App() {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7257/api/Songs");
      // console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchSongs request: ", error);
    }
  };
  const handleDelete = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  useEffect(() => {
    const results = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.releaseDate.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(results);
  }, [songs, searchTerm]);
  useEffect(() => {
    fetchSongs();
  }, []);
  const updateSong = (updatedSong) => {
    setSongs(
      songs.map((song) => (song.id === updatedSong.id ? updatedSong : song))
    );
  };
  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <div className="flex-container">
        <MusicTable
          songs={filteredSongs}
          onDelete={handleDelete}
          onUpdate={updateSong}
        />
        <AddSongForm onNewSong={fetchSongs} />
      </div>
    </div>
  );
}

export default App;
