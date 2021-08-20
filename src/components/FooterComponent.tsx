import React from "react";
import "../App.scss";

interface FooterComponentProps {
  submitData: () => void;
}

const FooterComponent = (prop: FooterComponentProps) => {
  return (
    <div className="footer">
      <button
        className="waves-effect waves-light btn submit_btn"
        onClick={prop.submitData}
      >
        Submit
      </button>
    </div>
  );
};

export default FooterComponent;
