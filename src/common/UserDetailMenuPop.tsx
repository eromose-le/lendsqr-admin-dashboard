import React from "react";
import { Link } from "react-router-dom";
import { assets } from "@/assets/constants";

interface MenuItem {
  imgSrc: string;
  altText: string;
  label: string;
}

interface UserDetailMenuPopProps {
  userId: string;
}

const menuItems: MenuItem[] = [
  { imgSrc: assets.view, altText: "view", label: "View Details" },
  { imgSrc: assets.blacklist, altText: "blacklist", label: "Blacklist User" },
  { imgSrc: assets.activate, altText: "activate", label: "Activate User" },
];

export const UserDetailMenuPop: React.FC<UserDetailMenuPopProps> = ({
  userId,
}) => {
  return (
    <Link to={`/user/${userId}`} className="detailModalContainer">
      {menuItems.map((item, index) => (
        <div className="detailModalBox" key={index}>
          <img src={item.imgSrc} alt={item.altText} />
          <p className="detailText">{item.label}</p>
        </div>
      ))}
    </Link>
  );
};
