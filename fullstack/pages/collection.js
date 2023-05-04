import React, { useState, useEffect , useContext } from "react";

import Style from "../styles/collection.module.css";
import images from '../img';

import {Banner, collectionProfile, NFTCardTwo} from '../collectionPage/collectionIndex';
import {Slider, Brand} from '../components/componentsindex';
import Filter from '../components/Filter/Filter';
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const collection = () => {
  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  // ];

  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then ((items) => {
      setNfts(items);
    });
    console.log('collection: ', nfts);
  }, []);

  return (
    <div className={Style.collection}>
        <Banner bannerImage={images.creatorbackground1} />
        <collectionProfile />
        <NFTCardTwo NFTData={nfts} />
       
        <Slider />
        <Brand />
    </div>
  );
};

export default collection;