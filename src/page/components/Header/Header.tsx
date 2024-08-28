import { image_laptop, logo, nav_image_shadow } from "@/assets/img";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import NavItem from "./_components/NavItem";
const menuItems = [
  {
    title: "Sửa Main - Nguồn - Wifi",
    items: [
      { label: "Dịch vụ bo chủ cho laptop", link: "#" },
      { label: "Thay bàn phím laptop", link: "#" },
      { label: "Dịch vụ bo chủ cho laptop", link: "#" },
      { label: "Thay bàn phím laptop", link: "#" },
    ],
  },
  {
    title: "Sửa Màn Hình - Pin - Cảm Ứng",
    items: [
      { label: "Thay màn hình laptop", link: "#" },
      { label: "Thay pin laptop", link: "#" },
      { label: "Sửa cảm ứng", link: "#" },
      { label: "Dịch vụ khác", link: "#" },
    ],
  },
  {
    title: "Sửa Laptop - Đổi Linh Kiện",
    items: [
      { label: "Sửa laptop nhanh", link: "#" },
      { label: "Thay linh kiện chính hãng", link: "#" },
      { label: "Kiểm tra lỗi phần cứng", link: "#" },
      { label: "Dịch vụ vệ sinh laptop", link: "#" },
    ],
  },
];

const Header = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="">
        <div className="container">
          <div className="header__top">
            <div className="header__menuMobile">
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
            {/*start nav deskop */}
            <div className="header__nav">
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
                <div className="item__subMenu">
                  <div className="item__subMenu-one">
                    <h2>Sửa Main - Nguồn - Wifi</h2>
                    <ul>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="item__subMenu-one">
                    <ul>
                      <h2>Sửa Main - Nguồn - Wifi</h2>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="item__subMenu-one">
                    <ul>
                      <h2>Sửa Main - Nguồn - Wifi</h2>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item__subMenu-image">
                    <img src={nav_image_shadow} alt="" />
                  </div>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
                <div className="item__subMenu">
                  <div className="item__subMenu-one">
                    <h2>Sửa Main - Nguồn - Wifi</h2>
                    <ul>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="item__subMenu-one">
                    <ul>
                      <h2>Sửa Main - Nguồn - Wifi</h2>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="item__subMenu-one">
                    <ul>
                      <h2>Sửa Main - Nguồn - Wifi</h2>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item__subMenu-image">
                    <img src={nav_image_shadow} alt="" />
                  </div>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
                <div className="item__subMenu">
                  <div className="item__subMenu-one">
                    <h2>Sửa Main - Nguồn - Wifi</h2>
                    <ul>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="item__subMenu-one">
                    <ul>
                      <h2>Sửa Main - Nguồn - Wifi</h2>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="item__subMenu-one">
                    <ul>
                      <h2>Sửa Main - Nguồn - Wifi</h2>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ bo chủ cho laptop</a>
                      </li>
                      <li>
                        <a href="#">Thay bàn phím laptop</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item__subMenu-image">
                    <img src={nav_image_shadow} alt="" />
                  </div>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
            </div>
            {/* <div className="header__nav">
              {menuItems.map((menu, index) => (
                <NavItem
                  key={index}
                  imageSrc={image_laptop}
                  text="Sửa chữa laptop"
                  submenu={[menu]} // Pass submenu data here
                  imageBottomSrc={nav_image_shadow}
                />
              ))}
            </div> */}
          </div>
          {/*END nav deskop */}
          <div className="header__bottom">
            <div className="header__bottom-item current-page">
              <IoHomeOutline />
              <p className="text-[12px]">Thay bàn phím laptop</p>
            </div>
          </div>
        </div>
        {/* MenuMobile */}
        {/* <div className="header__nav-mobile">
          <div className="header__nav-mobile_left">
            <div className="header__nav-mobile">
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
              <div className="header__nav-item">
                <div className="header__nav-item_name">
                  <img src={image_laptop} alt="" />
                  <p>Sửa chữa laptop</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header__nav-mobile_right">
            <h2>fjifjeisf</h2>
          </div>
        </div> */}
        {/* END MenuMobile */}

        {/* MenuMoblie */}
      </header>
      {/* Overlay background */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
