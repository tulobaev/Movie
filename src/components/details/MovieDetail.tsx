import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./movie-detail.css";

interface MovieDetailType {
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
}

interface TrailerType {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
}

const API_KEY = import.meta.env.VITE_KEY;
const API = import.meta.env.VITE_API;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailType>();
  const [trailerKey, setTrailerKey] = useState<string>();
  const [loading, setLoading] = useState(true);

  async function fetchMovieDetails() {
    try {
      const movieUrl = `${API}movie/${id}?api_key=${API_KEY}&language=ru-RU`;
      const { data: movieData } = await axios.get(movieUrl);
      setMovie(movieData);

      const videosUrl = `${API}movie/${id}/videos?api_key=${API_KEY}&language=ru-RU`;
      const { data: videosData } = await axios.get<{ results: TrailerType[] }>(
        videosUrl
      );
      const trailer = videosData.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="movie-detail">Загрузка...</div>;
  if (!movie) return <div className="movie-detail">Фильм не найден.</div>;

  return (
    <div className="movie-detail container">
      <div className="movie-detail__header">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-detail__poster"
        />
        <div className="movie-detail__info">
          <h1 className="movie-detail__title">{movie.title}</h1>
          <p className="movie-detail__overview">{movie.overview}</p>
          <p className="movie-detail__release">
            Дата выхода: {movie.release_date}
          </p>
          <p className="movie-detail__rating">
            Рейтинг: {movie.vote_average} ⭐
          </p>
          {trailerKey && (
            <div className="movie-detail__trailer-wrapper">
              <h2>Трейлер</h2>
              <div className="movie-detail__trailer">
                <iframe
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  title="Трейлер фильма"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
