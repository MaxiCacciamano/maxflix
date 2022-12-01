import { makeStyles } from '@material-ui/core';
import React, { useEffect, useRef } from 'react'
import ReactDOM from "react-dom"
import { useSelector } from 'react-redux';
import { Header } from '../Components/Header';
import {selectPrice} from '../features/PriceSlice';



export const PayPal = () => {
  const price = useSelector(selectPrice)
  const paypal = useRef()
  useEffect(()=>{
    window.paypal.Buttons({
      createOrder: (data, actions, err)=>{
        return actions.order
        .create({
          intent: 'capture',
          purchase_units:[
            {
              description:"Netflix subscription",
              amount:{
                currency_code:"USD",
                value: price,
              }
            }
          ]
        })
      },
      
      onApprove: async (data, actions, err)=>{
        const order = await actions.order.capture()
        console.log(order)

      },
      onError: err => console.log(err)
    }).render(paypal.current)
  },[])
  return (
<div>
      <Header/>
      <div ref={paypal}>

      </div>
</div>
  )
}
