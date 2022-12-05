import { useEffect, useState } from "react";
import {
  Badge,
  Tr,
  Td,
  HStack,
  VStack,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          <VStack>
            <Heading as="h2" size="xl">
              {pokemon.name}
            </Heading>

            <Heading>
              {pokemon.types.map((el, i) => (
                <div key={i}>
                  <Badge mr="4">{el.type.name}</Badge>
                </div>
              ))}
            </Heading>
          </VStack>
          <HStack>
            <Image src={pokemon.sprites.front_default} />
            <Image src={pokemon.sprites.back_default} />
            <Image src={pokemon.sprites.front_shiny} />
            <Image src={pokemon.sprites.back_shiny} />
          </HStack>
          <Table>
            <Tbody>
              <Tr>
                <Td>Height</Td>
                <Td>{pokemon.height}</Td>
              </Tr>
              <Tr>
                <Td>Weight</Td>
                <Td>{pokemon.weight}</Td>
              </Tr>
              <Tr>
                <Td>Base Experience</Td>
                <Td>{pokemon.base_experience}</Td>
              </Tr>
              <Tr>
                <Td>Abilities</Td>
                {pokemon.abilities.map((el, i) => (
                  <Td key={i}>
                    <Flex>{el.ability.name}</Flex>
                  </Td>
                ))}
              </Tr>
              <Tr>
                <Td>Stats</Td>
                {pokemon.stats.map((el, i) => (
                  <Td key={i}>
                    <Flex direction="row">{el.stat.name}</Flex>
                  </Td>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  //TODO: read pokemonId from parameter
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(pokemonId);
  }, [pokemonId]);

  return (
    <>
      <Detail pokemon={pokemon} />
      <Outlet />
    </>
  );
};

export default Page;
