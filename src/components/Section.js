import Button from "./Button"
import Display from "./Display"

import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import { FaAngleRight} from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa"

const Section = ( {sect, ButtonState, setButtonState} ) => {

    const bounceAnimation = keyframes`${fadeInDown}`;

    const BouncyDiv = styled.div`
    animation: .2s ${bounceAnimation};
    `;

    return (
        <div className="sections-wrapper">
                    <div className="sections">
                        <h3 key={sect.id}>{sect.text}</h3>
                        <Button text={(ButtonState) ? <FaAngleRight /> : <FaAngleDown />} stateChange={setButtonState}/>
                    </div>
                    {!ButtonState &&  <BouncyDiv><div className={sect.text}>
                        {sect.info.map((info) => (
                            <Display text={info.text}/>
                        ))}
                    </div></BouncyDiv> }
                </div>
    )
}

export default Section
