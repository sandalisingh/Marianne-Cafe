import { useNavigate } from 'react-router-dom';

function PaytmBtn(props) {
    const navigate = useNavigate();

    async function handleClick() {

        let TOKEN = JSON.parse(localStorage.getItem('TOKEN'));
        console.log('PAYMENT BTN RECEIVES TOKEN');
        console.log(TOKEN);

        let todaysdate = new Date();
        console.log(todaysdate);
        todaysdate = 'OrderNo_' + todaysdate.getDate() + '_' + todaysdate.getMonth() + '_' + todaysdate.getFullYear() + '_' + todaysdate.getTime();
        console.log(todaysdate);

        let list = JSON.parse(localStorage.getItem('ORDER'));

        let list2 = [];

        for(let i=0; i<list.length; i++){
            let item = list[i];
            let newItem = {
                Name: item.Name,
                Price: item.Price,
                Qty: item.Qty,
                Amt: item.Price*item.Qty
            }
            list2.push(newItem);
        }

        let SEND = {
            OrderID: todaysdate,
            CustomerName: TOKEN.User,
            PhoneNo: TOKEN.PhoneNo,
            Date: new Date(),
            List: list2,
            TotalAmt: JSON.parse(localStorage.getItem('TOTAL')),
            hasMessage: false,
            Message: null
        }

        await fetch('http://localhost:3001/pay', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(SEND)
        })
        .then(response => response.json())
        .then(data => {
            console.log("AFTER CLICKING PAY RECEIVED FROM SERVER")
            console.log(data)
        })
        .catch(error => {
            //handle error
            console.log("ERROR");
            console.log(error);
        });

        TOKEN.placedOrder = true;
        localStorage.setItem('TOKEN', JSON.stringify(TOKEN));
        navigate('/order');

        window.location.reload();
    }

    return (
        <button
            className="TransparentBtn neonPurpleText LargeText FontThin FontCursive"
            onClick={handleClick} type="submit"
        >
            Pay
        </button>
    );
}

export default PaytmBtn;