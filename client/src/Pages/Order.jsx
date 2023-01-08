import Greeting from "../Components/Greeting"
import SingleOrder from "../Components/SingleOrder";
import Carousel from 'react-multi-carousel';

import { useState, useEffect } from 'react';

function Order(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1345 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1345, min: 890 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 890, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30
    }
  };

  const [data, setData] = useState([]);

  const getData = () => {
    let url = 'http://localhost:3001/orders'; //URL of the resource we want to fetch
    fetch(url).then((response) => response.json())
      .then((receivedData) => setData(receivedData));
  }

  useEffect(() => getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);

  return (
    <div>
      <div className="">
        <div className="Center">
          <Greeting Title="Orders" />
        </div>
        <Carousel
          key={props.Title + '7'}
          responsive={responsive}     // Numbers of slides to show at each breakpoint
          transitionDuration={5000}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"    // Use this to style the dot list.

          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}

          showDots={true}
          // centerMode
        >
          {
            data && data.length > 0 && data.map((ONE, i) => (
              <SingleOrder
                key={i}
                OrderNo={ONE.OrderID}
                Name={ONE.CustomerName}
                MobileNo={ONE.PhoneNo}
                OrderList={ONE.List}
                TotalAmt={ONE.TotalAmt}
              />
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}

export default Order;