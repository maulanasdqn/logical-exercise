import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [searchParams] = useSearchParams();
  //Check URL params for password
  if (searchParams.get("password") !== "secret") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children; // TODO: replace this
};

export default ProtectedRoute;
