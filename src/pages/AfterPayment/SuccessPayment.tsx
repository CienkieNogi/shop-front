import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import {
  useGetUsersCartQuery,
  useRemoveAllItemsFromCartMutation,
} from "../../redux/features/Cart/cartSlice";
import "./index.scss";

const SuccessPayment = () => {
  const navigate = useNavigate();

  const [removeAllItemsFromCart] = useRemoveAllItemsFromCartMutation();
  const { data } = useGetUsersCartQuery();

  useEffect(() => {
    removeAllItemsFromCart({ id: data?.data.id! });
  }, []);

  const handleRedirect = async (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form className="payment" onSubmit={handleRedirect}>
      <p>Payment was successful</p>
      <Button title="Go back" />
    </form>
  );
};

export default SuccessPayment;
