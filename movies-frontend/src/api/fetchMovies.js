
export function fetchMovies() {
    const req = fetch('http://localhost:3000/movies').then(req => req.json())
    const data = req.then(data => data)
    setDdata
}

export default fetchMovies