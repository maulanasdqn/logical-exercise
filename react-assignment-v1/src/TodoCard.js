import { Fragment, useState } from "react";

function TodoCard({ todo = [] }) {
  const [id, setId] = useState(null);
  const styledH2 = {
    color: "green",
    fontFamily: "Roboto",
    fontWeigth: 700,
  };
  return (
    <Fragment>
      {todo.map((x, i) => (
        <section
          onClick={() => alert(`todo dengan id ${x.id} telah di clicked`)}
          key={i}
        >
          <h2 style={styledH2} className="todo-card">
            {x.title}
          </h2>
          <p>{x.completed ? "Completed" : "Not Completed"}</p>
        </section>
      ))}
    </Fragment>
  );
}

export default TodoCard;
