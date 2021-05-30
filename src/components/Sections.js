import Section from "./Section"

const Sections = ( {className, sectionContent, showButton, isButton, onShow} ) => {
    return (
        <div className={className} style={!showButton ? {border: 'solid', borderColor:'black'} : {border: 'none'}}>
            {!showButton && sectionContent.map((sect) => (
                <Section text={sect.text} sectID={sect.id} isButton={isButton} onShow={onShow} />
            ))}
        </div>
    )
}

export default Sections
