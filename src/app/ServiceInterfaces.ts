export interface AuthenticationBody{
    secretKey:String;
    ipAddress:String;
}

export interface generateTokenBody{
    email:String;
    password:String;
}