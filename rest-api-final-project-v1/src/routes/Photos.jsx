import { useEffect, useState, useCallback } from "react";
import Card from "../components/Card";

const Photos = () => {
  const url = "http://localhost:3001/photos";
  const [photos, setPhotos] = useState([]);
  const [params, setParams] = useState(url);
  const [sort, setSort] = useState("desc");
  const [submited, setSubmited] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePhoto = (id) => {
    // TODO: answer here
  };

  const fetchPhotos = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(params);
      const data = await res.json();
      setPhotos(data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }, [params]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos, submited, sort]);

  if (error)
    return (
      <h1 style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        Error!
      </h1>
    );

  return (
    <>
      <div className="container">
        <div className="options">
          <select
            onChange={(e) => {
              setSort(e.target.value);
              setParams(url + `?_sort=id&_order=${sort}`);
            }}
            data-testid="sort"
            className="form-select"
            style={{}}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmited(search);
              setParams(url + `?q=${search}`);
            }}
          >
            <input
              type="text"
              data-testid="search"
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
            />
            <input
              type="submit"
              value="Search"
              data-testid="submit"
              className="form-btn"
            />
          </form>
        </div>
        <div className="content">
          {loading ? (
            <h1
              style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
            >
              Loading...
            </h1>
          ) : (
            photos.map((photo) => {
              return (
                <Card key={photo.id} photo={photo} deletePhoto={deletePhoto} />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Photos;
