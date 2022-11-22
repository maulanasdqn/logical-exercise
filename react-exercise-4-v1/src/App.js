import { useEffect, useState, Fragment } from "react";
// TODO: answer here

const App = () => {
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  const url =
    "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";

  const getDataAll = async () => {
    setLoading(true);
    try {
      const res = await fetch(url).then((res) => res.json());
      setData(res);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
    setLoading(false);
  };

  const getDataBasic = async () => {
    setLoading(true);
    try {
      const res = await fetch(url + "?fields=title,description").then((res) =>
        res.json()
      );
      setData(res);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
    setLoading(false);
  };

  const getDataBasicCreator = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        url + "?fields=title,description,director,producer"
      ).then((res) => res.json());
      setData(res);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
    setLoading(false);
  };

  const option = ["All", "Basic", "Basic with Creator"];

  useEffect(() => {
    if (status === "All") getDataAll();
    if (status === "Basic") getDataBasic();
    if (status === "Basic with Creator") getDataBasicCreator();
  }, [status]);
  return (
    <Fragment>
      <h1>{loading && "Loading..."}</h1>
      <select
        defaultValue={"All"}
        onChange={(event) => setStatus(event.target.value)}
      >
        {option.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
        <option value="All">All</option>
      </select>

      {status === "All" && (
        <>
          <h1>{data.title}</h1>
          <h1>{data.original_title}</h1>
          <img width={200} src={data.image} alt="images" />
          <h1>Director: {data.director}</h1>
          <h1>{data.release_date}</h1>
          <h1>Producer: {data.producer}</h1>
          <h1>Rating: {data.rt_score}</h1>
          <h1>{data.description}</h1>
        </>
      )}

      {status === "Basic" && (
        <>
          <h1>{data.title}</h1>
          <h1>{data.description}</h1>
        </>
      )}

      {status === "Basic with Creator" && (
        <>
          <h1>{data.title}</h1>
          <h1>Director: {data.director}</h1>
          <h1>Producer: {data.producer}</h1>
          <h1>{data.description}</h1>
        </>
      )}
    </Fragment>
  );
};

export default App;
