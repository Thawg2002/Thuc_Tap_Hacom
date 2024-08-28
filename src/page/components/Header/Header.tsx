import { image_laptop, logo } from "@/assets/img";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header>
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
              <button className="header__menu-button">Danh mục</button>
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
          <div className="header__center-item">
            <img src={image_laptop} alt="" />
            <p>Sửa chữa laptop</p>
          </div>
          <div className="header__center-item">
            <img src={image_laptop} alt="" />
            <p>Sửa chữa laptop</p>
          </div>
          <div className="header__center-item">
            <img src={image_laptop} alt="" />
            <p>Sửa chữa laptop</p>
          </div>
          <div className="header__center-item">
            <img src={image_laptop} alt="" />
            <p>Sửa chữa laptop</p>
          </div>
          <div className="header__center-item">
            <img src={image_laptop} alt="" />
            <p>Sửa chữa laptop</p>
          </div>
          <div className="header__center-item">
            <img src={image_laptop} alt="" />
            <p>Sửa chữa laptop</p>
          </div>
          <div className="header__center-item">
            <img src={image_laptop} alt="" />
            <p>Sửa chữa laptop</p>
          </div>
          <div className="header__center-item">
            <img src={image_laptop} alt="" />
            <p>Sửa chữa laptop</p>
          </div>
        </div>
        <div className="header__bottom">
          <h3>Header__bootom</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
