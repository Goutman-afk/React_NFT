import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg_snorlax.jpg"
          className="card-img"
          alt="Background"
        />
        <div className="card-img-overlay">
          <h5 className="card-title display-3">Name NFT</h5>
          <p className="card-text">Trọn bộ sưu tập NFT hot nhất năm 2022</p>
        </div>
      </div>
      <Products></Products>
    </div>
  );
};

export default Home;
