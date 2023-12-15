import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import AddSongForm from "./components/AddSongForm/AddSongForm";

function App() {
  const [songs, setSongs] = useState([]);

  const handleNewSong = (newSong) => {
    const updatedSongs = [...songs, newSong];
    setSongs(updatedSongs);
  };
  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7257/api/Songs");
      console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchSongs request: ", error);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="flex-container">
        <MusicTable songs={songs} />
        <AddSongForm onNewSong={handleNewSong} />
      </div>
    </div>
  );
}

export default App;
