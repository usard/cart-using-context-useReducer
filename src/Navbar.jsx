import { FaCartPlus } from 'react-icons/fa';
import { AppContext } from './context';
import { useContext } from 'react';
const Navbar = () => {
  const {total_items} = useContext(AppContext);
  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{total_items}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
