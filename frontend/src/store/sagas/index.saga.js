import { takeLatest, all } from "redux-saga/effects";
import { LOGIN_DATA, ADDCART, FEATCHCART,DELETECART, UPDATECART } from "../action.types";

import { onLoginData} from "./login.saga"
import { onAddCart} from "./addToCart.saga";
import { onFetchCart } from "./fetchCartData.saga";
import { onDeleteCart } from "./deleteCart.saga";
import { onUpdateCart} from "./updateCart.saga";

function* sagas() {
    yield all([takeLatest(LOGIN_DATA, onLoginData)]); 
    yield all([takeLatest(ADDCART, onAddCart)]); 
    yield all([takeLatest(FEATCHCART, onFetchCart)]); 
    yield all([takeLatest(DELETECART, onDeleteCart)]); 
    yield all([takeLatest(UPDATECART, onUpdateCart)]); 
}
export default sagas;