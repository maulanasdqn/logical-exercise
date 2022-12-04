import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Card from "./Cards";
import Detail from "./Detail";

const App = () => {
  const fetchCardById = async (id) =>
    await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
  const MyRouter = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
      <Route
        path="/card/:id"
        loader={async ({ params }) => await fetchCardById(params.id)}
        element={<Detail />}
      />
      <Route
        path="*"
        element={
          <Text fontSize={"30px"} fontWeight={700}>
            404 Page not found!
          </Text>
        }
      />
    </Routes>
  );

  return (
    <div className="App">
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      <MyRouter />
    </div>
  );
};

export default App;
