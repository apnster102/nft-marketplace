import React from "react";
import { useEffect } from "react";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";
const NFTDetails = () => {
  useEffect(() => {
    document.title = "NFT Details";
  }, []);
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
