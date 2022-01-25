import axios from 'axios';
import React, { createContext, Dispatch, useEffect, useReducer } from 'react';
import { products } from './demo';
// import {
//   ProductActions,
//   productReducer,
//   ShoppingCartActions,
//   shoppingCartReducer,
//   Types,
// } from './reducer/Reducer';
import { ProductActions, productReducer, Types } from './reducer/Reducer';

type ProductType = {
  id: number;
  name?: string;
  shortTitle?: string;
  price?: number;
  url?: string;
  detailUrl?: string;
  shortDescription?: string;
  description?: string;
};

type InitialStateType = {
  products: ProductType[];
  //shoppingCart: number;
};
const initialState = {
  products: [],
  shoppingCart: 0,
};

export const ContextCart = createContext<{
  state: InitialStateType;
  //dispatch: Dispatch<ProductActions | ShoppingCartActions>;
  dispatch: Dispatch<ProductActions>;
}>({
  state: initialState,
  dispatch: () => null,
});
//console.log('products');
//console.log(products);

// const mainReducer = (
//   { products, shoppingCart }: InitialStateType,
//   action: ProductActions | ShoppingCartActions
// ) => ({
//   products: productReducer(products, action),
//   shoppingCart: shoppingCartReducer(shoppingCart, action),
// });
const mainReducer = (
  { products }: InitialStateType,
  action: ProductActions
) => ({
  products: productReducer(products, action),
});

const Context: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(
        `https://serverfake-api.herokuapp.com/services`
      );
      dispatch({ type: Types.Read, payload: response.data });
      return;
    };

    getServices();
  }, []);
  return (
    <ContextCart.Provider value={{ state, dispatch }}>
      {children}
    </ContextCart.Provider>
  );
};

export default Context;
