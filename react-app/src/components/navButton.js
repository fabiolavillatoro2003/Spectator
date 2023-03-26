import React from 'react';
import AddButton from './AddButton';

function NavButton(){
    //function NavButton({sourceName, sourceEmail}) --> assuming
    return (
        <div className="nav">
            <h5 className="nav-text">
            Source Name:
            </h5>
            <div className="whitebox"><input type='text' placeholder="TYPE"/></div>
            <h5 className="nav-text">
            Source Email:
            </h5>
            <div className="whitebox"><input type="text"/></div>
            <AddButton></AddButton>
          </div>
    );
}
export default NavButton;

/*
  MAKE SURE THIS GOES OUTSIDE OF function App() -> var initialSourceList = ["source 1", "source2"]
  const [sourceList, setSourceList] = useState[initialSourceList];
  */

  /*
  --------belongs in <NavButton>, and NavButton.js, examine after pull 
    
    <NavButton sourceList = {sourceList} setSourceList{setSourceList}/>
    </NavButton>


  */



