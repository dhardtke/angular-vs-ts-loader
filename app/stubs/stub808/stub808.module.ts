import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub808Component} from "./stub808.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub808Component
        }])
    ],
    declarations: [
        Stub808Component
    ]
})
export class Stub808Module {

}
