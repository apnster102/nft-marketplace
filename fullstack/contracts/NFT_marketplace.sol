//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

//Interal import from NFT Openzeppelin
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIDs; // NFT ID
    Counters.Counter private _itemsSold; // keep track of how many NFTs have been sold

    uint256 listingPrice = 0.003 ether;

    address payable owner; 

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenID;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }    

    event IDMarketItemCreated(
        uint256 indexed tokenID,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "only owner of the marketplace can change the listing price"
        );
        _;
    }

    constructor() ERC721("NFT Token", "MyNFT") {
        owner == payable(msg.sender);
    }

    function updateListingPrice(uint256 _listingPrice) public payable {
        listingPrice = _listingPrice;
    } 

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    } 

    // Create NFT Token function
    function createToken(string memory tokenURI, uint256 price) 
    public payable 
    returns (uint256) 
    {
        _tokenIDs.increment();
        uint256 newTokenID = _tokenIDs.current();
        _mint(msg.sender, newTokenID);
        _setTokenURI(newTokenID, tokenURI);
        createMarketItem(newTokenID, price);

        return newTokenID;
    }

    // Create market item
    function createMarketItem(uint256 tokenID, uint256 price) private {
        require(price > 0, "Price must be at least 1");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        idMarketItem[tokenID] = MarketItem(
            tokenID,
            payable(msg.sender),
            payable(address(this)),
            price, 
            false // NFT has been sold or not
        );

        _transfer(msg.sender, address(this), tokenID);

        emit IDMarketItemCreated(
            tokenID, 
            msg.sender, 
            address(this), 
            price, 
            false);
    }

    // Resale token
    function resellToken(uint256 tokenID, uint256 price) public payable {
        require(idMarketItem[tokenID].owner == msg.sender, "Only item owner can perform this operation");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        idMarketItem[tokenID].sold = false;
        idMarketItem[tokenID].price = price;
        idMarketItem[tokenID].seller = payable(msg.sender);
        idMarketItem[tokenID].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenID);
    }

    function createMarketSale(uint256 tokenID) public payable {
        uint256 price = idMarketItem[tokenID].price;

        require(
            msg.value == price,
            "Please submitt the asking price in order to complete this action"
        );

        idMarketItem[tokenID].seller = payable(msg.sender);
        idMarketItem[tokenID].sold = true;
        idMarketItem[tokenID].owner = payable(address(0));

        _itemsSold.increment();

        _transfer(address(this), msg.sender, tokenID);

        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenID].seller).transfer(msg.value);
    }

    // Get unsold NFT data 
    function fetchMarketItem() public view returns(MarketItem[] memory) {
        uint256 itemCount = _tokenIDs.current();
        uint256 unSoldItemCount = _tokenIDs.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);

        for(uint256 i = 0; i < itemCount; i++) {
            if(idMarketItem[i+1].owner == address(this)) {
                uint256 currentID = i+1;

                MarketItem storage currentItem = idMarketItem[currentID];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //Purchase item
    function fetchMyNFT() public view returns(MarketItem[] memory) {
        uint256 totalCount = _tokenIDs.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++) {
            if(idMarketItem[i+1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for(uint256 i = 0; i < totalCount; i++) {
            if(idMarketItem[i+1].owner == msg.sender) {
                uint256 currentId = i+1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    //Single user items

    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIDs.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++) {
            if(idMarketItem[i+1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++) {
            if(idMarketItem[i+1].seller == msg.sender) {
                uint256 currentID = i + 1;

                MarketItem storage currentItem = idMarketItem[currentID];
                items[currentIndex]  = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // function setTokenURI(uint256 tokenID, string memory tokenURI) public {
    //     require(
    //         _exists(tokenID),
    //         "ERC721URIStorage: URI set of nonexistent token"
    //     );
    //     _setTokenURI(tokenID, tokenURI);
    // }

    // function tokenURI(uint256 tokenID) public view override returns (string memory) {
    //     require(
    //         _exists(tokenID),
    //         "ERC721URIStorage: URI query for nonexistent token"
    //     );
    //     return tokenURI(tokenID);
    // }
}

