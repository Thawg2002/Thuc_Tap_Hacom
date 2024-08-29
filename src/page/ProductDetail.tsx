import { Grid, Input } from "@mantine/core";
import Header from "../components/Header/Header";
import DescriptionProduct from "../components/main/component/Left/Description/DescriptionProduct";
import RatingProductDetail from "../components/main/component/Left/Rating/Rating";
import SliderProduct from "../components/main/component/Left/SliderProductDetail/SliderProduct";
import ProductDetail_Info from "../components/main/component/Right/ProductDetail_Info/ProductDetail_Info";
import TittleName from "@/components/main/component/Left/TitleName/TittleName";
const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className="h-[20px]"></div>
      <main className="">
        <div className="container">
          <Grid columns={12} className="product-detail">
            {/* Start main left */}
            <Grid.Col span={7.5} className="product-detail__left">
              <div className="product-detail__name">
                <TittleName />
                <SliderProduct />
              </div>
              <div className="show_Product-info">
                <ProductDetail_Info />
              </div>
              {/* Start Description */}
              <div>
                <DescriptionProduct />
              </div>
              {/* End Description */}

              {/* Rating */}
              <div>
                <RatingProductDetail />
              </div>
              {/* End Rating */}

              <div className="product-detail__section">
                <h3 className="product-detail__section-title">Comment</h3>
              </div>
              <div>ProductList</div>
            </Grid.Col>
            {/* End main left */}

            {/* Start main right */}
            <Grid.Col span={4.5} className="product-detail__right">
              {/* Nội dung bên phải */}
              {/* Info */}
              <div>
                <ProductDetail_Info />
              </div>
              {/* Bài viết liên quan */}
            </Grid.Col>
            {/* End main right */}
          </Grid>
        </div>
      </main>
      <div className="h-[1000px]">
        <Input placeholder="Input component" className="inputtext" />
      </div>
    </>
  );
};

export default ProductDetail;
