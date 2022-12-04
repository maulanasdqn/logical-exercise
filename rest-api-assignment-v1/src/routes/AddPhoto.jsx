import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPhoto = () => {
  const parseDate = (date) => date.toISOString().slice(0, 10);
  const [imageUrl, setImageUrl] = useState("");
  const [captions, setCaptions] = useState("");
  const [secret, setSecret] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const addPhoto = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/photos";

    try {
      const payload = {
        imageUrl,
        captions,
        createdAt: parseDate(new Date()),
        updatedAt: parseDate(new Date()),
        secret,
      };
      const config = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await fetch(url, config);
      const resData = await res.json();
      if (resData.error) setError(resData.error)
      if (!resData.error) navigate("/photos")
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="container">
        {error && <div className="error-msg">{error}</div>}
        <form className="add-form" onSubmit={async (e) => await addPhoto(e)}>
          <label>
            Image Url:
            <input
              className="add-input"
              type="text"
              data-testid="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <label>
            Captions:
            <input
              className="add-input"
              type="text"
              data-testid="captions"
              value={captions}
              onChange={(e) => setCaptions(e.target.value)}
            />
          </label>
          <label>
            Secret:
            <input
              className="add-input"
              type="text"
              value={secret}
              data-testid="secret"
              onChange={(e) => setSecret(e.target.value)}
            />
          </label>
          <input
            className="submit-btn"
            type="submit"
            value="Submit"
            data-testid="submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddPhoto;
