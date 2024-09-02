import {
  Button,
  FileInput,
  Flex,
  Modal,
  Rating,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../Rating.scss";
import "./CommetRating.scss";
type Props = {};

const CommentRating = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Flex direction="column" className="rating-feedback">
      <p>Chia sẻ nhận xét về sản phẩm</p>
      <Button color="#f72429" className="rating-feedback-button" onClick={open}>
        Viết nhận xét của bạn
      </Button>
      <Modal opened={opened} onClose={close} centered>
        {/* Modal content */}
        <form action="" className="comment-rating__form">
          <p className="comment-rating__form-title">Đánh giá sản phẩm</p>
          <div className="comment-rating__rating">
            <Rating defaultValue={0} />
          </div>
          <p className="comment-rating__form-subtitle">Viết nhận xét</p>
          <FileInput
            label="Họ tên"
            withAsterisk
            placeholder="Nhập họ tên của bạn"
            className="comment-rating__input"
          />
          <FileInput
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            className="comment-rating__input"
          />
          <FileInput
            label="Email"
            placeholder="Nhập địa chỉ email"
            className="comment-rating__input"
          />
          <Textarea
            label="Nội dung đánh giá"
            withAsterisk
            placeholder="Nhập đánh giá về sản phẩm"
            className="comment-rating__textarea"
          />
          <Button variant="filled" size="xs" className="comment-rating__submit">
            Gửi đánh giá
          </Button>
        </form>
      </Modal>
    </Flex>
  );
};

export default CommentRating;
