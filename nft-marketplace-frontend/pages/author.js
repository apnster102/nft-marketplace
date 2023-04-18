import React, { useState, useEffect } from "react";

import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
import images from "../img";
import FollowerTab from "../components/componentsindex";
import {
  AuthorProfileCard,
  AuthorTaps,
  TabCard,
} from "../authorPage/componentsIndex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const author = () => {
  const popularArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
  ];
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  return (
    <div className={Style.banner}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps
        collectiables={setCollectiables}
        created={setCreated}
        like={setLike}
        follower={setFollower}
        following={setFollowing}
      />
      <Title
        heading="Popular Creator"
        paragraph="Click on music icon and enjoy NFT music or audio"
      />

      <Brand />
    </div>
  );
};

export default author;
