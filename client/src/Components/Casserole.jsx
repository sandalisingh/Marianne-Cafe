import {useState,useEffect} from 'react';
import Form from "./Form";
import Block from "./Block"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Casserole(props){
    var addClass = ""
    if(props.isAdmin===true) {
        addClass = "CarouselAdmin"
    }else{
        addClass = "Carousel"
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        }
    };

    const [ data, setData] = useState([]);
    const [ PlusBtnState, setState] = useState(false);
    
    const getData = () => {
        let url = 'http://localhost:3001/'+props.Title; //URL of the resource we want to fetch
        fetch(url).then((response) => response.json()).then((receivedData) => setData(receivedData));
    }

    //Runs on the first render
    //And any time any dependency value changes
    useEffect( () => getData(), [] );

    function expand(){
        setState(true);
    }

    function compress(){
        setState(false);
    }

    return( 
        <div className="TextCenter">
            <h1 className=" neonPurpleText LinedText FontThin FontCursive">{props.Title}</h1><br/>
            <div className="Center SkeletonBox"> 
                
                { props.isAdmin===true? 
                    PlusBtnState===false ?
                        <button onClick={expand} className="LargeBtn CircularBtn"> + </button> : 
                            <div onMouseLeave={compress} className="FitInSizedBox Center neonBox FormBox" >
                            <Form Title={props.Title} InputsList={props.InputsList} SubmitBtn="+"/>
                    </div> : null
                }
                
                <div className={addClass}>
                    <Carousel
                        responsive={responsive}     // Numbers of slides to show at each breakpoint
                        ssr={true} // means to render carousel on server-side.
                        customTransition="all .5"
                        transitionDuration={5000}
                        deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"    // Use this to style the dot list.
                    >
                        { data && data.length>0 && data.map((One)=> (
                        <Block key={One._id} id={One._id} isAdmin={props.isAdmin} Heading={props.Title} Name={One.Name} Price={One.Price} ImageSRC={One.Image}/>
                        ))}
                    </Carousel>
                </div>
                {/* <br/><br/><br/> */}
            </div>
        </div>
    );
}

export default Casserole; 