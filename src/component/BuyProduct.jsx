import React, { useState, useEffect } from "react";
import { useParams } from "react-router"; // Dùng Params để lấy dữ liệu từ địa chỉ
import { ethers } from "ethers";
import erc20 from "../ABI/ERC20";
import marketAbi from "../ABI/Market";
import nft from "../nft.png";
import { useNavigate } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";

const BuyProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(true);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      console.log("Qua trang buy product rồi nè!");

      let contractAddress = "0xe7f28563eE00273dcB0c424383f3C889cCfF69D1";

      var url = "https://rinkeby.infura.io/v3/acbb86b9cfc44c61ab6cf4a03fcee90b";
      var provider = new ethers.providers.JsonRpcProvider(url);

      const contract = new ethers.Contract(
        contractAddress,
        marketAbi,
        provider
      );

      const response = await contract.marketItems(parseInt(id));

      // console.log(await contract.marketItems(parseInt(id)));
      // console.log(parseInt(id))

      setProduct(response);

      setPrice(parseInt(response.price));

      setLoading(false);
    };

    getProduct();
  }, []);
  const AlreadyLogin = () => {
    return (
      <>
        <button className="button-24" onClick={Buy}>
          Buy
        </button>
      </>
    );
  };
  const NotLogin = () => {
    return (
      <>
        <h4>You need to approve first</h4>
        <button className="button-24" onClick={Approve}>
          Approve
        </button>
      </>
    );
  };

  const Buy = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    let contractAddress = "0xe7f28563eE00273dcB0c424383f3C889cCfF69D1";
    let address = "0x236a5ddfFF07Ce416Fa4B3042b17d9A22E082A12";
    var provider = new ethers.providers.Web3Provider(ethereum);
    const wallet = provider.getSigner();
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
    const erc20contract = new ethers.Contract(address, erc20, provider);

    let temp = parseInt(
      await erc20contract.allowance(accounts[0], contractAddress)
    );
    console.log(price);
    if (price > temp) {
      alert("You must have enough allowance");
      setCheck(!check);

      return;
    } else {
      console.log(price);
      console.log(temp);
      const contract = new ethers.Contract(contractAddress, marketAbi, wallet);
      await contract.purchaseItem(
        id,
        "0x236a5ddfFF07Ce416Fa4B3042b17d9A22E082A12"
      );
      navigate("/products");
    }
    // console.log(await contract.marketItems(parseInt(id)));
    // console.log(parseInt(id))
  };
  const Approve = async () => {
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
    await contract.approve(
      "0xe7f28563eE00273dcB0c424383f3C889cCfF69D1",
      999999999999999
    );
    setCheck(!check);
  };
  const Loading = () => {
    return <>Đang tải... xin đợi trong giây lát ^^</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-4 card h-100 text-center p-4 mt-4">
          <img src={nft} alt={parseInt(id)} height="400px" width="400px" />
        </div>
        <div className="col-md-8">
          <h4 className="text-uppercase text-black-50 mt-4">Thông tin Token</h4>
          <h1>{id}</h1>
          <h3>token ID: {parseInt(product.tokenId)}</h3>
          <h3>token address :{product.nftContract}</h3>
          <h3 className="display-5">
            <FaEthereum />
            {parseInt(product.price)}
          </h3>
          <div>{check ? <AlreadyLogin /> : <NotLogin />}</div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default BuyProduct;
