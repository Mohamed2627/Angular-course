import { IStudent } from "../model/Student";

export class APIResponse<T>{
    Data!:T;
    Message="";
    Success=true;
    IsAuthorized=true
}