import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub269Component} from "./stub269.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub269Component
        }])
    ],
    declarations: [
        Stub269Component
    ]
})
export class Stub269Module {

}
