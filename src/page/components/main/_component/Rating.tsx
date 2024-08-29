import { Box, Button, Flex, Progress, Rating } from "@mantine/core";
const RatingProductDetail = () => {
  return (
    <div className="rating-container">
      <Flex direction="column" gap="md">
        <Flex direction="column" gap="">
          <div className="rating-header">
            <p>Khách hàng chấm điểm, đánh giá, nhận xét</p>
          </div>

          <div className="rating-divider">{/* thanh ngang */}</div>

          <div >
            <Flex className="rating-summary">
              <div className="rating-summary-average">
                <p className="rating-average-score">4.6/5</p>
                <Rating defaultValue={5} size="md" className="average-icon" />
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
              </Flex>
            </Flex>
          </div>

          <div className="rating-divider">{/* thanh ngang */}</div>

          <Flex direction="row" gap="md" className="rating-details">
            <Flex
              align="center"
              justify="space-between"
              className="rating-details-average"
            >
              <p className="rating-average-score">4.6/5</p>
              <Rating defaultValue={2} size="xl" count={1} />
            </Flex>

            <div>
              <Flex direction="column" align="center" justify="space-between">
                <Flex direction="row" className="rating-details-breakdown-item">
                  <Flex direction="row" className="rating-details-star">
                    5 <Rating defaultValue={2} size="xl" count={1} />
                  </Flex>
                  <Box
                    className="rating-details-progress"
                    // style={{ width: "70%" }}
                  >
                    <Progress value={70} />
                  </Box>
                  <div className="rating-details-count">
                    <p>9 đánh giá</p>
                  </div>
                </Flex>

                <Flex direction="row" className="rating-details-breakdown-item">
                  <Flex direction="row" className="rating-details-star">
                    5 <Rating defaultValue={2} size="xl" count={1} />
                  </Flex>
                  <Box
                    className="rating-details-progress"
                    // style={{ width: "70%" }}
                  >
                    <Progress value={70} />
                  </Box>
                  <div className="rating-details-count">
                    <p>9 đánh giá</p>
                  </div>
                </Flex>
                <Flex direction="row" className="rating-details-breakdown-item">
                  <Flex direction="row" className="rating-details-star">
                    5 <Rating defaultValue={2} size="xl" count={1} />
                  </Flex>
                  <Box
                    className="rating-details-progress"
                    // style={{ width: "70%" }}
                  >
                    <Progress value={70} />
                  </Box>
                  <div className="rating-details-count">
                    <p>9 đánh giá</p>
                  </div>
                </Flex>
              </Flex>
            </div>
            <Flex direction="column" className="rating-feedback">
              <p>Chia sẻ nhận xét về sản phẩm</p>
              <Flex justify="center" mt="md">
                <Button variant="filled" color="#f72429" size="md">
                  Button
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default RatingProductDetail;
