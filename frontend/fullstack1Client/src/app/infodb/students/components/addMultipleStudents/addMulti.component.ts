import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { studentFields } from "src/app/infodb/infodb.model";
import { StudentService } from "src/app/infodb/infodb.service";


@Component({
    selector: "app-add-multi",
    templateUrl: "./addMulti.html",
})

export class AddMultiComponent {
    listOfStudents: string = ''

    constructor(private _router: Router, private _service: StudentService){

    }

    ngAfterViewInit(){

    }

    addAll(){
        const studentArray = JSON.parse(this.listOfStudents);

        if (Array.isArray(studentArray)){
            if(studentArray.length = 0){
                alert("No students to add");
            }
            this._service.addMultipleStudents(studentArray).subscribe((resp)=>{
                if(resp){
                    alert("success!");
                }
                else{
                    alert("failed to add students");
                }
            })
        }
        else{
            alert("please add data")
        }
        
    }

    gotolistOfStudents(){
        this._router.navigate(['/infodb/getstudentslist'])
    }

    onDestroy(){

    }
}