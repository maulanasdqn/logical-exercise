import { useEffect, useState, Fragment } from "react";
import {
  Heading,
  Table,
  Badge,
  Tbody,
  HStack,
  Text,
  Tr,
  Td,
  Flex,
  Box,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams, Outlet } from "react-router-dom";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          <Heading as="h2" size="xl">
            {pokemon.name}
          </Heading>

          <Text fontSize={30} fontWeight={700}>
            {pokemon.types.map((x, i) => (
              <Fragment key={i}>
                <Badge mr="4">{x.type.name}</Badge>
              </Fragment>
            ))}
          </Text>

          <HStack>
            <Image src={pokemon.sprites.front_default} />
            <Image src={pokemon.sprites.back_default} />
            <Image src={pokemon.sprites.front_shiny} />
            <Image src={pokemon.sprites.back_shiny} />
          </HStack>

          <Table variant="simple">
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
                <Td>Base experience</Td>
                <Td>{pokemon.base_experience}</Td>
              </Tr>
              <Tr>
                <Td>Abilities</Td>
                {pokemon.abilities.map((x, i) => (
                  <Fragment key={i}>
                    <Flex>{x.ability.name}</Flex>
                  </Fragment>
                ))}
              </Tr>
              <Tr>
                <Td>Stats</Td>
                {pokemon.stats.map((x, i) => (
                  <Fragment key={i}>
                    <Flex>
                      {x.stat.name} : {x.base_stat}
                    </Flex>
                  </Fragment>
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
