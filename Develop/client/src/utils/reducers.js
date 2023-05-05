//import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

//every reducer needs initial state
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
const initialState = {
  products: [],
  cartOpen: false,
  cart: [],
  categories: [],
  currentCategory: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Returns a copty of state with an update products array. We use the action.products property and spread it's contents into the new array
    case UPDATE_PRODUCTS:
      return {
        ...state, //return copy of the state
        products: [...action.products], //and return products which is the copy of products that is action is applied
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    // Returns a copty of state, sets the carOpen to true and maps through the itmes in the cart,
    //If the item's 'id' matches the 'id' that was rpovided in the action.payload, we update the purchase quanitity
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // first we iterate through each item in the car and check to see if the product._id matches the action._id, if so we remove it from our car and set the updated state to a
    // variable
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return { //check if the cart is empty, if cart is empty (state.length less than zero, then cart empty so it's false)
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};

/*export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}*/
export default reducer;
