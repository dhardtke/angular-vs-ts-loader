import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub642Component} from "./stub642.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub642Component
        }])
    ],
    declarations: [
        Stub642Component
    ]
})
export class Stub642Module {

}
