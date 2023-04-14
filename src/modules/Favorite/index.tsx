import { FC } from "react";
import {
  Box,
  Image,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Text,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Link,
  Stack,
  StackDivider,
  Center,
  VStack,
} from "@chakra-ui/react";
import { DeleteOutlined } from "@ant-design/icons";
import { InputNumber } from "antd";
import { Link as ReactLink } from "react-router-dom";

import useFavorite, { Props, ReceivedProps } from "./hook";
import Spinner from "../../components/Spinner";
import { THEME } from "../../libraries/styled-component";
import ModalConfirm from "../../components/ModalConfirm";
import LogoNothing from "../../assets/images/logo-nothing.png";
import { ROUTES } from "../../constants/routes";

const FavoriteLayout: FC<Props> = ({
  loading,
  deleteProductInFavorite,
  cancelRef,
  isOpen,
  onOpen,
  onClose,
  productDelete,
  setProductDelete,
  productInFavorite,
}) => {
  return (
    <>
      <Text fontSize="24px" m="8px 0">
        Sản phẩm yêu thích
      </Text>
      <Box bg="white" borderRadius="6px" w="100%">
        <Spinner loading={loading}>
          {productInFavorite.length ? (
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th textAlign="center">Sản phẩm</Th>
                    <Th textAlign="center">Giá tiền</Th>
                    <Th textAlign="center">
                      <DeleteOutlined />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {productInFavorite.map((product, index) => (
                    <Tr key={index}>
                      <Td>
                        <Link
                          as={ReactLink}
                          to={`/${ROUTES.PRODUCT_DETAIL}/${product.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Flex w="300px" justify="flex-start" gap={2}>
                            <Image
                              objectFit="cover"
                              w="80px"
                              src={product.image}
                            />
                            <Text
                              noOfLines={3}
                              width="200px"
                              whiteSpace="normal"
                              overflowWrap="break-word"
                              h="60px"
                            >
                              {product.name}
                            </Text>
                          </Flex>
                        </Link>
                      </Td>
                      <Td textAlign="center">{product.price} đ</Td>
                      <Td textAlign="center">
                        <Button
                          colorScheme="red"
                          variant="ghost"
                          onClick={() => {
                            setProductDelete(product);
                            onOpen();
                          }}
                        >
                          <DeleteOutlined />
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <ModalConfirm
                isOpen={isOpen}
                onClose={onClose}
                handleConfirm={() => deleteProductInFavorite(productDelete)}
                title="Xoá sản phẩm"
                content="Bạn có muốn xóa sản phẩm đang chọn?"
                cancelRef={cancelRef}
              />
            </TableContainer>
          ) : (
            <VStack gap={2} p="50px 0">
              <Image objectFit="cover" src={LogoNothing} maxW="90%" />
              <Text>Không có sản phẩm nào.</Text>
              <Link
                as={ReactLink}
                style={{ textDecoration: "none" }}
                to={ROUTES.HOME}
              >
                <Button colorScheme="yellow">Tiếp tục mua sắm</Button>
              </Link>
            </VStack>
          )}
        </Spinner>
      </Box>
    </>
  );
};

const Favorite: FC<ReceivedProps> = (props) => {
  return <FavoriteLayout {...useFavorite(props)} />;
};

export default Favorite;
