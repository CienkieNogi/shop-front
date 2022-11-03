import React from 'react'

const CartItem = () => {
  return (
    <div className='cart__item'>
      <img className='cart__item--photo' src='' alt='costam'/>
      <p className='cart__item--paragraph'> Nazwa produktu</p>
      <p className='cart__item--paragraph'>200zł</p>
      <div className="cart__item--amount">1+</div>
    </div>
  )
}

export default CartItem