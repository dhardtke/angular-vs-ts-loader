import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub17Component} from "./stub17.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub17Component
        }])
    ],
    declarations: [
        Stub17Component
    ]
})
export class Stub17Module {

}
