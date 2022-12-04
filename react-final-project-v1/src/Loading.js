import { Box, Text, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      zIndex={10}
      w={"full"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      opacity={"90"}
    >
      <h1 size={"10rem"} fontWeight={700}>
        Loading...
      </h1>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size={"xl"}
      />
    </Box>
  );
};

export default Loading;
