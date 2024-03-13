import React from 'react';
import SkillListItem from './SkillListItem';
import  '../assets/style/SkillList.css'

export default function SkillList({skills}) {
 
const skilllistItems = skills.map((skill, index)=>(
  <SkillListItem key={index} level={skill.level}  name={skill.name}/>
))
    return (
      <div className='row justify-content-center'>
        <ul>
         {skilllistItems}
        
        </ul>
        </div>
      );
}

