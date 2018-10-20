import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub497Component} from "./stub497.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub497Component
        }])
    ],
    declarations: [
        Stub497Component
    ]
})
export class Stub497Module {

}
