import React from "react";

const Props = ({ count, onClick }) => {
  return (
    <div>
      Props
      <p onClick={onClick}>The button was {count} clicked</p>
    </div>
  );
};

export default Props;
