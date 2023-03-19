import AddButton from './AddButton';

function NavButton(){
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




