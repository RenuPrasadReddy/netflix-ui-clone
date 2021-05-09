const API_KEY = "";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;
export const titles = [
  "NETFLIX ORIGINALS",
  "Trending",
  // "Top Rated",
  // "Action Movies",
  // "Comedy Movies",
  // "Horror Movies",
  // "Romance Movies",
  // "Documentaries",
];
export const genresList = Object.values(requests);
