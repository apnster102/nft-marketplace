import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { HiOutLineMail } from "react-icons/hi";
import Style from "../styles/contactUs.module.css";
import formStyle from "../components/AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";

const contactUS = () => {
  return (
    <div className={formStyle.contactus}>
      <div className={formStyle.contactus_box}>
        <h1>Contact</h1>
        <div className={formStyle.contactus_box_box}>
          <div className={formStyle.contactus_box_box_left}>
            <div className={formStyle.contactus_box_box_left_item}>
              <h3>Address</h3>
              <p>G2, DH Cong Nghe, 144 Xuan Thuy, Cau Giay, HN</p>
            </div>
            <div className={formStyle.contactus_box_box_left_item}>
              <h3> Email</h3>
              <p> MSSV@vnu.edu.vn</p>
            </div>
            <div className={formStyle.contactus_box_box_left_item}>
              <h3> Phone</h3>
              <p> 085-123-1234</p>
            </div>
            <div className={formStyle.contactus_box_box_left_item}>
              <h3> Social</h3>
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
          <div className={formStyle.contactus_box_box_right}>
            <form>
              {/* user Name */}
              <div className={formStyle.contactus_box_input}>
                <label htmlFor="name"> Username</label>
                <input
                  type="text"
                  placeholder="Please enter your name"
                  className={formStyle.Form_box_input_userName}
                />
              </div>
              {/* Email */}
              <div className={formStyle.contactus_box_input}>
                <label htmlFor="email"> Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={Form_box_input_box_icon}>
                    <HiOutLineMail />
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Description</label>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={6}
                  placeholder="Something about your self in few words"
                ></textarea>
              </div>
              <Button
                btnName="Send message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUS;
