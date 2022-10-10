import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IStudent, IStudentAddtion } from "../model/Student";
import { APIResponse } from "../ViewModel/Apiresult";

@Injectable(
    {
        providedIn: "root"
    }
)
export class StudentService {
    constructor(private http: HttpClient) {
    }
    getAll(){
        //    return this.http.get<APIResponse>("https://api.mohamed-sadek.com/Job/Get")
        return this.http.get<APIResponse<IStudent[]>>(environment.APIURl + "/student/get")
        /// return this.http.get("https://api.mohamed-sadek.com/student/get") not recommended

    }
    Delete(id: number) {
        return this.http.delete(environment.APIURl + "/student/Delete?id=" + id)
    }
    GetOne(id: number): Observable<APIResponse<IStudent>> {
        return this.http.get<APIResponse<IStudent>>(environment.APIURl + "/Student/GetByID?id=" + id)
    }
    add(std: IStudentAddtion) {
        console.log(std)
        return this.http.post(environment.APIURl + "/Student/POST", std)
    }
}