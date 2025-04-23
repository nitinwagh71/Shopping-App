import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId = setInterval(() => {
      navigate("/");
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);
  // ui
  return <h2>PageNotFound 404 Error</h2>;
};

export default PageNotFound;
