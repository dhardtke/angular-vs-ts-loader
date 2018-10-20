import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub100Component} from "./stub100.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub100Component
        }])
    ],
    declarations: [
        Stub100Component
    ]
})
export class Stub100Module {

}
