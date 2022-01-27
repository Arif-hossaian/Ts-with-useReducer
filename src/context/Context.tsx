import axios from 'axios';
import React, {
  createContext,
  Dispatch,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { products } from './demo';
import { productFilterReducer } from './reducer/ProductFilteringReducer';
import {
  ProductActions,
  productReducer,
  ShoppingCartActions,
  shoppingCartReducer,
  Types,
} from './reducer/Reducer';
//import { ProductActions, productReducer, Types } from './reducer/Reducer';

type ProductType = {
  id: number;
  fastDelivery?: boolean;
  image?: string;
  inStock?: number;
  name?: string;
  price?: number;
  ratings?: number;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
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

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});
// const mainReducer = (
//   { products }: InitialStateType,
//   action: ProductActions
// ) => ({
//   products: productReducer(products, action),
// });

const Context: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
 
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getServices = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://demo-food-products-list.herokuapp.com/products`
      );
      dispatch({ type: Types.Read, payload: response.data });
      return;
    };

    getServices();
    setIsLoading(false);
  }, []);
  return (
    <ContextCart.Provider value={{ state, dispatch }}>
      {children}
    </ContextCart.Provider>
  );
};

export default Context;
