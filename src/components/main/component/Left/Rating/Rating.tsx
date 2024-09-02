import { Box, Flex, Progress, Rating } from "@mantine/core";
import CommentRating from "./CommentRating/CommentRating";
import "./Rating.scss";
const RatingProductDetail = () => {
  return (
    <div className="rating-container">
      <Flex direction="column" gap="md">
        <Flex direction="column" gap="">
          {/* start-rating-top */}
          <div className="rating-header">
            <p>Khách hàng chấm điểm, đánh giá, nhận xét</p>
          </div>
          {/* end-rating-top */}

          <div className="rating-divider">{/* thanh ngang */}</div>

          {/* start-rating-center */}
          <Flex gap="sm" className="rating-summary">
            <div className="flex">
              <div className="rating-summary-average">
                <p className="rating-average-score">4.6/5</p>
                <Rating defaultValue={5} size="md" className="average-icon" />
              </div>
            </div>

            <Flex direction="row" className="rating-summary-breakdown">
              <div className="rating-summary-breakdown-item">Tất cả</div>
              <Flex direction="row" className="rating-summary-breakdown-item">
                5 <Rating defaultValue={2} size="sm" count={1} />
              </Flex>
              <Flex direction="row" className="rating-summary-breakdown-item">
                5 <Rating defaultValue={2} size="sm" count={1} />
              </Flex>
              <Flex direction="row" className="rating-summary-breakdown-item">
                5 <Rating defaultValue={2} size="sm" count={1} />
              </Flex>
              <Flex direction="row" className="rating-summary-breakdown-item">
                5 <Rating defaultValue={2} size="sm" count={1} />
              </Flex>
              <Flex direction="row" className="rating-summary-breakdown-item">
                5 <Rating defaultValue={2} size="sm" count={1} />
              </Flex>
              <Flex direction="row" className="rating-summary-breakdown-item">
                5 <Rating defaultValue={2} size="sm" count={1} />
              </Flex>
            </Flex>
          </Flex>
          {/* end-rating-center */}

          <div className="rating-divider">{/* thanh ngang */}</div>

          {/* start-rating-bottom */}

          <Flex direction="row" className="rating-details">
            <Flex align="center" className="rating-details-average">
              <p className="rating-average-score">4.6/5</p>
              <Rating defaultValue={2} size="xl" count={1} />
            </Flex>
            <div className="rating-divider-col">{/* thanh ngang */}</div>

            <Flex direction="column" className="rating-details-breakdown">
              <Flex
                direction="row"
                gap="sm"
                className="rating-details-breakdown-item"
              >
                <Flex direction="row" className="rating-details-star">
                  <span>5</span>
                  <Rating
                    defaultValue={2}
                    size="sm"
                    count={1}
                    className="icon_rating_start"
                  />
                </Flex>
                <Box className="rating-details-progress">
                  <Progress value={70} />
                </Box>
                <div className="rating-details-count">
                  <p className="rating-details-count-text">9 đánh giá</p>
                </div>
              </Flex>
              <Flex
                direction="row"
                gap="sm"
                className="rating-details-breakdown-item"
              >
                <Flex direction="row" className="rating-details-star">
                  <span>5</span>
                  <Rating
                    defaultValue={2}
                    size="sm"
                    count={1}
                    className="icon_rating_start"
                  />
                </Flex>
                <Box className="rating-details-progress">
                  <Progress value={70} />
                </Box>
                <div className="rating-details-count">
                  <p className="rating-details-count-text">9 đánh giá</p>
                </div>
              </Flex>{" "}
              <Flex
                direction="row"
                gap="sm"
                className="rating-details-breakdown-item"
              >
                <Flex direction="row" className="rating-details-star">
                  <span>5</span>
                  <Rating
                    defaultValue={2}
                    size="sm"
                    count={1}
                    className="icon_rating_start"
                  />
                </Flex>
                <Box className="rating-details-progress">
                  <Progress value={70} />
                </Box>
                <div className="rating-details-count">
                  <p className="rating-details-count-text">9 đánh giá</p>
                </div>
              </Flex>{" "}
              <Flex
                direction="row"
                gap="sm"
                className="rating-details-breakdown-item"
              >
                <Flex direction="row" className="rating-details-star">
                  <span>5</span>
                  <Rating
                    defaultValue={2}
                    size="sm"
                    count={1}
                    className="icon_rating_start"
                  />
                </Flex>
                <Box className="rating-details-progress">
                  <Progress value={70} />
                </Box>
                <div className="rating-details-count">
                  <p className="rating-details-count-text">9 đánh giá</p>
                </div>
              </Flex>{" "}
              <Flex
                direction="row"
                gap="sm"
                className="rating-details-breakdown-item"
              >
                <Flex direction="row" className="rating-details-star">
                  <span>5</span>
                  <Rating
                    defaultValue={2}
                    size="sm"
                    count={1}
                    className="icon_rating_start"
                  />
                </Flex>
                <Box className="rating-details-progress">
                  <Progress value={70} />
                </Box>
                <div className="rating-details-count">
                  <p className="rating-details-count-text">9 đánh giá</p>
                </div>
              </Flex>{" "}
              <Flex
                direction="row"
                gap="sm"
                className="rating-details-breakdown-item"
              >
                <Flex direction="row" className="rating-details-star">
                  <span>5</span>
                  <Rating
                    defaultValue={2}
                    size="sm"
                    count={1}
                    className="icon_rating_start"
                  />
                </Flex>
                <Box className="rating-details-progress">
                  <Progress value={70} />
                </Box>
                <div className="rating-details-count">
                  <p className="rating-details-count-text">9 đánh giá</p>
                </div>
              </Flex>
            </Flex>

            <div className="rating-divider-col">{/* thanh ngang */}</div>
           <CommentRating/>
          </Flex>

          {/* end-rating-bottom */}
        </Flex>
      </Flex>
    </div>
  );
};

export default RatingProductDetail;
