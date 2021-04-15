import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  categoryProductsReducers,
  productDetailsReducers,
} from "./reducers/productReducers";
import {
  addressBookEditReducers,
  changePasswordReducers,
  editAccountReducers,
} from "./reducers/accountDetailsReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  // for account details 👇
  changePassword: changePasswordReducers,
  editAccount: editAccountReducers,
  addressBookEdit: addressBookEditReducers,

  categoryProducts: categoryProductsReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;