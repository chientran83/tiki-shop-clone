import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const Styles = styled(Box)`
  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
  }
  .slick-dots ul li {
    margin-left: 8px;
    & div {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .slick-dots ul .slick-active div {
    background-color: rgba(255, 255, 255);
  }
  .slick-slider .slick-slide {
    padding: 0 13px;
  }
`;
