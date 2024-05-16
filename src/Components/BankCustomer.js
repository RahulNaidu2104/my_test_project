import React from 'react'
import BankCustomerDisplay from './BankCustomerDisplay'

const BankCustomer = () => 
    {
        let CustomerDetails =
        [
            {
                CustomerName: "ABC",
                CustomerAccountNo: "123",
                CustomerPANCard: "ABC123",
                CustomerAccountBalance: "1000"
            },
            {
                CustomerName: "DEF",
                CustomerAccountNo: "456",
                CustomerPANCard: "DEF456",
                CustomerAccountBalance: "2000"
            },
            {
                CustomerName: "GHI",
                CustomerAccountNo: "789",
                CustomerPANCard: "GHI789",
                CustomerAccountBalance: "3000"
            },
            {
                CustomerName: "KLM",
                CustomerAccountNo: "012",
                CustomerPANCard: "KLM012",
                CustomerAccountBalance: "4000"
            }
        ]

        const BankCustomerDetails = CustomerDetails.map(EachCustomerDetails => <BankCustomerDisplay details={EachCustomerDetails}></BankCustomerDisplay>)

        return(
            <div>
                {BankCustomerDetails}
            </div>
        )
    }

    export default BankCustomer;