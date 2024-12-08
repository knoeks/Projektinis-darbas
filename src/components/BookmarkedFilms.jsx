import Films from "./Films";

function BookmarkedFilms({ allFilms, setUpdate }) {
  return (
    <div>
      <Films category={"movie"}/>
      <Films category={"tv series"}/>
    </div>
  )
}