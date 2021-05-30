import Button from "./Button"

const Section = ( {text, sectID, isButton, onShow} ) => {
    return (
        <div className="section" style={(sectID < 3) ? {borderBottom: 'solid'} : {border: 'none'}}>
            <p> {text} </p>
            {isButton && <Button text="Show" className="sectButton" onShow={onShow} />}
        </div>
    )
}

export default Section
