import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!email) {
      toast.warning("Please Log in First");
    }
  }, [email]);

  return email ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
