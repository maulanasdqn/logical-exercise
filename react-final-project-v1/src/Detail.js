import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SimpleGrid, Box, Image, Heading } from "@chakra-ui/react";
function Detail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`;

  const getData = async () => {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return <></>; // TODO: replace this
}

export default Detail;
