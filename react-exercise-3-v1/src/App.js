import moment from "moment-timezone";
import { useState } from "react";
// TODO: answer here

const App = () => {
  const [timezone, setTimezone] = useState("Etc/GMT+1");
  const currentTime = "01:00:00";
  const listTimezone = [
    {
      text: "Tokyo",
      code: "Asia/Tokyo",
    },
    {
      text: "New York",
      code: "America/New_York",
    },
    {
      text: "Madrid",
      code: "Europe/Madrid",
    },
    {
      text: "Cairo",
      code: "Africa/Cairo",
    },
    {
      text: "Sydney",
      code: "Australia/Sydney",
    },
  ];

  const formatedTime = moment(currentTime, "HH:mm:ss");
  const time = moment.tz(formatedTime, timezone).format("HH:mm:ss");

  return (
    <div>
      <h1>Time converter</h1>
      <h2>Current time: {currentTime}</h2>
      <h2>{`Converted time: ${time}`}</h2>
      <form>
        <label>convert to:</label>
        <select onChange={(e) => setTimezone(e.target.value)}>
          {listTimezone.map((timezone, key) => (
            <option value={timezone.code} key={key}>
              {timezone.text}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default App;
