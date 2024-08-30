import { Button, Flex, Textarea } from "@mantine/core";
import "./Comment.scss";
type Props = {};

const Comment = (props: Props) => {
  return (
    <div className="product-detail__feedback-section">
      <Flex direction="column" gap="sm" className="feedback-section__input-wrapper">
        <Textarea
          size="sm"
          radius="lg"
          variant="unstyled"
          placeholder="Mời bạn để lại bình luận..."
          className="feedback-section__textarea"
        />

        <div className="feedback-section__submit-button">
          <Button variant="filled" color="#f72429" size="sm" radius="md" className="feedback-button">
            Gửi bình luận
          </Button>
        </div>
      </Flex>
    </div>
  );
};

export default Comment;
