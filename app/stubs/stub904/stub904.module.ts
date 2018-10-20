import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub904Component} from "./stub904.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub904Component
        }])
    ],
    declarations: [
        Stub904Component
    ]
})
export class Stub904Module {

}
