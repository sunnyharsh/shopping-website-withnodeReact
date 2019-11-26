import { DELETECART, DELETECART_SUCCESS} from "../action.types";

export const deleteCart = values => ({
    type: DELETECART,
    values
});
export const deleteCartSuccess = values => ({
    type: DELETECART_SUCCESS,
    values
});