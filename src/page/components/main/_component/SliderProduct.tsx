import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import { imagePin1, imagePin2, imagePin4 } from "@/assets/img";
function SliderProduct() {
  // const [nav1, setNav1] = useState(null);
  // const [nav2, setNav2] = useState(null);
  // let sliderRef1 = useRef(null);
  // let sliderRef2 = useRef(null);
  const [nav1, setNav1] = useState<Slider | any>(undefined);
  const [nav2, setNav2] = useState<Slider | any>(undefined);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Thay đổi thời gian chuyển đổi giữa các slide (tính bằng ms)
    pauseOnHover: true, // Tạm dừng khi di chuột lên slider
    arrows: false, // Ẩn các mũi tên điều hướng (nếu không cần)
    dots: true, // Hiển thị các chấm điều hướng
  };
  return (
    <div className="slider-container ">
      {/* <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4> */}
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={sliderRef1}
        className="sliderProduct__detail"
      >
        <div className="sliderProduct__detail-image">
          <img src={imagePin1} alt="" />
        </div>
        <div className="sliderProduct__detail-image">
          <img src={imagePin2} alt="" />
        </div>
        <div className="sliderProduct__detail-image">
          <img src={imagePin4} alt="" />
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="image_second"
      >
        <div className="sliderProduct__detail-image_second">
          <img src={imagePin1} alt="" />
        </div>
        <div className="sliderProduct__detail-image_second">
          <img src={imagePin2} alt="" />
        </div>
        <div className="sliderProduct__detail-image_second">
          <img src={imagePin4} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderProduct;
