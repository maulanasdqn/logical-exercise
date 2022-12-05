import {
  Button,
  Container,
  Text,
  Flex,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [card, setCard] = useState(null);
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?id=";
  const getDetail = async () => {
    await fetch(url + id)
      .then((res) => res.json())
      .then((res) => {
        setDetail(res.data[0]);
        setCard(res.data[0].card_sets);
      });
  };

  const backHandle = () => navigate("/");
  useEffect(() => {
    getDetail();
  }, [id]);
  return (
    <>
      <Button onClick={() => backHandle()}>Back</Button>
      {detail === null ? (
        <h1>Loading...</h1>
      ) : (
        <Container maxW={"5xl"} pt="20px">
          <Box>
            <Flex direction="col">
              <Box className="yugioh-card" w="200px">
                <Image src={detail.card_images[0].image_url} />
              </Box>
              <div>
                <Heading fontSize="20px">{detail.name}</Heading>
                <Text fontSize="sm">Level: {detail.level}</Text>
                <Text fontSize="sm">{detail.attribute}</Text>
                <Text fontSize="sm">
                  ATK/{detail.atk} DEF/{detail.def}
                </Text>
                <Text className="test-text" fontSize="sm">
                  [ {detail.type} / {detail.race} ]
                </Text>
                <Text fontSize="sm">Description: {detail.desc}</Text>
              </div>
            </Flex>
            <Center>
              <Heading>Card Set</Heading>
            </Center>
            <SimpleGrid mt="20px" columns={7} spacing={50}>
              {card.map((el, i) => (
                <Box key={i} className="yugioh-card" w="200px">
                  <Text>Name: {el.set_name}</Text>
                  <Text>Code: {el.set_code}</Text>
                  <Text>Rarity: {el.set_rarity}</Text>
                  <Text>Price: {el.set_price}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      )}
    </>
  );
}

export default Detail;
