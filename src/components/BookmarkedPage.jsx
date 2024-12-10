import FilmList from "./FilmList";

function BookmarkedPage() {
  
  return (
    <div>
      <FilmList category={"movie"}/>
      <FilmList category={"tv series"}/>
    </div>
  )
}

export default BookmarkedPage;