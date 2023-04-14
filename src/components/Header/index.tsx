import {
  Box,
  Button,
  Image,
  Flex,
  Container,
  Center,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { Badge } from "antd";
import { FC } from "react";
import {
  HomeOutlined,
  CrownOutlined,
  SmileOutlined,
  ShoppingCartOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Link as ReactLink } from "react-router-dom";
import Select, { components } from "react-select";
import { Controller } from "react-hook-form";

import HeaderLogo from "../../assets/images/header-logo.png";
import FreeShip from "../../assets/images/free-ship.png";
import useHeader, { ReceivedProps, Props } from "./hook";
import { THEME } from "../../libraries/styled-component";
import { Styles } from "./styled";
import { ROUTES } from "../../constants/routes";

const HeaderLayout: FC<Props> = ({
  totalProductInCart,
  showDropdownButtonAccount,
  setShowDropdownButtonAccount,
  logout,
  navigate,
  handleSubmit,
  control,
  onSubmit,
  searchOptions,
  onChangeSearchInput,
  selectedOption,
  setSelectedOption,
  setValue,
}) => {
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <Button
          h="1.75rem"
          p="20px"
          size="sm"
          onClick={() => {}}
          variant="ghost"
          color={THEME.primary.main}
          type="submit"
        >
          Tìm kiếm
        </Button>
      </components.DropdownIndicator>
    );
  };
  const Option = (props: any) => {
    return (
      <Box
        onClick={() => {
          handleSubmit(onSubmit)();
        }}
      >
        <components.Option {...props} />
      </Box>
    );
  };
  return (
    <Styles>
      <Box bg="rgb(255, 255, 255)">
        <Container color="#262626">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex align="center" justify="space-between" pt="18px" pb="18px">
              <Link w="88px" as={ReactLink} to={ROUTES.HOME}>
                <Image
                  objectFit="cover"
                  src={HeaderLogo}
                  alt="Dan Abramov"
                  w="100%"
                />
              </Link>
              <Box w="100%" mr="25px" ml="25px">
                <Controller
                  name="keyword"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isClearable={false}
                      styles={{
                        control: (baseStyles, state) => {
                          return {
                            ...baseStyles,
                          };
                        },
                      }}
                      value={selectedOption}
                      classNamePrefix="react-select"
                      options={searchOptions}
                      components={{ DropdownIndicator, Option }}
                      placeholder="Bạn tìm gì hôm nay ?"
                      onInputChange={(value) => {
                        onChangeSearchInput(value);
                      }}
                      onChange={(option: any) => {
                        setSelectedOption(option);
                        setValue("keyword", option.value);
                        handleSubmit(onSubmit)();
                      }}
                    />
                  )}
                />
              </Box>

              <Flex align="flex-start">
                {/* mobie */}
                <Box display={{ base: "flex", md: "none" }}>
                  <Menu>
                    <MenuButton as={Button} mr="15px">
                      <EllipsisOutlined />
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        as={Button}
                        variant="ghost"
                        leftIcon={<HomeOutlined style={{ fontSize: "24px" }} />}
                        colorScheme="blue"
                        onClick={() => navigate(ROUTES.HOME)}
                      >
                        Trang chủ
                      </MenuItem>
                      <MenuItem
                        as={Button}
                        variant="ghost"
                        leftIcon={
                          <CrownOutlined style={{ fontSize: "24px" }} />
                        }
                        colorScheme="blue"
                      >
                        Astra
                      </MenuItem>
                      <MenuItem
                        as={Button}
                        variant="ghost"
                        leftIcon={
                          <SmileOutlined style={{ fontSize: "24px" }} />
                        }
                        colorScheme="blue"
                        mr="15px"
                      >
                        Tài khoản
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                {/* laptop */}
                <Box display={{ base: "none", md: "flex" }}>
                  <Button
                    variant="ghost"
                    leftIcon={<HomeOutlined style={{ fontSize: "24px" }} />}
                    colorScheme="blue"
                    onClick={() => navigate(ROUTES.HOME)}
                  >
                    Trang chủ
                  </Button>

                  <Button
                    variant="ghost"
                    leftIcon={<CrownOutlined style={{ fontSize: "24px" }} />}
                    colorScheme="blue"
                  >
                    Astra
                  </Button>
                  <Box
                    onMouseEnter={() => setShowDropdownButtonAccount(true)}
                    onMouseLeave={() => setShowDropdownButtonAccount(false)}
                  >
                    <Menu isOpen={showDropdownButtonAccount}>
                      <MenuButton
                        as={Button}
                        variant="ghost"
                        leftIcon={
                          <SmileOutlined style={{ fontSize: "24px" }} />
                        }
                        colorScheme="blue"
                        mr="15px"
                      >
                        Tài khoản
                      </MenuButton>
                      <MenuList
                        position="relative"
                        _before={{
                          content: '""',
                          width: "100%",
                          height: "10px",
                          top: "-10px",
                          position: "absolute",
                        }}
                      >
                        <MenuItem onClick={() => navigate(`/${ROUTES.ACCOUNT}/${ROUTES.USER_INFO}`)}>
                          Thông tin tài khoản
                        </MenuItem>
                        <MenuItem onClick={() => logout()}>Đăng xuất</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _after={{
                    content: '""',
                    width: "1px",
                    height: "80%",
                    position: "absolute",
                    backgroundColor: THEME.secondary.main,
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                  }}
                >
                  <Link as={ReactLink} to={ROUTES.CART} ml={{ md: "20px" }}>
                    <Button variant="ghost" colorScheme="blue">
                      <Badge
                        count={totalProductInCart}
                        offset={[4, -4]}
                        showZero
                      >
                        <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                      </Badge>
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </form>
        </Container>
        <Center p="10px" bg="#FFE880" fontSize="14px">
          <Image
            w="81px"
            objectFit="cover"
            src={FreeShip}
            alt="Dan Abramov"
            mr="5px"
          />
          <Text fontWeight="bold" mr="3px">
            mọi đơn từ 149K.
          </Text>
          <Text>Áp dụng cho cả TikiNOW 2h</Text>
        </Center>
      </Box>
    </Styles>
  );
};
const Header: FC<ReceivedProps> = (props) => {
  return <HeaderLayout {...useHeader(props)} />;
};
export default Header;
