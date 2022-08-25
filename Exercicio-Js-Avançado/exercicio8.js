const filmes = [
    {
      titulo: "A Fuga das Galinhas",
      censura: 10,
      nota: 7.1
    },
    {
      titulo: "Batman",
      censura: 14,
      nota: 8.5
    },
    {
      titulo: "As Branquelas",
      censura: 14,
      nota: 10
    },
    {
      titulo: "Titanic",
      censura: 16,
      nota: 3.2
    },
    {
      titulo: "A Noiva do Chuck",
      censura: 18,
      nota: 2.2
    }
  ]
  
  const melhoresFilmes = filmes.filter(filmes => filmes.nota >= 7);
  const filmesInfantis = filmes.filter(filmes => filmes.censura <= 14);
  
  console.log(melhoresFilmes)
  console.log(filmesInfantis)
