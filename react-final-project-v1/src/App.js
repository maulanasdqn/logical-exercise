// TODO: answer here

const App = () => {
  const MyRouter = () => <div>Answer here</div>; // TODO: replace this

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
