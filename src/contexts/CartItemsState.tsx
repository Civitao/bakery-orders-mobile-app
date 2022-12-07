import { useState, useContext, createContext, Dispatch, SetStateAction, ReactNode, useEffect } from 'react'
import { CartItemProps } from '../components/CartItem';
import { api } from '../services/api';
export interface CartItemsContext  {
  cartItemsList: CartItemProps[];
  setCartItemsList: Dispatch<SetStateAction<CartItemProps[]>>;
}

type PropsType = {
  children: ReactNode;
}

  export const CartItemsState = createContext({} as CartItemsContext)

  export function CartItemsProvider ({children}: PropsType) {
    const [cartItemsList, setCartItemsList] = useState<CartItemProps[]>([]);

  
     useEffect(() => { api.get('/cartItems')
      .then(function(response) {
      setCartItemsList(response.data)
  })},[cartItemsList])


  return (
    <CartItemsState.Provider value={{cartItemsList, setCartItemsList}}  >
      {children}
    </CartItemsState.Provider> 
  )
}

  export default CartItemsProvider
