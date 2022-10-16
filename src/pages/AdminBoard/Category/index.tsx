import React, { useRef, useState } from "react";
import Button from "../../../components/ui/Button";
import { ReactComponent as ArrowDown } from "../../../assets/SVG/chevron-small-down.svg";
import { ReactComponent as ArrowUp } from "../../../assets/SVG/chevron-small-up.svg";
import { ReactComponent as EditIcon } from "../../../assets/SVG/edit.svg";
import "../index.scss";
import {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../redux/features/Category/categorySlice";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./ErrorBox";

const Category = () => {
  const [expand, setExpand] = useState(false);
  const navigate= useNavigate()
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, error } = useGetAllCategoriesQuery();
  const [createCategory, { isSuccess,error:createError, isError }] = useCreateCategoryMutation();

  const changeExpand = () => {
    setExpand(!expand);
  };
  const handleCreateCategory = async (e: any) => {
    e.preventDefault();
    if ( inputRef?.current) {
      const title = inputRef?.current.value;
      await createCategory({ title });
      inputRef.current.value = "";
    }
  };

  const handleClick = ({id}:{id:string}) => {
    navigate('/account/adminboard/category/' + id)
  };
  return (
    <div className="adminboard__menu">
      <h2 className="adminboard--title">Manage Categories</h2>
      <div className="adminboard__menu--section">
        <div className="--margin-bottom-2">
          <p className="adminboard--paragraph">Create category</p>
        </div>
        {isError && (
  //@ts-ignore
        <ErrorBox msg={createError.data.error}/>
        )}
        <div className="adminboard__menu--section-input">
          <form onSubmit={handleCreateCategory}>
            <input placeholder="Category Name" ref={inputRef} />
            <Button title="Create" />
          </form>
        </div>
      </div>
      <div className="adminboard__menu--section">
        <div>
          <div className="adminboard--icon-container --margin-bottom-2" onClick={changeExpand}>
            <p className="adminboard--paragraph">Edit Category</p>
            <div >
              {expand ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
        </div>
        <div
          className={`adminboard--select ${
            !expand ? "adminboard--default" : ""
          }`}
        >
          {!expand && (
            <div className="adminboard--select-item">
              <p>........</p>
            </div>
          )}
          {expand && (
            <>
              {data &&
                data.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => handleClick({id: category.id})}
                    className={`adminboard--select-item lefty`}
                  >
                    <p>{category.title}</p>
                    <EditIcon className="adminboard--icon" />
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
