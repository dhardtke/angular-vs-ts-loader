import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub264Component} from "./stub264.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub264Component
        }])
    ],
    declarations: [
        Stub264Component
    ]
})
export class Stub264Module {

}
