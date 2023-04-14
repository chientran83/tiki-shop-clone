import {
  Box,
  Image,
  Flex,
  Text,
  VStack,
  Link,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FC } from "react";

import { THEME } from "../../libraries/styled-component";
import useFooter, { ReceivedProps, Props } from "./hook";
import FooterLogo1 from "../../assets/images/footer-logo1.png";
import FooterLogo2 from "../../assets/images/footer-logo2.svg";
import FooterLogo3 from "../../assets/images/footer-logo3.png";
import FooterLogo4 from "../../assets/images/footer-logo4.jpg";
import FooterLogo5 from "../../assets/images/footer-logo5.jpg";
import FooterLogo6 from "../../assets/images/footer-logo6.png";
import FooterLogo7 from "../../assets/images/footer-logo7.png";
import FooterLogo8 from "../../assets/images/footer-logo8.png";
import FooterLogo9 from "../../assets/images/footer-logo9.png";
import FooterLogo10 from "../../assets/images/footer-logo10.jpg";
import FooterLogo11 from "../../assets/images/footer-logo11.jpg";
import LogoFacebook from "../../assets/images/logo-facebook.png";
import LogoYoutobe from "../../assets/images/logo-youtobe.png";
import LogoZalo from "../../assets/images/logo-zalo.jpeg";
import LogoQr from "../../assets/images/logo-qr.png";
import ChPlay from "../../assets/images/chplay.png";
import AppStore from "../../assets/images/appstore.png";

const FooterLayout: FC<Props> = () => {
  return (
    <Flex
      bg="rgb(255, 255, 255)"
      mt="30px"
      pt="15px"
      justify="space-evenly"
      wrap="wrap"
    >
      <Box p="26px">
        <Text fontSize="16px" fontWeight="500" mb="23px">
          Hỗ trợ khách hàng
        </Text>
        <VStack spacing="16px" align="flex-start">
          <Link color={THEME.secondary.main} fontSize="12px">
            Các câu hỏi thường gặp
          </Link>
          <Link color={THEME.secondary.main} fontSize="12px">
            Gửi yêu cầu hỗ trợ
          </Link>
          <Link color={THEME.secondary.main} fontSize="12px">
            Hướng dẫn đặt hàng
          </Link>
          <Link color={THEME.secondary.main} fontSize="12px">
            Phương thức vận chuyển
          </Link>
        </VStack>
      </Box>
      <Box p="26px">
        <Text fontSize="16px" fontWeight="500" mb="23px">
          Về Tiki
        </Text>
        <VStack spacing="16px" align="flex-start">
          <Link color={THEME.secondary.main} fontSize="12px">
            Giới thiệu Tiki
          </Link>
          <Link color={THEME.secondary.main} fontSize="12px">
            Tiki Blog
          </Link>
          <Link color={THEME.secondary.main} fontSize="12px">
            Chính sách bảo mật thông tin cá nhân
          </Link>
          <Link color={THEME.secondary.main} fontSize="12px">
            Chính sách bảo mật thanh toán
          </Link>
          <Link color={THEME.secondary.main} fontSize="12px">
            Bán hàng doanh nghiệp
          </Link>
        </VStack>
      </Box>
      <Box p="26px">
        <Text fontSize="16px" fontWeight="500" mb="23px">
          Hợp tác và liên kết
        </Text>
        <VStack spacing="16px" align="flex-start">
          <Link color={THEME.secondary.main} fontSize="12px">
            Quy chế hoạt động Sàn GDTMĐT
          </Link>
          <Link color={THEME.secondary.main} fontSize="12px">
            Bán hàng cùng Tiki
          </Link>
        </VStack>
        <Text fontSize="16px" fontWeight="500" mb="23px" mt="28px">
          Chứng nhận bởi
        </Text>
        <Flex gap="2">
          <Link fontSize="12px">
            <Image objectFit="cover" src={FooterLogo1} w="42px" />
          </Link>
          <Link fontSize="12px">
            <Image objectFit="cover" src={FooterLogo2} w="109px" />
          </Link>
        </Flex>
      </Box>
      <Box p="26px">
        <Text fontSize="16px" fontWeight="500" mb="23px">
          Phương thức thanh toán
        </Text>
        <SimpleGrid columns={4} spacing={3}>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={FooterLogo3} w="42px" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={FooterLogo4} w="100%" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={FooterLogo5} w="100%" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={FooterLogo6} w="100%" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={FooterLogo7} w="100%" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={FooterLogo8} w="100%" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={FooterLogo9} w="100%" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={FooterLogo10} w="100%" />
          </Link>
        </SimpleGrid>
        <Text fontSize="16px" fontWeight="500" mb="23px" mt="28px">
          Dịch vụ giao hàng
        </Text>

        <Link fontSize="12px">
          <Image objectFit="cover" src={FooterLogo11} w="184px" />
        </Link>
      </Box>
      <Box p="26px">
        <Text fontSize="16px" fontWeight="500" mb="23px">
          Kết nối với chúng tôi
        </Text>
        <SimpleGrid columns={3} spacing={3}>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={LogoFacebook} w="100%" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={LogoYoutobe} w="100%" />
          </Link>
          <Link fontSize="12px" width="38px">
            <Image objectFit="cover" src={LogoZalo} w="100%" />
          </Link>
        </SimpleGrid>
        <Text fontSize="16px" fontWeight="500" mb="23px" mt="28px">
          Tải ứng dụng trên điện thoại
        </Text>
        <Grid
          w="202px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={2}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <Link>
              <Image objectFit="cover" src={LogoQr} w="100%" />
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <Link>
              <Image objectFit="cover" src={AppStore} w="100%" />
            </Link>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <Link>
              <Image objectFit="cover" src={ChPlay} w="100%" />
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};
const Footer: FC<ReceivedProps> = (props) => {
  return <FooterLayout {...useFooter(props)} />;
};
export default Footer;
