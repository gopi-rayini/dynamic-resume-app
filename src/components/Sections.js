import { useState } from 'react'
import Section from './Section'

import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import { fadeIn } from 'react-animations';

const Sections = ( props ) => {

    const slideAnimation = keyframes`${fadeIn}`;
    const SlideDiv = styled.div`
    animation: .1s ${slideAnimation};
    `;

    const [ButtonState, setButtonState] = useState(
        {
            1: true,
            2: true,
            3: true
        }
    );

    return (
        <SlideDiv><div className={props.className}>
            {props.sectionContent.map((sect) => (
                <Section sect={sect} ButtonState={ButtonState} setButtonState={() => setButtonState(!ButtonState)}/>
            ))}
        </div></SlideDiv>
    )
}

export default Sections
