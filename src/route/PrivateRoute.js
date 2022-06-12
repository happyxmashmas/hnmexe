import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const ProvateRoute = ({ authenticate }) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default ProvateRoute;
