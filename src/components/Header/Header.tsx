import {
  image_dropdown_InputSeach,
  image_dropdown_InputSeach2,
  logo,
  nav_image_shadow,
} from "@/assets/img";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { navItems } from "./component/DataNavItem";
import { Popover, Text, Button, TextInput, Flex, Grid } from "@mantine/core";
import { IoCartOutline } from "react-icons/io5";
import "./Header.scss";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuToggle = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };
  // console.log("isMenuMobileOpen", isMenuMobileOpen);
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
              <div className="header__menu">
                <IoMdMenu className="header__menu-icon" />
                <button className="header__menu-button" onClick={toggleMenu}>
                  Danh mục
                </button>
              </div>
              {/* form seach */}
              <Popover
                width={300}
                trapFocus
                position="bottom"
                withArrow
                shadow="md"
              >
                <Popover.Target>
                  <form action="" className="header__search-form">
                    <input
                      type="text"
                      placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
                      className="header__search-input"
                    />
                    <button className="header__search-button">
                      <CiSearch className="icon__confirm" />
                    </button>
                  </form>
                </Popover.Target>
                <Popover.Dropdown className="header__search-dropdown">
                  <div className="header__search-dropdown-main">
                    <div className="header__search-dropdown-image">
                      <img
                        src={image_dropdown_InputSeach}
                        alt="Xu hướng tìm kiếm"
                      />
                    </div>
                    <div className="header__search-dropdown-title">
                      <p>Xu hướng tìm kiếm</p>
                    </div>
                    <div className="header__search-dropdown-content">
                      <Grid columns={2}>
                        <Flex
                          direction="row"
                          className="header__search-dropdown-item"
                        >
                          <img
                            src={image_dropdown_InputSeach2}
                            alt="Sửa màn hình"
                          />
                          <div className="header__search-dropdown-text">
                            <p>Sửa màn hình</p>
                          </div>
                        </Flex>
                        <Flex
                          direction="row"
                          className="header__search-dropdown-item"
                        >
                          <img
                            src={image_dropdown_InputSeach2}
                            alt="Sửa màn hình"
                          />
                          <div className="header__search-dropdown-text">
                            <p>Sửa màn hình</p>
                          </div>
                        </Flex>
                        <Flex
                          direction="row"
                          className="header__search-dropdown-item"
                        >
                          <img
                            src={image_dropdown_InputSeach2}
                            alt="Sửa màn hình"
                          />
                          <div className="header__search-dropdown-text">
                            <p>Sửa màn hình</p>
                          </div>
                        </Flex>
                        <Flex
                          direction="row"
                          className="header__search-dropdown-item"
                        >
                          <img
                            src={image_dropdown_InputSeach2}
                            alt="Sửa màn hình"
                          />
                          <div className="header__search-dropdown-text">
                            <p>Sửa màn hình</p>
                          </div>
                        </Flex>
                      </Grid>
                    </div>
                  </div>
                </Popover.Dropdown>
              </Popover>

              {/* button-giỏ hàng */}
              <Popover
                width={327}
                trapFocus
                position="bottom"
                withArrow
                shadow="md"
              >
                <Popover.Target>
                  <div className="header__cart">
                    <span>
                      <FaShoppingCart className="header__cart-icon" />
                    </span>
                    <button className="header__cart-button">Giỏ hàng</button>
                  </div>
                </Popover.Target>
                <Popover.Dropdown className="header__cart-dropdown">
                  <div className="header__cart-dropdown-main">
                    {/* top */}
                    <div className="header__cart-dropdown-top">
                      <p>Giỏ hàng</p>
                    </div>
                    {/* center */}
                    <Flex
                      direction="column"
                      className="header__cart-dropdown-center"
                    >
                      <div className="header__cart-dropdown-icon">
                        <IoCartOutline className="icon" />
                      </div>
                      <div className="header__cart-dropdown-message">
                        <p>Giỏ hàng của bạn đang trống!</p>
                      </div>
                    </Flex>
                    {/* bottom */}
                    <Flex
                      direction="column"
                      className="header__cart-dropdown-bottom"
                    >
                      <Flex
                        direction="row"
                        className="header__cart-dropdown-summary"
                      >
                        <p>Tổng số tiền tạm tính</p>
                        <p className="text-red-600">0đ</p>
                      </Flex>
                      <Flex
                        direction="row"
                        className="header__cart-dropdown-actions"
                      >
                        <Button variant="outline" color="#000">
                          Chỉnh sửa giỏ hàng
                        </Button>
                        <Button variant="filled" color="#ed1b24">
                          Thanh toán
                        </Button>
                      </Flex>
                    </Flex>
                  </div>
                </Popover.Dropdown>
              </Popover>

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
            {/* form tìm kiếm online */}
            <div className="header__inputSeach">
              <form action="">
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
                  className=""
                />
                <button>
                  <CiSearch className="header__inputSeach-icon" />
                </button>
              </form>
            </div>
            {/* end form tìm kiếm online */}

            {/*Start nav deskop */}
            <div
              className={`header__nav ${isMenuMobileOpen == true ? "show" : "hide"}`}
            >
              {navItems.map((item, index) => (
                <div className="header__nav-item" key={index}>
                  <div className="header__nav-item_name">
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
              <h3>Sửa chữa Laptop</h3>
              <button>Sửa Main Laptop</button>
              <button>Sửa Main Laptop</button>
              <button>Sửa Main Laptop</button>
              <button>Sửa Main Laptop</button>
            </div>
            {/* endsubMobile */}
          </div>
          {/* end header center */}

          {/* StartHeader Bootom */}
          <div
            className={`header__bottom ${isMenuOpen == true ? "header_bottom_orverlay" : ""} `}
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
    </>
  );
};

export default Header;
