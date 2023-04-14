import styled from "styled-components";
import { Link } from "@chakra-ui/react";

export const StyleLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
