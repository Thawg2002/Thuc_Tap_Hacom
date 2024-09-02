import React from "react";
import "./BottomFooter.scss";
import { AspectRatio, Flex, Grid, GridCol } from "@mantine/core";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { logoHacom } from "@/assets/img";
type Props = {};

const BottomFooter = (props: Props) => {
  return (
    <>
      <div>
        <div className="container">
          <Grid className="bottomFooter">
            <GridCol>
              <Flex direction="column">
                <div className="service-info">
                  <div className="service-info__header">
                    <h2 className="service-info__title">
                      Dịch Vụ Tốt - 65 THÁI HÀ
                    </h2>
                  </div>
                </div>
                <Flex className="info-item">
                  <CiLocationOn />
                  <p className="info-label">Địa chỉ :</p>
                  <p className="info-content">
                    Số 65 Phố Thái Hà - Đống Đa - Hà Nội
                  </p>
                </Flex>
                <Flex className="info-item">
                  <MdOutlinePhoneInTalk />
                  <p className="info-label">Bảo hành :</p>
                  <p className="info-content">0989 8888 6666</p>
                </Flex>
                <Flex className="info-item">
                  <MdOutlinePhoneInTalk />
                  <p className="info-label">Khiếu nại dịch vụ :</p>
                  <p className="info-content">0989 8888 6666</p>
                </Flex>
                <Flex className="info-item">
                  <IoMdTime />
                  <p className="info-label">Mở cửa từ :</p>
                  <p className="info-content">8h30 - 19h hàng ngày</p>
                </Flex>
              </Flex>
            </GridCol>
            <GridCol>
              <Flex direction="column">
                <div className="service-info">
                  <div className="service-info__header2">
                    <h2 className="service-info__title">
                      Dịch Vụ Tốt - 65 THÁI HÀ
                    </h2>
                  </div>
                </div>
                <Flex className="info-item">
                  <CiLocationOn />
                  <p className="info-label">Địa chỉ :</p>
                  <p className="info-content">
                    Số 65 Phố Thái Hà - Đống Đa - Hà Nội
                  </p>
                </Flex>
                <Flex className="info-item">
                  <MdOutlinePhoneInTalk />
                  <p className="info-label">Bảo hành :</p>
                  <p className="info-content">0989 8888 6666</p>
                </Flex>
                <Flex className="info-item">
                  <MdOutlinePhoneInTalk />
                  <p className="info-label">Khiếu nại dịch vụ :</p>
                  <p className="info-content">0989 8888 6666</p>
                </Flex>
                <Flex className="info-item">
                  <IoMdTime />
                  <p className="info-label">Mở cửa từ :</p>
                  <p className="info-content">8h30 - 19h hàng ngày</p>
                </Flex>
              </Flex>
            </GridCol>
            <GridCol className="service-connect-main">
              <Flex direction="row" className="service-connect">
                <h2 className="service-connect__title">
                  Kết nối với dịch vụ tốt.
                </h2>
                <span>vn</span>
              </Flex>
              <Flex direction="row" className="service-connect__social-icons">
                <FaYoutube className="social-icon" />
                <FaYoutube className="social-icon" />
                <FaYoutube className="social-icon" />
                <FaYoutube className="social-icon" />
              </Flex>
              <div className="service-connect__group-info">
                <p>Thành viên của HACOM GROUP</p>
              </div>
              <div className="service-connect__logo">
                <img src={logoHacom} alt="Hacom Logo" />
              </div>
            </GridCol>

            <GridCol className="service-map-main">
              <div className="service-map">
                <AspectRatio ratio={16 / 9} className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
                    title="Google map"
                    style={{ border: 1 }}
                  />
                </AspectRatio>
              </div>
            </GridCol>
          </Grid>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <Flex direction="column" className="bottom-footer__info">
            <p className="bottom-footer__copyright">
              @ 2024 Công ty Cổ phần HACOM Dịch Vụ Tốt
            </p>
            <p className="bottom-footer__note">Trang web đang phát triển...</p>
            <p className="bottom-footer__contact">
              Email: info@dichvutot.vn. Điện thoại: 1800 8091
            </p>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
