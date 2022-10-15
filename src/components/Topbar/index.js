import { TopbarWrapper, CartWrapper, CartQuanty } from './styles'
import { IoCart } from "react-icons/io5";
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';


const Topbar = () => {

  const { cart } = useCart();

  return (
    <TopbarWrapper>
        <div>
          <img width='180px' src="/logoapp2.png" alt="logo"/>
        </div>
        <CartWrapper>
          <Link to={'/Checkout'}>
            <IoCart/>
          </Link>
          {
            cart.quanty > 0 && (
              <CartQuanty>
                <p>{cart.quanty}</p>
              </CartQuanty>
            )
          }
        </CartWrapper>
    </TopbarWrapper>
  )
}

export default Topbar