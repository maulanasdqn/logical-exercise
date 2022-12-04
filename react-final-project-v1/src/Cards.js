import { SimpleGrid, Image, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <SimpleGrid gap={6} columns={4} padding={10} spacing={10}>
      {card.map((x, i) => (
        <Link key={i} to={`card/${x.id}`}>
          <Box
            className="yugioh-card"
            key={i}
            display={"flex"}
            gap={2}
            flexDirection={"column"}
          >
            <Heading textAlign={"center"} fontSize={"20px"}>
              {x.name}
            </Heading>
            <Image src={x.card_images.map((y) => y.image_url)} />
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
}

export default Card;
