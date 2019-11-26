import { put } from "redux-saga/effects";
import axios from "../api.interface";
import { addCartSuccess } from "../actions/index.action";
export function* onAddCart(data) {
    let getToken=JSON.parse(localStorage.getItem('token'))
    try {
        const res = yield axios.post('/api/cart', data.values,
            { headers: {"Authorization" : `Bearer ${getToken.token}`} }
        );
        yield put(addCartSuccess(res.data));
    } catch (error) {
        throw error;
    }
}