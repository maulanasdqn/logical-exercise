import { Box, Center, Heading } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box w="100vw" bg="#b25819" p={6}>
      <Center>
        <Heading as="h1" color="#e2ded5">
          Yugi-Oh Card Deck
        </Heading>
      </Center>
    </Box>
  );
};

export default Navbar;
