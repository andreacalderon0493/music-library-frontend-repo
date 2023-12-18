import { useState } from "react";
import axios from "axios";
import "./UpdateForm.css";

const UpdateForm = ({ song, onClose, onUpdate }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [genre, setGenre] = useState(song.genre);
  const [releaseDate, setReleaseDate] = useState(song.releaseDate);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://localhost:7257/api/Songs/${song.id}`,
        {
          title,
          artist,
          album,
          genre,
          releaseDate,
        }
      );
      onUpdate(response.data);
      onClose();
    } catch (error) {
      console.warn("Error in update request: ", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "artist":
        setArtist(value);
        break;
      case "album":
        setAlbum(value);
        break;
      case "genre":
        setGenre(value);
        break;
      case "releaseDate":
        setReleaseDate(value);
        break;
      default:
        break;
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form flex-item ">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleChange}
      />

      <label htmlFor="artist">Artist:</label>
      <input
        type="text"
        id="artist"
        name="artist"
        value={artist}
        onChange={handleChange}
      />

      <label htmlFor="album">Album:</label>
      <input
        type="text"
        id="album"
        name="album"
        value={album}
        onChange={handleChange}
      />

      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        id="genre"
        name="genre"
        value={genre}
        onChange={handleChange}
      />

      <label htmlFor="releaseDate">Release Date:</label>
      <input
        type="date"
        id="releaseDate"
        name="releaseDate"
        value={releaseDate}
        onChange={handleChange}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
