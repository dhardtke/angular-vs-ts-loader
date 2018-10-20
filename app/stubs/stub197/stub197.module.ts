import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub197Component} from "./stub197.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub197Component
        }])
    ],
    declarations: [
        Stub197Component
    ]
})
export class Stub197Module {

}
