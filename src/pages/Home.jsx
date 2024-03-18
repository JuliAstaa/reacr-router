import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>LOKASI 1</h1>
      <Link to={"/lokasi2"}>
        <button>Ke lokasi ke dua</button>
      </Link>
    </div>
  );
};

export default Home;
