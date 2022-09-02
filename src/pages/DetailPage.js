import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <img src={location.state.image} />
        <p>{location.state.title}</p>
        <p>{location.state.description}</p>
      </div>
    </div>
  );
};

export default DetailPage;
