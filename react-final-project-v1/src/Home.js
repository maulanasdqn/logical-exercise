import { useState, useEffect } from "react";
import { Container, Select, SimpleGrid } from "@chakra-ui/react";
import Card from "./Cards";
import { Link } from "react-router-dom";
function Home() {
  let temp = [];
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("name");

  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4";
  const getData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  };
  const SortData = async (type) => {
    await setData(
      [...data].sort((x, y) =>
        type === "name"
          ? x.name > y.name
            ? 1
            : -1
          : type === "attack"
          ? x.atk - y.atk
          : type === "defence" && x.def - y.def
      )
    );
  };

  useEffect(() => {
    getData();
  }, [filter]);
  return (
    <>
      <Container maxW={"5xl"} pt="20px">
        <Select
          onChange={(e) => {
            SortData(e.target.value);
          }}
          name="sort"
          placeholder="Sort by"
        >
          <option value="name">Name</option>
          <option value="attack">Attack</option>
          <option value="defence">Defence</option>
        </Select>
        {data.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <SimpleGrid mt="20px" columns={4} spacing={10}>
            {data.map((el, index) => (
              <Card
                id={el.id}
                key={index}
                name={el.name}
                level={el.level}
                image={el.card_images[0].image_url}
                attack={el.atk}
                def={el.def}
              />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
}

export default Home;
