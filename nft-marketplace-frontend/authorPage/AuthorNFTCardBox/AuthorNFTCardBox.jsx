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
    {
      background: images.creatorbackground2,
      images: images.user2,
    },
    {
      background: images.creatorbackground4,
      images: images.user4,
    },
    {
      background: images.creatorbackground6,
      images: images.user6,
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground2,
      images: images.user2,
    },
    {
      background: images.creatorbackground6,
      images: images.user6,
    },
    {
      background: images.creatorbackground10,
      images: images.user10,
    },
    {
      background: images.creatorbackground3,
      images: images.user3,
    },
    {
      background: images.creatorbackground4,
      images: images.user4,
    },
    {
      background: images.creatorbackground9,
      images: images.user9,
    },
  ];

  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
