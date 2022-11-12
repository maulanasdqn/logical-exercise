function findMovies(favoriteGenres) {
  const movies = [
    {
      id: 1,
      name: "Avengers end game",
      genre: "Action",
      soldTicket: 149,
      capacity: 150,
    },
    {
      id: 2,
      name: "La la Land",
      genre: "Romance",
      soldTicket: 20,
      capacity: 75,
    },
    {
      id: 3,
      name: "Beauty and the Beast",
      genre: "Romance",
      soldTicket: 50,
      capacity: 50,
    },
    {
      id: 4,
      name: "Superman vs Batman",
      genre: "Action",
      soldTicket: 150,
      capacity: 250,
    },
    {
      id: 5,
      name: "Transformer",
      genre: "Action",
      soldTicket: 90,
      capacity: 90,
    },
    {
      id: 6,
      name: "5 feet apart",
      genre: "Romance",
      soldTicket: 25,
      capacity: 45,
    },
    {
      id: 7,
      name: "Hamilton",
      genre: "Musical",
      soldTicket: 295,
      capacity: 300,
    },
    {
      id: 8,
      name: "Dear Evan Hansen",
      genre: "Musical",
      soldTicket: 150,
      capacity: 200,
    },
    {
      id: 9,
      name: "Conjuring",
      genre: "Horror",
      soldTicket: 30,
      capacity: 100,
    },
    {
      id: 10,
      name: "Annabelle",
      genre: "Horror",
      soldTicket: 10,
      capacity: 30,
    },
    {
      id: 11,
      name: "Fast and Furios",
      genre: "Action",
      soldTicket: 25,
      capacity: 40,
    },
    {
      id: 12,
      name: "Romeo and Julet",
      genre: "Romance",
      soldTicket: 15,
      capacity: 15,
    },
    {
      id: 13,
      name: "Wicked",
      genre: "Musical",
      soldTicket: 75,
      capacity: 75,
    },
  ];
  const filteredMovies = movies.filter((movie) =>
    favoriteGenres.includes(movie.genre)
  );
  return filteredMovies;
}

function findTicketAvailability(movie, user) {
  const checkMovieAvailability = movie.soldTicket !== movie.capacity;
  const checkUserTicket = user.ticket + movie.soldTicket <= movie.capacity;
  const compareCondition = checkUserTicket && checkMovieAvailability;
  return compareCondition;
}

function findRecommendation(user) {
  const filteredMovies = findMovies(user.favoriteGenre);
  return filteredMovies.filter(
    (movie) =>
      movie.soldTicket !== movie.capacity &&
      user.ticket + movie.soldTicket <= movie.capacity
  );
}

function generateRecommendation(user) {
  const moviePrice = {
    action: 100000,
    musical: 80000,
    romance: 40000,
    horror: 75000,
  };

  function findPrice(movie, user) {
    if (movie.genre === "Musical") {
      return user.ticket * moviePrice.musical;
    } else if (movie.genre === "Action") {
      return user.ticket * moviePrice.action;
    } else if (movie.genre === "Romance") {
      return user.ticket * moviePrice.romance;
    } else if (movie.genre === "Horror") {
      return user.ticket * moviePrice.horror;
    }
  }

  const checkMovieAvailability = findRecommendation(user).length;

  if (checkMovieAvailability === 0) {
    return "Tidak ada film yang sesuai kriteria";
  }

  const movieMapped = findRecommendation(user).map((movie) => {
    return {
      id: movie.id,
      name: movie.name,
      genre: movie.genre,
      totalPrice: findPrice(movie, user),
    };
  });
  return movieMapped;
}

module.exports = {
  findMovies,
  findTicketAvailability,
  findRecommendation,
  generateRecommendation,
};
