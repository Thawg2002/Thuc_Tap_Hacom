import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Flex, FileInput, Textarea } from "@mantine/core";
import "./SendContact.scss";
type Props = {};

const SendContact = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="ĐẶT LỊCH BẢO HÀNH"
        centered
        className="modal__sendContact"
        size="683px"
      >
        {/* Modal content */}
        <form className="warranty-form">
          <Flex direction="column" className="form-container">
            <Flex direction="row" className="form-row">
              <FileInput
                label="Họ và Tên"
                placeholder="Input placeholder"
                className="input-"
              />
              <FileInput
                label="Chọn cửa hàng"
                placeholder="Chọn cửa hàng"
                className="input-"
              />
            </Flex>
            <Flex direction="row" className="form-row">
              <FileInput
                label="Số điện thoại"
                placeholder="0989.xxxx.xxxx"
                className="input-"
              />
              <FileInput
                label="Loại thiết bị cần sửa chữa"
                placeholder="Loại thiết bị (VD : Iphone 12 Pro Max,...)"
                className="input-"
              />
            </Flex>
            <Textarea
              label="Chi tiết lỗi gặp phải"
              placeholder="Chi tiết lỗi gặp phải (Bắt buộc)"
              className="input-textarea"
            />
          </Flex>
          <div className="text-center">
            <Button variant="outline" color="gray" className="submit-button ">
              Tiếp tục
            </Button>
          </div>
        </form>
      </Modal>

      <div className="contact-item firt-icon" onClick={open}>
        <div className="contact-icon">
          <FaCalendarAlt />
        </div>
        <div className="contact-text">
          <p className="lable-text">Đặt lịch</p>
        </div>
      </div>
    </>
  );
};

export default SendContact;
