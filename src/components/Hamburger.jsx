import React from "react";

function Hamburger(props) {
  return (
    <div>
      <button 
        className="navbar-toggler" 
        type="button" 
        dataToggle="collapse" 
        dataTarget="#navbarCollapse" 
        ariaControls="navbarCollapse" 
        ariaExpanded="false" 
        ariaLabel="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  );
}

export default Hamburger;