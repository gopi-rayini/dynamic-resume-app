const Button = ( {className, text, clr, onShow} ) => {
    return (
        <div>
           <button className={className} onClick={onShow} style={{backgroundColor: clr}}> {text} </button>
        </div>
    )
}

export default Button
