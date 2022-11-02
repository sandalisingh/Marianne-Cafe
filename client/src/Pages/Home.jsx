import Casserole from "../Components/Casserole";
import Greeting from "../Components/Greeting";

function App(props) {

  return (
    <div className="">
      <div className="">
        <Greeting Title="Menu"/>
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