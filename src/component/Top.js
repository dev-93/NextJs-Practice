import { Header } from "semantic-ui-react";
import Gnb from "./Gnd";

export default function Top() {
    return(
        <div>
            <img src="/images/taenam.png" alt="logo"/>
            <Header as="h1">taenam</Header>
            <Gnb />
        </div>
    )
}