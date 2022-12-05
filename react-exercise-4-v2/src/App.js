import { useEffect, useState } from "react";

const App = () => {
  const url =
    "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
  const [chosen, setChosen] = useState("All");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getAll = async () => {
    setLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  };
  const getBasic = async () => {
    setLoading(true);
    await fetch(url + "?fields=title,description")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  };
  const getBasicCreator = async () => {
    setLoading(true);
    await fetch(url + "?fields=title,description,director,producer")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (chosen === "All") {
      getAll();
    } else if (chosen === "Basic") {
      getBasic();
    } else if (chosen === "Basic with Creator") {
      getBasicCreator();
    }
  }, [chosen]);
  return (
    <div className="app">
      <select value={chosen} onChange={(e) => setChosen(e.target.value)}>
        <option value="All">All</option>
        <option value="Basic">Basic</option>
        <option value="Basic with Creator">Basic with Creator</option>
      </select>
      {loading && <h2>Loading...</h2>}
      {chosen === "All" ? (
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
      ) : chosen === "Basic" ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      ) : (
        chosen === "Basic with Creator" && (
          <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Director: {data.director}</p>
            <p>Producer: {data.producer}</p>
          </div>
        )
      )}
    </div>
  );
};

export default App;
