import {
  logo,
  nav_image_shadow
} from "@/assets/img";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import "./Header.scss";
import ButtonCart from "./component/ButtonCart/ButtonCart";
import { navItems } from "./component/DataNavItem";
import { submenuMobile } from "./component/DataSubMenuMobile";
import InputSeach from "./component/InputSeach/InputSeach";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [dataSubMenuMobile, setDataSubMenuMobile] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const handlePopoverChange = (isOpen: boolean) => {
    setIsPopoverOpen(isOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuToggle = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };
  const onhandleNavItemName = (name: string,index:any) => {
    // console.log("name", name);
    const dataNewSubMenuMoblie = submenuMobile.find(
      (item) => item.title === name
    );
    setDataSubMenuMobile(dataNewSubMenuMoblie);
    setActiveIndex(index);
    // console.log("dataNewSubMenuMoblie", dataNewSubMenuMoblie);
  };
  // console.log("isMenuMobileOpen", isMenuMobileOpen);
  // console.log("dataSubMenuMobile", dataSubMenuMobile);
  return (
    <>
      <header className={`${isMenuOpen ? "mb-[30px]" : ""}`}>
        <div className="container">
          <div className="header__top">
            <div className="header__menuMobile" onClick={handleMenuToggle}>
              <span>
                <IoMdMenu className="header__menuMoblie-icon" />
              </span>
            </div>
            <div className="header__logo">
              <img src={logo} alt="" className="" />
            </div>
            <div className="header_actions">
              {/* danh mục */}
              <div className="header__menu" onClick={toggleMenu}>
                <IoMdMenu className="header__menu-icon" />
                <button className="header__menu-button">Danh mục</button>
              </div>
              {/* form seach */}
              <InputSeach onPopoverChange={handlePopoverChange} />

              {/* button-giỏ hàng */}
              <ButtonCart/>

              {/*button-đăng nhập */}
              <div className="header__user">
                <span>
                  <FaUser className="header__user-icon" />
                </span>
                <button className="header__user-button">Đăng nhập</button>
              </div>
            </div>
          </div>
          {/* start header center */}
          <div className="header__center">
            {/* InputSeachMoblie */}
            <div className="header__inputSeach">
              <InputSeach onPopoverChange={handlePopoverChange} />
            </div>
            {/* end InputSeachMoblie*/}

            {/*Start nav deskop */}
            <div
              className={`header__nav ${isMenuMobileOpen == true ? "show" : "hide"}`}
            >
              {navItems.map((item, index) => (
                <div className="header__nav-item" key={index}>
                  <div
                    className={`header__nav-item_name ${activeIndex == index ? "active" : ""}`}
                    onClick={() => onhandleNavItemName(item.text, index)}
                  >
                    <img src={item.imageSrc} alt={item.text} />
                    <p>{item.text}</p>
                  </div>
                  {item.subMenu && (
                    <div className="item__subMenu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <div className="item__subMenu-one" key={subIndex}>
                          <h2>{subItem.title}</h2>
                          <ul>
                            {subItem.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a href={link.href}>{link.text}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="item__subMenu-image">
                        <img src={nav_image_shadow} alt="Submenu Shadow" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/*End nav deskop */}
            {/* subMenuMobile */}
            <div
              className={`sub__menu_mobile ${isMenuMobileOpen == true ? "show" : "hide"}`}
            >
              <div className="sub__menu_mobile-item">
                <h3>{dataSubMenuMobile?.title}</h3>
                <ul>
                  {dataSubMenuMobile?.items.map(
                    (subItem: any, subIndex: number) => {
                      return <button key={subIndex}>{subItem}</button>;
                    }
                  )}
                </ul>
              </div>
            </div>
            {/* endsubMobile */}
          </div>
          {/* end header center */}

          {/* StartHeader Bootom */}
          <div
            className={`header__bottom ${isMenuOpen == true || isPopoverOpen == true ? "header_bottom_orverlay" : ""} `}
          >
            <div className="header__bottom-item current-page">
              <IoHomeOutline />
              <p className="text-[12px]">Thay bàn phím laptop</p>
            </div>
          </div>
          {/* EndHeaderBootom */}
        </div>
      </header>
      {/* Overlay background */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      {isPopoverOpen == true && <div className="overlay"> </div>}
    </>
  );
};

export default Header;
