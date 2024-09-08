import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { studenturls } from "./infodbServiceUrls";
import { BehaviorSubject, Observable } from "rxjs";
import { studentFields } from "./infodb.model";

@Injectable({
    providedIn: 'root'
})

export class StudentService {

    baseUrl = 'http://127.0.0.1:5000/'
    constructor(private http: HttpClient){

    }

    addMultipleStudents(data:any[]){
        return this.http.post<any[]>(this.baseUrl + studenturls.addmulti, data)
    }
    deletAll(){
        return this.http.delete<any>(this.baseUrl + studenturls.deleteall)
    }

    addStudent(data:any){
        return this.http.post<any>(this.baseUrl + studenturls.addStudent, data)
    }

    updateStudent(data: any){
        return this.http.put<any>(this.baseUrl + studenturls.updateStudent, data)
    }

    getAllStudents(){
        return this.http.get<any>(this.baseUrl + studenturls.getAllStudent)
    }

    deleteStudent(id:number){
       return this.http.delete<any>(this.baseUrl + studenturls.destroy + `?id=${id}`)
    }
}
