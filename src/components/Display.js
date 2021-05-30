import Sections from "./Sections"

const Display = (props) => {
    return (
        <div>
            <Sections className="skills" sectionContent={props.displaySkills} showButton={props.SkillState || props.MainButtonState} isButton={false} />
        </div>
    )
}

export default Display
