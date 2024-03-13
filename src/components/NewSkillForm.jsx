import React, { useState } from 'react';
import '../assets/style/NewSkillForm.css'

export default function NewSKillForm({skills, setSkills}) {
    const [newSkill, setNewSkill] = useState({name:'', level: 3})
    function handleChange(e){
        setNewSkill({...newSkill, [e.target.name]:e.target.value})
    }

    function addNewSkill(e){
        e.preventDefault();
        setSkills([...skills, newSkill]);
        setNewSkill({name:'', level:3})
    }
    return (
        <form className='NewSkillForm' onSubmit={addNewSkill}>
            <label> Skill</label>
            <input type="text" name='name'placeholder='Add new skill here' value={newSkill.name} onChange={handleChange}/>
            <label name='level'>Level</label>
             <select name="level" id="level" value={newSkill.level} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
             </select>
             <button type='submit'>ADD SKILL</button>
        </form>
      );
}