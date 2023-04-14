import { FC, ReactElement } from "react";
import {
  Box,
  Image,
  VStack,
  Flex,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link as ReactLink } from "react-router-dom";

import Official from "../../assets/images/official.png";
import { StyleLink } from "../../modules/Home/styled";
import useProductItem, { Props, ReceivedProps } from "./hook";
import { ROUTES } from "../../constants/routes";

const ProductItemLayout: FC<Props> = ({
  product,
  contextHolder,
  addProductToCart,
  addProductToFavorite,
}): ReactElement => {
  return (
    <Box
      position="relative"
      border="1px solid rgba(0, 0, 0, 0.05)"
      _hover={{ boxShadow: "0px 0px 8px #bdb7b7" }}
    >
      {contextHolder}
      <StyleLink as={ReactLink} to={`/${ROUTES.PRODUCT_DETAIL}/${product.id}`}>
        <Image objectFit="cover" src={product.image} w="100%" />
        {product.official && (
          <Image
            objectFit="cover"
            src={Official}
            w="100px"
            position="absolute"
            top="0"
          />
        )}
        <VStack spacing={2} p="8px" align="flex-start">
          <Text
            fontSize="15px"
            fontWeight="400"
            noOfLines={2}
            lineHeight="23px"
          >
            {product.name}
          </Text>
          <Flex color="rgb(128, 128, 137)" align="center">
            <Text pr="8px">* * * * *</Text>
            <Text
              pl="8px"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                w: "1.5px",
                h: "60%",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgb(128, 128, 137)",
              }}
            >
              Đã bán {product.sold}
            </Text>
          </Flex>
          <Flex color="red">
            <Text fontSize="16px" mr="10px">
              {product.price} đ
            </Text>
            <Text fontSize="12px">-{product.discount}</Text>
          </Flex>
        </VStack>
      </StyleLink>
      <Flex justifyContent="center" w="100%" m="15px 0px">
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue" onClick={() => addProductToCart(product)}>
            <ShoppingCartOutlined />
          </Button>
          <Button onClick={() => addProductToFavorite(product)}>
            <HeartOutlined />
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
const ProductItem: FC<ReceivedProps> = (props) => {
  return <ProductItemLayout {...useProductItem(props)} />;
};
export default ProductItem;
