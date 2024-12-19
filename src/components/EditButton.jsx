import Edit from "../assets/icon-edit.svg?react";
import Form from "./Form";
function EditButton({ film, setModalID, modalID }) {
  
  return (
    <>
      <div className="edit-button">
        <button
          className="edit-icon"
          onClick={() => {
            setModalID(film.id);
          }}
        >
          <Edit />
        </button>
      </div>

      {modalID == film.id && (
        <dialog open className="modal">
          <div className="modal-box bg-dark text-center">
            <Form film={film} />
            <form method="dialog">
              <button
                className="btn bg-[#5A698F] w-32"
                onClick={() => {
                  setModalID("");
                }}
              >
                Close
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}

export default EditButton;
