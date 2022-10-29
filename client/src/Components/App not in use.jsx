import Casserole from "./Casserole";
import Greeting from "./Greeting";
import NavBar from "./NavBar";

function App(props) {

  return (
    <div className="App">
      <div className="App">
        <NavBar/>
        <Greeting/>
        <Casserole Title="Beverages" isAdmin={props.isAdmin} InputsList={['Name', 'Price', 'Image']}/>
        <Casserole Title="QuickBites" isAdmin={props.isAdmin} InputsList={['Name', 'Price', 'Image']}/>
        <Casserole Title="Meals" isAdmin={props.isAdmin} InputsList={['Name', 'Price', 'Image']}/> 
        <Casserole Title="Milkshakes" isAdmin={props.isAdmin} InputsList={['Name', 'Price', 'Image']}/>
        <Casserole Title="Desserts" isAdmin={props.isAdmin} InputsList={['Name', 'Price', 'Image']}/>
        {/* {props.isAdmin===true?<Form InputsList={['Heading']} SubmitBtn="+"/>:null} */}
      </div>
    </div>
  );

}

export default App;