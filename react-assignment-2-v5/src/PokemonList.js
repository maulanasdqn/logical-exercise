import { useEffect, useState } from "react";
import {
  Card,
  HStack,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Badge,
  Button,
  Container,
  Flex,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

  const moveTo = (direction) => {
    if (direction === "prev") {
      setSearchParams({ page: parseInt(currentPage) - 1 });
    } else if (direction === "next") {
      setSearchParams({ page: parseInt(currentPage) + 1 });
    }
  };

  return (
    <HStack>
      <Button onClick={() => moveTo("prev")}>{`< Prev`}</Button>
      <Button onClick={() => moveTo("next")}>{`Next >`}</Button>
    </HStack>
  );
};

const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    pokemons &&
    pokemons.length > 0 && (
      <Box role="pokemon-list">
        {pokemons.map((pokemon, i) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <Card>
              <CardHeader>
                <Heading as="h3" size="md">
                  {pokemon.name}
                </Heading>
              </CardHeader>
              <Flex>
                <Image
                  alt="Front Default"
                  src={pokemons[i].sprites.front_default}
                />
                <Image
                  alt="Back Default"
                  src={pokemons[i].sprites.back_default}
                />
                <Image
                  alt="Front Shiny"
                  src={pokemons[i].sprites.front_shiny}
                />
                <Image alt="Back Shiny" src={pokemons[i].sprites.back_shiny} />
              </Flex>
            </Card>
          </Link>
        ))}
      </Box>
    )
  );
};
const Home = () => {
  //get list
  const fetchPokemons = async (page) => {
    //get pokemon list with image
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

    //set pokemonList to state
    setPokemons(await Promise.all(pokemonList));
  };

  const [pokemons, setPokemons] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || 1);
    fetchPokemons(page);
  }, [searchParams]);

  return (
    <>
      <Heading as="h2" size="lg">
        Pokemon List
      </Heading>
      <Pagination />
      <PokemonList pokemons={pokemons} />
    </>
  );
};

export default Home;
