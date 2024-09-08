import { MatButtonModule } from '@angular/material/button';
import { Component } from "@angular/core";
import { StudentService } from "src/app/infodb/infodb.service";
import { Subscription } from 'rxjs';
import { MatDialog } from "@angular/material/dialog";
import { EditPopupComponent } from "../editStudentPopup/edidPopup.component";
import { Router } from '@angular/router';
@Component({
    selector: "app-student-list",
    templateUrl: "./list.html",
})

export class StudentListComponent {

    dataSource: any[] = []
    displayedColumns: string[] = ['id', 'name', 'school','actions'];
    private subscription: Subscription = new Subscription();
    constructor(private _service: StudentService, public dialog: MatDialog,
        private router: Router
     ){
        
    }

    ngAfterViewInit(){
        this.getStudentList();
    }

    getStudentList(){

        this._service.getAllStudents().subscribe(data =>{
            if(data && data.length > 0){
                this.dataSource = data;
            }
            else if (data.length == 0){ 
                this.dataSource = [];
            }
            else{
                alert("An error occurred while retrieving the list. Please try again.")
            }
            
        })
    }

    onUpdate(element: any): void {
        const dialogRef = this.dialog.open(EditPopupComponent, {
            width: '300px',
            data: { ...element }  // Send a copy of the element data to the dialog
        });
    
        dialogRef.afterClosed().subscribe((updatedData) => {
            if (updatedData) {
                // Update the local dataSource with the new updated data
                const index = this.dataSource.findIndex(student => student.id === updatedData.id);
                if (index !== -1) {
                    this.dataSource[index] = updatedData;
                    // Refresh the table if needed
                    this.dataSource = [...this.dataSource];  // To trigger change detection
                }
            }
        });
    }


gotoAddStudent(){
    this.router.navigate(['/infodb/addStudent'])
}

onDelete(id:number){
    this._service.deleteStudent(id).subscribe((res) => {
        if (res) {
            alert(res.message)
            this.getStudentList();
        } else {
            alert("An error occurred while deleting the student. Please try again.")
        }
    });

    
}

deleteAll(){
    this._service.deletAll().subscribe((resp)=>{
        if(resp){
            alert(resp.message)
            this.getStudentList();

        }
        else{
            alert('failed to delete all')
        }
    })
}


    onDestroy(){
    }
}