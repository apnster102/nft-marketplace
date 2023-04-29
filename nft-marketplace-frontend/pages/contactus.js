import React from "react";
import { useEffect } from "react";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import Style from "../styles/contactus.module.css";
import formStyle from "../components/AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";

const contactus = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>Contact</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_box_left}>
            <div className={Style.contactus_box_box_left_item}>
              <h3>ADDRESS</h3>
              <p>
                G2, University of Engineering and Technology, 144 Xuan Thuy, Cau
                Giay, HN
              </p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>EMAIL</h3>
              <p>studentID@vnu.edu.vn</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>PHONE</h3>
              <p>085-123-9999</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>SOCIALS</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={Style.contactus_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={formStyle.Form_box_input_userName}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="Email*" />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Please share something about yourself in few words"
                ></textarea>
              </div>
              <Button
                btnName="Send Message"
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

export default contactus;
