import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) =>
  props.auth === true ? props.children : <Navigate replace to={`/Login`} />;

export default ProtectedRoute;
