import { banphimlaptop } from "@/assets/img";
import { Button, Flex, Rating } from "@mantine/core";
import { FaCartPlus } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Slider from "react-slick";
import "./ProductList.scss";
type Props = {};

const ProductList = (props: Props) => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="product-list ">
      <div className="product-list__header">
        <Button className="product-list__header-button">
          Sản phẩm liên quan
        </Button>
      </div>

      <div>
        <Slider {...settings} className="sliderProductList-container">
          <div className="slider-item">
            <div className="slider-item__content">
              <img className="slider-item__image" src={banphimlaptop} alt="" />
              {/* rating */}
              <Flex className="slider-item__details">
                <Rating
                  className="slider-item__rating"
                  defaultValue={2}
                  size="xs"
                />
                <span className="slider-item__code">Mã:THANG2002</span>
              </Flex>
              {/* nameProduct */}
              <div className="slider-item__description">
                <div className="slider-name">
                  Bàn phím Laptop Asus X401, siêu mỏng, 30 chân, tràn viền,
                  không tai.
                </div>
                <Flex className="slider-item__price-info">
                  <span className="slider-item__price-original">359.000đ</span>
                  <span className="slider-item__discount">(tiết kiệm 5%)</span>
                </Flex>
                <div className="slider-item__price">
                  <span className="slider-item__price-final">359.000đ</span>
                </div>
              </div>
              {/* addcart */}
              <Flex direction="row" className="slider-item__availability">
                <Flex className="slider-item__availability-status">
                  <TiTick className="slider-item__availability-icon" />
                  <span className="slider-item__availability-text">
                    Sẵn hàng
                  </span>
                </Flex>
                <div className="slider-item__add-to-cart">
                  <FaCartPlus className="slider-item__cart-icon" />
                </div>
              </Flex>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item__content">
              <img className="slider-item__image" src={banphimlaptop} alt="" />
              {/* rating */}
              <Flex className="slider-item__details">
                <Rating
                  className="slider-item__rating"
                  defaultValue={2}
                  size="xs"
                />
                <span className="slider-item__code">Mã:THANG2002</span>
              </Flex>
              {/* nameProduct */}
              <div className="slider-item__description">
                <div className="slider-name">
                  Bàn phím Laptop Asus X401, siêu mỏng, 30 chân, tràn viền,
                  không tai.
                </div>
                <Flex className="slider-item__price-info">
                  <span className="slider-item__price-original">359.000đ</span>
                  <span className="slider-item__discount">(tiết kiệm 5%)</span>
                </Flex>
                <div className="slider-item__price">
                  <span className="slider-item__price-final">359.000đ</span>
                </div>
              </div>
              {/* addcart */}
              <Flex direction="row" className="slider-item__availability">
                <Flex className="slider-item__availability-status">
                  <TiTick className="slider-item__availability-icon" />
                  <span className="slider-item__availability-text">
                    Sẵn hàng
                  </span>
                </Flex>
                <div className="slider-item__add-to-cart">
                  <FaCartPlus className="slider-item__cart-icon" />
                </div>
              </Flex>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item__content">
              <img className="slider-item__image" src={banphimlaptop} alt="" />
              {/* rating */}
              <Flex className="slider-item__details">
                <Rating
                  className="slider-item__rating"
                  defaultValue={2}
                  size="xs"
                />
                <span className="slider-item__code">Mã:THANG2002</span>
              </Flex>
              {/* nameProduct */}
              <div className="slider-item__description">
                <div className="slider-name">
                  Bàn phím Laptop Asus X401, siêu mỏng, 30 chân, tràn viền,
                  không tai.
                </div>
                <Flex className="slider-item__price-info">
                  <span className="slider-item__price-original">359.000đ</span>
                  <span className="slider-item__discount">(tiết kiệm 5%)</span>
                </Flex>
                <div className="slider-item__price">
                  <span className="slider-item__price-final">359.000đ</span>
                </div>
              </div>
              {/* addcart */}
              <Flex direction="row" className="slider-item__availability">
                <Flex className="slider-item__availability-status">
                  <TiTick className="slider-item__availability-icon" />
                  <span className="slider-item__availability-text">
                    Sẵn hàng
                  </span>
                </Flex>
                <div className="slider-item__add-to-cart">
                  <FaCartPlus className="slider-item__cart-icon" />
                </div>
              </Flex>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item__content">
              <img className="slider-item__image" src={banphimlaptop} alt="" />
              {/* rating */}
              <Flex className="slider-item__details">
                <Rating
                  className="slider-item__rating"
                  defaultValue={2}
                  size="xs"
                />
                <span className="slider-item__code">Mã:THANG2002</span>
              </Flex>
              {/* nameProduct */}
              <div className="slider-item__description">
                <div className="slider-name">
                  Bàn phím Laptop Asus X401, siêu mỏng, 30 chân, tràn viền,
                  không tai.
                </div>
                <Flex className="slider-item__price-info">
                  <span className="slider-item__price-original">359.000đ</span>
                  <span className="slider-item__discount">(tiết kiệm 5%)</span>
                </Flex>
                <div className="slider-item__price">
                  <span className="slider-item__price-final">359.000đ</span>
                </div>
              </div>
              {/* addcart */}
              <Flex direction="row" className="slider-item__availability">
                <Flex className="slider-item__availability-status">
                  <TiTick className="slider-item__availability-icon" />
                  <span className="slider-item__availability-text">
                    Sẵn hàng
                  </span>
                </Flex>
                <div className="slider-item__add-to-cart">
                  <FaCartPlus className="slider-item__cart-icon" />
                </div>
              </Flex>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item__content">
              <img className="slider-item__image" src={banphimlaptop} alt="" />
              {/* rating */}
              <Flex className="slider-item__details">
                <Rating
                  className="slider-item__rating"
                  defaultValue={2}
                  size="xs"
                />
                <span className="slider-item__code">Mã:THANG2002</span>
              </Flex>
              {/* nameProduct */}
              <div className="slider-item__description">
                <div className="slider-name">
                  Bàn phím Laptop Asus X401, siêu mỏng, 30 chân, tràn viền,
                  không tai.
                </div>
                <Flex className="slider-item__price-info">
                  <span className="slider-item__price-original">359.000đ</span>
                  <span className="slider-item__discount">(tiết kiệm 5%)</span>
                </Flex>
                <div className="slider-item__price">
                  <span className="slider-item__price-final">359.000đ</span>
                </div>
              </div>
              {/* addcart */}
              <Flex direction="row" className="slider-item__availability">
                <Flex className="slider-item__availability-status">
                  <TiTick className="slider-item__availability-icon" />
                  <span className="slider-item__availability-text">
                    Sẵn hàng
                  </span>
                </Flex>
                <div className="slider-item__add-to-cart">
                  <FaCartPlus className="slider-item__cart-icon" />
                </div>
              </Flex>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-item__content">
              <img className="slider-item__image" src={banphimlaptop} alt="" />
              {/* rating */}
              <Flex className="slider-item__details">
                <Rating
                  className="slider-item__rating"
                  defaultValue={2}
                  size="xs"
                />
                <span className="slider-item__code">Mã:THANG2002</span>
              </Flex>
              {/* nameProduct */}
              <div className="slider-item__description">
                <div className="slider-name">
                  Bàn phím Laptop Asus X401, siêu mỏng, 30 chân, tràn viền,
                  không tai.
                </div>
                <Flex className="slider-item__price-info">
                  <span className="slider-item__price-original">359.000đ</span>
                  <span className="slider-item__discount">(tiết kiệm 5%)</span>
                </Flex>
                <div className="slider-item__price">
                  <span className="slider-item__price-final">359.000đ</span>
                </div>
              </div>
              {/* addcart */}
              <Flex direction="row" className="slider-item__availability">
                <Flex className="slider-item__availability-status">
                  <TiTick className="slider-item__availability-icon" />
                  <span className="slider-item__availability-text">
                    Sẵn hàng
                  </span>
                </Flex>
                <div className="slider-item__add-to-cart">
                  <FaCartPlus className="slider-item__cart-icon" />
                </div>
              </Flex>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductList;
