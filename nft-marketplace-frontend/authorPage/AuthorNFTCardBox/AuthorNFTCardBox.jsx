import React, { useState } from "react";

import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";

import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {
  const collectiablesArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const createdArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const likeArray = [
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_3,
    images.nft_image_2,
  ];

  const followerArray = [
    images.user3,
    images.user5,
    images.user8,
    images.user2,
  ];

  const followingArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];

  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && <FollowerTabCard NFTData={followerArray} />}
      {following && <FollowerTabCard NFTData={followingArray} />}
    </div>
  );
};

export default AuthorNFTCardBox;
