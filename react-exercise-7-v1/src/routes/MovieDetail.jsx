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

const MovieDetail = () => {
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
          {detail?.title}
        </Heading>
      </HStack>

      {!loading ? (
        <VStack alignItems="start">
          <Box>
            <Heading as="h2" size="md">
              Release Date
            </Heading>
            <Text>{detail?.release_date}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">
              Produced By
            </Heading>
            <p>{detail?.producer}</p>
          </Box>

          <Box>
            <Heading as="h2" size="md">
              Directed By
            </Heading>
            <p>{detail?.director}</p>
          </Box>

          <Box>
            <Heading as="h2" size="md">
              Summary
            </Heading>
            <p>{detail?.opening_crawl}</p>
          </Box>
        </VStack>
      ) : (
        <Text size="md">Loading...</Text>
      )}
    </Container>
  );
};

export default MovieDetail;
