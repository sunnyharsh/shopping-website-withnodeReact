import { FEATCHCART, FEATCHCART_SUCCESS} from "../action.types";

export const fetchCart = () => ({
    type: FEATCHCART,
});
export const fetchCartSuccess = values => ({
    type: FEATCHCART_SUCCESS,
    values
});