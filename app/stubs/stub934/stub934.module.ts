import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub934Component} from "./stub934.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub934Component
        }])
    ],
    declarations: [
        Stub934Component
    ]
})
export class Stub934Module {

}
