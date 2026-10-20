import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: number;
    title: string;
    price: number;
}

type CartState = {
    items: CartItem[];
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0
}

const getTotalPrice = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.price, 0);
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            state.totalPrice = getTotalPrice(state.items);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            state.totalPrice = getTotalPrice(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
