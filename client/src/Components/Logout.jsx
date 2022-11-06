function Logout(props){

    function handleLogout(event) {
        // event.preventDefault();
        // alert("\nCALLLLLLLLEDDDDDDD !");
        localStorage.removeItem('TOKEN',);
        // redirect('/');
    }

    return(
        <div 
            onClick={handleLogout}
            className="SingleNav" 
            style={{position:"absolute", top:'170px', left:"0"}}
        >
            <a href={props.SRC} className="FontCursive">Logout</a>
        </div>
    );
}

export default Logout;