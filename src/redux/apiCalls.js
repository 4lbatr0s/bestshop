import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest } from "../helpers/axios_helper"
import { LOGIN } from "../helpers/url_helper"

//INFO: HOW TO CREATE AN API CALL FOR REDUX!
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(response.data)); //TIP: If it's successfull then send response.data
     } catch (error) {
        dispatch(loginFailure())
    }
}