import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useDeleteProductMutation, useGetProductByIdQuery } from "../../../redux/features/Products/productSlice";
import Spinner from "../../../utils/Spinner";
import EditProduct from "./EditProduct";

const Product = () => {
  const navigate = useNavigate()
  const [confirm, setConfirm] = useState(false)
  const [edit, setEdit] = useState(false)
  const { productId } = useParams();
  const { data,isLoading } = useGetProductByIdQuery(productId!);
  const [deleteProduct]=useDeleteProductMutation()
  if(isLoading){
    return (
        <Spinner/>
    )
  }
  if(edit){
    return (
      <EditProduct product={data}/>
    )
  }
  const handleConfirmDelete=()=>{
    setConfirm(true)
  }

  const handleDelete=async()=>{
    await deleteProduct({id:productId})
    navigate('/account/adminboard') 
  }
  console.log({ data });
  return (
    <div className="adminboard adminboard--column --center-flex">
      <div className="adminboard__menu adminboard__menu--box">
        <div className="adminboard--title">PRODUCT</div>
        <div className="adminboard__menu--section">
          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Name
            </p>
            <p className="adminboard--paragraph--small --center-flex">
              {data?.name}
            </p>
          </div>
          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Category
            </p>
            <p className="adminboard--paragraph--small --center-flex">
              {data?.category.title}
            </p>
          </div>
          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Price
            </p>
            <p className="adminboard--paragraph--small --center-flex">
              {data?.price}
            </p>
          </div>
          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Plu
            </p>
            <p className="adminboard--paragraph--small --center-flex">
              {data?.plu}
            </p>
          </div>
          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Unit
            </p>
            <p className="adminboard--paragraph--small --center-flex">
              {data?.unit}
            </p>
          </div>
          <div className="profile__btn --margin-bottom-2">
            <Button color="secondary" actionOnClick={()=>setEdit(true)}  title="Edit" />
          </div>
          {!confirm && (

          <div className="profile__btn --margin-bottom-2">
            <Button title="Delete" actionOnClick={handleConfirmDelete}/>
          </div>
          )}
          {confirm && (
          <div className="profile__btn --margin-bottom-2">
            <Button title="Confirm Deletion?" actionOnClick={handleDelete}/>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
