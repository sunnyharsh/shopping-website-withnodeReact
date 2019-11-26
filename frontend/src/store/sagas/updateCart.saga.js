import { put } from "redux-saga/effects";
import axios from "../api.interface";
import { updateCartSuccess } from "../actions/index.action";
export function* onUpdateCart(data) {
    let getToken=JSON.parse(localStorage.getItem('token'))
    try {
        const res = yield axios.post('/api/update', data.values,
            { headers: {"Authorization" : `Bearer ${getToken.token}`} }
        );
       
        yield put(updateCartSuccess(res.data));
    } catch (error) {
        throw error;
    }
}