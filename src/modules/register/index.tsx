import {
  EyeOutlined,
  EyeInvisibleOutlined,
  FacebookOutlined,
  GoogleOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import {
  Box,
  Flex,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  Center,
  Link,
  Grid,
  GridItem,
  FormHelperText,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link as ReactLink } from "react-router-dom";

import LogoLogin from "../../assets/images/logo-login1.png";
import { THEME } from "../../libraries/styled-component";
import useRegister, { Props, ReceivedProps } from "./hook";

const RegisterLayout: FC<Props> = ({
  showPass,
  setShowPass,
  register,
  handleSubmit,
  onSubmit,
  errors,
  loading,
}) => {
  return (
    <Flex
      w="100%"
      bg={THEME.primary.light}
      p="50px 0px"
      justify="center"
      gap="140px"
    >
      <Flex
        align="center"
        direction="column"
        w="400px"
        display={{ base: "none", md: "block" }}
      >
        <Image objectFit="cover" src={LogoLogin} mb="40px" />
        <Text textAlign="center" color={THEME.primary.main} fontSize="26px">
          Nền tảng thương mại điện tử yêu thích,tin dùng nhất Đông Nam Á
        </Text>
      </Flex>
      <Card w="100%" maxW="430px">
        <CardHeader>
          <Text fontSize="23px">Đăng ký</Text>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing="24px">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email")}
                  placeholder="Nhập địa chỉ Email"
                />
                {errors.email && (
                  <FormHelperText>{errors.email.message}</FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Passwrod</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showPass ? "text" : "password"}
                    placeholder="Nhập password"
                    {...register("password")}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && (
                  <FormHelperText>{errors.password.message}</FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Passwrod again</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showPass ? "text" : "password"}
                    placeholder="Nhập password"
                    {...register("passwordAgain")}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.passwordAgain && (
                  <FormHelperText>
                    {errors.passwordAgain.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Button colorScheme="blue" w="100%" type="submit">
                {loading ? "loading..." : "Đăng ký"}
              </Button>
            </VStack>
            <Flex justify="space-between" align="center" mt="19px">
              <Box w="100%" h="1px" bg={THEME.secondary.main}></Box>
              <Text fontSize="14px" color={THEME.secondary.main} p="0 25px">
                HOẶC
              </Text>
              <Box w="100%" h="1px" bg={THEME.secondary.main}></Box>
            </Flex>
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(3, 1fr)"
              gap={2}
              mt="10px"
            >
              <GridItem colSpan={1}>
                <Button
                  colorScheme="facebook"
                  leftIcon={<FacebookOutlined />}
                  variant="outline"
                  w="100%"
                >
                  Facebook
                </Button>
              </GridItem>
              <GridItem colSpan={1}>
                <Button
                  colorScheme="red"
                  leftIcon={<GoogleOutlined />}
                  variant="outline"
                  w="100%"
                >
                  Google
                </Button>
              </GridItem>
              <GridItem colSpan={1}>
                <Button
                  colorScheme="twitter"
                  leftIcon={<AppleOutlined />}
                  variant="outline"
                  w="100%"
                >
                  Apple
                </Button>
              </GridItem>
            </Grid>
            <Center color={THEME.secondary.main} mt="40px">
              Bạn đã có tài khoản?
              <Link
                ml="5px"
                color={THEME.primary.main}
                as={ReactLink}
                to="/login"
              >
                Đăng nhập
              </Link>
            </Center>
          </form>
        </CardBody>
      </Card>
    </Flex>
  );
};
const Register: FC<ReceivedProps> = (props) => {
  return <RegisterLayout {...useRegister(props)} />;
};
export default Register;
