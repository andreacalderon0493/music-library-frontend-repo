import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";

function App() {
  const fetchSongs = async () => {
    const response = await axios.get("https://localhost:7257/api/Songs");
    console.log(response);
  };
  return (
    <div className="App">
      <Header />
      <button onClick={fetchSongs}>Fetch Songs</button>
      <MusicTable />
    </div>
  );
}

export default App;
