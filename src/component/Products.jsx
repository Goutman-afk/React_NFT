import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ethers } from "ethers";
import erc20 from "../ABI/ERC20.js";
import marketAbi from "../ABI/Market.js";
import nft from "../nft.png";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const { ethereum } = window;

      if (!ethereum) {
        alert("Hãy cài đặt MetaMask trước!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      //   console.log("Connected", accounts[0]);
      //   console.log(" " + ethereum.isConnected());
      let contractAddress = "0xe7f28563eE00273dcB0c424383f3C889cCfF69D1";

      var provider = new ethers.providers.Web3Provider(ethereum);
      const wallet = provider.getSigner();
      //console.log(wallet);
      const contract = new ethers.Contract(contractAddress, marketAbi, wallet);

      console.log(await contract.marketItems(1));
      console.log(await contract.fetchActiveItems());

      const response = await contract.fetchActiveItems();

      if (componentMounted == true) {
        setFilter(response);
        setLoading(false);
        console.log(response);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <>Đang tải... xin đợi trong giây lát ^^</>;
  };
  const low = () => {
    setFilter(data.filter((item) => item.price < 100));
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="snip1582">Tất cả</button>
          <button className="snip1582" onClick={low}>
            Giá thấp
          </button>
          <button className="snip1582">Giá cao</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div
                  className="card h-100 text-center p-4"
                  key={parseInt(product.id._hex, 16)}
                >
                  <img src={nft} className="card-img-top" height="250px" />
                  <div className="card-body">
                    <h4 className="card-title">
                      {parseInt(product.id._hex, 16)}
                    </h4>
                    <p className="card-text">
                      token ID: {parseInt(product.tokenId._hex, 16)}
                    </p>
                    <p className="card-text">
                      ${parseInt(product.price._hex, 16)}
                    </p>
                    <NavLink
                      to={"/products/" + parseInt(product.id._hex, 16)}
                      className="button-24"
                    >
                      Mua ngay
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              NFT mới nhất
              <hr />
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
