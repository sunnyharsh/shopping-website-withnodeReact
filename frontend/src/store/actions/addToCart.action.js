import { ADDCART, ADDCART_SUCCESS} from "../action.types";

export const addCart = (values) => ({
    type: ADDCART,
    values
});
export const addCartSuccess = values => ({
    type: ADDCART_SUCCESS,
    values
});