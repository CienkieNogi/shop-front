import React, { useRef, useState } from "react";
import Button from "../../../components/ui/Button";
import axios from 'axios'
import { useGetAllCategoriesQuery } from "../../../redux/features/Category/categorySlice";
import {
  useCreateProductMutation,
} from "../../../redux/features/Products/productSlice";
import { UnitI } from "../../../types";
import Spinner from "../../../utils/Spinner";
import ErrorBox from "../ErrorBox";

const CreateProduct = () => {
  const [imageSelected, setImageSelected] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const pluRef = useRef<HTMLInputElement>(null);
  const unitRef = useRef<HTMLSelectElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const { data, isSuccess } = useGetAllCategoriesQuery();
  const [createProduct, { isError: isProductError, error, isLoading }] =
    useCreateProductMutation();
  //@ts-ignore
  const handleCreateProduct = async (e: any) => {
    e.preventDefault();
  const res=imageSelected.length>0? await uploadImage():{data:{url:''}}
  
    await createProduct({
      name: nameRef.current?.value,
      price: Number(priceRef.current?.value),
      plu: Number(pluRef.current?.value),
      unit: unitRef.current?.value as UnitI,
      categoryId: categoryRef.current?.value,
      photo:res?.data.url
    });
  };
  const uploadImage= async () => {
    try {
      
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "e4sk9tpt");

   return axios.post('https://api.cloudinary.com/v1_1/nedzny/image/upload',formData) 
    } catch (error) {
     console.log(error);
    }
  
  };

  const handleChange = (e: any) => {
    setImageSelected(e.target.files[0]);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="adminboard__menu--section-input">
      {isProductError && (
        //@ts-ignore
        <ErrorBox msg={error?.data.error} />
      )}
      <form onSubmit={handleCreateProduct}>
        <input
          className="--margin-bottom-1"
          placeholder="Product Name"
          ref={nameRef}
        />
        <input
          type={"number"}
          className="--margin-bottom-1"
          placeholder="Price"
          ref={priceRef}
        />
        <input
          type={"number"}
          className="--margin-bottom-1"
          placeholder="Plu number"
          ref={pluRef}
        />
        <div
          className="custom-select --margin-bottom-1"
          style={{ width: "100%" }}
        >
          <select ref={unitRef}>
            <option value={UnitI.gram}>gram</option>
            <option value={UnitI.pcs}>pcs</option>
          </select>
        </div>
        <div
          className="custom-select --margin-bottom-1"
          style={{ width: "100%" }}
        >
          <select ref={categoryRef}>
            {isSuccess &&
              data &&
              data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
          </select>
        </div>
        <input
          className="--margin-bottom-1"
          type="file"
          onChange={handleChange}
        />
        <Button title="Create" />
      </form>
    </div>
  );
};

export default CreateProduct;
