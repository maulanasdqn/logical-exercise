// TODO: answer here
import { useState } from "react";

const Button = ({ onClick, teks }) => {
  return <button onClick={onClick}>{teks}</button>;
};

const App = () => {
  const MentorsData = [
    {
      id: 1,
      name: "Muhammad Ramadhoni",
      house: "House FE 01",
      email: "ramadhoni@mail.com",
    },
    {
      id: 2,
      name: "Indra Akhmad Firdhaus",
      house: "House FE 02",
      email: "indra@mail.com",
    },
    {
      id: 3,
      name: "Dimitri Wahyudiputra",
      house: "House FE 03",
      email: "dimitri@mail.com",
    },
    {
      id: 4,
      name: "Maulana Fajar Ibrahim",
      house: "House FE 04",
      email: "fajar@mail.com",
    },
    {
      id: 5,
      name: "Tisa Monita",
      house: "House FE 05",
      email: "tisa@mail.com",
    },
    {
      id: 6,
      name: "Annisa Tahira",
      house: "House FE 06",
      email: "annisa@mail.com",
    },
    {
      id: 7,
      name: "Kobar Septyanus Sumarsono",
      house: "House FE 07",
      email: "kobar@mail.com",
    },
    {
      id: 8,
      name: "Asrul Harahap",
      house: "House FE 08",
      email: "asrul@mail.com",
    },
    {
      id: 9,
      name: "Alvin Arkansas",
      house: "House FE 09",
      email: "alvin@mail.com",
    },
    {
      id: 10,
      name: "Mirza Chilman Garin",
      house: "House FE 10",
      email: "mirza@mail.com",
    },
    {
      id: 11,
      name: "Tandry Syawaludin Soedijanto",
      house: "House FE 11",
      email: "tandry@mail.com",
    },
    {
      id: 12,
      name: "Ricky Kurniawan",
      house: "House FE 12",
      email: "ricky@mail.com",
    },
    {
      id: 13,
      name: "Pahlevi Fikri Auliya",
      house: "House FE 13",
      email: "pahlevi@mail.com",
    },
  ];
  const [isTrue, setIsTrue] = useState(true);

  // TODO: answer here

  return (
    <>
      {isTrue && <Button onClick={() => setIsTrue(false)} teks="Refresh" />}
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>House</th>
          </tr>
        </thead>
        <tbody>
          {isTrue ? (
            <tr>
              <td>Data not available</td>
              <td>Data not available</td>
              <td>Data not available</td>
            </tr>
          ) : (
            MentorsData.map((el, i) => (
              <tr
                style={{
                  background: i % 2 === 0 ? "lightCyan" : "white",
                }}
                key={i}
              >
                <td>{el.name}</td>
                <td>{el.house}</td>
                <td>{el.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default App;
