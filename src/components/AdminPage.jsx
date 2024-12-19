import CreateButton from "./CreateButton";
import FilmList from "./FilmList";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router";
import Form from "./Form"

function AdminPage() {
  const location = useLocation();

  return (
    <>
      <SearchBar />

      {!location.search && (
        <div className="overflow-auto">
          <div className="trending-full flex items-center">
            <h1 className="trending--heading--text mr-8 py-6 md:pt-[2.06rem] xl:pt-[2.13rem] xl:pb-[2.38rem]">
              Edit | Delete films
            </h1>
            <CreateButton/>
          </div>
        </div>
      )}
      <FilmList category={""} />
      <button
            className="flex justify-end"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            AASHHHAHHS
          </button>
          <dialog id="my_modal_4" className="modal ">
            <div className="modal-box bg-dark text-center">
              <Form />
              <form method="dialog">
                  <button className="btn bg-[#5A698F] w-32">Close</button>
                </form>
            </div>
          </dialog>
    </>
  );
}

export default AdminPage;
