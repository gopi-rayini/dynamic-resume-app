import Header from "./components/Header"
import Sections from "./components/Sections"
import { useState } from "react"


function App() {

  const [MainButtonState, setMainButtonState] = useState(
    false
  );

  const [SkillState, setSkillState] = useState(
    true
  );

  const [sectionContent, setSectionContent] = useState(
    [
      {
        id : 1,
        text : "Skills",
        state: false,
        info : [{
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
      ]},
      {
        id : 2,
        text : "Experience",
        state: false,
        info : [{
          text : "React.js",
        },
        {
          text : "JavaScript",
        },
        {
          text : "Python",
        }
      ]
      },
      {
        id : 3,
        text: "Projects",
        state: false,
        info : [{
          text : "React.js",
        }
      ]
      }
    ]
  );


  return (
    <div className="App">
      <Header MainButtonState={MainButtonState} setMainButtonState={() => setMainButtonState(!MainButtonState)}/>
      {!MainButtonState  && <Sections className="main-body" sectionContent={sectionContent}/>}
    </div>
  );
}

export default App;
