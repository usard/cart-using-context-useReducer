
 const reducer = (state,action) => {
    if(action.type === 'TOTAL_ITEMS') {
        const total = [...state.cart]?.map(item => {
            return item.amount
        })?.reduce((acc,curr)=>  acc+curr,0);
        return {...state, total_items: total}
    }
    if(action.type === 'REMOVE_ITEM') {
        const {id} = action.payload;
        const reducedcart = [...state.cart]?.filter((item)=> item.id !== id);
        return {...state, cart:[...reducedcart]}
    }
    if(action.type === 'INCREASE_ITEM') {
        const {id} = action.payload;
        const modifiedCart = [...state.cart]?.map((item)=> {
            if(item.id == id) {
                item.amount = item.amount + 1;
            }
            return item;
        });
        return {...state, cart:[...modifiedCart]};
    }
    if(action.type === 'DECREASE_ITEM') {
        const {id} = action.payload;
        console.log('id in reducer decrease :', id)
        const modifiedCart = [...state.cart]?.map((item)=> {
            if(item.id === id){
                item.amount = item.amount - 1;
            }
            return item;
        });
        return {...state, cart:[...modifiedCart]};
    }
    if(action.type === 'TOTAL_AMOUNT'){
        const total_amount = [...state.cart]?.map(item => { return item.amount * item.price})?. reduce(
            (acc,curr) => acc+curr, 0);
        return {...state, total_amount}
    }
    if(action.type === 'CLEAR_CART'){
        return {...state, cart:[] }
    }
}
export default reducer;