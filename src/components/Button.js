const Button = (props) => {
    return (
        <div>
           <button className={props.className} onClick={props.stateChange}> {props.text} </button>
        </div>
    )
}

export default Button
