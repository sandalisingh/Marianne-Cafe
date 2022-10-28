function SingleNav(props){
    return(
        <div className="SingleNav" style={{position:"absolute", top:props.fromTop, left:"0"}}>
            <a href={props.SRC} className="FontCursive">{props.Title}</a>
        </div>
    );
}

export default SingleNav;