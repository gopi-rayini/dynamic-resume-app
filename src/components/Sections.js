import { useState } from 'react'
import Section from './Section'

const Sections = ( props ) => {

    const [ButtonState, setButtonState] = useState(
        {
            1: true,
            2: true,
            3: true
        }
    );

    return (
        <div className={props.className}>
            {props.sectionContent.map((sect) => (
                <Section sect={sect} btnClass="exp-button" ButtonState={ButtonState} setButtonState={() => setButtonState(!ButtonState)}/>
            ))}
        </div>
    )
}

export default Sections
