import { getMovies } from "./db";

const resolvers_s = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers_s;
