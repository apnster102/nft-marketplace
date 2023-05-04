import React, { useState, useEffect , useContext } from "react";

import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
import images from "../img";
import FollowerTab from "../components/componentsindex";
import {
  AuthorProfileCard,
  AuthorTaps,
  TabCard,
  AuthorNFTCardBox,
} from "../authorPage/componentsIndex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const author = () => {
  const followerArray = [
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];

  const [collectibles, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then ((items) => {
      setNfts(items);
    });
    console.log(nfts);
  }, []);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then ((items) => {
      setMyNFTs(items);
    });
    console.log(myNFTs);
  }, []);
    
  return (
    <div className={Style.banner}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard currentAccount = {currentAccount}/>
      <AuthorTaps
        setCollectibles={setCollectibles}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCardBox
        collectibles={setCollectibles}
        created={setCreated}
        like={setLike}
        follower={setFollower}
        following={setFollowing}
        nfts={nfts}
        myNFTs={myNFTs}
      />
      <Title
        heading="Popular Creator"
        paragraph="Click on music icon and enjoy NFT music or audio"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>

      <Brand />
    </div>
  );
};

export default author;
