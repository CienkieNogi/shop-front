import React, { useRef, useState } from "react";
import Button from "../../../components/ui/Button";
import { ReactComponent as ArrowDown } from "../../../assets/SVG/chevron-small-down.svg";
import { ReactComponent as ArrowUp } from "../../../assets/SVG/chevron-small-up.svg";
import "../index.scss";
import { useCreateCategoryMutation, useGetAllCategoriesQuery } from "../../../redux/features/Category/categorySlice";

const Category = () => {
  const [expand, setExpand] = useState(false);
  const inputRef=useRef<HTMLInputElement>(null)
  const {data,error}=useGetAllCategoriesQuery()
  const [createCategory,{isSuccess,isError}]=useCreateCategoryMutation()
  
  const changeExpand = () => {
    setExpand(!expand);
  };
  
  const handleCreateCategory=async(e:any)=>{
    e.preventDefault();
    if(inputRef && inputRef.current ){
    const title=inputRef?.current.value 
    console.log(title)
    }
    // i?f(!title.trim()) return
  }

  return (
    <div className="adminboard__menu">
      <h2 className="adminboard--title">Manage Categories</h2>
      <div className="adminboard__menu--section">
        <div className="--margin-bottom-2">
          <p className="adminboard--paragraph">Create category</p>
        </div>
        <div className="adminboard__menu--section-input">
          <form onSubmit={handleCreateCategory}>
            <input placeholder="Category Name" ref={inputRef} />
            <Button title="Create" />
          </form>
        </div>
      </div>
      <div className="adminboard__menu--section">
        <div>
          <div className="adminboard--icon-container --margin-bottom-2">
            <p className="adminboard--paragraph">Edit Category</p>
            <div onClick={changeExpand}>
              {expand ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
        </div>
        <div className="adminboard--select">
            {expand && (
                <div className="adminboard--select-item">
                    <p>{data && data[0]?.title}</p>
                </div>
            )}
            {!expand&& (
                <>
          {data && data.map((category) => (
            <div className={`adminboard--select-item `}>
              <p>{category.title}</p>
            </div>
          ))}
                </>
            )}

        </div>
      </div>
    </div>
  );
};

export default Category;
