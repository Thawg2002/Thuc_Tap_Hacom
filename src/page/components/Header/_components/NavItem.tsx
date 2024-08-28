import React from "react";

interface NavItemProps {
  imageSrc: string;
  text: string;
  submenu?: {
    title: string;
    items: { label: string; link: string }[];
  }[];
  imageBottomSrc?: string;
}

const NavItem = ({ imageSrc, text, submenu, imageBottomSrc }: NavItemProps) => {
  return (
    <div className="header__nav-item">
      <div className="header__nav-item_name">
        <img src={imageSrc} alt={text} />
        <p>{text}</p>
      </div>
      {submenu && (
        <div className="item__subMenu">
          {submenu.map((sub, index) => (
            <div className="item__subMenu-one" key={index}>
              <h2>{sub.title}</h2>
              <ul>
                {sub.items.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.link}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {imageBottomSrc && (
            <div className="item__subMenu-image">
              <img src={imageBottomSrc} alt="" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavItem;
