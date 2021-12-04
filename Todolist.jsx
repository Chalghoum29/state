import React from 'react'
import Todocards from './Todocards'

const Todolist = ({list,del,comp}) => {
    return (
        <div>
           { 
           list.map((el,i) =>
            <Todocards key={i} comp={comp} del={del} task={el} />
            )
            }
        </div>
    )
}

export default Todolist
