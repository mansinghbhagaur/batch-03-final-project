import { Outlet, useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
      const navigate = useNavigate();
      const isAuth = false;

      return isAuth ? <Outlet /> : navigate('/');

}

export default ProtectedRoute;



