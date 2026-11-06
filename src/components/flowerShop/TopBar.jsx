import React, { useState } from "react";
import { Heart, Menu, X, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FullWidthLayout from "../layout/FullWidthLayout";
import Button from "../ui/Button";
import SideNavbar from "./SideNavbar";
import FavoriteList from "./FavoriteList";

const TopBar = () => {
  

  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [isFavoriteListVisible, setIsFavoriteListVisible] = useState(false);

  const toggleSideBar = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  const toggleFavoriteList = () => {
    setIsFavoriteListVisible(!isFavoriteListVisible);
  };

  return (
    <>
      <section className="h-20 w-full flex items-center justify-end gap-5">
        {/* <SearchBar /> */}

        <section className="flex items-center gap-5 ">
          <Button
            leadingIcon={<Heart strokeWidth={1} />}
            onClick={toggleFavoriteList}
          />
          <Button
            leadingIcon={<Menu strokeWidth={1} />}
            onClick={toggleSideBar}
          />
        </section>
      </section>

      {isSideNavVisible && <SideNavbar onToggle={toggleSideBar} />}
      {isFavoriteListVisible && <FavoriteList onToggle={toggleFavoriteList} />}
    </>
  );
};

export default TopBar;
