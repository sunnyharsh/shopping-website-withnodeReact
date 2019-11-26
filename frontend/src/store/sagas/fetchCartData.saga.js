import { put } from "redux-saga/effects";
import axios from "../api.interface";
import { fetchCartSuccess } from "../actions/index.action";
export function* onFetchCart() {
    let getToken=JSON.parse(localStorage.getItem('token'))
    try {
        const res = yield axios.get('/api/fetchcart',
            { headers: {"Authorization" : `Bearer ${getToken.token}`} }
        );
        yield put(fetchCartSuccess(res.data));
    } catch (error) {
        throw error;
    }
}