import React from "react";
import { Link } from "react-router-dom";

const Lokasi2 = () => {
  return (
    <div>
      <h1>LOKASI 2</h1>
      <Link to={"/"}>
        <button>Kembali ke lokasi 1</button>
      </Link>
    </div>
  );
};

export default Lokasi2;
