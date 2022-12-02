import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import {
  Text,
  HStack,
  Box,
  VStack,
  Container,
  Heading,
} from "@chakra-ui/react";

const PlanetDetail = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = { id: 1 }; // TODO: replace this

  useEffect(() => {
    const loadDetail = async () => {
      setLoading(true);
      try {
        const url = ""; // TODO: replace this
        const response = await fetch(url);
        const data = await response.json();
        // TODO: answer here
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    // TODO: answer here
  }, [id]);

  return (
    <Container>
      <HStack direction="row" marginTop={5} marginBottom={5}>
        <BackButton />
        <Heading as="h1" size="xl">
          {detail?.name}
        </Heading>
      </HStack>

      {!loading ? (
        <VStack alignItems="start">
          <Box>
            <Heading as="h2" size="md">
              Rotation Period
            </Heading>
            <Text>{detail?.rotation_period}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">
              Orbital Period
            </Heading>
            <Text>{detail?.orbital_period}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">
              Terrain
            </Heading>
            <Text>{detail?.terrain}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">
              Population
            </Heading>
            <Text>{detail?.population}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">
              Diameter
            </Heading>
            <Text>{detail?.diameter}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">
              Climate
            </Heading>
            <Text>{detail?.climate}</Text>
          </Box>
        </VStack>
      ) : (
        <Text size="md">Loading...</Text>
      )}
    </Container>
  );
};

export default PlanetDetail;
