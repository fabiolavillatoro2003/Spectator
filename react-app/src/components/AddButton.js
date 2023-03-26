import React from 'react';
function AddButton(){

  function handleClick(){
    alert("submitted");
  }

    return(
      <div className="button-green" onClick={() => handleClick()}>
        <button className="button-green">ADD</button>
      </div> 
    );
}
export default AddButton;