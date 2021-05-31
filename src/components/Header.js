import Button from "./Button"
import { FaAngleRight} from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa"

const Header = (props) => {

    return (
        <div className="Header">
            <h1>Gopi Rayini's Website</h1>
            <Button className="mainButton" text={props.MainButtonState ? <FaAngleRight /> : <FaAngleDown />} stateChange={props.setMainButtonState}/>
        </div>
    )
}

export default Header
