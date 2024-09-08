
import { MatCardModule } from '@angular/material/card';
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfodbRoutingModule } from './infodb-routing.module';
import { StudentComponent } from './students/components/addSingleStudent/student.component';
import { StudentListComponent } from './students/components/getListOfStudents/list.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EditPopupComponent } from './students/components/editStudentPopup/edidPopup.component';
import { AddMultiComponent } from './students/components/addMultipleStudents/addMulti.component';
@NgModule({
    declarations: [
        StudentComponent,
        StudentListComponent,
        EditPopupComponent,
        AddMultiComponent
    ],

    imports: [
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        HttpClientModule,
        MatFormFieldModule,
        FormsModule,
        CommonModule,
        InfodbRoutingModule,
        MatTableModule,
        MatInputModule,
        MatIconModule
    ],

    exports: [
        StudentComponent,
        StudentListComponent
    ],

    providers: [
    
    ]
})

export class InfodbModule { }