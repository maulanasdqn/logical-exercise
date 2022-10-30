const findMovies = (favoriteGenre) => {
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
  return movies.filter((x) => favoriteGenre.includes(x.genre));
};

const findTicketAvailability = (movie, user) =>
  [movie].map(
    (x) =>
      x.soldTicket !== x.capacity && user.ticket + x.soldTicket <= x.capacity
  )[0];

const findRecommendation = (user) =>
  findMovies(user.favoriteGenre).filter(
    (x) =>
      x.soldTicket !== x.capacity && user.ticket + x.soldTicket <= x.capacity
  );

const A = 100000;
const M = 80000;
const R = 40000;
const H = 75000;

const generateRecommendation = (user) =>
  findRecommendation(user).length === 0
    ? "Tidak ada film yang sesuai kriteria"
    : findRecommendation(user).map((x) => ({
        id: x.id,
        name: x.name,
        genre: x.genre,
        totalPrice:
          x.genre === "Action"
            ? A * user.ticket
            : x.genre === "Musical"
            ? M * user.ticket
            : x.genre === "Romance"
            ? R * user.ticket
            : x.genre === "Horror"
            ? H * user.ticket
            : "",
      }));

let user1 = {
  name: "Djalal",
  ticket: 20,
  favoriteGenre: ["Porn"],
};

let user2 = {
  name: "Eddy",
  ticket: 20,
  favoriteGenre: ["Musical", "Romance"],
};

let user3 = {
  name: "Afis",
  ticket: 1,
  favoriteGenre: ["Sci Fi", "Documentary", "Thriller"],
};

console.log(generateRecommendation(user1));
console.log(generateRecommendation(user2));
console.log(generateRecommendation(user3));

module.exports = {
  findMovies,
  findTicketAvailability,
  findRecommendation,
  generateRecommendation,
};
