import React, { useRef } from "react";
import "../index.scss";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/ui/Button";
import {
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetCategoryByIdQuery,
} from "../../../redux/features/Category/categorySlice";
import ErrorBox from "../ErrorBox";
import Spinner from "../../../utils/Spinner";

const EditCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null);
  //@ts-expect-error
  const { data, isFetching ,isError:isErrorGetCategories} = useGetCategoryByIdQuery(categoryId, {
    skip: !categoryId,
  });
  const [editCategory, { isError, isLoading, error }] =
    useEditCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleEditCategory = async (e: any) => {
    e.preventDefault();
    const input = inputRef.current?.value;
    await editCategory({ id: categoryId, title: input });
      navigate('/account/adminboard')
  };

  const handleDeleteCategory = async (e: any) => {
    e.preventDefault();
    if (categoryId) {
      await deleteCategory({id: categoryId});
      navigate('/account/adminboard')
    }
  };

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  if(isErrorGetCategories){
    navigate('/account/adminboard')
  }
  return (
    <div className="adminboard --center-flex">
      <div className="adminboard__menu">
        <h2 className="adminboard--title">{data?.title}</h2>
        {isError && (
          //@ts-ignore
          <ErrorBox msg={error?.data.error} />
        )}
        <div className="adminboard__menu--section">
          <div className="--margin-bottom-2">
            <p className="adminboard--paragraph">Change Title</p>
          </div>
          <div className="adminboard__menu--section-input --margin-bottom-4">
            <form onSubmit={handleEditCategory}>
              <input ref={inputRef} placeholder="New Category Name" />
              <Button title="Change" />
            </form>
          </div>
          <div className="adminboard__menu--section-input">
            <form onSubmit={handleDeleteCategory}>
              <Button title="Delete" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
