import {
  Spinner as ChakraSpinner,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";

import useSpinner, { Props, ReceivedProps } from "./hook";

const SpinnerLayout: FC<Props> = ({ loading, children }) => {
  return (
    <Box position="relative">
      {loading && (
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="#80808094"
          zIndex="1"
        >
          <Flex align="center" justify="center" h="100%" w="100%">
            <ChakraSpinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        </Box>
      )}
      {children}
    </Box>
  );
};
const Spinner: FC<ReceivedProps> = (props) => {
  return <SpinnerLayout {...useSpinner(props)} />;
};
export default Spinner;
