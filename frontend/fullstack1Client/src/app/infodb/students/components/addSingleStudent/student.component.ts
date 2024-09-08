import { Student, studentFields } from '../../../infodb.model';
import { Component } from "@angular/core";
import { StudentService } from "../../../infodb.service";
import { studentComponentMsg } from '../../../infodb.constant';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: "app-students",
    templateUrl: "./student.html",

})

export class StudentComponent {

   new_student: studentFields = new studentFields();

    constructor(private _service:StudentService, private _router:Router){

    }

    ngAfterViewInit(){

    }

    addStudent() {
        this._service.addStudent(this.new_student)!.subscribe(
            res => {
                if (res = "success") {
                    alert(studentComponentMsg.success);
                } else {
                    alert(studentComponentMsg.failure);
                }
                this.new_student = new studentFields(); // Reset the form after successful submission
            },
            err => {
                // Handle the error and provide feedback
                console.error('Error occurred while adding student:', err);
                alert('An error occurred while adding the student. Please try again.');
            }
        );
    }

    
    gotoEditStudent(){
        this._router.navigate(['/infodb/getstudentslist']);
    }

    gotoAddAll(){
        this._router.navigate(['/infodb/addall']);
    }

    onDestroy(){

    }
}