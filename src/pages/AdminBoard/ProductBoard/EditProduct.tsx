import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { useGetAllCategoriesQuery } from "../../../redux/features/Category/categorySlice";
import { useEditProductMutation } from "../../../redux/features/Products/productSlice";
import { ProductI, UnitI } from "../../../types";
import "../index.scss";

type Props = {
  product?: Partial<ProductI>;
};
const EditProduct: React.FC<Props> = ({ product }) => {
  const { data, isSuccess } = useGetAllCategoriesQuery();
  const [editProduct,{isSuccess:isEditProductSuccess}]=useEditProductMutation()
  const navigate=useNavigate()
  const nameRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const pluRef = useRef<HTMLInputElement>(null);
  const unitRef = useRef<HTMLSelectElement>(null) ;
  

  const updateProduct=async(e:any)=>{
    e.preventDefault();
    await editProduct({
        id:product?.id,
        name: nameRef.current?.value,
        categoryId: categoryRef.current?.value,
        plu:Number(pluRef.current?.value),
        price:Number(pluRef.current?.value),
        unit:unitRef.current?.value as UnitI
    })
  }
    if(isEditProductSuccess){
        navigate(-1)
    }
  
  return (
    <div className="adminboard adminboard--column --center-flex">
      <div className="adminboard__menu adminboard__menu--box ">
        <div className="adminboard--title">EDIT PRODUCT</div>
        <form className="adminboard__menu--section" onSubmit={updateProduct}>
          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Name
            </p>
            <input
              defaultValue={product?.name}
              ref={nameRef}
              className="product__input"
            />
          </div>

          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Category
            </p>
            {isSuccess && (
              <select
                ref={categoryRef}
                className="product__select product__select--no-top"
                defaultValue={product?.category?.id}
              >
                {data.map((category) => (
                  <option key={category.id} value={category.id}>{category.title}</option>
                ))}
              </select>
            )}
            {/* <input value={product?.category?.title} className='product__input' /> */}
          </div>

          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Price
            </p>
            <input
              defaultValue={product?.price}
              ref={priceRef}
              className="product__input"
            />
          </div>

          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Plu
            </p>
            <input
              defaultValue={product?.plu}
              ref={pluRef}
              className="product__input"
            />
          </div>

          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph --underline --center-flex">
              Unit
            </p>
            <select ref={unitRef} className="product__select">
              <option value={UnitI.gram}>{UnitI.gram}</option>
              <option value={UnitI.pcs}>{UnitI.pcs}</option>
            </select>
          </div>
          <div className="profile__btn --margin-bottom-2">
            <Button color="secondary" title="Edit"  />
          </div>

          <div className="profile__btn --margin-bottom-2">
            <Button title="Delete" actionOnClick={() => {}} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
