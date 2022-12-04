import {useNavigate} from 'react-router-dom'
import Button from '../../components/ui/Button'
import './index.scss'

const RejectedPayment = () => {
    const navigate = useNavigate()

    const handleRedirect=(e:any)=>{
        e.preventDefault();
        navigate('/cart')
    }
  return (
    <form className="payment" onSubmit={handleRedirect}>
            <p>Payment was canceled</p>
            <p>Try again</p>
            <Button title='Go back to cart'/>
        </form>
  )
}

export default RejectedPayment
