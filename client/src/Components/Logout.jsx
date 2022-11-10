function Logout(props){

    function handleLogout(event) {
        localStorage.removeItem('TOKEN',);
        localStorage.clear();
    }

    return(
        <div 
            onClick={handleLogout}
            className="SingleNav" 
            style={{position:"absolute", top:props.fromTop, left:"0"}}
        >
            <a href='/' className="FontCursive">Logout</a>
        </div>
    );
}

export default Logout;