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

import { BsThreeDots } from "react-icons/bs";

import Style from "./AuthorProfileCard.module.css";
import images from "../../img";

import { Button } from "../../components/componentsindex";

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  // copy Address function
  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };

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
            Crypto Wildlife{""}{" "}
            <span>
              {" "}
              <MdVerified />{" "}
            </span>
            {""}
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value="" id="myInput" />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>

          <p>
            Crypto Wildlife is a collection of non-fungible tokens (NFTs) that
            represent various species of animals in the wild. Each token is
            unique and can be owned by a single individual or entity on the
            blockchain, making them one-of-a-kind collectibles. With Crypto
            Wildlife, animal lovers and collectors can own a piece of the wild
            in digital form. The tokens are created using cutting-edge
            technology and are stored on a secure and decentralized blockchain,
            ensuring their authenticity and ownership. Whether you're a fan of
            tigers, lions, elephants, or any other wild animal, there is a
            Crypto Wildlife token for you. Explore the collection and discover
            the beauty of the animal kingdom in a new and innovative way.
          </p>

          <div className={Style.AuthorProfileCard_box_info_social}>
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

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_box_share_icon}
          />

          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>
                {""}
                {""}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>
                {""}
                {""}
                Instagram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>
                {""}
                {""}
                LinkedIn
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>
                {""}
                {""}
                Youtube
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_box_share_icon}
          />

          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>
              {""}
              {""}
              Report abouse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
