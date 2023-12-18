import React, { useState } from "react";
import axios from "axios";
import "./AddSongForm.css";

const AddSongForm = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      genre,
      releaseDate,
    };
    try {
      const response = await axios.post(
        "https://localhost:7257/api/Songs",
        formData
      );
      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("Error submitting new Song form: ", error);
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form flex-item ">
      <h4>Add Song</h4>
      <div>
        <label> Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label> Artist</label>
        <input value={artist} onChange={(e) => setArtist(e.target.value)} />
      </div>
      <div>
        <label> Album</label>
        <input value={album} onChange={(e) => setAlbum(e.target.value)} />
      </div>
      <div>
        <label> Genre</label>
        <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div>
        <label> Release Date</label>
        <input
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          type="date"
        />
      </div>
      <button className="form-button" type="submit">
        Add Song
      </button>
    </form>
  );
};

export default AddSongForm;
