import { useEffect, useState } from "react";
import {
  Badge,
  Tr,
  Td,
  HStack,
  VStack,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams, useSearchParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          <Heading>{pokemon.name}</Heading>
          {pokemon.types.map((el, i) => (
            <div key={i}>
              <Text>{el.type.name}</Text>
            </div>
          ))}
          <Box>
            <Text>{pokemon.height}</Text>
            <Text>{pokemon.weight}</Text>
          </Box>

          <HStack>
            <Image src={pokemon.sprites.front_default} />
            <Image src={pokemon.sprites.back_default} />
            <Image src={pokemon.sprites.front_shiny} />
            <Image src={pokemon.sprites.back_shiny} />
          </HStack>
          <Box>
            {pokemon.abilities.map((el, i) => (
              <div key={i}>
                <Text>{el.ability.name}</Text>
              </div>
            ))}
          </Box>
          <Box>
            {pokemon.stats.map((el, i) => (
              <div key={i}>
                <Text>{el.stat.name}</Text>
              </div>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  //TODO: read pokemonId from parameter
  const { pokemonId } = useParams(); // TODO: replace this
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (pokemonId) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    );
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(pokemonId);
  }, [pokemonId]);

  return <Detail pokemon={pokemon} />;
};

export default Page;
