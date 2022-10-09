
const initialState = {
  cartProducts: [],
 
}

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_TO_CART":
        return{
          ...state,
          cartProducts:[...state.cartProducts,action.payload]
        }
    case "REMOVE_FROM_CART":
      return{
        ...state,
        cartProducts:state.cartProducts.filter(product => product.id !== action.payload)
      }
  }

  return state;
}

export default cartReducer;