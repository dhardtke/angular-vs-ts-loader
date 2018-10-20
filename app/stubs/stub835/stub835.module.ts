import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub835Component} from "./stub835.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub835Component
        }])
    ],
    declarations: [
        Stub835Component
    ]
})
export class Stub835Module {

}
