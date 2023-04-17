import React from 'react';
import Image from "next/image";

import Style from './Banner.module.css';

const Banner = ({bannerImage}) => {
  return (
    <div className={Style.Banner}>
        <div className={Style.bannerImage}>
            <Image src={bannerImage} objectFit='cover' alt="background" width={1600} height={300}/>
        </div>

        <div className={Style.bannerImageMobile}>
            <Image src={bannerImage} objectFit='cover' alt='background' width={1600} height={900} />
        </div>
    </div>
  )
}

export default Banner