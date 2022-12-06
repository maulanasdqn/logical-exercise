import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("password"));
  if (searchParams.get("password") !== "secret")
    return <Navigate to="/unauthorized" replace />;

  return children;
};

export default ProtectedRoute;
