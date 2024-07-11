import React from "react";

function Banner({ status, resetGame, children }) {
  const className = status ? `banner ${status}` : "banner";
  return (
    <div className={className}>
      {children}
      <button className="reset-button" onClick={resetGame}>
        Reset game
      </button>
    </div>
  );
}

export default Banner;
