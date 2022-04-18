import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import erc20 from "../ABI/ERC20.js";
import marketAbi from "../ABI/Market.js";
import nft from "../nft.png";
import { useNavigate } from "react-router-dom";

import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
} from "react-bootstrap";

const Create = () => {
  const navigate = useNavigate();
  const [price, setprice] = useState();
  const [address, setaddress] = useState();
  const [tokenID, settokenID] = useState();
  // State = {
  //   address: "",
  //   tokenID: "",
  //   price: 0,
  // };
  const create = async (e) => {
    e.preventDefault();
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

    await contract.createMarketItem(
      parseInt(price.price),
      address.address,
      tokenID.tokenID
    );

    console.log(price);
    console.log(address);
    console.log(tokenID);
    navigate("/products");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 card h-100 text-center p-4 mt-4">
            <img src={nft} height="400px" width="400px" />
          </div>
          <div className="col-md-3  h-100  p-4 mt-4">
            <Form onSubmit={create}>
              <Form.Group className="md-1">
                <Form.Label>NFT address</Form.Label>
                <Form.Control
                  onChange={(e) => setaddress({ address: e.target.value })}
                  type="text"
                  placeholder="Enter NFT address"
                />
              </Form.Group>

              <Form.Group className="md-1">
                <Form.Label>Token ID</Form.Label>
                <Form.Control
                  onChange={(e) => settokenID({ tokenID: e.target.value })}
                  placeholder="Enter Token ID"
                />
              </Form.Group>

              <Form.Group className="md-1" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setprice({ price: e.target.value })}
                  type="number"
                  placeholder="Price"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Public to Market
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
