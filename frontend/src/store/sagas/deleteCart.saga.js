import { put } from "redux-saga/effects";
import axios from "../api.interface";
import { deleteCartSuccess } from "../actions/index.action";

export function* onDeleteCart(data) {
    let getToken=JSON.parse(localStorage.getItem('token'))
    try {
        const res = yield axios.post('/api/delete', data.values,
            { headers: {"Authorization" : `Bearer ${getToken.token}`} }
        );
        yield put(deleteCartSuccess(res.data));
    } catch (error) {
        throw error;
    }
}