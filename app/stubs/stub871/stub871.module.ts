import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub871Component} from "./stub871.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub871Component
        }])
    ],
    declarations: [
        Stub871Component
    ]
})
export class Stub871Module {

}
