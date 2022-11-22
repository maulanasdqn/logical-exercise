import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1({ name }) {
  return <h1>{name}</h1>;
}

function Task2() {
  let [word, setWord] = useState("Klik tombol di bawah");
  return (
    <div>
      <h1>{word}</h1>
      <button onClick={() => setWord("Tombol telah di-klik!")}>
        Klik saya!
      </button>
    </div>
  );
}

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

function Task3() {
  const mapData = students.map((x, index) => (
    <div key={index}>
      <h2>
        {x.name} - {x.age}
      </h2>
    </div>
  ));
  return mapData;
}

function Task3_1() {
  const mapData = students
    .filter((x) => x.dropout === false)
    .map((x, index) => (
      <div key={index}>
        <h2>
          {x.name} - {x.age}
        </h2>
      </div>
    ));
  return mapData;
}

function Task4() {
  const [valid, setValid] = useState(false);

  return (
    <div>
      {valid && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}
      <button onClick={() => setValid(true)}>Hapus</button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
