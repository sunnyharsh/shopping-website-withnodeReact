
class LocalStorage{
     static setLocalstorage(token){
        var localObject = { token:token };
        if(window.localStorage){
            localStorage.setItem('token', JSON.stringify(localObject));
        }
        
    }
    static getLocalstorage(){
        var token = JSON.parse(localStorage.getItem('token'));
        if(token){
            return true;
        }
        return false;
    }
    static getToken(){
        let token = JSON.parse(localStorage.getItem('token'));
        return token
    }
}
export default LocalStorage;