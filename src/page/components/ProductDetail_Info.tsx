import { Flex, Title } from "@mantine/core";
import { AiOutlineFileProtect } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { LuBadgeInfo } from "react-icons/lu";
import { MdArticle } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { iamgeCpu } from "@/assets/img";
type Props = {};

const ProductDetail_Info = (props: Props) => {
  return (
    <>
      <div className="product-detail__warranty">
        <AiOutlineFileProtect className="icon" />
        <p>Bảo hành: 12 Tháng</p>
      </div>

      <div className="product-detail__pricing">
        <Title order={3} className="product-detail__title">
          Giá bán & Sửa chữa
        </Title>
        <div className="product-detail__prices">
          <p className="product-detail__price">
            <span>250.000đ</span>
          </p>
          <p className="product-detail__price-old">
            <span>249.000đ</span>
          </p>
          <p className="product-detail__discount">
            <span>(tiết kiệm 40.000đ)</span>
          </p>
        </div>
      </div>

      <div className="product-detail__actions">
        <div className="product-detail__action-buttons">
          <button className="product-detail__action-button--purchase">
            <span>ĐẶT MUA LINH KIỆN</span>
            <p className="font-[500]">(Nhận tại nhà hoặc tại cửa hàng)</p>
          </button>
          <button className="product-detail__action-button--cart">
            <CiShoppingCart className="icon_cart" />
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
        <div className="product-detail__schedule-booking">
          <button className="product-detail__button-book">
            <span>ĐẶT MUA LINH KIỆN</span>
            <p>(Nhận tại cửa hàng hoặc tại cửa hàng)</p>
          </button>
        </div>
      </div>
      <div className="product-detail__info">
        <div className="product-detail__info-header">
          <LuBadgeInfo className="product-detail__info-header-icon" />
          <p className="product-detail__info-header-title">
            THÔNG TIN SẢN PHẨM
          </p>
        </div>
        <div className="product-detail__info-content">
          <p className="product-detail__info-text">
            - Pin thay thế dung lượng tiêu chuẩn dành cho iPhon e5S.
            <br />- Đáp ứng đầy đủ các tiêu chuẩn an toàn tương đương pin gốc
            của máy.
            <br /> - Đổi mới hoặc hoàn tiền trong 15 ngày đầu nếu không ưng vì
            bất kỳ lý do gì. <br />- Bảo hành chính hãng Bison 12 tháng.
          </p>
        </div>
      </div>
      <div className="product__article">
        <div className="product__article-header">
          <MdArticle className="product__article-icon" />
          <p className="product__article-title">Bài viết liên quan</p>
        </div>
        <div className="product__article-list">
          <Flex
            gap="md"
            direction="column"
            wrap="wrap"
            // className="product__article-item"
          >
            <div className="product__article-item">
              <div className="product__article-image-container">
                <div className="product__article-image-wrapper">
                  <img
                    src={iamgeCpu}
                    alt=""
                    className="product__article-image"
                  />
                </div>
              </div>
              <div className="product__article-info">
                <div className="product__article-description">
                  <p>Những yếu tố quyết định mạnh yếu của CPU</p>
                </div>
                <div className="product__article-meta">
                  <FaRegUserCircle />
                  <span className="product__article-date">06-08-2024</span>
                </div>
              </div>
            </div>

            <div className="product__article-item">
              <div className="product__article-image-container">
                <div className="product__article-image-wrapper">
                  <img
                    src={iamgeCpu}
                    alt=""
                    className="product__article-image"
                  />
                </div>
              </div>
              <div className="product__article-info">
                <div className="product__article-description">
                  <p>Những yếu tố quyết định mạnh yếu của CPU</p>
                </div>
                <div className="product__article-meta">
                  <FaRegUserCircle />
                  <span className="product__article-date">06-08-2024</span>
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default ProductDetail_Info;
