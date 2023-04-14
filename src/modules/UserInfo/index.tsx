import { FC } from "react";
import {
  Box,
  Text,
  StackDivider,
  Stack,
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  VStack,
  RadioGroup,
  Radio,
  Button,
  HStack,
} from "@chakra-ui/react";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import { Controller } from "react-hook-form";

import useUserInfo, { Props, ReceivedProps } from "./hook";
import { THEME } from "../../libraries/styled-component";

const UserInfoLayout: FC<Props> = ({
  user,
  register,
  handleSubmit,
  onSubmit,
  errors,
  control,
  loading,
  contextHolder,
}) => {
  return (
    <>
      {contextHolder}
      <Text fontSize="24px" m="8px 0">
        Thông tin tài khoản
      </Text>
      <Box bg="white" p="16px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack
            divider={<StackDivider borderColor="gray.200" />}
            gap={3}
            align="flex-start"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box w={{ base: "100%", lg: "55%" }} color={THEME.secondary.main}>
              <Text mb="20px">Thông tin cá nhân</Text>
              <VStack gap={6}>
                <Flex gap={3} justify="space-between" w="100%">
                  <Image
                    objectFit="cover"
                    borderRadius="full"
                    boxSize="113px"
                    src={user?.avatar}
                  />
                  <FormControl w="100%">
                    <Flex direction="column">
                      <Flex w="100%" alignItems="center">
                        <FormLabel whiteSpace="nowrap">Họ & Tên</FormLabel>
                        <Input
                          placeholder="Thêm tên"
                          {...register("name")}
                          defaultValue={user?.avatar}
                        />
                      </Flex>
                      {errors.name && (
                        <FormHelperText color="red">
                          {errors.name.message}
                        </FormHelperText>
                      )}
                    </Flex>
                  </FormControl>
                </Flex>

                <FormControl w="100%">
                  <Flex direction="column">
                    <Flex w="100%" alignItems="center">
                      <FormLabel whiteSpace="nowrap" m="0" mr="16%">
                        Ngày sinh
                      </FormLabel>
                      <Controller
                        name="dateOfBirt"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <DatePicker onChange={onChange} value={value} />
                        )}
                      />
                    </Flex>
                    {errors.dateOfBirt && (
                      <FormHelperText color="red">
                        {errors.dateOfBirt.message}
                      </FormHelperText>
                    )}
                  </Flex>
                </FormControl>

                <FormControl w="100%">
                  <Flex direction="column">
                    <Flex w="100%" alignItems="center">
                      <FormLabel whiteSpace="nowrap" m="0" mr="16%">
                        Giới tính
                      </FormLabel>
                      <Controller
                        name="gender"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup onChange={onChange} value={value}>
                            <Stack direction="row">
                              <Radio value="male">Nam</Radio>
                              <Radio value="female">Nữ</Radio>
                              <Radio value="orther">Khác</Radio>
                            </Stack>
                          </RadioGroup>
                        )}
                      />
                    </Flex>
                    {errors.gender && (
                      <FormHelperText color="red">
                        {errors.gender.message}
                      </FormHelperText>
                    )}
                  </Flex>
                </FormControl>
                <FormControl w="100%">
                  <Flex direction="column">
                    <Flex w="100%" alignItems="center">
                      <FormLabel whiteSpace="nowrap" m="0" mr="16%">
                        Địa chỉ
                      </FormLabel>
                      <Input
                        placeholder="Thêm địa chỉ"
                        {...register("address")}
                      />
                    </Flex>
                    {errors.address && (
                      <FormHelperText color="red">
                        {errors.address.message}
                      </FormHelperText>
                    )}
                  </Flex>
                </FormControl>
              </VStack>
            </Box>
            <Box w={{ base: "100%", lg: "55%" }} color={THEME.secondary.main}>
              <Text mb="20px">Số điện thoại và Email</Text>
              <VStack gap={6}>
                <FormControl w="100%">
                  <Flex direction="column">
                    <Flex w="100%" alignItems="center">
                      <FormLabel whiteSpace="nowrap">
                        <PhoneOutlined /> Số điện thoại
                      </FormLabel>
                      <Input
                        placeholder="Thêm số điện thoại"
                        {...register("phoneNumber")}
                      />
                    </Flex>
                    {errors.phoneNumber && (
                      <FormHelperText color="red">
                        {errors.phoneNumber.message}
                      </FormHelperText>
                    )}
                  </Flex>
                </FormControl>
                <FormControl w="100%">
                  <Flex direction="column">
                    <Flex w="100%" alignItems="center">
                      <FormLabel whiteSpace="nowrap">
                        <MessageOutlined /> Địa chỉ email
                      </FormLabel>
                      <Input
                        type="email"
                        placeholder="Thêm email"
                        {...register("email")}
                      />
                    </Flex>
                    {errors.email && (
                      <FormHelperText color="red">
                        {errors.email.message}
                      </FormHelperText>
                    )}
                  </Flex>
                </FormControl>
                <Button colorScheme="blue" type="submit" isDisabled={loading}>
                  {loading ? "loading" : "Lưu thay đổi"}
                </Button>
              </VStack>
            </Box>
          </HStack>
        </form>
      </Box>
    </>
  );
};

const UserInfo: FC<ReceivedProps> = (props) => {
  return <UserInfoLayout {...useUserInfo(props)} />;
};

export default UserInfo;
