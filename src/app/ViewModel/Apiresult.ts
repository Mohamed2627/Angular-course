import { IStudent } from "../model/Student";

export class APIResponse<TTTT>{
    Data!:TTTT;
    Message="";
    Success=true;
    IsAuthorized=true
}