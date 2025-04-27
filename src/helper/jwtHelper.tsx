import jwt_decode, { JwtPayload } from "jwt-decode";
const decodeToken = (token: string):JwtPayload|undefined => {
    if (token.length) {
        
    return jwt_decode(token);
}
}

export const jwtHelper = {
    decodeToken
}