import { Center, Container } from "@chakra-ui/react";
function Notfound() {
  return (
    <div className="App">
      <Container w="100vw" h="100vh" centerContent>
        <Center h="100%">
          <h1>404 Page not found!</h1>
        </Center>
      </Container>
    </div>
  );
}

export default Notfound;
