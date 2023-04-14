import {
  Box,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

import useNotFound, { ReceivedProps, Props } from "./hook";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CityCloud from "../../assets/images/city-cloud.png";
import Question1 from "../../assets/images/question-1.png";
import Question2 from "../../assets/images/question-2.png";
import Super from "../../assets/images/super.png";
import Logo404 from "../../assets/images/404.png";
import { Styles } from "./styled";

const NotFoundLayout: FC<Props> = () => {
  return (
    <Styles>
      <Header />
      <Box position="relative">
        <Box bg="#3fc6f5">
          <Image objectFit="cover" w="100%" src={CityCloud} />
        </Box>
        <Box w="100%" h="200px" bg="#fdba13"></Box>
        <Flex
          position="absolute"
          wrap="wrap"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          alignItems="flex-end"
          w="100%"
          justify="center"
        >
          <Box position="relative" w={{ base: "110px", md: "220px" }}>
            <Image objectFit="cover" w="100%" src={Super} />
            <Image
              objectFit="cover"
              w="37px"
              src={Question1}
              position="absolute"
              top="-32px"
              right="-6px"
              className="question-mark"
            />
            <Image
              objectFit="cover"
              w="37px"
              src={Question2}
              position="absolute"
              top="-21px"
              left="15px"
              className="question-mark"
            />
          </Box>
          <Image
            objectFit="cover"
            src={Logo404}
            w={{ base: "106px", md: "212px" }}
            mr="30px"
          />
          <Text
            fontWeight="500"
            fontSize={{ base: "20px", md: "26px" }}
            color="white"
            textAlign="center"
          >
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại!
          </Text>
        </Flex>
      </Box>
      <Footer />
    </Styles>
  );
};
const NotFound: FC<ReceivedProps> = (props) => {
  return <NotFoundLayout {...useNotFound(props)} />;
};
export default NotFound;
