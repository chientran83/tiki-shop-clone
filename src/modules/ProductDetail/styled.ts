import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const Styles = styled(Box)`
  .slick-dots li {
    height: auto;
    width: 100%;
    & div {
      background-color: rgba(255, 255, 255, 0.5);
      width: 100%;
    }
  }
  .slick-dots div .slick-active div {
    border: 1px solid rgb(10, 104, 255);
    border-radius: 6px;
  }
`;
