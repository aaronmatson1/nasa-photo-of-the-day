import React from "react";

const DateInput = props => (
    <div>
    <form onSubmit={props.changeDate}>
      Enter a date (YYYY-MM-DD):
      <input />
      <input type="submit" />
    </form>
    <button onClick={props.handleClick}> Random photo</button>
    </div>
  );

export default DateInput;
