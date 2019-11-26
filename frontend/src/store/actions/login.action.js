import { LOGIN_DATA_SUCCESS, LOGIN_DATA } from "../action.types";

export const loginData = (values) => ({
    type: LOGIN_DATA,
    values
});
export const loginDataSuccess = values => ({
    type: LOGIN_DATA_SUCCESS,
    values
});