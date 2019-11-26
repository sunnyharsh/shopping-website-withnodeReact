
import LocalStorage from "../utils/Localstorage"

class Auth{
    constructor(){
        this.authenticted=false ;
    }
    
    isAuthenticated(){
        let isLogin=LocalStorage.getLocalstorage()
         this.authenticted=isLogin;
        return this.authenticted;
    }
}
export default new Auth;