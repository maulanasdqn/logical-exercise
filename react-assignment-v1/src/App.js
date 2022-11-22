import { useEffect, useState } from "react";
import "./App.css";
import Card from "./TodoCard";

const App = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos";
  const getData = async () => {
    await fetch(url)
      .then((e) => e.json())
      .then((e) => setData(e));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <div className="container">
        {data.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          data.map((x, i) => (
            <Card
              key={i}
              onClick={() => alert(`todo dengan id ${x.id} telah di clicked`)}
              className="todo-card"
              title={x.title}
              status={x.completed ? "Completed" : "Not Completed"}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
