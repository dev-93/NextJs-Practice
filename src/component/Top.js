import { Header } from "semantic-ui-react";
import styled from "styled-components";
import Gnb from "./Gnd";

export default function Top() {
    return(
        <Wrap>
            <Header as="h1">taenam 쇼핑몰</Header>
            <Gnb />
        </Wrap>
    )
};

const Wrap = styled.div`
    h1 {
        text-align: center;
    }
`;