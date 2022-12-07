import { CartItemsContext, CartItemsState } from "../contexts/CartItemsState";
import { useContext } from 'react'

export function useCartItems (): CartItemsContext {
  const value = useContext(CartItemsState)
  
  return value
}