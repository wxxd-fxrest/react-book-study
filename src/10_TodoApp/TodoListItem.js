import '../10_TodoApp/TodoTemplate.css';
import {
    MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline
} from 'react-icons/md';
import React from 'react';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo ; 
    return (
        <div className='TodoListItem'>
            <div className='checkbox' onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox className='svgCheck'/> : <MdCheckBoxOutlineBlank className='svg'/>}
                <div className={checked ? 'textCheck' : 'text'}> {text} </div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default React.memo(TodoListItem); 