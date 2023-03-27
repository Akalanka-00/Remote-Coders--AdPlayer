import React from 'react'
import './CuspaymentStyle.css'

function Cuspayment(){
    return(
        <div className="App">
            <div className="formbox">
<form>
    <p><h1 style={{color:"black"}}>Payment</h1></p><br></br><br></br>
    <div>
        <img  className='creditcards' src='https://img.freepik.com/free-vector/realistic-monochromatic-credit-card_52683-74366.jpg?size=338&ext=jpg&ga=GA1.2.2144078180.1676505789&semt=ais' alt='visaCard'></img>
        <img  className='creditcards' src='https://cdn.pixabay.com/photo/2017/01/26/15/47/credit-card-2010884_960_720.jpg' alt='MasterCard'></img>
    </div><br></br>
    <div><label>Card Number</label>
    <input type="text" placeholder="Card Number"></input></div><br></br><br></br>
    <div><label>Card Holder Name</label>
    <input type="text" placeholder="Card Holder Name"></input></div><br></br><br></br>
    <div><label>Expiry</label>
    <input type="text" placeholder="MM/YY"></input></div><br></br><br></br>
    <div><label>CVV Nmber</label>
    <input type="text" placeholder="CVV"></input></div><br></br><br></br>
    <div>
        <label>Save Card Details
        <input type="checkbox" style={{float:"left"}}></input>
        </label>
    </div>
    <div>
        <p style={{color:"black"}}>Your Payment will be process in USD</p>
        <p style={{color:"black"}}>Total Amount: </p>
    </div>
    <div>
    <label>Save and Confirm Payment</label>
        <input type="submit"></input>
    </div>
</form>
            </div>

        </div>
    )
}
export default Cuspayment;