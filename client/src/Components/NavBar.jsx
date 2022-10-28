import SingleNav from "./SingleNav";

function NavBar(props){
    return(
        <div className="">
            <SingleNav fromTop="30px" Title="Home" SRC=""></SingleNav>
            <SingleNav fromTop="100px" Title="Order Status" SRC=""></SingleNav>
            <SingleNav fromTop="170px" Title="Login" SRC=""></SingleNav>
        </div>
    );
}

export default NavBar;