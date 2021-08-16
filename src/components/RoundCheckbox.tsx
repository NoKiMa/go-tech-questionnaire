import React, {useState} from "react";
import "../App.scss"
const RoundCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  
  const handleCheckedChange = () => {
    setIsChecked(!isChecked)
  }

  return (
      <div className="round">
        <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleCheckedChange}/>
        <label htmlFor="checkbox"></label>
      </div>
  );
};
export default RoundCheckbox;
