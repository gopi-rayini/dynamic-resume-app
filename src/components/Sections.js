import Button from "./Button"
import Display from "./Display"
import { FaAngleRight} from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa"
import { useState } from 'react'

const Sections = ( props ) => {

    const [ButtonState, setButtonState] = useState(
        true
    );

    return (
        <div className={props.className}>
            {props.sectionContent.map((sect) => (
                <div className="sections-wrapper">
                    <div className="sections">
                        <h3 key={sect.id}>{sect.text}</h3>
                        <Button text={ButtonState ? <FaAngleRight /> : <FaAngleDown />} stateChange={() => setButtonState(!ButtonState)}/>
                    </div>
                    <div className={sect.text}>
                        {sect.info.map((info) => (
                             <Display text={info.text}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sections
