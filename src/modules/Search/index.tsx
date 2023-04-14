import { FC } from "react";
import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  SimpleGrid,
  StackDivider,
  Stack,
  Alert,
} from "@chakra-ui/react";

import useSearch, { Props, ReceivedProps } from "./hook";
import Spinner from "../../components/Spinner";
import ProductItem from "../../components/ProductItem";
import { MessageOutlined } from "@ant-design/icons";

const SearchLayout: FC<Props> = ({ querySearch, loading, products }) => {
  return (
    <Box bg="white" p="16px">
      <Stack divider={<StackDivider />} spacing="4">
        <Text fontSize="32px">Kết quả tìm kiếm cho `{querySearch}`</Text>
        <Spinner loading={loading}>
          <Card>
            <CardHeader>
              <Heading size="md">Danh sách sản phẩm </Heading>
            </CardHeader>
            <CardBody>
              {products.length ? (
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 4, xl: 5 }}
                  spacingX="25px"
                  spacingY="20px"
                >
                  {products.map((product, index) => (
                    <ProductItem product={product} key={index} />
                  ))}
                </SimpleGrid>
              ) : (
                <Alert status="warning" w="100%" color="#a98a00">
                  <MessageOutlined />
                  <Text ml="20px">
                    Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của
                    bạn
                  </Text>
                </Alert>
              )}
            </CardBody>
          </Card>
        </Spinner>
      </Stack>
    </Box>
  );
};

const Search: FC<ReceivedProps> = (props) => {
  return <SearchLayout {...useSearch(props)} />;
};

export default Search;
