import { deleteOne } from "../helpers/delete.js";
import { useOutletContext } from "react-router";
import Delete from "../assets/icon-delete.svg?react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteButton({ film}){
  const { setAllFilms } = useOutletContext();
  const { id } = film;

  const handleDelete = async () => {

    try {
      await deleteOne(id);
      setAllFilms((prevFilms) => prevFilms.filter((film) => film.id !== id));
      toast.success("Film deleted successfully!",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      setTimeout(() => {
        navigate("/admin")
      }, 3000);
    } catch (error) {
      console.error("Error deleting the film:", error);
      alert("An error occurred while deleting the film. Please try again.");
    }
  };

  return (<>
    <div className="delete-button">
    <button className="delete-icon"
    onClick={() => document.getElementById("my_modal_4").showModal()}><Delete/>
    </button>
    </div>
  <dialog id="my_modal_4" className="modal ">
    <div className="modal-box bg-dark text-center">
      <h3 className="text-white font-outfit text-heading-m">Delete</h3>
      <p className="py-4 text-white font-outfit text-body-m">
        Ar you sure want to delete?
      </p>
      <div className="grid grid-cols-2 place-items-center">
        <button className="btn bg-red w-32" onClick={handleDelete}>
          Delete
          </button>
        <form method="dialog">
          <button className="btn bg-[#5A698F] w-32">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  <ToastContainer />
  </>
  );
}

export default DeleteButton;