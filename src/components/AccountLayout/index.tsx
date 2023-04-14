import { Box, Container, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";
import useAccount, { Props, ReceivedProps } from "./hook";
import SideBar from "./SideBar";

const AccountLayout: FC<Props> = () => {
  return (
    <Box bg="#efefef">
      <Header />
      <Container pt="12px">
        <Flex gap={3}>
          <SideBar />
          <Box w="100%">
            <Outlet />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

const Account: FC<ReceivedProps> = (props) => {
  return <AccountLayout {...useAccount(props)} />;
};

export default Account;
