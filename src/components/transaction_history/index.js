import React from 'react'
import * as Icon from 'react-feather';

export default function index() {

  const transactions = [
    {
      'message':'Payment from',
      'name':'Mary Atieno',
      'account_name':'Mary Atieno',
      'account_number': '*****5472',
      'amount': '23000',
      'status':'completed'
    },
    {
      'message':'Payment from',
      'name':'Jane Doe',
      'account_name':'Jane Doe',
      'account_number': '*****5472',
      'amount': '45000',
      'status':'completed'
    },
    {
      'message':'Refund to',
      'name':'Adam Easter',
      'account_name':'My Account Name',
      'account_number': '*****5472',
      'amount': '15000',
      'status':'pending'
    },
    {
      'message':'Payment failed from',
      'name':'Juma Bakari',
      'account_name':'Account',
      'account_number': '*****5472',
      'amount': '5000',
      'status':'declined'
    },
  ]
    return (
        <div className="col-xl-4">
        <div className="card mg-b-20">
          <div className="card-header">
            <h4 className="card-header-title">
              Transaction History
            </h4>
          </div>
          <div className="collapse show" id="transactionHistory">
            <ul className="list-group list-group-flush tx-13">
              {transactions.map(transaction=>{
                return(
                  <li className="list-group-item d-flex pd-sm-x-20">
                  <div className="d-none d-sm-block"><span className={`wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded ${transaction.status==='completed'?'card-icon-success': transaction.status==='pending'?'card-icon-warning':'card-icon-danger'}`}>
                    {transaction.status==='completed'?<Icon.Check size={18}/>:transaction.status==='pending'?<Icon.Activity size={18}/>:<Icon.X size={18}/>}</span></div>
                  <div className="pd-sm-l-10">
                    <p className="tx-dark mg-b-0">{transaction.message} <a href className="tx-dark mg-b-0 tx-semibold">{transaction.name}</a></p>
                    <span className="tx-12 mg-b-0 tx-gray-500">A/c Name: {transaction.account_name}</span>
                    <span className="tx-12 mg-b-0 tx-gray-500 d-block">A/c Number: {transaction.account_number}</span>
                  </div>
                  <div className="mg-l-auto text-right">
                    <p className="mg-b-0 tx-rubik tx-dark">KES.{transaction.amount}</p>
                    <span className={`tx-12 mg-b-0 text-capitalize ${transaction.status==='completed'? 'tx-success': transaction.status==='pending'?' tx-warning':' tx-danger'}`}>{transaction.status}</span>
                  </div>
                </li>

                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
}
