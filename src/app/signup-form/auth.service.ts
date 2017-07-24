
export class AuthService {

    login(user) : boolean{
        if(user.username === "vinay-joshi" && user.password === "12345")
            return true;
        return false;
    }
}