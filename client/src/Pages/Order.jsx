import Greeting from "../Components/Greeting"
import SingleOrder from "../Components/SingleOrder";

function Order(props) {

  return (
    <div>

    
    <div className="">
      <Greeting Title="Order"/>
      <SingleOrder 
        key="ABC123"
        OrderNo='ABC123'
        Name='Sandali'
        MobileNo='9315248049'
        OrderList={[
          {
            ItemName: 'Chole Kulche',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Chocolate Milshake',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Veg. Grilled Sandwich',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Chole Kulche',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          }
        ]}
        TotalAmt={200}
      />
      <SingleOrder 
        key="OIHI123"
        OrderNo='OIHI123'
        Name='Tanishka'
        MobileNo='9315248049'
        OrderList={[
          {
            ItemName: 'Chole Kulche',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Chocolate Milshake',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Veg. Grilled Sandwich',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Chole Kulche',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          }
        ]}
        TotalAmt={200}
      />
      <SingleOrder 
        key="NIK890"
        OrderNo='NIK890'
        Name='Shailesh'
        MobileNo='9315248049'
        OrderList={[
          {
            ItemName: 'Chole Kulche',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Chocolate Milshake',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Veg. Grilled Sandwich',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Chole Kulche',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          }
        ]}
        TotalAmt={200}
      />
      <SingleOrder
        key="BKO189" 
        OrderNo='BKO189'
        Name='Maam'
        MobileNo='9315248049'
        OrderList={[
          {
            ItemName: 'Chole Kulche',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Chocolate Milshake',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Veg. Grilled Sandwich',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          },
          {
            ItemName: 'Chole Kulche',
            Price: 20,
            Qty: 10,
            ModeOfPayment: '',
            PaymentStatus: ''
          }
        ]}
        TotalAmt={200}
      />
    </div>
    
    </div>
  );

}

export default Order;