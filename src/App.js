import "./App.css";
import { useState } from "react";

import Imageslider from "./Components/Imageslider/Imageslider";
import NavBar from "./Components/NavBar/NavBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";

import images from "./Components/Images.json";

import Dropdown from "./Components/Dropdown/Dropdown";

function App() {
  const galleryImages = [
    {
      img: "../img/dummy_image/2.jpg",
    },
    {
      img: "../img/profile/5.jpg",
    },
    {
      img: "../img/dummy_image/7.jpg",
    },
    {
      img: "../img/wallpapers/9.jpg",
    },
    {
      img: "../img/wallpapers/7.png",
    },
    {
      img: "../img/dummy_image/1.jpg",
    },
    {
      img: "../img/profile/2.png",
    },
    {
      img: "../img/dummy_image/4.jpg",
    },
    {
      img: "../img/dummy_image/6.jpg",
    },
    {
      img: "../img/profile/1.jpg",
    },
    {
      img: "../img/dummy_image/3.jpg",
    },
    {
      img: "../img/dummy_image/9.jpg",
    },
  ];

  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true,
    },
    {
      id: 2,
      title: "Topic Images",
      active: false,
    },
    {
      id: 3,
      title: "Nature Images",
      active: false,
    },
    {
      id: 4,
      title: "NFT Images",
      active: false,
    },
    {
      id: 5,
      title: "Space Images",
      active: false,
    },
  ];

  const [categoryImage, setCategoryImage] = useState(images.categories.all);
  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter((item) => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0];
        return item.toLowerCase().includes(titleSplited);
      });
      return [...images.categories[categoryChoose]];
    });
  };
  return (
    <>
      <NavBar />
      <Imageslider />
      <Dropdown
        title="All Images"
        items={ddItems}
        liftingDdTextup={takeDdTitle}
      />
      <ImageGallery galleryImages={galleryImages} />
    </>
  );
}

export default App;
