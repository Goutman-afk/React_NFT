import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import erc20 from "../ABI/ERC20.js";
import marketAbi from "../ABI/Market.js";

function Nft() {
  const Buy = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask!");
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
      
    } catch (error) {
      console.log(error);
    }
  };

  const Approve = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    let contractAddress = "0x236a5ddfFF07Ce416Fa4B3042b17d9A22E082A12";

    var provider = new ethers.providers.Web3Provider(ethereum);
    const wallet = provider.getSigner();
    console.log(wallet);
    const contract = new ethers.Contract(contractAddress, erc20, wallet);
    await contract.setApprovalForAll(
      "0x4B1e49CdFe182d0930e502b08D857ef6438732E1",
      true
    );
    console.log("" + (await contract.symbol()));
  };
  const [name, setName] = useState("");
  return (
    <div className="Nft">
      <div className="content">
        <div className="inf">
          <h2> Name : ANH CON KHI</h2>
          <h2> Symbol : MONKEY </h2>
        </div>

        <form id="a-form" className="form" onSubmit={Buy}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <div className="btn">
          <button onClick={Approve}> APPROVE</button>
          <button onClick={Buy}> BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Nft;
