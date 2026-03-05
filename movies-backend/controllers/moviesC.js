import moviesData from '../data/movies.json' with {type: "json"}

export function getMovies(req, res) {
    const movies = moviesData
    try {
        res.json(movies);
    } catch (error) {
        console.log({ message: error });
    }
}