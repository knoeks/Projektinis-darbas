import Film from "./Film"

function Films({ filter, filteredFilms }) {

    let newFilteredFilms = filteredFilms.filter((film) => (filter ? (film.category === filter) : true))

    newFilteredFilms.maps((film) => 
        <Film />
    )
}

export default Films;