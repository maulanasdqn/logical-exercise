import { SimpleGrid, Image, Text, Flex, Card as Kartu } from "@chakra-ui/react";
import { Fragment } from "react";

function Card({ card }) {
  return (
    <SimpleGrid gap={6} columns={3} padding={10} spacing={10}>
      {card.map((x, i) => (
        <Fragment key={i}>
          <Kartu
            borderColor={"blackAlpha.600"}
            borderWidth={2}
            gap={2}
            justifyContent={"start"}
            alignItems={"center"}
            padding={"1rem"}
            height={"auto"}
          >
            <Flex gap={2}>
              <Text textAlign={"center"} fontSize={"20px"}>
                Atk {x.atk}
              </Text>
              <Text textAlign={"center"} fontSize={"20px"}>
                Def {x.def}
              </Text>
            </Flex>
            <Image src={x.card_images.map((y) => y.image_url)} />
            <Text textAlign={"center"} fontSize={"20px"}>
              {x.id}
            </Text>
            <Text textAlign={"center"} fontSize={"20px"}>
              Attribute {x.attribute}
            </Text>
            <Text textAlign={"center"} fontSize={"20px"}>
              Type {x.type}
            </Text>
            <Text textAlign={"center"} fontWeight={700} fontSize={"20px"}>
              {x.name}
            </Text>
            <Text textAlign={"center"} fontSize={"12px"}>
              {x.desc}
            </Text>
          </Kartu>
        </Fragment>
      ))}
    </SimpleGrid>
  );
}

export default Card;
