import axios from "axios";

const tmdb = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: "en-US",
  },
});

export async function searchMovies(query: string) {
  if (!query) return [];
  const res = await tmdb.get("/search/movie", { params: { query } });
  return res.data.results ?? [];
}

export async function getMovie(id: string) {
  const res = await tmdb.get(`/movie/${id}`, {
    params: { append_to_response: "videos,credits" },
  });
  return res.data;
}