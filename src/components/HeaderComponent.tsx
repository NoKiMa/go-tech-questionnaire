import React from 'react'
import "../App.scss"

const HeaderComponent = () =>{
  return (
    <div className="header_container">
        <div className="decoration"/>
        <p className="title"> GoTech Qustionnere</p>
        <p className="subtitle"> Show me what you got</p>
        <p className="required"> *Required </p>
    </div>
  )
}

export default HeaderComponent;