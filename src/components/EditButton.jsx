
function EditButton({ film }) {

     return (
          <div className="delete-button">
            <button className="delete-icon" onClick={openModal} aria-label="Delete film">
              <Edit />
            </button>
          </div>
        );
}

export default EditButton;