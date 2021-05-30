import Section from "./Section"

const Sections = ( {className, sectionContent, showButton, isButton, onShow, stateSkill} ) => {
    return (
        <div className={className} style={(!showButton && isButton) ? {border: 'solid', borderColor:'black'} : {border: 'none'}}>
            {!showButton && sectionContent.map((sect) => (
                <Section text={sect.text} sectID={sect.id} isButton={isButton} btntext={stateSkill ? "Show" : "Hide"} onShow={sect.id === 1 && stateSkill} />
            ))}
        </div>
    )
}

export default Sections
