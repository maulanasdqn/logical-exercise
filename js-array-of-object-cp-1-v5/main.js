const gf = (a, g) => ({ "title" : g.filter(x => x.genre === a).map(x => x.title) })

const gameGrouping = (g) => {
 
   if (g.length === 1) return "Data cannot be compared"
  
  const gen = {
     "simulation" : gf("simulation", g),
     "fighting" : gf("fighting", g),
     "actionAdventure" : gf("actionAdventure", g),
     "firstPersonShooter" : gf("firstPersonShooter", g),
     "racing" : gf("racing", g),
    }
  return gen
}

const allGames = [
    { title: 'The Last of Us Part I', genre: 'actionAdventure', developer: 'Naughty Dog', rating: 9.6 },
    { title: 'WWE 2K22', genre: 'fighting', developer: 'Visual Concepts', rating: 7.5 },
    { title: "Tom Clancy's Ghost Recon: Wildlands", genre: 'firstPersonShooter', developer: 'Ubisoft Belgrade', rating: 7.9 },
    { title: 'The Sims 4', genre: 'simulation', developer: 'Maxis', rating: 9.2 },
    { title: 'Tekken 7', genre: 'fighting', developer: 'BANDAI NAMCO Studios', rating: 9.5 },
    { title: 'The Witcher 3: Wild Hunt', genre: 'actionAdventure', developer: 'CD Projekt Red', rating: 10 },
    { title: 'Cities: Skylines', genre: 'simulation', developer: 'Colossal Order', rating: 9.4 },
    { title: 'Far Cry 5', genre: 'firstPersonShooter', developer: 'Ubisoft Montreal', rating: 8.9 },
    { title: 'Project CARS 3', genre: 'racing', developer: 'Slightly Mad Studios', rating: 6.8 },
    { title: 'Hot Wheels Unleashed', genre: 'racing', developer: 'Milestone', rating: 9.2 }
]

//console.log(gameGrouping(allGames));
console.log(gameGrouping([{ title: 'Tekken 7', genre: 'fighting', developer: 'BANDAI NAMCO Studios', rating: 9.5 }]));

module.exports = gameGrouping
