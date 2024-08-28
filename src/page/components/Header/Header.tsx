import { image_laptop, logo, nav_image_shadow } from "@/assets/img";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import { navItems } from "./_components/DataNavItem";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuToggle = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };
  console.log("isMenuMobileOpen", isMenuMobileOpen);
  return (
    <>
      <header className="">
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
              <form action="">
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
                  className="header__search"
                />
                <button>
                  <CiSearch className="icon__confirm" />
                </button>
              </form>
              {/* button-giỏ hàng */}
              <div className="header__cart">
                <span>
                  <FaShoppingCart className="header__cart-icon" />
                </span>
                <button className="header__cart-button">Giỏ hàng</button>
              </div>
              {/*button-đăng nhập */}
              <div className="header__user">
                <span>
                  <FaUser className="header__user-icon" />
                </span>
                <button className="header__user-button">Đăng nhập</button>
              </div>
            </div>
          </div>

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

          {/* StartHeader Bootom */}
          <div className="header__bottom">
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
