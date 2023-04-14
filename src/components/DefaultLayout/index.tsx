import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";

import useDefaultLayout, { Props, ReceivedProps } from "./hook";

const DefaultLayoutLayout: FC<Props> = () => {
  return (
    <Box bg="#efefef">
      <Header />
      <Container pt="12px">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

const DefaultLayout: FC<ReceivedProps> = (props) => {
  return <DefaultLayoutLayout {...useDefaultLayout(props)} />;
};

export default DefaultLayout;
