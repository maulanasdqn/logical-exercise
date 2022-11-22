import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, VStack, Heading, Box } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          {/* TODO: display pokemon name here */}
          {/* TODO: answer here */}

          {/* TODO: display pokemon type here */}
          {/* TODO: answer here */}
          <HStack>
            <Image src={pokemon.sprites.front_default} />
            <Image src={pokemon.sprites.back_default} />
            <Image src={pokemon.sprites.front_shiny} />
            <Image src={pokemon.sprites.back_shiny} />
          </HStack>
          {/* TODO: render pokemon height, weight, base_experience, abilities, and stats here */}
          {/* TODO: answer here */}
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  //TODO: read pokemonId from parameter
  const { pokemonId } = { pokemonId: 100 }; // TODO: replace this
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    // TODO: answer here
  }, [pokemonId]);

  return <Detail pokemon={pokemon} />;
};

export default Page;
