import { useEffect, useState } from "react";

const App = () => {
  const url =
    "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
  const [choice, setChoice] = useState("All");
  const [render, setRender] = useState();
  const [data, setData] = useState({
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "My Neighbor Totoro",
    original_title: "となりのトトロ",
    original_title_romanised: "Tonari no Totoro",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
    description:
      "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1988",
    running_time: "86",
    rt_score: "93",
    people: [
      "https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
      "https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
      "https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
      "https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d",
      "https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
      "https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a",
      "https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061",
      "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
      "https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
      "https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
    ],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
      "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
      "https://ghibliapi.herokuapp.com/species/74b7f547-1577-4430-806c-c358c8b6bcf5",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url: "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  });
  const getData = async () => {
    if (choice === "All") {
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setRender(
            <div>
              <img src={data.image} alt="Totoro" />
              <h2>{data.title}</h2>
              <h4>{data.original_title}</h4>
              <p>{data.release_date}</p>
              <p>Rating: {data.rt_score}</p>
              <p>Director: {data.director}</p>
              <p>Producer: {data.producer}</p>
              <p>{data.description}</p>
            </div>
          );
        });
    } else if (choice === "Basic") {
      setRender(<h2>Loading...</h2>);
      await fetch(url + "?fields=title,description")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setRender(
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          );
        });
    } else if (choice === "Basic with Creator") {
      setRender(<h2>Loading...</h2>);
      await fetch(url + "?fields=title,description,director,producer")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setRender(
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <p>Director: {data.director}</p>
              <p>Producer: {data.producer}</p>
            </div>
          );
        });
    }
  };
  useEffect(() => {
    getData();
  }, [choice]);
  return (
    <div className="app">
      <select value={choice} onChange={(e) => setChoice(e.target.value)}>
        <option value="All">All</option>
        <option value="Basic">Basic</option>
        <option value="Basic with Creator">Basic with Creator</option>
      </select>
      {render}
    </div>
  );
};

export default App;
