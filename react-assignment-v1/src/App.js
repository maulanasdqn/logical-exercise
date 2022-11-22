import "./App.css";
import TodoCard from "./TodoCard";
import { useState, useEffect, Fragment } from "react";
// TODO: answer here

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/todos";
  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url).then((res) => res.json());
      setData(res);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <h1
        style={{
          color: "blue",
        }}
      >
        {loading && "Loading..."}
      </h1>
      <TodoCard todo={data} />
    </Fragment>
  );
};

export default App;
