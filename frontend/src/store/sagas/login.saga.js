import { put } from "redux-saga/effects";
import axios from "../api.interface";
import { loginDataSuccess } from "../actions/login.action";

export function* onLoginData(data) {
    try {
        const res = yield axios.post('/login', data.values);
        yield put(loginDataSuccess(res.data));
    } catch (error) {
        throw error;
    }
}