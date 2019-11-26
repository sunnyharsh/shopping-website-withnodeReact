import { FEATCHCART_SUCCESS } from "../action.types";

const initState = null;

const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case FEATCHCART_SUCCESS:
            return values;
        default:
            return state;
    }
};
export default reducers;