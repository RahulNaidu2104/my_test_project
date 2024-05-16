import React from 'react'
import './styleBankCustomer.css'

const BankCustomerDisplay = ({details}) =>
    {
        return(
            <div id="Box">
                <h3 className='CustomerDetails'>
                    Customer Name: {details.CustomerName}
                    <br></br>
                    Customer Account Number: {details.CustomerAccountNo}
                    <br></br>
                    Customer PAN Card Number: {details.CustomerPANCard}
                    <br></br>
                    Customer Account Balance: {details.CustomerAccountBalance}
                </h3>
            </div>
        )   
    }

    export default BankCustomerDisplay;