import { FC } from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { HeartOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import useSideBar, { Props, ReceivedProps } from "./hook";
import { THEME } from "../../../libraries/styled-component";
import { Styles } from "./styled";
import { ROUTES } from "../../../constants/routes";

const SideBarLayout: FC<Props> = ({ user }) => {
  return (
    <Styles>
      <Box bg="white" p="16px">
        <Flex pb="15px">
          <Image
            objectFit="cover"
            src={user?.avatar}
            mr="10px"
            borderRadius="full"
            boxSize="65px"
          />
          <Box>
            <Text color={THEME.secondary.main} mb="3px">
              Tài khoản của
            </Text>
            <Text fontWeight="400">{user?.name}</Text>
          </Box>
        </Flex>
        <Flex flexDirection="column">
          <NavLink
            to={ROUTES.USER_INFO}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Button
              colorScheme="gray"
              variant="ghost"
              color={THEME.secondary.main}
              p="10px 45px"
              w="100%"
            >
              <UserOutlined style={{ marginRight: "20px" }} />
              Thông tin tài khoản
            </Button>
          </NavLink>
          <NavLink
            to={ROUTES.FAVORITE}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Button
              colorScheme="gray"
              variant="ghost"
              color={THEME.secondary.main}
              p="10px 45px"
              w="100%"
            >
              <HeartOutlined style={{ marginRight: "20px" }} />
              Sản phẩm yêu thích
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </Styles>
  );
};

const SideBar: FC<ReceivedProps> = (props) => {
  return <SideBarLayout {...useSideBar(props)} />;
};

export default SideBar;
