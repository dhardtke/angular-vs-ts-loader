import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub918Component} from "./stub918.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub918Component
        }])
    ],
    declarations: [
        Stub918Component
    ]
})
export class Stub918Module {

}
