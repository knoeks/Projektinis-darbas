import Film from "./Film"

function Films({ category, allFilms }) {
    
    let newFilteredFilms = allFilms.filter((film) => (category ? (film.category === category) : true))

    newFilteredFilms.maps((film) => 
        <Film film={film}/>
    )
}

export default Films;