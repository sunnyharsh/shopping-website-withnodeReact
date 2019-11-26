import { UPDATECART, UPDATECART_SUCCESS} from "../action.types";

export const updateCart = (values) => ({
    type: UPDATECART,
    values
});
export const updateCartSuccess = values => ({
    type: UPDATECART_SUCCESS,
    values
});