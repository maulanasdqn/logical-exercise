import { useEffect, useState } from "react";
import { Select, Center } from "@chakra-ui/react";
import Card from "./Cards";

function Home() {
  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCard = async () => {
    setLoading(true);
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCard();
  }, []);

  function sortData(type) {
    // TODO: answer here
  }

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <Center p={10}>
        <Select
          onChange={(e) => sortData(e.target.value)}
          name="sort"
          textAlign={"center"}
        >
          <option value="name">Name</option>
          <option value="attack">Attack</option>
          <option value="defence">Defence</option>
        </Select>
      </Center>
      <Card cards={data} />
    </>
  );
}

export default Home;
