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

import useCart, { Props, ReceivedProps } from "./hook";
import Spinner from "../../components/Spinner";
import { THEME } from "../../libraries/styled-component";
import ModalConfirm from "../../components/ModalConfirm";
import LogoNothing from "../../assets/images/logo-nothing.png";

const CartLayout: FC<Props> = ({
  loading,
  productInCart,
  changeQuantityProductInCart,
  deleteProductInCart,
  cancelRef,
  isOpen,
  onOpen,
  onClose,
  productDelete,
  setProductDelete,
  totalPrice,
}) => {
  return (
    <>
      <Text fontSize="2xl" m="13px 0">
        GIỎ HÀNG
      </Text>
      <Flex
        gap={7}
        align={{ base: "center", xl: "flex-start" }}
        w="100%"
        justify="center"
        direction={{ base: "column", xl: "row" }}
      >
        <Box bg="white" borderRadius="6px" w="100%">
          <Spinner loading={loading}>
            {productInCart.length ? (
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th textAlign="center">Sản phẩm</Th>
                      <Th textAlign="center">Đơn giá</Th>
                      <Th textAlign="center">Số lượng</Th>
                      <Th textAlign="center">Thành tiền</Th>
                      <Th textAlign="center">
                        <DeleteOutlined />
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {productInCart.map((product, index) => (
                      <Tr key={index}>
                        <Td>
                          <Link as={ReactLink} to={`/product-detail/${product.id}`} style={{textDecoration : "none"}}>
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
                          <InputNumber
                            min={1}
                            max={20}
                            defaultValue={product.quantity}
                            onChange={(value: number | string | null) =>
                              changeQuantityProductInCart(value, product)
                            }
                          />
                        </Td>
                        <Td textAlign="center">
                          {product.price * product.quantity} đ
                        </Td>
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
                  handleConfirm={() => deleteProductInCart(productDelete)}
                  title="Xoá sản phẩm"
                  content="Bạn có muốn xóa sản phẩm đang chọn?"
                  cancelRef={cancelRef}
                />
              </TableContainer>
            ) : (
              <VStack gap={2} p="50px 0">
                <Image objectFit="cover" src={LogoNothing} maxW="90%" />
                <Text>Không có sản phẩm nào.</Text>
                <Link as={ReactLink} style={{ textDecoration: "none" }} to="/">
                  <Button colorScheme="yellow">Tiếp tục mua sắm</Button>
                </Link>
              </VStack>
            )}
          </Spinner>
        </Box>

        <Flex direction="column" gap={3} w="390px">
          <Card>
            <CardHeader>
              <Flex justify="space-between">
                <Text color={THEME.secondary.main} fontSize="23px">
                  Giao tới
                </Text>
                <Link color={THEME.primary.main} fontSize="19px">
                  Thay đổi
                </Link>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex>
                <Text fontSize="19px" pr="15px">
                  Trần Văn Chiến
                </Text>
                <Text
                  fontSize="19px"
                  pl="15px"
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    width: "1px",
                    height: "60%",
                    backgroundColor: THEME.secondary.main,
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  0368258081
                </Text>
              </Flex>
              <Text fontSize="19px" pr="15px" color={THEME.secondary.main}>
                Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box w="100%">
                  <Flex justify="space-between">
                    <Text fontSize="23px" color={THEME.secondary.main}>
                      Tạm tính
                    </Text>
                    <Text fontSize="23px">{totalPrice} đ</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text fontSize="23px" color={THEME.secondary.main}>
                      Giảm giá
                    </Text>
                    <Text fontSize="23px">0đ</Text>
                  </Flex>
                </Box>
                <Box w="100%">
                  <Flex justify="space-between">
                    <Text fontSize="23px" color={THEME.secondary.main}>
                      Tổng tiền
                    </Text>
                    <Flex direction="column" align="flex-end">
                      <Text fontSize="33px" color="red" fontWeight="400">
                        {totalPrice} ₫
                      </Text>
                      <Text fontSize="19px" color={THEME.secondary.main}>
                        (Đã bao gồm VAT nếu có)
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Button colorScheme="red" w="100%" p="26px">
            Mua hàng ({productInCart.length})
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const Cart: FC<ReceivedProps> = (props) => {
  return <CartLayout {...useCart(props)} />;
};

export default Cart;