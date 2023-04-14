import { Box } from "@chakra-ui/react"
import styled from "styled-components"

export const Styles = styled(Box)`
    .question-mark {
        animation-name : question;
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
    }
    @keyframes question {
        0% {
            transform : rotate(0deg);
        }
        50% {
            transform : rotate(20deg);
        }
        100% {
            transform : rotate(0deg);
        }
    }
`