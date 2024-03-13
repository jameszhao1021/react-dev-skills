import { useState } from 'react'
import './App.css'
import SkillList from './components/SkillList'
import NewSKillForm from './components/NewSkillForm'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [showSkills, setShowSkills] = useState(true)
  function handleClick(){
    setShowSkills(!showSkills)
  }
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])
  return (
    <div className="App container d-flex flex-column ">
      <h1>React Dev Skills</h1>
      <button className='btn btn-secondary mb-4' onClick={handleClick}>{showSkills?'SHOW':'HIDE'}</button>
     {showSkills && <SkillList skills={skills}/>}
      <hr></hr>
      <NewSKillForm skills={skills} setSkills={setSkills}/>    
    </div>
  );
}