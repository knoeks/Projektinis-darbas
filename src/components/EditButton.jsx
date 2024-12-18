import Edit from "../assets/icon-edit.svg?react";
import { useState } from "react";
function EditButton({ film }) {
const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setFilmToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



     return (
     <>
          <div className="edit-button">
              <button className="edit-icon"
              onClick={() => document.getElementById("my_modal_2").showModal()}><Edit/>
              </button>
              </div>
            <dialog id="my_modal_2" className="modal ">
              <div className="modal-box bg-dark text-center">
                <h3 className="text-white font-outfit text-heading-m">Edit movie</h3>
                  Cia musu edit forma
                <div className="grid grid-cols-2 place-items-center">
                  <button className="btn bg-red w-32">
                    Submit
                    </button>
                  <form method="dialog">
                  <button className="btn bg-[#5A698F] w-32" onClick={closeModal}>
                  Close
                  </button>
                  </form>
                </div>
              </div>
            </dialog>
     </>
        );
}

export default EditButton;