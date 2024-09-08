
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./students/components/addSingleStudent/student.component";
import { StudentListComponent } from "./students/components/getListOfStudents/list.component";
import { AddMultiComponent } from "./students/components/addMultipleStudents/addMulti.component";

const routes: Routes = [
    {
        path: 'addStudent',
        component: StudentComponent
    },
    {
        path: 'getstudentslist',
        component: StudentListComponent
    },
    
    {
        path: 'addall',
        component: AddMultiComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InfodbRoutingModule{

}