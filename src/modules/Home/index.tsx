import { FC } from "react";
import {
  Box,
  Image,
  Card,
  CardHeader,
  Heading,
  CardBody,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

import useHome, { Props, ReceivedProps } from "./hook";
import Slider from "../../components/Slider";
import Banner from "../../assets/images/banner.png";
import Spinner from "../../components/Spinner";
import { StyleLink } from "./styled";
import ProductItem from "../../components/ProductItem";

const HomeLayout: FC<Props> = ({
  products,
  popularProducts,
  sliders,
  loading,
}) => {
  return (
    <VStack spacing={4} align="stretch">
      {/* banner */}
      <Spinner loading={loading.sliders}>
        <Box display="flex" w="100%">
          <Box w="75%">
            <Slider
              datas={sliders.map((slider, index: number) => (
                <Image
                  src={slider.image}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  borderRadius="6px"
                  key={index}
                />
              ))}
              dots
              speed={500}
              slidesToShow={1}
              width="100%"
              autoplay
              appendDots={(dots: any) => (
                <div
                  style={{
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <ul style={{ margin: "0px" }}>{dots} </ul>
                </div>
              )}
              customPaging={(param: any) => {
                return (
                  <div
                    style={{
                      width: "30px",
                      height: "1.9px",
                    }}
                  ></div>
                );
              }}
            />
          </Box>
          <Box w="25%" pb="6px" pl="20px">
            <Image
              objectFit="cover"
              src={Banner}
              height="100%"
              borderRadius="6px"
              overflow="hidden"
            />
          </Box>
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
                  to={`product-detail/${product.id}`}
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
      {/* list product */}
      <Spinner loading={loading.products}>
        <Card>
          <CardHeader>
            <Heading size="md">Danh sách sản phẩm </Heading>
          </CardHeader>
          <CardBody>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4, xl: 5 }}
              spacingX="25px"
              spacingY="20px"
            >
              {products.map((product, index) => (
                <ProductItem product={product} key={index} />
              ))}
            </SimpleGrid>
          </CardBody>
        </Card>
      </Spinner>
    </VStack>
  );
};

const Home: FC<ReceivedProps> = (props) => {
  return <HomeLayout {...useHome(props)} />;
};

export default Home;
