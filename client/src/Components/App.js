import React from "react";
import "../style.css";
import Form from "./Form";
import Casserole from "./Casserole";

function App() {

  return (
    <div className="App">
      <div className="App">
        <Casserole InputsList={['Name', 'Price', 'ImageURL']}/>
        <Form InputsList={['Heading']}/>
      </div>
    </div>
  );

}

export default App;