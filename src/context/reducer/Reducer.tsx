// interface ActionProps {
//   type?: string;
//   payload?: any;
// }

// interface StateProps {
//   cart?: any;
//   products?: any;
// }

// type State = StateProps[];

// export const cartReducer = (state: State, action: ActionProps) => {
//   switch (action.type) {
//     case 'Add':
//       return { ...state };

//     default:
//       return { ...state };
//   }
// };

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Read = 'CREATE_PRODUCT',
  Delete = 'DELETE_PRODUCT',
  Add = 'ADD_PRODUCT',
}

// Product

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

type ProductPayload = {
  [Types.Read]: {
    id: number;
    name?: string;
    shortTitle?: string;
    price?: number;
    url?: string;
    detailUrl?: string;
    shortDescription?: string;
    description?: string;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  //action: ProductActions | ShoppingCartActions
  action: ProductActions
) => {
  switch (action.type) {
    case Types.Read:
      return {
        ...state,
        products: action.payload,
        // {
        //   id: action.payload.id,
        //   name: action.payload.name,
        //   price: action.payload.price,
        //   url: action.payload.url,
        //   shortDescription: action.payload.shortDescription,
        //   detailUrl: action.payload.detailUrl,
        //   description: action.payload.description,
        //   shortTitle: action.payload.shortTitle,
        // },
      };
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

// ShoppingCart

// type ShoppingCartPayload = {
//   [Types.Add]: undefined;
// };

// export type ShoppingCartActions =
//   ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

// export const shoppingCartReducer = (
//   state: number,
//   action: ProductActions | ShoppingCartActions
// ) => {
//   switch (action.type) {
//     case Types.Add:
//       return state + 1;
//     default:
//       return state;
//   }
// };
