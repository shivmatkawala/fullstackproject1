import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { studentFields } from "src/app/infodb/infodb.model";
import { StudentService  } from "src/app/infodb/infodb.service";

@Component({
    selector: "app-editpopup",
    templateUrl: "./editPopup.html",
})

export class EditPopupComponent {
    revisedData: studentFields = new studentFields
    constructor(
        public dialogRef: MatDialogRef<EditPopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data:studentFields ,
        private _service: StudentService,
      ) { }
    

      ngAfterViewInit() {}


    onSave(): void {
        this._service.updateStudent(this.data).subscribe((resp) => {
            if (resp) {
                alert("Student updated");
                this.dialogRef.close(this.data);  // Close the dialog and send the updated data
            } else {
                alert("Failed to update student");
            }
        });
    }
    
    
      onCancel(): void {
        this.dialogRef.close();  // Close without saving
      }
}