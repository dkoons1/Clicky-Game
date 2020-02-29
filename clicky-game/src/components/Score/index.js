import React from "react";
import "./style.css";

function Score(props){
  return (
   <div className="gameWrap">
    <h1 className="score"> Score: {props.score}</h1>  
    <h2 className="score">{props.message}</h2>
  </div>
  );
}

export default Score;
