import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'; // Dùng Params để lấy dữ liệu từ địa chỉ
import { ethers } from 'ethers';
import erc20 from '../ABI/ERC20';
import marketAbi from '../ABI/Market';
import nft from "../nft.png";
import { Button, FormGroup, FormControl, ControlLabel, Form } from "react-bootstrap";

const Create = () => {





  const Buy = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Hãy cài đặt MetaMask trước!");
      return;
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts"
    });

    let contractAddress = "0xe7f28563eE00273dcB0c424383f3C889cCfF69D1";

    var provider = new ethers.providers.Web3Provider(ethereum);
    const wallet = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, marketAbi, wallet);

    // console.log(await contract.marketItems(parseInt(id)));
    // console.log(parseInt(id))




  }
  const Loading = () => {
    return (
      <>
        Đang tải... xin đợi trong giây lát ^^
      </>
    )
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-4 card h-100 text-center p-4 mt-4">
          <img src={nft} height="400px" width="400px" />
        </div>
        <div className="col-md-8">
          <h4 className='text-uppercase text-black-50 mt-4'>
            Thông tin Token
          </h4>
          <h1>

          </h1>
          <h3>
            token ID:
          </h3>

          <h3 className='display-5'>

          </h3>
          <button className='button-24' onClick={Buy}> Buy </button>
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="container">
        <div className="row">

          <div className="col-md-4 card h-100 text-center p-4 mt-4">
            <img src={nft} height="400px" width="400px" />
          </div>
          <div className="col-md-4  h-100 text-center p-4 mt-4">
            <Form>
              <Form.Group className="md-1" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="NFT address" placeholder="Enter NFT address" />

              </Form.Group>

              <Form.Group className="md-1" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control placeholder="Price" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Public to Market
              </Button>
            </Form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Create