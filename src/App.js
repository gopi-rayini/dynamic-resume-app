import Header from "./components/Header"
import Button from "./components/Button"
import Sections from "./components/Sections"
import Display from "./components/Display"
import { useState } from "react"

function App() {
  const [MainButtonState, setMainButtonState] = useState(
    false
  );

  const [SkillState, setSkillState] = useState(
    false
  );

  const [sectionContent, setSectionContent] = useState(
    [
      {
        id : 1,
        text : "Skills",
        state: false
      },
      {
        id : 2,
        text : "Experience",
        state: false
      },
      {
        id : 3,
        text: "Projects",
        state: false
      }
    ]
  );

  const [displaySkills, setSkills] = useState(
    [
      {
        text : "React.js",
      },
      {
        text : "JavaScript",
      },
      {
        text : "Python",
      },
      {
        text : "Java",
      },
      {
        text : "C#",
      },
      {
        text : "HTML",
      },
      {
        text : "CSS",
      },
    ]
  );

  return (
    <div className="App">
      <Header />
      <Button className="mainButton" text={MainButtonState ? 'Show' : 'Close'} clr={MainButtonState ? "#009c29" : "#09002e"} onShow={() => setMainButtonState(!MainButtonState)}/>
      <Sections className="contents" sectionContent={sectionContent} showButton={MainButtonState} stateSkill={() => setSkillState(!SkillState)} isButton={true} />
      <Display displaySkills={displaySkills} MainButtonState={MainButtonState} SkillState={SkillState}/>
    </div>
  );
}

export default App;
