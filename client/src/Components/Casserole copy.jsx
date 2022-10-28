import React, {useState,useEffect} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Form from "./Form";
import Block from "./Block"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Casserole(props){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
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

    // function handleClick(id, heading) {
    //     // fetch(`/menu/deletion?delID=${encodeURIComponent(event)}`)
    //     fetch(`/${encodeURIComponent(heading)}/deletion?delID=${encodeURIComponent(id)}`)
    //       .then(response => response.json())
    //       .then(state => this.setState(state));
    //     window.location.reload(false);      //to refresh the page
    // }

    function expand(){
        setState(true);
    }

    return( 
        <div className="TextCenter">
            <h1 className=" neonPurpleText LinedText FontThin FontCursive">{props.Title}</h1><br/>
            <div className=" "> 
            
            { 
                props.isAdmin===true? PlusBtnState===false?
                    <button onClick={expand} className="CircularBtn"> + </button>
                    : <div className="FitInSizedBox neonBox" >
                        <Form Title={props.Title} InputsList={props.InputsList} SubmitBtn="+"/>
                    </div>
                : null
            }

            {/* <Block key={One._id} id={One._id} isAdmin={props.isAdmin} Heading={props.Title} Name={One.Name} Price={One.Price} ImageSRC={One.Image}/> */}
                        
                {/* <Carousel slide={false} fade className='Carousel FitInSizedBox'>

                    { data && data.length>0 && data.map((One)=> (
                        <Carousel.Item className="Block SingleCarousel Relative">
                            <img src={One.Image} alt="Something"/>
                            <Carousel.Caption>
                                <h3 className="SmallText neonGreenText FontCursive">{One.Name}</h3>
                                <p className="VSmallText neonGreenText">₹ {One.Price}</p>
                            </Carousel.Caption>
                            
                            {props.isAdmin===true? 
                                <button onClick={() => handleClick(One._id, props.Title)} className="CircularBtn TopRight">x</button>
                                : null
                            }
                        </Carousel.Item>
                    ))}
                </Carousel> */}

                <Carousel
                    // swipeable={false}   // Optionally disable/enable swiping on mobile
                    // draggable={false}   // Optionally disable/enable dragging on desktop
                    // showDots={true} // by default Hide the default dot list
                    responsive={responsive}     // Numbers of slides to show at each breakpoint
                    ssr={true} // means to render carousel on server-side.
                    // infinite={true} // Enables infinite scrolling in both directions. Carousel items are cloned in the DOM to achieve this.
                    // autoPlay={props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}    // ms
                    //  keyBoardControl={true}  // (def: true) Use keyboard to navigate to next/previous slide
                    customTransition="all .5"
                    transitionDuration={5000}
                    // containerClass="carousel-container" // Use this to style the whole container. For example add padding to allow the "dots" or "arrows" to go to other places without being overflown.
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"    // Use this to style the dot list.
                    // itemClass="Center Relative Block"     // CSS class for carousel item, use this to style your own Carousel item. For example add padding-left and padding-right
                    // focusOnSelect={true}    // Go to slide on click and make the slide a current slide
                    // centerMode={true}       // Shows the next items and previous items partially.
                    // focusOnSelect={true}     // Go to slide on click and make the slide a current slide.
                >
                    { data && data.length>0 && data.map((One)=> (
                       <Block key={One._id} id={One._id} isAdmin={props.isAdmin} Heading={props.Title} Name={One.Name} Price={One.Price} ImageSRC={One.Image}/>
                    ))}
                </Carousel><br/><br/><br/>
        
            </div>
        </div>
    );
}

export default Casserole; 