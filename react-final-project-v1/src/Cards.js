import { SimpleGrid, Box, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Card({ image, name, level, id, attack, def }) {
  return (
    <>
      <SimpleGrid mt="20px" columns={4} spacing={10}>
        <Link to={`/card/${id}`}>
          <Box className="yugioh-card" w="200px">
            <Image src={image} />
            <Heading textAlign="center" fontSize="20px">
              {name}
            </Heading>
            <Text textAlign="center" fontSize="sm">
              Level {level}
            </Text>
            <Text textAlign="center" fontSize="sm">
              Attack {attack}
            </Text>
            <Text textAlign="center" fontSize="sm">
              Defence {def}
            </Text>
          </Box>
        </Link>
      </SimpleGrid>
    </>
  );
}

export default Card;
