import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";

import HeaderLogo from "../../assets/images/header-logo.png";
import { THEME } from "../../libraries/styled-component";
import Footer from "../Footer";

import useLoginLayout, { Props, ReceivedProps } from "./hook";

const LoginLayoutLayout: FC<Props> = () => {
  return (
    <>
      {/* header */}
      <Container>
        <Flex justify="space-between" p="15px 0px" align="flex-end">
          <Flex align="flex-end">
            <Link>
              <Image
                objectFit="cover"
                src={HeaderLogo}
                alt="Dan Abramov"
                w="88px"
                mr="16px"
              />
            </Link>
            <Text fontSize={{ base: "20px", md: "25px" }}>Đăng nhập</Text>
          </Flex>
          <Link color={THEME.primary.main}>Bạn cần giúp đỡ?</Link>
        </Flex>
      </Container>
      {/* body */}
      <Outlet />
      {/* footer */}
      <Footer />
    </>
  );
};

const LoginLayout: FC<ReceivedProps> = (props) => {
  return <LoginLayoutLayout {...useLoginLayout(props)} />;
};

export default LoginLayout;
