import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const parseDate = (date) => date.toISOString().slice(0, 10);

const EditPhoto = () => {
  const url = "http://localhost:3001/photos";
  const [imageUrl, setImageUrl] = useState("");
  const [captions, setCaptions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const editPhoto = async (e) => {
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl,
        captions,
        updatedAt: parseDate(new Date()),
      }),
    };
    e.preventDefault();
    await fetch(url + `/${id}`, config);
    navigate("/photos");
  };

  const fetchPhotos = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      setImageUrl(await data.imageUrl);
      setCaptions(await data.captions);
      setLoading(false);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchPhotos(id);
  }, [id]);

  if (error) return <div>Error!</div>;

  return (
    <>
      {loading ? (
        <h1 style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
          Loading...
        </h1>
      ) : (
        <div className="container">
          <form className="edit-form" onSubmit={editPhoto}>
            <label>
              Image Url:
              <input
                className="edit-input"
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </label>
            <label>
              Captions:
              <input
                className="edit-input"
                type="text"
                value={captions}
                data-testid="captions"
                onChange={(e) => setCaptions(e.target.value)}
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
      )}
    </>
  );
};

export default EditPhoto;
