import React from 'react'

import '../App.css'
const Options = (props) => {
  return (
    <div>
       <ul>
            {props.options.map((option,index)=>(

                 <li key={index} onClick={props.onOptionClick}>{option.value}</li>
             )) }
        </ul>
    </div>
  )
}

export default Options