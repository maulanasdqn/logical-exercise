import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
  // TODO: answer here
}

function Task1_1({ name }) {
  return <h1>{name}</h1>;
  // TODO: answer here
}

function Task2() {
  const [teks, setTeks] = useState("Klik tombol di bawah");
  const klik = () => {
    setTeks("Tombol telah di-klik!");
  };
  // TODO: answer here

  return (
    <div>
      <h1>{teks}</h1> {/* TODO: replace this */}
      <button onClick={klik}>Klik saya!</button>
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
  return students.map((student) => (
    <h2>
      {student.name} - {student.age}
    </h2>
  ));
  // TODO: answer here
}

function Task3_1() {
  return students
    .filter((student) => student.dropout === false)
    .map((student) => (
      <h2>
        {student.name} - {student.age}
      </h2>
    ));
  // TODO: answer here
}

function Task4() {
  // TODO: answer here
  const [remove, setRemove] = useState(true);
  const changes = () => {
    setRemove(false);
  };
  return (
    <div>
      {remove && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}

      <button onClick={changes}>Hapus</button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
