import { Button, Flex, Popover } from "@mantine/core";
import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "./ButtonCart.scss";

type Props = {};

const ButtonCart = (props: Props) => {
  return (
    <Popover width={327} trapFocus position="bottom" withArrow shadow="md">
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
          <Flex direction="column" className="header__cart-dropdown-center">
            <div className="header__cart-dropdown-icon">
              <IoCartOutline className="icon" />
            </div>
            <div className="header__cart-dropdown-message">
              <p>Giỏ hàng của bạn đang trống!</p>
            </div>
          </Flex>
          {/* bottom */}
          <Flex direction="column" className="header__cart-dropdown-bottom">
            <Flex direction="row" className="header__cart-dropdown-summary">
              <p>Tổng số tiền tạm tính</p>
              <p className="text-red-600">0đ</p>
            </Flex>
            <Flex direction="row" className="header__cart-dropdown-actions">
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
  );
};

export default ButtonCart;
