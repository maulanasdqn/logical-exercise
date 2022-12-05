import { useState, useEffect } from "react";
import { Container, Select, SimpleGrid } from "@chakra-ui/react";
import Card from "./Cards";
import { Link } from "react-router-dom";
function Home() {
  let temp = [];
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("name");
  const [sorting, setSorting] = useState([]);
  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4";
  const getData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (filter === "name") {
          setData(res.data.sort((x, y) => (x.name > y.name ? 1 : -1)));
        } else if (filter === "attack") {
          setData(res.data.sort((x, y) => (x.atk > y.atk ? 1 : -1)));
        }
      });
  };
  temp = [...data];
  const sortData = (type) => {
    if (type === "name") {
      temp = temp;
    }
  };

  useEffect(() => {
    getData();
  }, [filter]);
  return (
    <>
      <Container maxW={"5xl"} pt="20px">
        <Select
          onChange={(e) => setFilter(e.target.value)}
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
              />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
}

export default Home;
