import { createContext, useEffect, useReducer } from "react";
import cartItems from "./data";
import { INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, TOTAL_ITEMS, TOTAL_AMOUNT, CLEAR_CART } from "./actions";
import reducer from './reducer';
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const initialState = {
        cart:[...cartItems],
        total_items:0,
        total_amount: 0,
    }  
    const [state, dispatch] = useReducer(reducer,initialState);
    const getTotalCartItems = ()=>{
        dispatch({type:TOTAL_ITEMS})
    }
    const getTotalAmount = () => {
        dispatch({type: TOTAL_AMOUNT})
    }
    useEffect(()=> {
        getTotalCartItems();
        getTotalAmount();
    },[state.cart])
    const children = props.children;
    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM ,payload:{id}})
    }
    const increaseItem = (id) => {
        dispatch({type: INCREASE_ITEM, payload:{id}})
    }
    const decreaseItem = (id) => {
        dispatch({type: DECREASE_ITEM, payload:{id}})
    }
    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    return (
        <AppContext.Provider value={{...state, removeItem, increaseItem, decreaseItem, getTotalCartItems, getTotalAmount, clearCart}}>
          {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
