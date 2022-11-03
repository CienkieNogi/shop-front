import React from 'react'
import { useGetProductsQuery } from '../../redux/features/Products/productSlice'
import './index.scss'
import ShopBody from './ShopBody'
import ShopHeader from './ShopHeader'

const Shop = () => {
  const {data,isSuccess,isLoading}=useGetProductsQuery()

  return (
    <div className='shop --padding-hor-4'>
        <ShopHeader count={data?.data.count}/>
        <ShopBody data={data} isLoading={isLoading}/>
    </div>
  )
}

export default Shop