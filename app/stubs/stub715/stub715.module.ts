import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub715Component} from "./stub715.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub715Component
        }])
    ],
    declarations: [
        Stub715Component
    ]
})
export class Stub715Module {

}
