// const movieApiUrl = 'http://localhost:4000/api/movies';
const movieApiUrl = 'https://boiling-shelf-43750.herokuapp.com/api/movies';

export const saveMovieById = (dispatch, movie) => {
    fetch(movieApiUrl + movie._id, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    })
        // .then(response => response.json())
        .then(movies => {
            dispatch({
                type: 'saved-movies',
                movie
            })
        });
}

export const postMovie = (dispatch, movie) => {
    fetch(movieApiUrl, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    })
        // .then(response => response.json())
        .then(movies => {
            dispatch({
                type: 'created-movies',
                movie
            })
        });
}

export const fetchAllMovies = (dispatch) => {
    fetch(movieApiUrl)
        .then(response => response.json())
        .then(movies => {
            dispatch({
                type: 'fetch-movies',
                movies
            })
        });
}

export const deleteMovieById = (dispatch, movie) => {
    fetch(movieApiUrl + movie._id, {
        method: 'DELETE'
    })
        // .then(response => response.json())
        .then(status => dispatch({
            type: 'deleted-movie',
            movie
        }))
        .catch(error =>{})
}