import React, { startTransition } from "react";
import Image from "next/image";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import Style from "./collectionProfile.module.css";
import images from "../../img";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            src={images.nft_image_1}
            alt="nft image"
            width={800}
            height={800}
            className={Style.collectionProfile_box_left_img}
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href="https://www.facebook.com/" target="_blank">
              <TiSocialFacebook />
            </a>
            <a href="https://www.instagram.com/?hl=en" target="_blank">
              <TiSocialInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <TiSocialLinkedin />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesowm NFTs Colletion</h1>
          <p>insert</p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i) => (
              <div
                className={Style.collectionProfile_box_middle_box_item}
                key={i + 1}
              >
                <small>Floor price</small>
                <p>${i + 1}92,256</p>
                <span>+{i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;
