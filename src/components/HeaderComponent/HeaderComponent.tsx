import React from "react";
import "../../App.scss";
import "./HeaderComponent.scss";
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="decoration" />
      <p className="title"> GoTech Qustionnaire</p>
      <p className="subtitle"> Show me what you got!</p>
      <p className="required"> * Required </p>
    </div>
  );
};

export default HeaderComponent;
