import "./App.css";
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/todos";

  const fetchData = async () => {
    setLoading(true);
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((res) => setTodos(res));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        {!loading ? (
          todos.map((todo) => (
            <TodoCard
              onClick={() =>
                alert(`todo dengan id ${todo.id} telah di clicked`)
              }
              key={todo.id}
            >
              <h2>{todo.title}</h2>
              <p>{todo.completed === false ? "Not Completed" : "Completed"}</p>
            </TodoCard>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
  // TODO: answer here
};

export default App;
