import { FC } from "react";
import {
  Box,
  Image,
  Card,
  CardBody,
  Flex,
  Text,
  Button,
  Link,
  Center,
  CardHeader,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { NotificationOutlined } from "@ant-design/icons";
import { Controller } from "react-hook-form";
import { Link as ReactLink } from "react-router-dom";
import { InputNumber } from "antd";

import useProductDetail, { Props, ReceivedProps } from "./hook";
import Advertisement1 from "../../assets/images/advertisement1.png";
import LogoNow from "../../assets/images/logo-now.png";
import LogoFast from "../../assets/images/logo-fast.png";
import { THEME } from "../../libraries/styled-component";
import Spinner from "../../components/Spinner";
import Slider from "../../components/Slider";
import { Styles } from "./styled";
import { StyleLink } from "../Home/styled";
import { ROUTES } from "../../constants/routes";

const ProductDetailLayout: FC<Props> = ({
  contextHolder,
  handleSubmit,
  onSubmit,
  control,
  product,
  loading,
  popularProducts,
}) => {
  return (
    <Styles>
      <Spinner loading={loading.productItem}>
        <Box bg="white" mb="30px">
          {contextHolder}
          <Flex direction={{ base: "column", md: "row" }}>
            <Box w={{ base: "100%", md: "35%" }} p="16px">
              <Box mb="30px">
                {product && (
                  <Slider
                    infinite={true}
                    datas={product.images.map((imageItem, index: number) => (
                      <Image
                        src={imageItem}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        borderRadius="6px"
                        key={index}
                      />
                    ))}
                    dots
                    dotsClass="slick-dots slick-thumb"
                    slidesToShow={1}
                    width="100%"
                    speed={0}
                    customPaging={function (i: number) {
                      return (
                        <Box flex={1}>
                          <Image
                            src={product.images[i]}
                            objectFit="cover"
                            w="100%"
                            borderRadius="6px"
                          />
                        </Box>
                      );
                    }}
                    appendDots={(dots: any) => (
                      <div
                        style={{
                          borderRadius: "10px",
                          bottom: "30px",
                          width: "100%",
                          position: "static",
                          marginTop: "13px",
                        }}
                      >
                        <Flex w="100%" m="0" p="0 15px">
                          {dots}{" "}
                        </Flex>
                      </div>
                    )}
                  />
                )}
              </Box>
              <Center>
                <Image objectFit="cover" src={Advertisement1} w="90%" />
              </Center>
            </Box>
            <Box
              w={{ base: "100%", md: "65%" }}
              p="16px"
              borderLeft="1px solid"
              borderColor="#E2E8F0"
            >
              <Text mb="5px" fontSize="15px">
                Thương hiệu: <Link color={THEME.primary.main}>Hada Labo</Link>
              </Text>
              <Text mb="5px" fontSize="24px">
                Kem Rửa Mặt Dưỡng Trắng Hada Labo PERFECT WHITE TRANEXAMIC ACID
                Cleanser (80g)
              </Text>
              <Flex color={THEME.secondary.main} fontSize="16px" mb="35px">
                <Text>*****</Text>
                <Text mr="10px" ml="6px">
                  (Xem 598 đánh giá)
                </Text>
                <Text
                  pl="10px"
                  position="relative"
                  _before={{
                    content: '""',
                    width: "1px",
                    height: "60%",
                    backgroundColor: THEME.secondary.main,
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  Đã bán 5000+
                </Text>
              </Flex>

              <Flex align="flex-end">
                <Text color="red" fontWeight="600" fontSize="24px" mr="10px">
                  80.000 đ
                </Text>
                <Text as="del" color={THEME.secondary.main} fontSize="16px">
                  93.000 đ
                </Text>
              </Flex>
              <Flex fontSize="16px">
                <Text>Giao đến: </Text>
                <Text fontWeight={600} mr="3px">
                  Q. Nam Từ Liêm, P. Mỹ Đình 2, Hà Nội
                </Text>{" "}
                -
                <Link color={THEME.primary.main} ml="3px">
                  Đổi địa chỉ{" "}
                </Link>
              </Flex>
              <Flex m="16px 0px" wrap="wrap">
                <Card mr="30px">
                  <CardBody fontSize="16px">
                    <Flex align="center" fontSize="16px" mb="6px">
                      <Image
                        objectFit="cover"
                        src={LogoNow}
                        w="36px"
                        pr="10px"
                      />
                      <Text
                        color="rgb(0, 171, 86)"
                        pl="10px"
                        position="relative"
                        _before={{
                          content: '""',
                          width: "1px",
                          height: "60%",
                          backgroundColor: THEME.primary.main,
                          position: "absolute",
                          left: "0",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        Trước 19:00 hôm nay
                      </Text>
                    </Flex>
                    <Text>Vận chuyển: 25.000đ</Text>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody fontSize="16px">
                    <Flex align="center" fontSize="16px" mb="6px">
                      <Image
                        objectFit="cover"
                        src={LogoFast}
                        w="36px"
                        pr="10px"
                      />
                      <Text
                        color="rgb(0, 171, 86)"
                        pl="10px"
                        position="relative"
                        _before={{
                          content: '""',
                          width: "1px",
                          height: "60%",
                          backgroundColor: THEME.primary.main,
                          position: "absolute",
                          left: "0",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        Ngày mai ,Trước 23:00
                      </Text>
                    </Flex>
                    <Text>Vận chuyển: 14.000đ</Text>
                  </CardBody>
                </Card>
              </Flex>
              <Flex fontSize="16px" align="center" mb="8px">
                <NotificationOutlined style={{ color: THEME.primary.main }} />
                <Text ml="6px">
                  Bạn sẽ được freeship 15.000₫ cho đơn từ 149.000₫.
                </Text>
              </Flex>
              <Text>Số Lượng</Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box m="15px 0">
                  <Controller
                    name="quantity"
                    control={control}
                    render={({ field }) => (
                      <InputNumber
                        min={1}
                        max={20}
                        defaultValue={1}
                        {...field}
                      />
                    )}
                  />
                </Box>
                <Button colorScheme="red" width="300px" p="25px" type="submit">
                  Chọn Mua
                </Button>
              </form>
            </Box>
          </Flex>
        </Box>
      </Spinner>
      {/* popular product */}
      <Spinner loading={loading.popularProducts}>
          <Card>
            <CardHeader>
              <Heading size="md">bộ sưu tập nổi bật</Heading>
            </CardHeader>
            <CardBody>
              <Slider
                datas={popularProducts.map((product, index: number) => (
                  <StyleLink
                    as={ReactLink}
                    to={`/${ROUTES.PRODUCT_DETAIL}/${product.id}`}
                    key={index}
                  >
                    <Image
                      src={product.image}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      key={index}
                      borderRadius="6px"
                    />
                  </StyleLink>
                ))}
                width="100%"
                slidesToShow={6}
              />
            </CardBody>
          </Card>
        </Spinner>
    </Styles>
  );
};

const ProductDetail: FC<ReceivedProps> = (props) => {
  return <ProductDetailLayout {...useProductDetail(props)} />;
};

export default ProductDetail;
