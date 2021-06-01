import Button from "./Button"
import { FaAngleRight} from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa"

import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import { fadeIn } from 'react-animations';

const Header = (props) => {

    const slideAnimation = keyframes`${fadeIn}`;
    const FadeInDiv = styled.div`
    animation: 2s ${slideAnimation};
    `;

    return (
        <div className="Header">
            <h1>Gopi Rayini's Website</h1>
            <FadeInDiv><Button className="mainButton" text={props.MainButtonState ? <FaAngleRight /> : <FaAngleDown />} stateChange={props.setMainButtonState}/></FadeInDiv>
        </div>
    )
}

export default Header
