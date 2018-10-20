import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub771Component} from "./stub771.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub771Component
        }])
    ],
    declarations: [
        Stub771Component
    ]
})
export class Stub771Module {

}
