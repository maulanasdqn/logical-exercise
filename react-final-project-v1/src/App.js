import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";
import Notfound from "./Notfound";
import Navbar from "./Navbar";
const App = () => {
  const MyRouter = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card/:id" element={<Detail />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );

  return (
    <div className="App">
      <Navbar />

      <MyRouter />
    </div>
  );
};

export default App;
