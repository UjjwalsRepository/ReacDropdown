import React, { useState } from 'react'
import '../App.css'
import Options from '../component/Options'
const Dropdown = () => {
  const options = [
    { value: "Yes" },
    { value: "Probably not" }
  ]

  const [showDropdownValue, setShowDropdownValue] = useState(false);

  const onChangeHandler = (e) => {
    // alert("clicked");
    setShowDropdownValue(false);
    
  }

  return (
    <div className="main-container">
      <h3>Should you use a dropdown ?</h3>
      <p
        onMouseEnter={() => setShowDropdownValue(true)}
      >Select</p>
      {showDropdownValue && <Options options={options} onOptionClick={onChangeHandler} />}
    </div>
  )
}

export default Dropdown