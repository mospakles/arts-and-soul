import "./App.css";
import { useState } from "react";

import Imageslider from "./Components/Imageslider/Imageslider";
import NavBar from "./Components/NavBar/NavBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";

import images from "./Components/Images.json";

import Dropdown from "./Components/Dropdown/Dropdown";

function App() {

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
        liftingDdTextUp={takeDdTitle}
      />
      <ImageGallery galleryImages={categoryImage} />
    </>
  );
}

export default App;
