import React, { useState } from 'react'
import './index.css'
import { useCreateProductMutation, useDeleteProductMutation, useGetProductByNameMutation, useGetProductsQuery } from '../../redux/features/Products/productSlice'
import { InputProductI, ProductI,UnitI } from '../../types'
import { unknown } from 'zod'

const Test = () => {
    const [search, setsearch] = useState('')
    const [input, setInput] = useState<InputProductI>({
        name:'',
        price:0,
        plu:0,
        unit:UnitI.gram,
        category:'',
    })
    console.log('search',search);
    const {data:products}=useGetProductsQuery()
    const[getProductByName]=useGetProductByNameMutation()
    const [createProduct]=useCreateProductMutation()
    const [deleteProduct]=useDeleteProductMutation()
    const handleSearch=async()=>{
       const list=await getProductByName(search) 
       console.log({list})
    }
    const handleInput=(e:any)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const create=async(e:any)=>{
        e.preventDefault()
        await createProduct({
            name:input.name,
            price:Number(input.price),
            plu:Number(input.plu),
            unit:input.unit,
            category:input.category
        })
    }
    const handleDelete=async(el:any)=>{
        try {
        await deleteProduct({id:el.id}).unwrap()
        } catch (error) {
           console.error('Failed to delete product',error) 
        }
    }
    console.log(input);
  return (
    <div className='testcont'>
        <div className="test">
            {products?.map(el=>(
                <div key={el.id} className='prod'>
                <p >{el.name} {el.id}</p>
                <p className='cosik' onClick={()=>handleDelete(el)}>X</p>
                </div>
            ))}
        </div>
        <div className="">
            <input onChange={(e)=>setsearch(e.target.value)}/>
            <button onClick={handleSearch}>search</button>
        </div>
        <form className="inp-prod" onSubmit={create}>
            <input onChange={handleInput} name='name' placeholder='name'/>
            <input type='number' onChange={handleInput} name='price' placeholder='price'/>
            <input type='number' onChange={handleInput} name='plu' placeholder='plu'/>
            <input onChange={handleInput} name='unit' placeholder='unit'/>
            <input onChange={handleInput} name='category' placeholder='category'/>
            <button type='submit'>CREATE</button>
        </form>
    </div>
  )
}

export default Test