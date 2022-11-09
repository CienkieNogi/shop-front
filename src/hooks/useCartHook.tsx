import { useEffect, useState } from "react";
import { useGetUsersCartQuery } from "../redux/features/Cart/cartSlice";

  export const UseGetCart = () => {
    const [items, setItems] = useState<number | undefined>(undefined);

    const { data, isSuccess,isLoading} = useGetUsersCartQuery();

    const numberOfItemsInCart = data?.data.singleOrders.length;

    useEffect(() => {
      if (isSuccess) {
        setItems(numberOfItemsInCart);
      }
    }, [numberOfItemsInCart, isSuccess]);
    return {items,orders:data?.data?.singleOrders,isLoading,isSuccess,cart:data}
  };