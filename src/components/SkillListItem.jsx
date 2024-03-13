import React from 'react';
import  '../assets/style/SkillListItem.css'


export default function SkillListItem({level, name}) {
    return (    
          <li className='SkillListItem'>
            {name}<span className='level'>LEVEL{level}</span>
         </li>        
      );
}