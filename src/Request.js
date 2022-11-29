const API_KEY = "3f4a0d6a7d33dd583080b9e13620433e";

const requests = {

    fetchTrendig : `https://api.themoviedb.org/3/trending/all/wekk?api_key=${API_KEY}&lenguage=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
    fetchActionMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;