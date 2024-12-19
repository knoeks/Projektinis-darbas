import Edit from "../assets/icon-edit.svg?react";
//import { useState } from "react";
import Form from "./Form";
function EditButton({ film }) {
  return (
    <>
      <div className="edit-button">
        <button
          className="edit-icon"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <Edit />
        </button>
      </div>
      <dialog id="my_modal_2" className="modal ">
      <div className="modal-box bg-dark text-center">
          <Form film={film}/>
          <form method="dialog">
            <button className="btn bg-[#5A698F] w-32">Close</button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default EditButton;
