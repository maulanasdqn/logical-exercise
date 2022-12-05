import { SimpleGrid, Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ cards }) {
  return (
    <>
      <SimpleGrid columns={4} padding={10} gap={3}>
        {cards.map((card) => (
          <Link to={`card/${card.id}`}>
            <Box
              className="yugioh-card"
              display={"flex"}
              flexDirection={"column"}
              key={card.id}
              gap={6}
              py="8px"
              my="10px"
            >
              <Heading textAlign={"center"} fontSize="xl">
                {card.name}
              </Heading>
              <Image src={card.card_images.map((el) => el.image_url)} />
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </>
  ); // TODO: replace this
}

export default Card;
