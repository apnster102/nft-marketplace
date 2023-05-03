import React from "react";
import Image from "next/image"

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import {Button} from "../../components/componentsindex"

const Brand = () => {
    return (
        <div className={Style.Brand}>
            <div className={Style.Brand_box}>
                <div className={Style.Brand_box_left}>
                    <Image src={images.logo} alt="brand logo" width={100} height={100}></Image>
                    <h1>22 NFT Marketplace</h1>
                    <p>Some description</p>

                    <div className={Style.Brand_box_left_btn}>
                        <Button btnName="Create" handleClick={() => {}} />
                        <Button btnName="Discover" handleClick={() => {}} />
                    </div>
                </div>
                <div className={Style.Brand_box_right}>
                    <Image src={images.earn} alt="brand logo" width={600} height={400}></Image>
                </div>
            </div>
        </div>
    )

};

export default Brand;