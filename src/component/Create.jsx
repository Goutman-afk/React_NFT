import React, { useState, useEffect } from "react";

import erc20 from "../ABI/ERC20";
import marketAbi from "../ABI/Market";
import nft from "../nft.png";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
} from "react-bootstrap";

const Create = () => {
  const [data, setData] = useState({ address: "", tokenId: "", price: 0 });
  // State = {
  //   address: "",
  //   tokenID: "",
  //   price: 0,
  // };
  const create = async (e) => {
    e.preventDefault();

    console.log(data);
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
              <Form.Group className="md-1" controlId="formBasicEmail">
                <Form.Label>NFT address</Form.Label>
                <Form.Control
                  onChange={(e) => setData({ address: e.target.value })}
                  type="text"
                  placeholder="Enter NFT address"
                />
              </Form.Group>

              <Form.Group className="md-1" controlId="formBasicEmail">
                <Form.Label>Token ID</Form.Label>
                <Form.Control
                  onChange={(e) => setData({ tokenId: e.target.value })}
                  placeholder="Enter Token ID"
                />
              </Form.Group>

              <Form.Group className="md-1" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setData({ price: e.target.value })}
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
