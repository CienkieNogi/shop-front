import React from 'react'
import { useGetUsersCartQuery } from '../../redux/features/Cart/cartSlice'
import CartItem from './CartItem'
import './index.scss'

const Cart = () => {
  const {data}=useGetUsersCartQuery()
  console.log(data)
  return (
    <div className='cart --center-flex'>
      <div className="cart__header --margin-bottom-4">
        <div className="cart__header-title">Cart(2)</div>
        <div className="cart__header-clear">Clear Cart</div>
      </div>
      <div className="cart__items--container">

      <CartItem/>
      <CartItem/>
      <CartItem/>
      </div>
    </div>
  )
}

export default Cart