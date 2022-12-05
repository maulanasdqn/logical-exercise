import { useEffect, useState } from "react";
import {
  Card,
  HStack,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Flex,
  Badge,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

  const moveTo = (direction) => {
    if (direction === "prev") {
      setSearchParams(currentPage - 1);
    } else if (direction === "next") {
      setSearchParams(currentPage - 1);
    }
  };

  return (
    <HStack>
      <Button
        disabled={currentPage <= 1 ? true : false}
        onClick={() => moveTo("prev")}
      >
        {"< Prev"}
      </Button>
      <Button onClick={() => moveTo("next")}>{"next >"}</Button>
    </HStack>
  );
};

const PokemonList = ({ pokemons }) => {
  return (
    pokemons &&
    pokemons.length > 0 && (
      <Box role="pokemon-list">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <Card gap={4}>
              <CardHeader>
                <Heading as="h3" size="md">
                  {pokemon.name}
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex direction={"row"}>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt="Front Default"
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt=" Back Default"
                  />
                  <Image src={pokemon.sprites.front_shiny} alt=" Front Shiny" />
                  <Image src={pokemon.sprites.back_shiny} alt="Back Shiny" />
                </Flex>
                <Flex>
                  {pokemon.types.map((el) => (
                    <div key={pokemon.id}>
                      <Badge mr="4">{el.type.name}</Badge>
                    </div>
                  ))}
                </Flex>
              </CardBody>
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
    console.log(pokemons);
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
