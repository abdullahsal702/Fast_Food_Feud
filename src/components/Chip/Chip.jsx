import * as React from "react"
import { useState } from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick = () => {} }) {
  let buttonClassName = ""
  if (isActive == false){
    buttonClassName = "chip"
  } else {
    buttonClassName = "chip active"
  }
  //`chip ${isActive ? "active" : ""}

  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
