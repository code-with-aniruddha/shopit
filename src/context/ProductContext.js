import { createContext, useReducer } from 'react';
import { ProductList } from './ProductList';
import  ProductReducer from './ProductReducer'

export const ProductContext = createContext();

export const ProductProvider = ({children})=>{
    const initialState = ProductList;
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    return <ProductContext.Provider value={{products:state}}>{children}</ProductContext.Provider>;
}
