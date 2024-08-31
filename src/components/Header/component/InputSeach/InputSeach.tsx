import {
  image_dropdown_InputSeach,
  image_dropdown_InputSeach2,
} from "@/assets/img";
import { Flex, Grid, Popover } from "@mantine/core";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./InputSeach.scss";
type Props = {
  onPopoverChange: (isOpen: boolean) => void;
};

const InputSeach = ({ onPopoverChange }: Props) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    onPopoverChange(isPopoverOpen);
  }, [isPopoverOpen]);
  // console.log("isPopoverOpen", isPopoverOpen);
  return (
    <>
      <Popover
        trapFocus
        position="bottom"
        withArrow
        shadow="md"
        onOpen={() => setPopoverOpen(true)}
        onClose={() => setPopoverOpen(false)}
      >
        <Popover.Target>
          <form action="" className="header__search-form">
            <input
              type="text"
              placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
              className="header__search-input"
            />
            <button className="header__search-button">
              <CiSearch className="icon__confirm" />
            </button>
          </form>
        </Popover.Target>
        <Popover.Dropdown className="header__search-dropdown">
          <div className="header__search-dropdown-main">
            <div className="header__search-dropdown-image">
              <img src={image_dropdown_InputSeach} alt="Xu hướng tìm kiếm" />
            </div>
            <div className="header__search-dropdown-title">
              <p>Xu hướng tìm kiếm :</p>
            </div>
            <div className="header__search-dropdown-content">
              <Grid>
                <Grid.Col span={6}>
                  <Flex
                    direction="row"
                    className="header__search-dropdown-item"
                  >
                    <img src={image_dropdown_InputSeach2} alt="Sửa màn hình" />
                    <div className="header__search-dropdown-text">
                      <p>Sửa màn hình</p>
                    </div>
                  </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                  {" "}
                  <Flex
                    direction="row"
                    className="header__search-dropdown-item"
                  >
                    <img src={image_dropdown_InputSeach2} alt="Sửa màn hình" />
                    <div className="header__search-dropdown-text">
                      <p>Sửa màn hình</p>
                    </div>
                  </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                  {" "}
                  <Flex
                    direction="row"
                    className="header__search-dropdown-item"
                  >
                    <img src={image_dropdown_InputSeach2} alt="Sửa màn hình" />
                    <div className="header__search-dropdown-text">
                      <p>Sửa màn hình</p>
                    </div>
                  </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                  {" "}
                  <Flex
                    direction="row"
                    className="header__search-dropdown-item"
                  >
                    <img src={image_dropdown_InputSeach2} alt="Sửa màn hình" />
                    <div className="header__search-dropdown-text">
                      <p>Sửa màn hình</p>
                    </div>
                  </Flex>
                </Grid.Col>
              </Grid>
              <Grid></Grid>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};

export default InputSeach;
