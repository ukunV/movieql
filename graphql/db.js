let movies = [
  {
    id: 0,
    name: "StarWars",
    score: 10,
  },
  {
    id: 1,
    name: "HarryPotter",
    score: 20,
  },
  {
    id: 2,
    name: "The Game of Thrones",
    score: 30,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const selected = movies.filter((movie) => movie.id === id);
  return selected[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name: name,
    score: score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > filteredMovies.length) {
    movies = filteredMovies;
    return true;
  } else {
    return false;
  }
};
