import { useState, useEffect } from 'react';
import Form from "./Form";
import Block from "./Block"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import keyIndex from 'react-key-index';

function Casserole(props) {

    var addClass = ""
    if (props.TOKEN.isAdmin === true) {
        addClass = "CarouselAdmin"
    } else {
        addClass = "Carousel"
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 30
        }
    };

    const [data, setData] = useState([]);
    const [PlusBtnState, setState] = useState(false);

    const getData = () => {
        let url = 'http://localhost:3001/' + props.Title; //URL of the resource we want to fetch
        fetch(url).then((response) => response.json())
            .then((receivedData) => setData(receivedData));
    }

    useEffect(() => getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);

    function expand() {
        setState(true);
    }

    function compress() {
        setState(false);
    }

    return (
        <div key={props.Title} className="TextCenter">
            <h1 key={props.Title + '1'} className=" neonPurpleText LinedText FontThin FontCursive">{props.Title}</h1><br />
            <div key={props.Title + '2'} className="Center SkeletonBox">

                {props.TOKEN.isAdmin === true ?
                    PlusBtnState === false ?
                        <button key={props.Title + '3'} onClick={expand} className="LargeBtn CircularBtn"> + </button> :
                        <div key={props.Title + '4'} onMouseLeave={compress} className="FitInSizedBox Center FormBox" >
                            <Form
                                Title={props.Title}
                                InputsList={props.InputsList}
                                SubmitBtn="+"
                                key={props.Title + '5'}
                            />
                        </div>
                    : null
                }

                <div key={props.Title + '6'} className={addClass}>
                    <Carousel
                        key={props.Title + '7'}
                        responsive={responsive}     // Numbers of slides to show at each breakpoint
                        transitionDuration={5000}
                        deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"    // Use this to style the dot list.

                        autoPlay={true}
                        autoPlaySpeed={5000}
                        infinite={true}
                    >
                        {
                            data && data.length > 0 && data.map((One) => (
                                <Block
                                    key={props.Title + '8'}
                                    id={One._id}
                                    TOKEN={props.TOKEN}
                                    Heading={props.Title}
                                    Name={One.Name}
                                    Price={One.Price}
                                    ImageSRC={One.Image}
                                />
                            ))
                        }
                    </Carousel>
                </div>
                {/* <br/><br/><br/> */}
            </div>
        </div>
    );
}

export default Casserole; 