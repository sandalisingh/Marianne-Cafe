import { useState } from "react";

function Block(props) {
    const [TextFontClass, setTextFont] = useState("neonGreenText");

    var addClass = "Relative Block";

    function handleClick1(id, heading) {
        // fetch(`/menu/deletion?delID=${encodeURIComponent(event)}`)
        fetch(`/${encodeURIComponent(heading)}/deletion?delID=${encodeURIComponent(id)}`)
            .then(response => response.json())
            .then(state => this.setState(state));
        window.location.reload(false);      //to refresh the page
    }

    function handleClick2(id, heading) {
        console.log("CLICKED PLUS")

        
        let list = JSON.parse(localStorage.getItem('ORDER'));

        if (list === null) {
            let item = {
                Name: props.Name,
                Price: props.Price,
                Qty: 1
            }
            
            list = [
                item
            ]

        } else {
            let flag = false;

            for (var i = 0; i < list.length; i++) { 
                if(list[i].Name === props.Name) {
                    flag = true;
                    list[i].Qty = list[i].Qty + 1;
                    break;
                }
            }

            if(flag === false) {
                list.push({
                    Name: props.Name,
                    Price: props.Price,
                    Qty: 1
                });
            } 
        }

        localStorage.removeItem('ORDER');
        localStorage.setItem('ORDER', JSON.stringify(list));
    }

    function handleClick3(id, heading) {
        console.log("CLICKED MINUS")
        let list = JSON.parse(localStorage.getItem('ORDER'));

        for (var i = 0; i < list.length; i++) { 
            if(list[i].Name === props.Name) {

                if(list[i].Qty === 1) {
                    list.splice(i, 1);
                }else{
                    list[i].Qty = list[i].Qty - 1;
                } 
            }
        }

        localStorage.removeItem('ORDER');
        localStorage.setItem('ORDER', JSON.stringify(list));
    }

    function mouseEnter() {
        setTextFont("neonPurpleText");
    }

    function mouseLeave() {
        setTextFont("neonGreenText");
    }

    return (
        <div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className={addClass}
        >
            <h4
                className={TextFontClass + " SmallText FontCursive"}
            >
                {props.Name}
            </h4>
            <h6
                className={TextFontClass + " VSmallText"}
            >
                ₹ {props.Price}
            </h6>

            <img
                src={props.ImageSRC}
                alt="Something"
            />

            {
                props.TOKEN.isAdmin === true ?
                    <button
                        onClick={() => handleClick1(props.id, props.Heading)}
                        className="CircularBtn TopRight"
                    >
                        X
                    </button>
                    :
                    props.TOKEN.isLoggedIn === true ?
                        <div>
                            <button
                                onClick={() => handleClick2(props.id, props.Heading)}
                                className="SquareBtn TopRight"
                                style={{
                                    borderRadius: "30% 0% 0% 30% ",
                                    right:'30px'
                                }}
                            >
                                +
                            </button>
                            <button
                                onClick={() => handleClick3(props.id, props.Heading)}
                                className="SquareBtn TopRight"
                                style={{
                                    top:'-12px',
                                    // right:'0',
                                    borderRadius: "0 30% 30% 0%"
                                }}
                            >
                                -
                            </button>
                        </div>
                        : null
            }

        </div>
    );
}

export default Block; 