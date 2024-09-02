import React from "react";
import "./PolicyFooter.scss";
import { Flex, Grid } from "@mantine/core";
import { masterCard } from "@/assets/img";
type Props = {};

const PolicyFooter = (props: Props) => {
  return (
    <div className="container">
      <Grid className="polycy_footer">
        <Grid.Col className="policy-item">
          <div className="company-info">
            <p className="company-info__title">Thông tin công ty</p>
            <p className="company-info__item">Giới thiệu công ty</p>
            <p className="company-info__item">Tin tức công nghệ</p>
            <p className="company-info__item">Tin tức tuyển dụng</p>
            <p className="company-info__item">Thông tin liên hệ</p>
          </div>
        </Grid.Col>

        <Grid.Col className="policy-item">
          <div className="company-info">
            <p className="company-info__title">Thông tin công ty</p>
            <p className="company-info__item">Giới thiệu công ty</p>
            <p className="company-info__item">Tin tức công nghệ</p>
            <p className="company-info__item">Tin tức tuyển dụng</p>
            <p className="company-info__item">Thông tin liên hệ</p>
          </div>
        </Grid.Col>
        <Grid.Col className="policy-item">
          <div className="company-info">
            <p className="company-info__title">Thông tin công ty</p>
            <p className="company-info__item">Giới thiệu công ty</p>
            <p className="company-info__item">Tin tức công nghệ</p>
            <p className="company-info__item">Tin tức tuyển dụng</p>
            <p className="company-info__item">Thông tin liên hệ</p>
          </div>
        </Grid.Col>
        <Grid.Col className="policy-item">
          <div className="company-info">
            <p className="company-info__title">Thông tin công ty</p>
            <p className="company-info__item">Giới thiệu công ty</p>
            <p className="company-info__item">Tin tức công nghệ</p>
            <p className="company-info__item">Tin tức tuyển dụng</p>
            <p className="company-info__item">Thông tin liên hệ</p>
          </div>
        </Grid.Col>

        <Grid.Col className="policy-item">
          <div className="company-info">
            <p className="company-info__title">Phương thức thanh toán</p>
            <Flex className="imageMaster">
              <img src={masterCard} alt="" className="imageMasterCart" />
              <img src={masterCard} alt="" className="imageMasterCart" />
              <img src={masterCard} alt="" className="imageMasterCart" />
              <img src={masterCard} alt="" className="imageMasterCart" />
            </Flex>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default PolicyFooter;
