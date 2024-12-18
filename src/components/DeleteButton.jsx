import { useState } from "react";
import { useOutletContext } from "react-router";
import { deleteOne } from "../helpers/delete";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Delete from "../assets/icon-delete.svg?react";

function DeleteButton({ film }) {
  const { setAllFilms } = useOutletContext();
  const { id } = film; 

  const [filmToDelete, setFilmToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setFilmToDelete(id);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!filmToDelete) {
      return;
    }

    try {
      await deleteOne(filmToDelete);
      setAllFilms((prevFilms) => prevFilms.filter((film) => film.id !== filmToDelete));
      toast.success("Film deleted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error during deletion:", error);
      toast.error("An error occurred while deleting the film. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="delete-button">
        <button className="delete-icon" onClick={openModal} aria-label="Delete film">
          <Delete />
        </button>
      </div>
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box bg-dark text-center">
            <h3 className="text-white font-outfit text-heading-m">Delete</h3>
            <p className="py-4 text-white font-outfit text-body-m">
              Are you sure you want to delete this film?
            </p>
            <div className="grid grid-cols-2 place-items-center">
              <button className="btn bg-red w-32" onClick={handleDelete}>
                Delete
              </button>
              <button className="btn bg-[#5A698F] w-32" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

      <ToastContainer />
    </>
  );
}

export default DeleteButton;