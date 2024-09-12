const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    releaseDate: "1994-09-22",
    director: "Frank Darabont",
    genres: ["Drama", "Crime"],
    hasSequel: false,
    runtime: 142,
    languages: {
      english: "The Shawshank Redemption",
      spanish: "Sueño de Fuga",
      french: "Les Évadés",
    },
    reviews: {
      imdb: {
        rating: 9.3,
        ratingsCount: 2500000,
        reviewsCount: 12000,
      },
      rottenTomatoes: {
        rating: 91,
        ratingsCount: 500000,
        reviewsCount: 2100,
      },
    },
  },
  {
    id: 2,
    title: "The Godfather",
    releaseDate: "1972-03-24",
    director: "Francis Ford Coppola",
    genres: ["Crime", "Drama"],
    hasSequel: true,
    runtime: 175,
    languages: {
      english: "The Godfather",
      spanish: "El Padrino",
      french: "Le Parrain",
    },
    reviews: {
      imdb: {
        rating: 9.2,
        ratingsCount: 1800000,
        reviewsCount: 10000,
      },
      rottenTomatoes: {
        rating: 98,
        ratingsCount: 600000,
        reviewsCount: 1500,
      },
    },
  },
  {
    id: 3,
    title: "Inception",
    releaseDate: "2010-07-16",
    director: "Christopher Nolan",
    genres: ["Action", "Adventure", "Sci-Fi"],
    hasSequel: false,
    runtime: 148,
    languages: {
      english: "Inception",
      spanish: "El Origen",
      french: "Inception",
    },
    reviews: {
      imdb: {
        rating: 8.8,
        ratingsCount: 2300000,
        reviewsCount: 8000,
      },
      rottenTomatoes: {
        rating: 87,
        ratingsCount: 750000,
        reviewsCount: 3000,
      },
    },
  },
];

function getMovies() {
  return movies;
}

function getMovie(id) {
  return movies.find((m) => m.id === id);
}

// Corrected function call to getMovie to find a specific movie by id
const movie = getMovie(1);
console.log(movie);

// Object destructuring
const { title, director, genres } = movie;
console.log(title, director);

// Destructuring the genres array & Rest/Spread Operator
const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
console.log(primaryGenres, secondaryGenres);
console.log(otherGenres);

const newGenres = [...genres, "epic drama"];
newGenres;

const updatedMovie = {
  ...movie,
  releaseDate: "1989-09-22",
};
updatedMovie;
