import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub261Component} from "./stub261.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub261Component
        }])
    ],
    declarations: [
        Stub261Component
    ]
})
export class Stub261Module {

}
