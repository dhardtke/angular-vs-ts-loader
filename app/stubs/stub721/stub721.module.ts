import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub721Component} from "./stub721.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub721Component
        }])
    ],
    declarations: [
        Stub721Component
    ]
})
export class Stub721Module {

}
