import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

import { BsThreeBots } from "react-icons/bs";

import Style from "./AuthorProfileCard.module.css";
import images from "../../img";

import { Button } from "../../components/componentsindex";

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);
  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_image}>
          <Image
            src={images.nft_image_2}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            Token xxdy{""}{" "}
            <span>
              {" "}
              <MdVerified />{" "}
            </span>
            {""}
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value="" id="myInput"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
