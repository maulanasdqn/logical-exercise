import { useState } from "react";

const Task1 = () => (
  <div className="basic_component">
    <h1>Halo dunia!</h1>
  </div>
);

const Task1_1 = ({ name }) => <h1>{name}</h1>;

const Task2 = () => {
  const [t, sT] = useState("Klik tombol di bawah");
  return (
    <div>
      <h1>{t}</h1>
      <button onClick={() => sT("Tombol telah di-klik!")}>Klik saya!</button>
    </div>
  );
};

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

const Task3 = () => (
  <>
    {students.map((x, i) => (
      <h2 key={i}>
        {x.name} - {x.age}
      </h2>
    ))}
  </>
);

const Task3_1 = () => (
  <>
    {students
      .filter((x) => !x.dropout)
      .map((x, i) => (
        <h2 key={i}>
          {x.name} - {x.age}
        </h2>
      ))}
  </>
);

const Task4 = () => {
  const [s, sT] = useState(false);
  return (
    <div>
      {!s && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}
      <button onClick={() => sT(true)}>Hapus</button>
    </div>
  );
};

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
