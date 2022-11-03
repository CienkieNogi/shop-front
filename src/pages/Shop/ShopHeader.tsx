import React from 'react'
import './index.scss'

const ShopHeader:React.FC<{count?:number}> = ({count}) => {
  return (
    <div className='shop__header'>
        <div className="shop__header--left">{`${count??0} products`}</div>
        <div className="shop__header--right">Alphabetically</div>
    </div>
  )
}

export default ShopHeader