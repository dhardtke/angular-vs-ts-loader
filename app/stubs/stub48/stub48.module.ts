import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub48Component} from "./stub48.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub48Component
        }])
    ],
    declarations: [
        Stub48Component
    ]
})
export class Stub48Module {

}
