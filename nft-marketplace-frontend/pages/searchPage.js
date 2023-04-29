import React from "react";
import { useEffect } from "react";

import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/SearchBarIndex";
import { Filter } from "../components/componentsindex";
import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

const searchPage = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];
  useEffect(() => {
    document.title = "Search Page";
  }, []);
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground8} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
