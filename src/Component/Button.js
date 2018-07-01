import React from 'react'
import './style.css'

const Button = (props) =>{
    return(
        <button className='BtnAddrow' onClick={props.Click}>ADD ROW</button>
    )
}
export default Button