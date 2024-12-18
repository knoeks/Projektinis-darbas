import Edit from "../assets/icon-edit.svg?react";
function EditButton({ film }) {

     return (
     <>
          <div className="delete-button">
              <button className="delete-icon"
              onClick={() => document.getElementById("my_modal_2").showModal()}><Edit/>
              </button>
              </div>
            <dialog id="my_modal_2" className="modal ">
              <div className="modal-box bg-dark text-center">
                <h3 className="text-white font-outfit text-heading-m">Edit movie</h3>
                  Cia musu edit forma
                <div className="grid grid-cols-2 place-items-center">
                  <button className="btn bg-red w-32">
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

export default EditButton;