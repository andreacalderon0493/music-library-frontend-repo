import axios from "axios";
import { useState } from "react";
import Modal from "../Modal/Modal";
import UpdateForm from "../UpdateForm/UpdateForm";

const MusicRow = ({ music, onDelete, onUpdate }) => {
  const [isModalOpen, setIsModelOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:7257/api/Songs/${music.id}`);
      onDelete(music.id);
    } catch (error) {
      console.warn("Error in delete request: ", error);
    }
  };
  const handleUpdate = () => {
    setIsModelOpen(true);
  };

  return (
    <tr>
      <td>{music.title}</td>
      <td>{music.artist}</td>
      <td>{music.album}</td>
      <td>{music.genre}</td>
      <td>{music.releaseDate}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
      <td>
        <button onClick={handleUpdate}>Update</button>
      </td>
      <Modal isOpen={isModalOpen} onClose={() => setIsModelOpen(false)}>
        <UpdateForm
          song={music}
          onClose={() => setIsModelOpen(false)}
          onUpdate={onUpdate}
        />
      </Modal>

      {/* <td>{music.like}</td> */}
      {/* <td>{music.playlist}</td> */}
    </tr>
  );
};

export default MusicRow;
