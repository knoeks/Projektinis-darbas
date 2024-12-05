import { useEffect, useState } from "react"

function App() {
  const [allFilms, setAllFilms] = useState();
  const [filteredFilms, setFilteredFilms] = useState();
  const [filter, setFilter] = useState("Movie");

  const fetchData = async () => {
    try {
      const data = await getAll();
      setAllFilms(data); 

      // laikinai skirta testavimui eilute kai jau bus search, tada galima bus pakeist
      setFilteredFilms(allFilms);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Films filter={filter} filteredFilms={filteredFilms}/>
    </>
  )
}

export default App
