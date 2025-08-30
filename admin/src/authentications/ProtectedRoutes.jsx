import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const { admin } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (admin) {
      navigate("/");
    }
  }, [admin, navigate]);
  return <div>{children}</div>;
}

export default ProtectedRoutes;
