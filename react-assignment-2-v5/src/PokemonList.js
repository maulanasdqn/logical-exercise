import { Fragment, useEffect, useState } from "react";
import {
  Card,
  HStack,
  CardHeader,
  Grid,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = searchParams.get("page");

  if (currentPage === null) {
    currentPage = 1;
  }

  const moveTo = (direction) => {
    if (direction === "prev") {
      setSearchParams({ page: parseInt(currentPage) - 1 });
    } else if (direction === "next") {
      setSearchParams({ page: parseInt(currentPage) + 1 });
    }
  };

  return (
    <HStack>
      <Button
        disabled={currentPage <= 1 ? true : false}
        onClick={() => moveTo("prev")}
      >
        {"< prev"}
      </Button>
      <Button onClick={() => moveTo("next")}>{"next >"}</Button>
    </HStack>
  );
};

const PokemonList = ({ pokemons }) => {
  const loadImg = (index) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
  return (
    pokemons &&
    pokemons.length > 0 && (
      <Grid role="pokemon-list" templateColumns="repeat(3, 1fr)" gap={6}>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <Card width={"200px"}>
              <CardHeader>
                <Heading as="h3" size="md">
                  {pokemon.name}
                </Heading>
              </CardHeader>
              <Image alt="Front Default" src={loadImg(pokemon.id)} />
              <Image alt="Front Shiny" src={loadImg(pokemon.id)} />
              <Image alt="Back Default" src={loadImg(pokemon.id)} />
              <Image alt="Back Shiny" src={loadImg(pokemon.id)} />
            </Card>
          </Link>
        ))}
      </Grid>
    )
  );
};

const Home = () => {
  const [page, setPage] = useState(1);
  const fetchPokemons = async (page) => {
    const displayPerPage = 20;
    const offset = (page - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${displayPerPage}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemonList = data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      return pokemonData;
    });
    setPokemons(await Promise.all(pokemonList));
  };

  const [pokemons, setPokemons] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchPokemons(searchParams.get("page") || 1);
  }, [searchParams]);

  return (
    <Fragment>
      <Heading as="h2" size="lg">
        Pokemon List
      </Heading>
      <Pagination page={page} setPage={setPage} />
      <PokemonList pokemons={pokemons} />
    </Fragment>
  );
};

export default Home;
