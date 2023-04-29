import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./Profile.module.css";
import images from "../../../img";

const Profile = ({ currentAccount }) => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
          <p>Team 22</p>
          <small>{currentAccount.slice(0, 18)}INT3121 20</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <a href="/author">My Profile</a>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <a href="/author">My Items</a>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <a href="/account">Edit Profile</a>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <a href="/contactus">Help</a>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <a href="/aboutus">About Us</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
