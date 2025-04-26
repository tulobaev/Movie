import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./movie-detail.css";
import Button from "../../ui/button/Button";
import Trailer from "./trailer/Trailer";

interface MovieDetailType {
  title: string;
  overview: string;
  release_date: string;
  vote_average: string;
  poster_path: string;
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
  const [movie, setMovie] = useState<MovieDetailType | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch movie and trailer details
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

  // Modal state for trailer
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <div className="buttonTr">
            <Button title="Trailer" onClick={openModal} />
          </div>
        </div>
      </div>

      {isModalOpen && trailerKey && (
        <Trailer
          trailerKey={trailerKey}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default MovieDetail;
